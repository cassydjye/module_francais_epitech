export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="container">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {intro && <p className="lede">{intro}</p>}
    </div>
  );
}
