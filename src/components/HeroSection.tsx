export default function HeroSection() {
  interface VideoSectionProps {
    url: string;
    title: string;
  }
  
  const VideoSection: React.FC<VideoSectionProps> = ({ url, title }) => {
  const embedUrl = url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/').split('&')[0];
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
  return (
    <section className="py-20">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl shadow-blue-500/50 float">
        <VideoSection 
              url="https://youtu.be/ED4SUWgoAhw?si=8rfSc7VPi04WTAjO"
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
        </div>
      </div>
    </section>
  )
}

