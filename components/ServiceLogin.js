import { GithubAuth, GoogleAuth } from "@/lib/actions";
import SubmitButton from "./SubmitButton";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function ServiceLogin() {
  return (
    <>
      <form action={GoogleAuth}>
        <SubmitButton
          icon={<IconBrandGoogle size={20} />}
          label={"Signup with Google"}
          variant={"outline"}
          className={"w-full rounded"}
        />
      </form>
      <form action={GithubAuth}>
        <SubmitButton
          icon={<IconBrandGithub size={20} />}
          label={"Signup with Github"}
          variant={"outline"}
          className={"w-full rounded"}
        />
      </form>
    </>
  );
}
