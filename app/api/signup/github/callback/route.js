import { createAuthSession, initializeGitHub } from "@/lib/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { getUserbyGithubId, saveUser } from "@/lib/user";
import { generateIdFromEntropySize } from "lucia";

export async function GET(request) {
  const github = await initializeGitHub();
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser = await githubUserResponse.json();
    // Replace this with your own DB client.
    const existingUser = await getUserbyGithubId(githubUser.id);
    if (existingUser) {
      await createAuthSession(existingUser._id);
      return new Response(null, {
        status: 302,
        headers: {
          Location: process.env.BASE_URL,
        },
      });
    }
    const userId = generateIdFromEntropySize(10);
    // Replace this with your own DB client.
    try {
      await saveUser({
        github_id: githubUser.id,
        username: githubUser.login,
        email: githubUser.email,
        hashedPassword: null,
      });
    } catch (error) {
      console.log(error);
    }

    await createAuthSession(userId);
    return new Response(null, {
      status: 302,
      headers: {
        Location: process.env.BASE_URL,
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}
