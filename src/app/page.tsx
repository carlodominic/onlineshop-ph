export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Quality Products From Verified Suppliers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with sellers from around the world
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Wide Selection", desc: "Browse millions of products across various categories" },
          { title: "Verified Sellers", desc: "Trade with confidence using our verified supplier program" },
          { title: "Secure Transactions", desc: "Safe payment options with protection for both buyers and sellers" }
        ].map((feature, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}