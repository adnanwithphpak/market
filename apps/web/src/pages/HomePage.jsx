import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Link2, TrendingUp, Award, Clock, Star } from 'lucide-react';
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
    },
    {
      icon: Users,
      title: 'Blogger Outreach',
      description: 'Connect with influential bloggers and secure quality backlinks through personalized outreach.',
      link: '/blogger-outreach',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Link2,
      title: 'Link Insertion',
      description: 'Get your links inserted into existing high-quality content on authoritative websites.',
      link: '/link-insertion',
      gradient: 'from-orange-500 to-red-500',
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
        <title>HighDaGuestPosts - Premium Guest Posting & Link Building Services</title>
        <meta name="description" content="Boost your SEO with high-quality guest posts on authoritative websites. Professional blogger outreach and link insertion services with proven results." />
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-blue-300">
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
                </Link>
              </motion.div>
            ))}
          </motion.div>
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