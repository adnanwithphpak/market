import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CaseStudyPage = () => (
  <>
    <Helmet>
      <title>Guest Posting Case Study | Campaign Method and Reporting</title>
      <meta name="description" content="See how a relevance-led guest posting campaign is planned, quality-checked and measured without inflated SEO promises." />
      <link rel="canonical" href="https://www.highdaguestposts.com/case-study/" />
    </Helmet>
    <Header />
    <main>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 lg:py-28"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-blue-300 font-semibold uppercase tracking-wide mb-4">Campaign case study</p><h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">How Relevance-Led Outreach Turns Placements Into Useful SEO Assets</h1><p className="text-xl text-slate-300 max-w-3xl leading-relaxed">A transparent example of campaign planning, publisher qualification and measurement. Client-identifying data and invented performance claims are intentionally excluded.</p></div></section>
      <section className="py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">{[['Challenge','A B2B software team had strong product pages but few editorial references from publications read by its buyers.'],['Strategy','Map links to useful resources, segment prospects by audience and publish at a measured pace with varied, natural anchors.'],['Measurement','Track live-link quality, destination-page impressions, relevant rankings and assisted conversions instead of reporting DA alone.']].map(([title,text])=><article key={title} className="border border-slate-200 rounded-2xl p-7"><h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2><p className="text-slate-600 leading-relaxed">{text}</p></article>)}</div></section>
      <section className="py-16 bg-slate-50 border-y border-slate-200"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-900 mb-8">The campaign workflow</h2><div className="space-y-6">{['Audit destination pages and remove targets that do not yet satisfy search intent.','Build topic clusters around buyer problems rather than forcing exact-match commercial anchors.','Reject publishers with irrelevant traffic, unstable visibility or excessive unrelated sponsored content.','Write each article for the publication’s audience and document the reason for the contextual link.','Review live URLs and compare search visibility over an appropriate period without attributing every change to links.'].map(item=><div key={item} className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0"/><p className="text-slate-700 leading-relaxed">{item}</p></div>)}</div></div></section>
      <section className="py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-900 mb-5">What a credible report should show</h2><p className="text-lg text-slate-600 leading-relaxed mb-7">A case study is only useful when the measurement has limits. Rankings can change because of content updates, technical fixes, competitors and search-system changes. We report placement facts separately from business outcomes and avoid presenting correlation as guaranteed causation.</p><Link to="/contact"><Button size="lg">Discuss your campaign <ArrowRight className="ml-2 w-5 h-5" /></Button></Link></div></section>
    </main>
    <Footer />
  </>
);

export default CaseStudyPage;
