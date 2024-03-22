import PodcastCard from "./components/PodcastCard";
import podcastSrc from "./assets/podcast.jpeg";

function App() {

  return (
    <div className="m-12">
      <PodcastCard imgSrc={podcastSrc} title="Photography Fundamentals: Capture the Perfect Shot" duration="1H 12 min" />
    </div>
  );
}

export default App
