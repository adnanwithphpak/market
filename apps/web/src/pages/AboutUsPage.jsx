import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Heart, Shield, Zap, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa',
      bio: 'SEO expert with 10+ years of experience in digital marketing and link building.',
    },
    {
      name: 'David Chen',
      role: 'Head of Outreach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Specialist in blogger relationships and content partnerships across multiple industries.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Award-winning content strategist focused on creating high-quality, engaging content.',
    },
    {
      name: 'Michael Thompson',
      role: 'Technical SEO Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Data-driven SEO specialist with expertise in technical optimization and analytics.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every guest post opportunity is thoroughly vetted for authenticity and authority.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results that drive your business forward.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of SEO trends and continuously improve our processes to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Clear communication, honest reporting, and no hidden fees. You always know exactly what you\'re getting.',
    },
  ];

  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '12+' },
    { icon: Users, label: 'Happy Clients', value: '2,500+' },
    { icon: TrendingUp, label: 'Posts Published', value: '10,000+' },
    { icon: CheckCircle, label: 'Success Rate', value: '98%' },
  ];

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Over 5 years of delivering exceptional results for businesses of all sizes across various industries.',
    },
    {
      title: 'Extensive Network',
      description: 'Access to thousands of high-authority websites across every major niche and industry.',
    },
    {
      title: 'Expert Team',
      description: 'Our team of SEO specialists, content creators, and outreach experts work together to ensure your success.',
    },
    {
      title: 'Data-Driven Approach',
      description: 'We use advanced analytics and metrics to identify the best opportunities and measure real results.',
    },
    {
      title: 'White-Hat Practices',
      description: 'All our link building strategies follow Google\'s guidelines and industry best practices.',
    },
    {
      title: 'Dedicated Support',
      description: 'Responsive customer support and dedicated account managers to guide you every step of the way.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Leading Guest Posting & Link Building Experts | HighDaGuestPosts</title>
        <meta name="description" content="Learn about HighDaGuestPosts - your trusted partner for premium guest posting and link building services. Meet our team and discover our mission." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About HighDaGuestPosts
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Your trusted partner for premium guest posting and link building services since 2019
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
                <p className="text-lg text-slate-700 mb-6">
                  HighDaGuestPosts was founded in 2019 with a simple mission: to make high-quality link building accessible to businesses of all sizes. What started as a small team of SEO enthusiasts has grown into a leading platform connecting thousands of businesses with premium guest posting opportunities.
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  We recognized that many businesses struggled to build quality backlinks due to the time-consuming nature of outreach and the difficulty of finding authoritative websites. Our platform solves this problem by providing a curated marketplace of verified, high-DA guest posting opportunities.
                </p>
                <p className="text-lg text-slate-700">
                  Today, we're proud to have helped over 2,500 clients improve their search rankings and drive organic traffic through our comprehensive link building services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa"
                  alt="Professional team collaborating on digital marketing strategy"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-xl text-slate-700 leading-relaxed">
                To empower businesses with the tools and opportunities they need to succeed in the digital landscape through ethical, effective, and transparent link building strategies that deliver measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at HighDaGuestPosts`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <achievement.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-slate-300">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose HighDaGuestPosts</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                What sets us apart from the competition
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Join thousands of satisfied clients and start building quality backlinks today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buy-guest-posts">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                    Browse Guest Posts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
