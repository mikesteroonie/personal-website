export function ReadingEntry({
  title,
  author,
  description,
}: {
  title: string;
  author: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
      <div className="font-medium text-neutral-900 dark:text-neutral-100">
        {title}
      </div>
      <div className="text-neutral-600 dark:text-neutral-400">
        {author} — {description}
      </div>
    </div>
  );
}
