import { post as post1 } from './how-to-buy-guest-posts-safely.jsx';
import { post as post2 } from './guest-post-vs-link-insertion.jsx';
import { post as post3 } from './blogger-outreach-playbook.jsx';
import { post as post4 } from './guest-post-pricing-guide-seo-agencies.jsx';
import { post as post5 } from './high-da-guest-posts-what-matters-more-than-da.jsx';

const allPosts = [post1, post2, post3, post4, post5];

export default allPosts;

export const getBlogPostBySlug = (slug) => {
  return allPosts.find((post) => post.slug === slug);
};

export const getAllBlogSlugs = () => {
  return allPosts.map((post) => post.slug);
};