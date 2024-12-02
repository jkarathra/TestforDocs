interface EmbedProps {
  url?: string;
}

export default function Embed({
  url = "https://www.youtube.com/watch?v=bu393Jo0X4Q",
}: EmbedProps) {
  const videoId = url.split("v=")[1];

  return (
    <div className="w-full aspect-video bg-background">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
