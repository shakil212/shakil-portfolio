import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { research } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return research.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = research.find((entry) => entry.slug === slug);
  return item ? pageMetadata(item.title, item.summary, `/research/${slug}`) : {};
}
export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = research.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <main className="container inner-page research-detail" id="main" tabIndex={-1}><Link className="text-link back-link" href="/research"><ArrowLeft size={16} /> All research notes</Link><header className="page-intro"><span className="kicker">Research note</span><h1>{item.title}</h1><span className="stage">{item.status}</span></header><div className="reading-column"><section><h2>Question & approach</h2><p>{item.summary}</p></section><section className="scope-note"><h2>Scope & limitations</h2><p>{item.importantQualification}</p></section><section><h2>Research record</h2><p>This note reflects the supplied portfolio summary. A public manuscript, detailed findings, and a breakdown of individual contributions have not been supplied here.</p></section>{item.slug === research[0].slug && <Link className="button button-outline" href="/projects/mot-ssl-gru-dashboard">Explore the separate dashboard <ArrowUpRight size={18} /></Link>}</div></main>;
}
