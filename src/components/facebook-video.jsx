import { useEffect } from "react";

const FacebookVideo = ({ videoUrl }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="fb-video"
        data-href={videoUrl}
        data-autoplay="true"
        data-allowfullscreen="true"
      />
    </div>
  );
};

export default FacebookVideo;
