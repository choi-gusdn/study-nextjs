export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy;Sale JS is great!
    </div>
  );
}
