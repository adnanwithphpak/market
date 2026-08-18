import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, FileSearch, PenTool, Search, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { landingPageMap, landingPages } from '@/content/landingPages';

const SITE_URL = 'https://www.highdaguestposts.com';

const SeoLandingPage = () => {
  const { slug } = useParams();
  const page = landingPageMap[slug];

  if (!page) return <Navigate to="/" replace />;

  const faqs = [
    {
      question: `How do you select publishers for ${page.eyebrow.toLowerCase()}?`,
      answer: `We start with topical and audience relevance, then review organic visibility, recent publishing activity, editorial consistency and outbound-link patterns. ${page.review}`,
    },
    {
      question: `Can I approve a site before the ${page.slug.includes('service') ? 'campaign' : 'guest post'} is written?`,
      answer: 'Yes. We share the proposed publication and available quality information before content production. You can decline an option that does not fit the brief.',
    },
    {
      question: 'Do you guarantee rankings or a specific Domain Authority?',
      answer: 'No responsible provider can guarantee rankings. Third-party authority scores are useful filters, but relevance, real search visibility, editorial quality and the strength of your own page also matter.',
    },
    {
      question: 'What information should I send to get an accurate plan?',
      answer: `Share your target pages, preferred markets, topics to avoid and current link-building activity. For ${page.audience}, these details help us recommend safer anchors and more relevant publishers.`,
    },
  ];

  const related = landingPages
    .filter((item) => item.slug !== page.slug)
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .slice(0, 6);

  const canonical = `${SITE_URL}/${page.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.eyebrow,
        description: page.description,
        provider: { '@type': 'Organization', name: 'HighDaGuestPosts', url: SITE_URL },
        areaServed: page.market,
        url: canonical,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      <main className="bg-white">
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-4">{page.eyebrow}</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">{page.heading}</h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">{page.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">Request a tailored shortlist <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-slate-500 bg-transparent text-white hover:bg-white hover:text-slate-900">Review pricing options</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-blue-600 font-semibold mb-2">Start with search intent</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">A relevant placement has to make sense to a reader</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Authority metrics cannot explain why a reader would trust or click a link. We begin by matching the destination page to a real editorial question, then identify publications whose existing audience overlaps with {page.audience}.</p>
                <p>For {page.eyebrow.toLowerCase()}, useful editorial angles commonly include {page.topics.join(', ').toLowerCase()}. The article must stand on its own: it should answer the publisher’s topic thoroughly even if the contextual link were removed.</p>
                <p>{page.review} This makes the review slower than selecting a site from a spreadsheet, but it also exposes weak opportunities before budget is committed.</p>
              </div>
            </div>
            <aside className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
              <h2 className="text-xl font-bold text-slate-900 mb-5">What is included</h2>
              <ul className="space-y-4">
                {page.deliverables.map((item) => <li key={item} className="flex gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />{item}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-blue-600 font-semibold mb-2">Quality framework</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Five checks before a publisher reaches your shortlist</h2>
              <p className="text-lg text-slate-600">A placement is reviewed as an editorial environment, not reduced to one score.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                [Search, 'Topical fit', `The site covers ${page.topics[0].toLowerCase()} with enough depth to support a natural article.`],
                [BarChart3, 'Traffic pattern', 'We look for relevant ranking pages and stable visibility—not an impressive total with no topical overlap.'],
                [FileSearch, 'Editorial history', 'Recent posts, real authorship, readable pages and consistent subject coverage are reviewed manually.'],
                [ShieldCheck, 'Link hygiene', 'Excessive sponsored posts, unrelated outbound links and obvious network footprints are rejection signals.'],
                [PenTool, 'Content standard', 'The proposed article must satisfy the publication while supporting your target page naturally.'],
              ].map(([Icon, title, text]) => (
                <article key={title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <Icon className="w-7 h-7 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14">
              <div>
                <p className="text-blue-600 font-semibold mb-2">How delivery works</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-7">From target page to verified live link</h2>
                <ol className="space-y-6">
                  {[
                    ['Define the job of the link', `We review your target page, intended ${page.market} audience and current backlink profile before suggesting anchors.`],
                    ['Research and qualify publishers', `Potential sites are researched around ${page.topics.join(', ').toLowerCase()}, then checked against the quality framework.`],
                    ['Approve direction', 'You review the publication and proposed topic. Writing starts only after the direction is agreed.'],
                    ['Create publication-ready content', 'The draft is original, useful to the publisher’s audience and edited for factual clarity and natural link context.'],
                    ['Publish and verify', 'We confirm the live URL, anchor, destination and indexability, then include the placement in your report.'],
                  ].map(([title, text], index) => (
                    <li key={title} className="flex gap-4">
                      <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">{index + 1}</span>
                      <div><h3 className="font-bold text-slate-900 mb-1">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-6">What we will not promise</h2>
                <div className="space-y-5 text-slate-300 leading-relaxed">
                  <p>We do not guarantee a number-one ranking, referral sales or permanent publisher ownership. Search performance depends on your technical foundation, content quality, competition and the full link profile.</p>
                  <p>We also do not substitute an unapproved domain, hide the destination URL or describe a placement as editorial when it is not. If a publication changes its requirements, you receive the choice to approve the change.</p>
                  <p>For {page.eyebrow.toLowerCase()}, the goal is a defensible link that is relevant in context and useful as part of a broader SEO strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-white border border-slate-200 rounded-xl p-6">
                  <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between gap-4">{faq.question}<span className="text-blue-600 group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="text-slate-600 leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore related services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((item) => <Link key={item.slug} to={`/${item.slug}/`} className="border border-slate-200 rounded-xl p-5 font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-600 transition-colors">{item.eyebrow}<ArrowRight className="inline ml-2 w-4 h-4" /></Link>)}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-9 lg:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Plan your first {page.eyebrow.toLowerCase()} placement</h2>
              <p className="text-blue-100 text-lg mb-7">Send your target page and preferred market. We will explain the fit, risks and next step before you order.</p>
              <Link to="/contact"><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">Talk to the outreach team</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoLandingPage;
