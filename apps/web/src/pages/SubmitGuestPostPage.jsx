import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SubmitGuestPostPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    blogName: '',
    niche: '',
    da: '',
    pa: '',
    monthlyTraffic: '',
    pricing: '',
    contentGuidelines: '',
    contactEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const niches = [
    'Technology',
    'Finance',
    'Health',
    'E-commerce',
    'Marketing',
    'Travel',
    'Lifestyle',
    'Business',
    'Education',
    'Food & Cooking',
    'Fashion',
    'Sports',
    'Entertainment',
    'Real Estate',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.blogName || !formData.niche || !formData.da || !formData.contactEmail) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('guestPostSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('guestPostSubmissions', JSON.stringify(submissions));

    // Show success message
    setSubmitted(true);
    toast({
      title: "Submission Successful!",
      description: "Thank you for submitting your guest posting opportunity. We'll review it and get back to you soon.",
    });

    // Reset form
    setFormData({
      blogName: '',
      niche: '',
      da: '',
      pa: '',
      monthlyTraffic: '',
      pricing: '',
      contentGuidelines: '',
      contactEmail: '',
    });

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Submit Guest Post Opportunity - Join Our Network | HighDaGuestPosts</title>
        <meta name="description" content="Submit your blog for guest posting opportunities. Join our network of high-quality publishers and monetize your content with quality guest posts." />
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
              Submit Your Guest Post Opportunity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Join our network of high-quality publishers and monetize your blog with guest posting opportunities
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Submission Received!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Thank you for submitting your guest posting opportunity. Our team will review your submission and contact you within 2-3 business days.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Blog Information</h2>
                  <p className="text-slate-600 mb-6">
                    Tell us about your blog and guest posting opportunity
                  </p>
                </div>

                {/* Blog Name */}
                <div>
                  <label htmlFor="blogName" className="block text-sm font-semibold text-slate-900 mb-2">
                    Blog Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="blogName"
                    name="blogName"
                    value={formData.blogName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your blog name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Niche Category */}
                <div>
                  <label htmlFor="niche" className="block text-sm font-semibold text-slate-900 mb-2">
                    Niche Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="niche"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-slate-900"
                  >
                    <option value="">Select a niche</option>
                    {niches.map((niche) => (
                      <option key={niche} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DA and PA */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="da" className="block text-sm font-semibold text-slate-900 mb-2">
                      Domain Authority (DA) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="da"
                      name="da"
                      value={formData.da}
                      onChange={handleChange}
                      required
                      min="1"
                      max="100"
                      placeholder="e.g., 65"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="pa" className="block text-sm font-semibold text-slate-900 mb-2">
                      Page Authority (PA)
                    </label>
                    <input
                      type="number"
                      id="pa"
                      name="pa"
                      value={formData.pa}
                      onChange={handleChange}
                      min="1"
                      max="100"
                      placeholder="e.g., 58"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                {/* Monthly Traffic */}
                <div>
                  <label htmlFor="monthlyTraffic" className="block text-sm font-semibold text-slate-900 mb-2">
                    Monthly Traffic
                  </label>
                  <input
                    type="text"
                    id="monthlyTraffic"
                    name="monthlyTraffic"
                    value={formData.monthlyTraffic}
                    onChange={handleChange}
                    placeholder="e.g., 50,000 or 50K"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Pricing */}
                <div>
                  <label htmlFor="pricing" className="block text-sm font-semibold text-slate-900 mb-2">
                    Pricing per Guest Post
                  </label>
                  <input
                    type="text"
                    id="pricing"
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleChange}
                    placeholder="e.g., $500 or negotiable"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Content Guidelines */}
                <div>
                  <label htmlFor="contentGuidelines" className="block text-sm font-semibold text-slate-900 mb-2">
                    Content Guidelines
                  </label>
                  <textarea
                    id="contentGuidelines"
                    name="contentGuidelines"
                    value={formData.contentGuidelines}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Describe your content requirements, word count, formatting preferences, etc."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-900"
                  ></textarea>
                </div>

                {/* Contact Email */}
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-semibold text-slate-900 mb-2">
                    Contact Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Guest Post Opportunity
                  </Button>
                </div>

                <p className="text-sm text-slate-600 text-center">
                  By submitting this form, you agree to our terms and conditions. We'll review your submission and contact you within 2-3 business days.
                </p>
              </form>
            )}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why Join Our Network?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Monetize Your Blog</h4>
                <p className="text-slate-600 text-sm">
                  Earn revenue from quality guest posts on your website
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Quality Content</h4>
                <p className="text-slate-600 text-sm">
                  Receive well-written, relevant content for your audience
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Full Control</h4>
                <p className="text-slate-600 text-sm">
                  You decide what gets published on your blog
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SubmitGuestPostPage;