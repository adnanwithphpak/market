import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import allPosts from '@/content/blog/index.js';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query)
    );
  });

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
        <title>Blog - HighDaGuestPosts</title>
        <meta name="description" content="Read the latest insights, guides, and strategies on guest posting, link building, and SEO from the experts at HighDaGuestPosts." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              SEO & Link Building Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Expert strategies, guides, and tips to help you dominate search rankings
            </motion.p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 text-lg"
            />
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group"
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                    <img 
                      src={post.image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80'} 
                      alt={post.title} 
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-slate-500 mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 line-clamp-2 flex-grow">
                      {post.description}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto group-hover:translate-x-2 transition-transform text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search terms.</p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;