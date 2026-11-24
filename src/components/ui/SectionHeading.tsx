import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({ kicker, title, children, id }: { kicker: string; title: ReactNode; children?: ReactNode; id?: string }) {
  return <Reveal className="section-heading"><div><span className="kicker" data-reveal>{kicker}</span><h2 id={id} className="section-title" data-reveal>{title}</h2></div>{children && <p data-reveal>{children}</p>}</Reveal>;
}
