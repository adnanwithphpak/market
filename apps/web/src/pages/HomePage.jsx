import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Link2, TrendingUp, Award, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  const services = [
    {
      icon: FileText,
      title: 'Buy Guest Posts',
      description: 'Access premium guest posting opportunities on high-authority websites across various niches.',
      link: '/buy-guest-posts',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/guest-post-content-placement.webp',
      alt: 'Illustration of a quality-checked guest post article ready for publisher placement',
      caption: 'Review relevant publishing opportunities before selecting a placement.',
    },
    {
      icon: Users,
      title: 'Blogger Outreach',
      description: 'Connect with influential bloggers and secure quality backlinks through personalized outreach.',
      link: '/blogger-outreach',
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/backlink-outreach-strategy.webp',
      alt: 'SEO professionals planning a backlink and blogger outreach campaign',
      caption: 'Manual outreach connects campaigns with relevant editorial websites.',
    },
    {
      icon: Link2,
      title: 'Link Insertion',
      description: 'Get your links inserted into existing high-quality content on authoritative websites.',
      link: '/link-insertion',
      gradient: 'from-orange-500 to-red-500',
      image: '/images/contextual-link-insertion.webp',
      alt: 'Illustration of contextual backlinks connecting relevant web pages across devices',
      caption: 'Contextual link insertion adds a useful citation to existing content.',
    },
  ];

  const stats = [
    { label: 'Posts Published', value: '10,000+', icon: FileText },
    { label: 'Happy Clients', value: '2,500+', icon: Users },
    { label: 'Average DA', value: '65+', icon: TrendingUp },
    { label: 'Success Rate', value: '98%', icon: Award },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechVenture Inc',
      role: 'Marketing Director',
      content: 'HighDaGuestPosts transformed our link building strategy. We saw a 150% increase in organic traffic within 6 months.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Michael Chen',
      company: 'GrowthLabs',
      role: 'SEO Manager',
      content: 'The quality of guest posts and the professionalism of the team exceeded our expectations. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Dynamics',
      role: 'CEO',
      content: 'Best investment we made for our SEO. The DA scores are genuine and the results speak for themselves.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const faqs = [
    {
      question: 'How do I choose the right guest post website?',
      answer: 'Start with topical relevance and editorial quality, then review authority metrics, organic traffic patterns, audience fit and outbound-link behaviour. A high metric alone does not guarantee a useful placement.',
    },
    {
      question: 'Can I approve a publisher before my article is written?',
      answer: 'Yes. You can review suitable publisher opportunities before content production so the topic, target page and placement match your campaign requirements.',
    },
    {
      question: 'What is included with a guest post placement?',
      answer: 'The workflow can include publisher research, opportunity approval, original content, editorial coordination, publication and live-link reporting. Exact inclusions depend on the selected service.',
    },
    {
      question: 'What is the difference between a guest post and link insertion?',
      answer: 'A guest post publishes a new article, while a link insertion adds a relevant citation to a suitable existing article. The best option depends on context, editorial fit and campaign goals.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Guest Post Marketplace & Link Building | HighDaGuestPosts</title>
        <meta name="description" content="Browse guest post opportunities and get professional blogger outreach, original content and contextual link insertion with transparent placement reporting." />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://highdaguestposts.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guest Post Marketplace & Link Building | HighDaGuestPosts" />
        <meta property="og:description" content="Find relevant guest post placements, blogger outreach and contextual link insertion services for your SEO campaign." />
        <meta property="og:url" content="https://highdaguestposts.com/" />
        <meta property="og:image" content="https://highdaguestposts.com/images/guest-post-seo-growth.webp" />
        <meta property="og:image:alt" content="SEO growth illustration for guest post and link building campaigns" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1634715022648-13d43a4e9fe8"
            alt="Modern digital marketing workspace with laptop and analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your SEO with
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Premium Guest Posts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Connect with high-authority websites and boost your rankings with our professional guest posting and link building services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy-guest-posts">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg px-8 py-6">
                  Browse Guest Posts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
                <stat.icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive link building solutions tailored to your SEO goals
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={service.link} className="block group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-blue-300">
                    <figure>
                      <img src={service.image} alt={service.alt} width="1800" height="1200" loading="lazy" decoding="async" className="w-full aspect-[3/2] object-cover" />
                      <figcaption className="px-8 pt-4 text-sm text-slate-500">{service.caption}</figcaption>
                    </figure>
                    <div className="p-8 pt-5">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketplace Guidance Section */}
      <section className="py-24 bg-white" aria-labelledby="guest-post-marketplace-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
            <img
              src="/images/guest-post-seo-growth.webp"
              alt="SEO analytics and rocket illustration representing sustainable growth through guest posting"
              width="1800"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover"
            />
            <figcaption className="px-6 py-4 text-sm text-slate-600">
              Relevant editorial placements support authority, referral discovery and long-term organic visibility.
            </figcaption>
          </figure>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Built for informed placement decisions</p>
            <h2 id="guest-post-marketplace-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              More Than a List of High-DA Websites
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              A professional <Link to="/buy-guest-posts" className="font-semibold text-blue-700 hover:underline">guest post marketplace</Link> should help you evaluate context—not simply sort sites by one number. The strongest opportunities align the publisher&apos;s subject, audience and editorial standards with the page you want to promote.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our workflow combines publisher research, site approval, original content and publication reporting. You keep visibility over the placement while our team coordinates the time-consuming outreach and editorial steps.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Topical and audience relevance', 'Traffic and authority signals', 'Editorial content quality', 'Clear placement reporting'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-5">
              <Link to="/buy-guest-posts" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Explore guest post opportunities<ArrowRight className="ml-2 w-5 h-5" /></Link>
              <Link to="/pricing" className="inline-flex items-center font-semibold text-slate-700 hover:text-slate-950">Review pricing options<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust us with their SEO success
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-slate-50" aria-labelledby="home-faq-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Guest post marketplace FAQ</p>
            <h2 id="home-faq-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Questions Before You Choose a Placement</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Straightforward answers to help you compare guest posts, blogger outreach and contextual link insertion.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{question}</h3>
                <p className="text-slate-600 leading-relaxed">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Rankings?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Start building high-quality backlinks today and watch your organic traffic soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy-guest-posts">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
