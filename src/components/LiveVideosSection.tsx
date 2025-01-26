export default function LiveVideosSection() {
  const liveVideos = [
    { id: 1, title: "Cybernetic Showcase" },
    { id: 2, title: "AI Revolution Live" },
    { id: 3, title: "Future Tech Expo" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center neon-text">Live Streams from the Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {liveVideos.map((video) => (
            <div
              key={video.id}
              className="bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{video.title}</h3>
              <button className="mt-4 futuristic-button">Watch Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

