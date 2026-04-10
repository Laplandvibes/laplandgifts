import Logo from './components/Logo'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import ProductGrid from './components/ProductGrid'
import GiftGuide from './components/GiftGuide'
import Guides from './components/Guides'
import Newsletter from './components/Newsletter'
import ShippingInfo from './components/ShippingInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-gray hover:text-amber transition-colors font-medium">Categories</a>
            <a href="#products" className="text-gray hover:text-amber transition-colors font-medium">Products</a>
            <a href="#guides" className="text-gray hover:text-amber transition-colors font-medium">Guides</a>
            <a href="#shipping" className="text-gray hover:text-amber transition-colors font-medium">Promises</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProductCategories />
        <ProductGrid />
        <GiftGuide />
        <Guides />
        <Newsletter />
        <ShippingInfo />
      </main>

      <Footer />
    </div>
  )
}

export default App
