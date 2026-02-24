import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'From Code to Client: Freelancing Success in Tech',
      excerpt: 'Freelancing in the tech industry can be both rewarding and challenging. As a freelancer, you have the freedom to choose your projects, set your rates, and work from anywhere...',
      author: 'Ishu Raj',
      date: '2024-02-15',
      views: 987,
      likes: 36,
      image: '/images/blog/latest-insights/7.jpeg',
      category: 'Freelancing'
    },
    {
      id: 2,
      title: 'Future of Remote Work in 2024',
      excerpt: 'The landscape of remote work continues to evolve rapidly. As we navigate through 2024, companies and professionals are adapting to new technologies and work methodologies...',
      author: 'Ishu Raj',
      date: '2024-02-10',
      views: 1234,
      likes: 58,
      image: '/images/blog/latest-insights/5.jpeg',
      category: 'Remote Work'
    },
    {
      id: 3,
      title: 'Real-World Software Solutions: My Development Journey',
      excerpt: 'In this post, I share my personal journey through the world of software development, from my first lines of code to creating impactful solutions for real-world problems...',
      author: 'Ishu Raj',
      date: '2024-02-05',
      views: 1500,
      likes: 72,
      image: '/images/My_journey/image_1.png',
      category: 'Development'
    }
  ];

  return (
    <div className="app">
      <Navigation />
      {/* Blog Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1>Blog & Insights</h1>
          <p>Thoughts on technology, development, and the future of work</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <i className="fas fa-eye mr-1"></i>
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <i className="far fa-heart mr-1"></i>
                        {post.likes}
                      </span>
                    </div>
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2>Stay Updated</h2>
            <p className="lead mb-6">
              Subscribe to my newsletter for the latest insights on technology, development, and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
