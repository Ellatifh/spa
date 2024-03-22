interface IPodcast {
  imgSrc: string;
  title: string;
  duration: string;
}

function PodcastCard({ imgSrc = "#", title, duration }: IPodcast) {
  return (
    <div className="card w-[444px] rounded-lg shadow-lg overflow-hidden text-black">
      <img className="w-full h-[275px]" src={imgSrc} />
      <div className="my-[20px] mx-[30px]">
        <h1 className="text-[32px] mb-[20px]">{title}</h1>
        <div className="flex justify-between items-center inter-text">
          <p>{duration}</p>
          <button className="underline underline-offset-2">Listen</button>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;
