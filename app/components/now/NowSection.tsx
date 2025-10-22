export function NowSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        {title}
      </h3>
      {children}
    </div>
  );
}
