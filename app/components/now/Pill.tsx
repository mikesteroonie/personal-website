export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </span>
  );
}
