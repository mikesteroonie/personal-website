export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <p>
      <span className="mr-2 text-neutral-500">→</span>
      {children}
    </p>
  );
}
