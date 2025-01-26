import factoruImage from '../assets/factory-4.png'

export default function TextImageSection() {
  return (
    <section className="py-20 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-purple-500/50 float">
            <img src={factoruImage} className="w-full h-auto" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4 neon-text">Futuristic Innovation</h2>
          <p className="text-white/90 mb-4">
            Experience the cutting-edge technology that defines the future. Our innovative solutions are designed to
            revolutionize the way you interact with the digital world.
          </p>
          <button className="futuristic-button">Explore Now</button>
        </div>
      </div>
    </section>
  )
}

