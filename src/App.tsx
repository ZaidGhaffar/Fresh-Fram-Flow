import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import TextImageSection from "./components/TextImageSection"
import LiveVideosSection from "./components/LiveVideosSection"
import ProductCard from "./components/ProductCard"
import { Mic } from "lucide-react"

function App() {
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0A051C] to-[#040212] text-white p-6">
    <div className="max-w-3xl mx-auto">
    </div>
  
      {/* Content */}
      <div className="relative z-60">
        <Navbar />
        <main>
          <HeroSection />
          <TextImageSection />
          <LiveVideosSection />
          <div className="container mx-auto py-16">
            <ProductCard />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

