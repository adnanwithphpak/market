import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileSearch, FileText, Link2, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    icon: FileText,
    title: 'Guest Post Marketplace',
    description: 'Browse publisher opportunities by niche, authority signals and editorial fit before choosing a placement for your campaign.',
    link: '/buy-guest-posts',
    linkLabel: 'Browse guest post sites',
    image: '/images/guest-post-content-placement.webp',
    alt: 'Illustration of a quality-checked guest post article ready for publisher placement',
    caption: 'Choose relevant publisher placements with clear quality checks.',
  },
  {
    icon: Users,
    title: 'Manual Blogger Outreach',
    description: 'Reach relevant publishers with a personalised outreach process built around your audience, content and campaign goals.',
    link: '/blogger-outreach',
    linkLabel: 'Explore blogger outreach',
    image: '/images/backlink-outreach-strategy.webp',
    alt: 'SEO professionals planning a backlink and blogger outreach campaign on a desktop screen',
    caption: 'Publisher outreach focused on genuine editorial relationships.',
  },
  {
    icon: Link2,
    title: 'Contextual Link Insertion',
    description: 'Add a relevant citation to suitable existing content when a link insertion offers a more natural fit than a new article.',
    link: '/link-insertion',
    linkLabel: 'View link insertion service',
    image: '/images/contextual-link-insertion.webp',
    alt: 'Illustration of contextual backlinks connecting relevant web pages across devices',
    caption: 'Contextual links placed where they add value for readers.',
  },
];

const trustSignals = [
  { label: 'Relevance-first matching', icon: FileSearch },
  { label: 'Publisher quality review', icon: ShieldCheck },
  { label: 'Original editorial content', icon: FileText },
  { label: 'Transparent live-link reporting', icon: CheckCircle2 },
];

const steps = [
  ['Define your campaign', 'Share your niche, target pages, preferred anchors and quality requirements.'],
  ['Review opportunities', 'Compare suitable publishers and approve placements before content production begins.'],
  ['Publish and report', 'We coordinate content, publication and delivery of the live placement details.'],
];

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const marketplaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Guest Post Marketplace and Link Building Services',
    provider: {
      '@type': 'Organization',
      name: 'High DA Guest Posts',
      url: 'https://highdaguestposts.com/',
    },
    areaServed: 'Worldwide',
    serviceType: ['Guest post placements', 'Blogger outreach', 'Contextual link insertion'],
    description: 'A guest post marketplace connecting brands and SEO agencies with relevant publisher opportunities, original content and transparent placement reporting.',
    url: 'https://highdaguestposts.com/',
  };

  return (
    <>
      <Helmet>
        <title>Guest Post Marketplace | Vetted Publisher Placements</title>
        <meta name="description" content="Find relevant guest post opportunities through a professional marketplace with publisher quality checks, original content, blogger outreach and transparent reporting." />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://highdaguestposts.com/" />
        <link rel="preload" as="image" href="/images/guest-post-seo-growth.webp" type="image/webp" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guest Post Marketplace | High DA Guest Posts" />
        <meta property="og:description" content="Discover relevant publisher placements, manual blogger outreach and contextual link insertion with transparent quality checks." />
        <meta property="og:url" content="https://highdaguestposts.com/" />
        <meta property="og:image" content="https://highdaguestposts.com/images/guest-post-seo-growth.webp" />
        <meta property="og:image:alt" content="SEO growth illustration representing guest post and link building campaigns" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(marketplaceSchema)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative min-h-[760px] flex items-center overflow-hidden bg-slate-950">
          <figure className="absolute inset-0">
            <img src="/images/guest-post-seo-growth.webp" alt="SEO growth illustration with a rocket launching above search analytics" width="1800" height="900" fetchPriority="high" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/55" />
            <figcaption className="sr-only">Strategic guest posting supports sustainable search visibility and brand authority.</figcaption>
          </figure>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-blue-200 mb-6">Guest post marketplace for brands and SEO agencies</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Find Relevant Guest Post Placements That Fit Your SEO Strategy</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed">Discover publisher opportunities, approve the sites you want and manage original content, outreach and live-link reporting through one professional workflow.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/buy-guest-posts"><Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">Browse Guest Post Sites<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">Request a Custom Shortlist</Button></Link>
              </div>
            </motion.div>

            <motion.ul initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl" aria-label="Marketplace quality standards">
              {trustSignals.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-4 text-sm font-medium text-white"><Icon className="w-5 h-5 shrink-0 text-cyan-300" aria-hidden="true" />{label}</li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="py-24 bg-slate-50" aria-labelledby="marketplace-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center mb-16">
              <motion.p variants={itemVariants} className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Choose the right placement route</motion.p>
              <motion.h2 id="marketplace-services" variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Guest Posting and Link Building Services</motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Select marketplace placements directly or let our team research and coordinate opportunities around your niche, audience and target pages.</motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.article key={service.title} variants={itemVariants} className="overflow-hidden bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col">
                  <figure>
                    <img src={service.image} alt={service.alt} width="1800" height="1200" loading="lazy" decoding="async" className="w-full aspect-[3/2] object-cover" />
                    <figcaption className="px-6 pt-4 text-sm text-slate-500">{service.caption}</figcaption>
                  </figure>
                  <div className="p-6 pt-4 flex flex-col flex-1">
                    <service.icon className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">{service.description}</p>
                    <Link to={service.link} className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900">{service.linkLabel}<ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-labelledby="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">A transparent campaign workflow</p>
              <h2 id="how-it-works" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How Our Guest Post Marketplace Works</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">A strong placement starts with relevance—not a metric in isolation. We use authority and traffic signals alongside topical fit, editorial quality and outbound-link patterns to help you make a more informed choice.</p>
              <Link to="/pricing" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Compare guest post pricing<ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
            </div>
            <ol className="space-y-5">
              {steps.map(([title, text], index) => (
                <li key={title} className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">{index + 1}</span>
                  <div><h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Build a More Relevant Guest Post Campaign</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">Browse current opportunities or tell us what you need for a tailored publisher shortlist.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy-guest-posts"><Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">Explore the Marketplace<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">Talk to an Outreach Specialist</Button></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
