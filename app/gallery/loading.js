export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[270px] animate-pulse rounded-md border p-4 shadow-sm">
      <div className="mb-4 h-36 w-full rounded-sm bg-zinc-200 dark:bg-zinc-800"></div>
      <div className="space-y-2">
        <div className="h-4 w-[60%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[90%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[90%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[40%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>
  );
}
