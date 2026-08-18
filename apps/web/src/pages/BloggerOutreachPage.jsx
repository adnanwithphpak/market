import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Mail, HeartHandshake as Handshake, Rocket, Target, Users, TrendingUp, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BloggerOutreachPage = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Identify',
      description: 'We research and identify high-authority bloggers in your niche with engaged audiences.',
    },
    {
      icon: Mail,
      title: 'Pitch',
      description: 'Our team crafts personalized outreach emails that get responses and build relationships.',
    },
    {
      icon: Handshake,
      title: 'Negotiate',
      description: 'We handle all negotiations to secure the best placement terms and pricing for you.',
    },
    {
      icon: Rocket,
      title: 'Publish',
      description: 'Your content goes live on authoritative blogs with quality backlinks to your site.',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Outreach',
      description: 'We connect you with bloggers whose audience matches your target market perfectly.',
    },
    {
      icon: Users,
      title: 'Relationship Building',
      description: 'Build long-term partnerships with influential bloggers in your industry.',
    },
    {
      icon: TrendingUp,
      title: 'Increased Visibility',
      description: 'Get your brand in front of thousands of engaged readers and potential customers.',
    },
    {
      icon: Award,
      title: 'Quality Backlinks',
      description: 'Earn high-quality, contextual backlinks from authoritative domains.',
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Let our experts handle the time-consuming outreach process while you focus on your business.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Our systematic approach delivers consistent results with measurable ROI.',
    },
  ];

  const metrics = [
    { label: 'Bloggers Contacted', value: '50,000+' },
    { label: 'Response Rate', value: '45%' },
    { label: 'Successful Placements', value: '8,500+' },
    { label: 'Average DA', value: '68' },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 499,
      features: [
        '10 blogger outreach contacts',
        'Personalized pitch emails',
        'Follow-up management',
        'Monthly reporting',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: 999,
      popular: true,
      features: [
        '25 blogger outreach contacts',
        'Custom pitch templates',
        'Relationship management',
        'Bi-weekly reporting',
        'Priority email support',
        'Negotiation assistance',
      ],
    },
    {
      name: 'Enterprise',
      price: 1999,
      features: [
        '50+ blogger outreach contacts',
        'Full campaign management',
        'Dedicated account manager',
        'Weekly reporting',
        '24/7 priority support',
        'Custom strategy development',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blogger Outreach Services - Connect with Influential Bloggers | HighDaGuestPosts</title>
        <meta name="description" content="Professional blogger outreach services to build relationships with influential bloggers and secure quality backlinks. Proven process with measurable results." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional Blogger Outreach
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                Connect with influential bloggers and secure high-quality backlinks through our proven outreach process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <div className="text-slate-600">{metric.label}</div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A systematic approach to blogger outreach that delivers results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Outreach Service</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Benefits that drive real business results
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
                  <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Choose the plan that fits your outreach needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg ${
                    tier.popular ? 'ring-2 ring-purple-600 relative' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Outreach Campaign?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Let our experts connect you with influential bloggers in your niche
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                  Schedule a Consultation
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

export default BloggerOutreachPage;