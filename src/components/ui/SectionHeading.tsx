import type { ReactNode } from "react";

export function SectionHeading({ kicker, title, children, id }: { kicker: string; title: ReactNode; children?: ReactNode; id?: string }) {
  return <div className="section-heading"><div><span className="kicker">{kicker}</span><h2 id={id} className="section-title">{title}</h2></div>{children && <p>{children}</p>}</div>;
}
