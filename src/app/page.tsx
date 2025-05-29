import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1603133872878-684f209f57b7 ')] bg-cover bg-center"></div>
        
        <div className="relative py-16 px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Discover Premium Products
              <span className="text-blue-600"> From Verified Sellers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Connect with global suppliers and find the perfect products for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Browse Products
              </Link>
              <Link 
                href="/auth/register" 
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Create Account
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1582074608220-f047f3f6f124 " 
                alt="E-commerce products" 
                className="rounded-lg shadow-2xl w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Electronics", icon: "🔌" },
            { name: "Machinery", icon: "⚙️" },
            { name: "Apparel", icon: "👕" },
            { name: "Home & Garden", icon: "🏡" },
            { name: "Automotive", icon: "🚗" },
            { name: "Beauty", icon: "💄" },
            { name: "Construction", icon: "🏗️" },
            { name: "Healthcare", icon: "🏥" }
          ].map((category) => (
            <div 
              key={category.name}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="aspect-square bg-blue-50 rounded-md mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="font-medium text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Wireless Headphones", price: "$89.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d307 " },
            { name: "Smartwatch Pro", price: "$199.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30 " },
            { name: "LED Monitor 27\"", price: "$249.99", image: "https://images.unsplash.com/photo-1594908148-457f317ea75f " },
            { name: "Bluetooth Speaker", price: "$59.99", image: "https://images.unsplash.com/photo-1589740364-6d000d6b4c14 " }
          ].map((product, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <button className="text-gray-400 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Choose GlobalTrade?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Suppliers",
              desc: "All our sellers go through a rigorous verification process",
              icon: "🛡️"
            },
            {
              title: "Trade Assurance",
              desc: "Secure payments with protection for both buyers and sellers",
              icon: "💸"
            },
            {
              title: "Global Logistics",
              desc: "Integrated shipping solutions for international orders",
              icon: "🌍"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white text-center mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 100 100">
            <path fill="none" stroke="white" strokeWidth="0.5" d="M40 0 L60 0 L40 100 L20 100 Z"></path>
            <path fill="none" stroke="white" strokeWidth="0.5" d="M80 0 L100 0 L80 100 L60 100 Z"></path>
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
        <p className="mb-8 opacity-90 max-w-2xl mx-auto">Join thousands of businesses already using our platform to grow their global presence</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/auth/register" 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Create Free Account
          </Link>
          <Link 
            href="/products" 
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors font-medium text-lg rounded-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}