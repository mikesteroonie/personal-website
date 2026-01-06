export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:decoration-neutral-600 dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
    >
      {children}
    </a>
  );
}
