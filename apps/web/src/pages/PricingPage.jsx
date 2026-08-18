import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingTiers = [
    {
      name: 'Starter',
      monthlyPrice: 499,
      annualPrice: 4490,
      description: 'Perfect for small businesses and startups',
      features: [
        '5 guest posts per month',
        'DA 40-60 websites',
        'Basic niche targeting',
        'Standard content review',
        'Email support',
        'Monthly reporting',
        'Dofollow backlinks',
        '30-day turnaround',
      ],
      notIncluded: [
        'Priority support',
        'Custom content strategy',
        'Dedicated account manager',
      ],
    },
    {
      name: 'Professional',
      monthlyPrice: 999,
      annualPrice: 8990,
      popular: true,
      description: 'Ideal for growing businesses',
      features: [
        '15 guest posts per month',
        'DA 60-80 websites',
        'Advanced niche targeting',
        'Premium content review',
        'Priority email support',
        'Bi-weekly reporting',
        'Dofollow backlinks',
        '14-day turnaround',
        'Link insertion included',
        'Blogger outreach support',
        'Custom anchor text',
      ],
      notIncluded: [
        'Dedicated account manager',
        '24/7 phone support',
      ],
    },
    {
      name: 'Enterprise',
      monthlyPrice: 2499,
      annualPrice: 22490,
      description: 'For established brands and agencies',
      features: [
        'Unlimited guest posts',
        'DA 80+ websites',
        'Full niche customization',
        'White-glove content service',
        '24/7 priority support',
        'Weekly reporting',
        'Dofollow backlinks',
        '7-day turnaround',
        'Link insertion included',
        'Full blogger outreach',
        'Custom anchor text',
        'Dedicated account manager',
        'Custom content strategy',
        'Quarterly strategy calls',
        'API access',
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: 'What is included in each pricing tier?',
      answer: 'Each tier includes a specific number of guest posts per month, access to websites within certain DA ranges, content review services, and support. Higher tiers offer faster turnaround times, premium website access, and additional services like link insertion and blogger outreach.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll have immediate access to the new tier\'s benefits. When downgrading, changes will take effect at the start of your next billing cycle.',
    },
    {
      question: 'What is the difference between monthly and annual billing?',
      answer: 'Annual billing offers approximately 10% savings compared to monthly billing. You pay upfront for the entire year and receive the discounted rate. Monthly billing is charged each month with no long-term commitment.',
    },
    {
      question: 'Are the backlinks permanent?',
      answer: 'Yes, all backlinks from our guest posts and link insertions are permanent. We work only with reputable publishers who maintain their content long-term. We also provide guarantees and will replace any links that are removed.',
    },
    {
      question: 'What niches do you cover?',
      answer: 'We cover a wide range of niches including Technology, Finance, Health, E-commerce, Marketing, Travel, Lifestyle, Business, Education, and many more. Our network includes thousands of websites across virtually every industry.',
    },
    {
      question: 'How do you measure Domain Authority (DA)?',
      answer: 'We use Moz\'s Domain Authority metric, which is an industry-standard measurement. All DA scores are verified before placement, and we provide detailed reports showing the exact metrics of each website where your content is published.',
    },
    {
      question: 'What if I need more posts than my plan allows?',
      answer: 'You can purchase additional guest posts à la carte at any time. Contact your account manager or our sales team for pricing on additional posts. Alternatively, you can upgrade to a higher tier for better value if you consistently need more posts.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for first-time customers. If you\'re not satisfied with our service within the first 30 days, we\'ll provide a full refund. After 30 days, refunds are evaluated on a case-by-case basis.',
    },
  ];

  const getPrice = (tier) => {
    return billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice;
  };

  const getSavings = (tier) => {
    const monthlyCost = tier.monthlyPrice * 12;
    const annualCost = tier.annualPrice;
    return monthlyCost - annualCost;
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Transparent & Flexible Packages | HighDaGuestPosts</title>
        <meta name="description" content="Choose the perfect guest posting package for your business. Transparent pricing with monthly and annual options. No hidden fees, cancel anytime." />
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Choose the plan that fits your SEO goals. No hidden fees, cancel anytime.
            </motion.p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-slate-300 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  billingCycle === 'annual' ? 'transform translate-x-8' : ''
                }`}
              ></div>
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                Save 10%
              </span>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tier.popular ? 'ring-2 ring-blue-600 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-slate-600 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-slate-900">${getPrice(tier)}</span>
                      <span className="text-slate-600 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-green-600 mt-2">
                        Save ${getSavings(tier)} per year
                      </div>
                    )}
                  </div>

                  <Link to="/contact">
                    <Button
                      className={`w-full mb-6 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900 mb-3">What's included:</div>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {tier.notIncluded.length > 0 && (
                      <>
                        <div className="text-sm font-semibold text-slate-900 mt-4 mb-3">Not included:</div>
                        {tier.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start opacity-50">
                            <CheckCircle className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm line-through">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison Matrix */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Feature Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-900 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 text-slate-900 font-semibold">Starter</th>
                      <th className="text-center py-4 px-4 text-slate-900 font-semibold">Professional</th>
                      <th className="text-center py-4 px-4 text-slate-900 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Guest Posts per Month</td>
                      <td className="text-center py-4 px-4 text-slate-900">5</td>
                      <td className="text-center py-4 px-4 text-slate-900">15</td>
                      <td className="text-center py-4 px-4 text-slate-900">Unlimited</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Domain Authority Range</td>
                      <td className="text-center py-4 px-4 text-slate-900">40-60</td>
                      <td className="text-center py-4 px-4 text-slate-900">60-80</td>
                      <td className="text-center py-4 px-4 text-slate-900">80+</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Turnaround Time</td>
                      <td className="text-center py-4 px-4 text-slate-900">30 days</td>
                      <td className="text-center py-4 px-4 text-slate-900">14 days</td>
                      <td className="text-center py-4 px-4 text-slate-900">7 days</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Link Insertion</td>
                      <td className="text-center py-4 px-4"><span className="text-slate-400">—</span></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-blue-600 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Blogger Outreach</td>
                      <td className="text-center py-4 px-4"><span className="text-slate-400">—</span></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-blue-600 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-slate-700">Dedicated Account Manager</td>
                      <td className="text-center py-4 px-4"><span className="text-slate-400">—</span></td>
                      <td className="text-center py-4 px-4"><span className="text-slate-400">—</span></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-blue-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-200 pb-6 last:border-b-0"
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Our team is here to help you choose the perfect plan for your needs
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6">
                  Contact Sales
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

export default PricingPage;