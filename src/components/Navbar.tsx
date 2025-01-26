import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/30 backdrop-blur-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold neon-text">
        Farm Fresh Flow 
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            Products
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="/" className="block text-white hover:text-blue-400 transition-colors py-2">
            Home
          </a>
          <a href="#" className="block text-white hover:text-blue-400 transition-colors py-2">
            About
          </a>
          <a href="#" className="block text-white hover:text-blue-400 transition-colors py-2">
            Products
          </a>
          <a href="#" className="block text-white hover:text-blue-400 transition-colors py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

