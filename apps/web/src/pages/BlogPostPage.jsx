import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, List } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import allPosts, { getBlogPostBySlug } from '@/content/blog/index.js';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);
  const articleRef = useRef(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (articleRef.current) {
      const headings = Array.from(articleRef.current.querySelectorAll('h2, h3'));
      const tocItems = headings.map((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        return {
          id: heading.id,
          text: heading.innerText,
          level: heading.tagName.toLowerCase() === 'h2' ? 2 : 3,
        };
      });
      setToc(tocItems);
    }
  }, [post]);

  const SITE_URL = 'https://www.highdaguestposts.com';
  const canonical = post ? `${SITE_URL}/blog/${post.slug}/` : null;
  const schema = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: { '@type': 'Organization', name: 'HighDaGuestPosts', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'HighDaGuestPosts', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical,
  } : null;

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Get 3 random related posts
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.metaTitle} - HighDaGuestPosts</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <div className="min-h-screen bg-slate-50 pb-24">
        {/* Featured Image */}
        <div className="w-full h-[300px] md:h-[400px] relative">
          <img 
            src={post.image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&q=80'} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Article Header */}
        <section className="bg-white border-b border-slate-200 pt-12 pb-12 -mt-16 relative z-10 max-w-5xl mx-auto rounded-t-3xl shadow-sm px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              {post.author && (
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Published: {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content and TOC Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.article
                ref={articleRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl"
              >
                {post.content}
              </motion.article>
            </div>

            {/* Sidebar TOC */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <List className="w-5 h-5 mr-2 text-blue-600" />
                  Table of Contents
                </h3>
                {toc.length > 0 ? (
                  <ul className="space-y-3 text-sm">
                    {toc.map((item) => (
                      <li 
                        key={item.id} 
                        className={`${item.level === 3 ? 'ml-4 text-slate-500' : 'font-medium text-slate-700'}`}
                      >
                        <a 
                          href={`#${item.id}`} 
                          className="hover:text-blue-600 transition-colors block"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 text-sm">No headings found.</p>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="block group h-full">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
                    <img 
                      src={relatedPost.image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80'} 
                      alt={relatedPost.title} 
                      className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow">
                        {relatedPost.description}
                      </p>
                      <div className="text-blue-600 font-medium text-sm mt-auto flex items-center">
                        Read more <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogPostPage;