import { useState, useEffect } from 'react';
import { ArrowRight, Heart, MessageCircle, Share2, ChevronDown } from 'lucide-react';
import { bayerSansClasses } from './lib/bayer-sans';
import { useThemeColors } from './hooks/use-cloudfront-theme';

function App() {
  const colors = useThemeColors();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'testimonials', 'cta'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: colors.primary('500') }}></div>
            <span className={`${bayerSansClasses.heading.h5} ml-3`}>HelloWorld Welcome to our page</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Testimonials', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className={`${bayerSansClasses.body.base} hover:text-primary-500 transition-colors`}
                style={{ 
                  color: activeSection === item.toLowerCase() ? colors.primary('500') : 'inherit',
                  fontWeight: activeSection === item.toLowerCase() ? 500 : 400
                }}
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            className="px-5 py-2 rounded-full text-white font-medium transition-all hover:shadow-lg"
            style={{ backgroundColor: colors.primary('500') }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className={`${bayerSansClasses.heading.h1} mb-6`}>
                Welcome to a <span style={{ color: colors.primary('500') }}>Beautiful</span> Hello World 11
              </h1>
              <p className={`${bayerSansClasses.body.large} text-gray-600 mb-8 max-w-lg`}>
                This isn't just any hello world page. It's a stunning, production-ready design that showcases what's possible with modern web development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-6 py-3 rounded-full text-white font-medium flex items-center justify-center transition-all hover:shadow-lg"
                  style={{ backgroundColor: colors.primary('500') }}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  className="px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all border"
                  style={{ 
                    color: colors.primary('500'),
                    borderColor: colors.primary('200')
                  }}
                >
                  Learn More
                </button>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      style={{ backgroundColor: colors.secondary(String((i * 200) as ColorLevel)) }}
                    >
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="font-medium">Trusted by 10,000+ users</div>
                  <div className="text-sm text-gray-500">Join our growing community</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
                style={{ backgroundColor: colors.primary('300') }}
              ></div>
              <div 
                className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: colors.secondary('300') }}
              ></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl relative z-10 max-w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`${bayerSansClasses.heading.h2} mb-4`}>Amazing Features</h2>
            <p className={`${bayerSansClasses.body.large} text-gray-600 max-w-2xl mx-auto`}>
              Discover all the powerful capabilities that make our platform stand out from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful Design",
                description: "Crafted with attention to every detail for a stunning visual experience.",
                color: colors.primary('500'),
                icon: "ð¨"
              },
              {
                title: "Responsive Layout",
                description: "Looks perfect on any device, from mobile phones to large desktop screens.",
                color: colors.secondary('500'),
                icon: "ð±"
              },
              {
                title: "Fast Performance",
                description: "Optimized for speed to provide the best user experience possible.",
                color: colors.success('500'),
                icon: "â¡"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-lg">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: feature.color + '20' }}
                >
                  {feature.icon}
                </div>
                <h3 className={`${bayerSansClasses.heading.h4} mb-3`}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className={`${bayerSansClasses.heading.h3} mb-4`}>Powerful and Easy to Use</h3>
                  <p className="text-gray-600 mb-6">
                    Our platform combines powerful features with an intuitive interface, making it accessible to everyone regardless of technical expertise.
                  </p>
                  
                  <ul className="space-y-3">
                    {["Intuitive drag-and-drop interface", "Advanced customization options", "Real-time collaboration tools"].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div 
                          className="w-5 h-5 rounded-full mr-3 flex items-center justify-center"
                          style={{ backgroundColor: colors.primary('500') }}
                        >
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team working together" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`${bayerSansClasses.heading.h2} mb-4`}>What Our Users Say</h2>
            <p className={`${bayerSansClasses.body.large} text-gray-600 max-w-2xl mx-auto`}>
              Don't just take our word for it. Here's what people are saying about our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Designer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                quote: "This platform has completely transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed."
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                quote: "I've tried many similar tools, but this one stands out for its performance and attention to detail. It's become an essential part of my workflow."
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                quote: "The analytics features have given us insights we never had before. Our campaigns are now more targeted and effective thanks to this platform."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">5.0</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div 
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all border"
              style={{ 
                color: colors.primary('500'),
                borderColor: colors.primary('200')
              }}
            >
              View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div 
            className="rounded-2xl p-12 text-center"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary('500')}, ${colors.secondary('500')})`,
              color: 'white'
            }}
          >
            <h2 className={`${bayerSansClasses.heading.h2} mb-6 text-white`}>Ready to Get Started?</h2>
            <p className={`${bayerSansClasses.body.large} mb-8 max-w-2xl mx-auto opacity-90`}>
              Join thousands of satisfied users who have already transformed their workflow with our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white rounded-full font-medium text-primary-500 hover:shadow-lg transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all">
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-10 flex justify-center">
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="mx-4">â¢</div>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="mx-4">â¢</div>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className={`${bayerSansClasses.heading.h2} mb-4`}>Latest Updates</h2>
            <p className={`${bayerSansClasses.body.large} text-gray-600 max-w-2xl mx-auto`}>
              Stay informed with our latest news, tips, and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Tips for Maximizing Productivity",
                excerpt: "Learn how to make the most of your workday with these proven productivity strategies.",
                image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                date: "May 15, 2023",
                readTime: "5 min read"
              },
              {
                title: "The Future of Remote Collaboration",
                excerpt: "Discover the emerging trends that are shaping how teams work together across distances.",
                image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                date: "April 28, 2023",
                readTime: "7 min read"
              },
              {
                title: "Building a Culture of Innovation",
                excerpt: "How to foster creativity and forward-thinking in your organization.",
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                date: "April 10, 2023",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">â¢</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={`${bayerSansClasses.heading.h4} mb-3`}>{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="#" 
                      className="font-medium flex items-center"
                      style={{ color: colors.primary('500') }}
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Heart className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <MessageCircle className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Share2 className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              className="px-6 py-3 rounded-full font-medium transition-all border"
              style={{ 
                color: colors.primary('500'),
                borderColor: colors.primary('200')
              }}
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white"></div>
                <span className={`${bayerSansClasses.heading.h5} ml-3`}>HelloWorld</span>
              </div>
              <p className="text-gray-400 mb-4">
                Beautiful, functional, and ready for production. Start building amazing experiences today.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Testimonials", "FAQ", "Roadmap"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Tutorials", "Blog", "Support Center", "Partners"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Contact", "Press", "Legal"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Â© 2023 HelloWorld, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
