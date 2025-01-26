import milk from "../assets/yellow-cup-with-spilling-milk.jpg"
export default function ProductCard() {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-6 max-w-sm mx-auto transform hover:scale-105 transition duration-300">
      <div className="rounded-lg overflow-hidden shadow-2xl shadow-blue-500/50 mb-4 float">
        <img src={milk} alt="Product Image" className="w-full h-auto" />
      </div>
      <h3 className="text-2xl font-bold mb-2 neon-text">Milk</h3>
      <p className="text-white/90 mb-4">
        Experience the future with our state-of-the-art Quantum X9000. Revolutionize your digital life!
      </p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold neon-text">$999.99</span>
        <button className="futuristic-button">Add to Cart</button>
      </div>
    </div>
  )
}

