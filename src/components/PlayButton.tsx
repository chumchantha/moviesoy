import { Play } from "lucide-react";

const PlayButton = () => {
  return (
    <button className="bannerButton bg-black bg-opacity-30">
      <Play className="h-4" />
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
