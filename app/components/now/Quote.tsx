export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded border-l-4 border-neutral-400 bg-neutral-50 p-3 dark:border-neutral-600 dark:bg-neutral-900">
      <p className="italic text-neutral-700 dark:text-neutral-300">
        "{children}"
      </p>
    </div>
  );
}
