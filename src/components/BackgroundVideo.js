import { useSelector } from "react-redux";
import useGetMovieTrailer from "../Hooks/useGetMovieTrailer";

const BackgroundVideo = ({ videoId }) => {
  const trailer = useSelector(store => store.movies?.trailer);
  useGetMovieTrailer(videoId);

  const highQualityParams = "vq=hd1080";

  return (
    <div>
      <iframe
        className="w-screen aspect-video md:-mt-24 "
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&${highQualityParams}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;