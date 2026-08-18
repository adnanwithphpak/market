import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link2, Zap, Shield, TrendingUp, CheckCircle, Clock, Target, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LinkInsertionPage = () => {
  const processSteps = [
    {
      icon: Target,
      title: 'Select Content',
      description: 'We identify high-quality existing content on authoritative websites relevant to your niche.',
    },
    {
      icon: Link2,
      title: 'Insert Links',
      description: 'Your links are naturally inserted into contextually relevant positions within the content.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Check',
      description: 'We verify proper placement, anchor text optimization, and link functionality.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Get your links live within 3-5 business days, much faster than traditional guest posting.',
    },
    {
      icon: Shield,
      title: 'Permanent Placement',
      description: 'All link insertions are permanent with no recurring fees or removal risks.',
    },
    {
      icon: TrendingUp,
      title: 'Immediate SEO Impact',
      description: 'Benefit from existing page authority and traffic without waiting for new content to rank.',
    },
    {
      icon: Award,
      title: 'High-Quality Sites',
      description: 'Links placed only on authoritative domains with genuine traffic and strong metrics.',
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'No content creation required - leverage existing high-performing articles.',
    },
    {
      icon: CheckCircle,
      title: 'Natural Integration',
      description: 'Links are contextually relevant and blend seamlessly with existing content.',
    },
  ];

  const pricingOptions = [
    {
      name: 'Standard',
      price: 299,
      da: '40-60',
      features: [
        'DA 40-60 websites',
        'Contextual link placement',
        'Permanent placement',
        '3-5 day turnaround',
        'Detailed reporting',
      ],
    },
    {
      name: 'Premium',
      price: 599,
      da: '60-80',
      popular: true,
      features: [
        'DA 60-80 websites',
        'Prime content selection',
        'Permanent placement',
        '2-3 day turnaround',
        'Priority support',
        'Monthly traffic report',
      ],
    },
    {
      name: 'Elite',
      price: 999,
      da: '80+',
      features: [
        'DA 80+ websites',
        'Premium content placement',
        'Permanent placement',
        '1-2 day turnaround',
        'Dedicated account manager',
        'Comprehensive analytics',
      ],
    },
  ];

  const caseStudies = [
    {
      client: 'E-commerce Store',
      niche: 'Fashion',
      links: 15,
      trafficIncrease: '180%',
      rankingImprovement: '12 positions',
    },
    {
      client: 'SaaS Company',
      niche: 'Technology',
      links: 20,
      trafficIncrease: '220%',
      rankingImprovement: '18 positions',
    },
    {
      client: 'Health Blog',
      niche: 'Wellness',
      links: 10,
      trafficIncrease: '145%',
      rankingImprovement: '9 positions',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Link Insertion Services - Fast & Quality Backlinks | HighDaGuestPosts</title>
        <meta name="description" content="Professional link insertion services on high-authority websites. Get quality backlinks fast with permanent placement and immediate SEO impact." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Fast & Reliable Link Insertion
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                Get quality backlinks inserted into existing high-authority content with permanent placement and fast turnaround
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                    Get Started
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

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  What is Link Insertion?
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Link insertion is the process of adding your backlinks to existing, high-quality content on authoritative websites. Unlike guest posting, which requires creating new content, link insertion leverages already-published articles that are ranking well and receiving traffic.
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  This approach provides faster results, as you benefit immediately from the existing page's authority and traffic. It's a cost-effective and efficient way to build high-quality backlinks without the time investment of content creation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-orange-600 mr-2" />
                    <span className="font-semibold text-slate-900">3-5 Day Turnaround</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-orange-600 mr-2" />
                    <span className="font-semibold text-slate-900">Permanent Links</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Faster Results</div>
                      <div className="text-slate-700">No waiting for new content to rank</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Cost Effective</div>
                      <div className="text-slate-700">Lower cost than full guest posting</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Proven Authority</div>
                      <div className="text-slate-700">Links on already-ranking content</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Natural Integration</div>
                      <div className="text-slate-700">Contextually relevant placements</div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Simple, transparent process from start to finish
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Link Insertion</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Benefits that accelerate your SEO success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <benefit.icon className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Choose the package that matches your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg ${
                    option.popular ? 'ring-2 ring-orange-600 relative' : ''
                  }`}
                >
                  {option.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-slate-900">${option.price}</span>
                    <span className="text-slate-600">/link</span>
                  </div>
                  <div className="text-sm text-slate-600 mb-6">DA {option.da}</div>
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        option.popular
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Real success stories from our clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200"
                >
                  <div className="text-sm text-orange-600 font-semibold mb-2">{study.niche}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-slate-600">Links Inserted</div>
                      <div className="text-3xl font-bold text-slate-900">{study.links}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Traffic Increase</div>
                      <div className="text-3xl font-bold text-orange-600">{study.trafficIncrease}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Ranking Improvement</div>
                      <div className="text-2xl font-bold text-slate-900">{study.rankingImprovement}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Boost Your Rankings Fast?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Start building quality backlinks today with our link insertion service
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                  Get Your Links Inserted
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LinkInsertionPage;