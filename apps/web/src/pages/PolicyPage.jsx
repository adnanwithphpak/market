import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const policies = {
  'privacy-policy': {
    title: 'Privacy Policy | HighDaGuestPosts',
    description: 'Learn what information HighDaGuestPosts collects, why it is used, how it is protected and what choices you have.',
    heading: 'Privacy Policy',
    updated: 'August 18, 2026',
    sections: [
      ['Information we collect', 'We may collect information you submit through contact, order or enquiry forms, including your name, business email, company, website, campaign requirements and message. Basic technical data such as browser type, referring page and device information may be recorded in server or analytics logs.'],
      ['How we use information', 'Information is used to answer enquiries, prepare placement recommendations, deliver requested services, maintain campaign records, prevent abuse and improve the website. We do not sell personal information or use client campaign details to market a competing business.'],
      ['Legal basis and consent', 'Where applicable, we process information to respond to your request, perform a contract, meet a legal obligation or pursue a legitimate business interest. Marketing messages are sent only where permitted, and you may opt out at any time.'],
      ['Service providers and disclosure', 'Limited information may be handled by hosting, email, analytics, payment or workflow providers that support our operations. We may also disclose information when legally required or necessary to protect users, our business or the public.'],
      ['Data retention and security', 'We keep information only as long as reasonably needed for the purpose collected, accounting obligations, dispute handling and security. We use appropriate access controls and operational safeguards, but no internet transmission can be guaranteed completely secure.'],
      ['Your choices', 'Depending on your location, you may request access, correction, deletion, restriction or a copy of personal information. You may also object to certain processing. We may need to verify your identity before completing a request.'],
      ['Cookies and external links', 'The website may use essential or analytics cookies. Links to third-party websites are governed by those sites’ own privacy practices, which we do not control.'],
      ['Contact', 'For a privacy question or data request, email info@highdaguestpost.com. We may update this policy when our services or legal obligations change; the latest revision date appears above.'],
    ],
  },
  'terms-of-services': {
    title: 'Terms of Service | HighDaGuestPosts',
    description: 'Review the service scope, approvals, payment terms and responsibilities that apply when working with HighDaGuestPosts.',
    heading: 'Terms of Service',
    updated: 'August 18, 2026',
    sections: [
      ['Agreement and scope', 'By ordering or using our services, you agree to these terms and the scope confirmed in your proposal, invoice or written campaign brief. If project-specific terms conflict with this page, the written project terms control for that engagement.'],
      ['Publisher availability', 'Publisher rules, pricing and availability can change. A site is not reserved until confirmed. If an approved opportunity becomes unavailable, we will offer an alternative or another reasonable resolution rather than substitute a site without approval.'],
      ['Content and approvals', 'You are responsible for supplying accurate business information and identifying regulated claims, prohibited topics or brand restrictions. Approval confirms that names, links, claims and positioning are acceptable. Publishers retain final editorial control.'],
      ['Payments and cancellations', 'Payment timing and included revisions are stated in the applicable quote or invoice. Work already completed, publisher fees already committed and published placements may be non-refundable. Any cancellation request should be made promptly in writing.'],
      ['SEO outcomes', 'We do not guarantee rankings, traffic, leads, indexation timing or continued third-party metrics. Search engines and publishers are independent parties. Our obligation is to provide the agreed research, content or placement service with reasonable care.'],
      ['Link and publication changes', 'A publisher may later edit, move, nofollow or remove content outside our control. Any replacement period or monitoring commitment applies only when expressly included in the order. We will provide available evidence and assistance when an issue is reported.'],
      ['Acceptable use', 'You may not use the service for unlawful, deceptive, infringing or harmful content. We may reject campaigns involving impersonation, undisclosed malware, prohibited products or claims that cannot be responsibly supported.'],
      ['Liability and contact', 'To the extent permitted by law, liability is limited to the amount paid for the affected service, and indirect or consequential losses are excluded. Questions about these terms can be sent to info@highdaguestpost.com.'],
    ],
  },
};

const PolicyPage = ({ policy }) => {
  const page = policies[policy];
  if (!page) return <Navigate to="/" replace />;
  const canonical = `https://www.highdaguestposts.com/${policy}/`;

  return <>
    <Helmet><title>{page.title}</title><meta name="description" content={page.description} /><link rel="canonical" href={canonical} /></Helmet>
    <Header />
    <main>
      <section className="bg-slate-950 text-white py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 className="text-4xl md:text-5xl font-bold mb-4">{page.heading}</h1><p className="text-slate-300">Last updated: {page.updated}</p></div></section>
      <section className="py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-lg text-slate-600 leading-relaxed mb-10">This page explains the rules and expectations that apply when you visit our website or work with our team. Please read it together with any written proposal or order terms.</p><div className="space-y-10">{page.sections.map(([heading, text]) => <section key={heading}><h2 className="text-2xl font-bold text-slate-900 mb-3">{heading}</h2><p className="text-slate-600 leading-relaxed">{text}</p></section>)}</div></div></section>
    </main>
    <Footer />
  </>;
};

export default PolicyPage;
