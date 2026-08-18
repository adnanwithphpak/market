import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BuyGuestPostsPage = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [sortBy, setSortBy] = useState('da-high');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const niches = ['All', 'Technology', 'Finance', 'Health', 'E-commerce', 'Marketing', 'Travel', 'Lifestyle', 'Business', 'Education'];

  const guestPosts = [
    {
      id: 1,
      title: 'TechCrunch',
      niche: 'Technology',
      da: 95,
      pa: 88,
      monthlyTraffic: '5M+',
      price: 1500,
      features: ['Dofollow link', 'Indexed in 24h', 'Editorial review', 'Permanent placement'],
    },
    {
      id: 2,
      title: 'Forbes Technology',
      niche: 'Technology',
      da: 94,
      pa: 85,
      monthlyTraffic: '8M+',
      price: 2000,
      features: ['Dofollow link', 'Premium placement', 'Social media promotion', 'Permanent'],
    },
    {
      id: 3,
      title: 'Investopedia',
      niche: 'Finance',
      da: 92,
      pa: 82,
      monthlyTraffic: '3M+',
      price: 1200,
      features: ['Dofollow link', 'Fast approval', 'Expert audience', 'Permanent placement'],
    },
    {
      id: 4,
      title: 'Healthline',
      niche: 'Health',
      da: 91,
      pa: 84,
      monthlyTraffic: '6M+',
      price: 1400,
      features: ['Dofollow link', 'Medical review', 'High engagement', 'Permanent'],
    },
    {
      id: 5,
      title: 'Shopify Blog',
      niche: 'E-commerce',
      da: 90,
      pa: 80,
      monthlyTraffic: '2M+',
      price: 1100,
      features: ['Dofollow link', 'E-commerce focus', 'Quality traffic', 'Permanent placement'],
    },
    {
      id: 6,
      title: 'HubSpot Marketing',
      niche: 'Marketing',
      da: 93,
      pa: 86,
      monthlyTraffic: '4M+',
      price: 1600,
      features: ['Dofollow link', 'Marketing audience', 'Lead generation', 'Permanent'],
    },
    {
      id: 7,
      title: 'Lonely Planet',
      niche: 'Travel',
      da: 89,
      pa: 78,
      monthlyTraffic: '3.5M+',
      price: 900,
      features: ['Dofollow link', 'Travel enthusiasts', 'Global reach', 'Permanent placement'],
    },
    {
      id: 8,
      title: 'Vogue Lifestyle',
      niche: 'Lifestyle',
      da: 88,
      pa: 79,
      monthlyTraffic: '2.8M+',
      price: 1000,
      features: ['Dofollow link', 'Fashion & lifestyle', 'Premium audience', 'Permanent'],
    },
    {
      id: 9,
      title: 'Entrepreneur',
      niche: 'Business',
      da: 92,
      pa: 83,
      monthlyTraffic: '4.5M+',
      price: 1300,
      features: ['Dofollow link', 'Business leaders', 'High authority', 'Permanent placement'],
    },
    {
      id: 10,
      title: 'EdTech Magazine',
      niche: 'Education',
      da: 85,
      pa: 75,
      monthlyTraffic: '1.5M+',
      price: 800,
      features: ['Dofollow link', 'Education sector', 'Quality content', 'Permanent'],
    },
    {
      id: 11,
      title: 'Wired Tech',
      niche: 'Technology',
      da: 93,
      pa: 84,
      monthlyTraffic: '5.5M+',
      price: 1700,
      features: ['Dofollow link', 'Tech innovators', 'Premium placement', 'Permanent placement'],
    },
    {
      id: 12,
      title: 'The Balance Finance',
      niche: 'Finance',
      da: 87,
      pa: 77,
      monthlyTraffic: '2.5M+',
      price: 950,
      features: ['Dofollow link', 'Financial advice', 'Trusted source', 'Permanent'],
    },
    {
      id: 13,
      title: 'WebMD Health',
      niche: 'Health',
      da: 90,
      pa: 81,
      monthlyTraffic: '7M+',
      price: 1350,
      features: ['Dofollow link', 'Medical authority', 'High trust', 'Permanent placement'],
    },
    {
      id: 14,
      title: 'BigCommerce Blog',
      niche: 'E-commerce',
      da: 86,
      pa: 76,
      monthlyTraffic: '1.8M+',
      price: 850,
      features: ['Dofollow link', 'E-commerce tips', 'Merchant audience', 'Permanent'],
    },
    {
      id: 15,
      title: 'Moz Marketing',
      niche: 'Marketing',
      da: 91,
      pa: 82,
      monthlyTraffic: '3.2M+',
      price: 1250,
      features: ['Dofollow link', 'SEO experts', 'Marketing pros', 'Permanent placement'],
    },
  ];

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = guestPosts.filter((post) => {
      const matchesNiche = selectedNiche === 'All' || post.niche === selectedNiche;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.niche.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesNiche && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'da-high':
          return b.da - a.da;
        case 'da-low':
          return a.da - b.da;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedNiche, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / itemsPerPage);
  const paginatedPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetails = (post) => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "Detailed post view isn't implemented yet—but you can request it in your next prompt! 🚀",
    });
  };

  const handleRequestPost = (post) => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "Post request functionality isn't implemented yet—but you can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Buy Guest Posts - High DA Guest Posting Opportunities | HighDaGuestPosts</title>
        <meta name="description" content="Browse premium guest posting opportunities on high-authority websites. Filter by niche, DA score, and price to find the perfect backlink opportunities." />
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
              Buy Premium Guest Posts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Browse high-authority guest posting opportunities across various niches
            </motion.p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title or niche..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                />
              </div>

              {/* Niche Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                >
                  {niches.map((niche) => (
                    <option key={niche} value={niche}>{niche}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                >
                  <option value="da-high">DA: High to Low</option>
                  <option value="da-low">DA: Low to High</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              Showing {paginatedPosts.length} of {filteredAndSortedPosts.length} results
            </div>
          </div>

          {/* Guest Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {post.niche}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-600">Domain Authority</div>
                      <div className="text-2xl font-bold text-blue-600">DA {post.da}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Page Authority</div>
                      <div className="text-2xl font-bold text-purple-600">PA {post.pa}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-slate-600 mb-1">Monthly Traffic</div>
                    <div className="text-lg font-semibold text-slate-900">{post.monthlyTraffic}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-slate-600 mb-2">Features:</div>
                    <ul className="space-y-1">
                      {post.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-slate-600">Price</div>
                        <div className="text-2xl font-bold text-slate-900">${post.price}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleViewDetails(post)}
                        variant="outline"
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        onClick={() => handleRequestPost(post)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Request Post
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {[...Array(totalPages)].map((_, idx) => (
                <Button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  variant={currentPage === idx + 1 ? 'default' : 'outline'}
                  className={currentPage === idx + 1 ? 'bg-blue-600 text-white' : ''}
                >
                  {idx + 1}
                </Button>
              ))}

              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BuyGuestPostsPage;