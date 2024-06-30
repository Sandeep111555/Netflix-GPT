import { useSelector } from "react-redux";
import useGetMovieTrailer from "../Hooks/useGetMovieTrailer";

const BackgroundVideo = ({ videoId }) => {
  const trailer = useSelector(store => store.movies?.trailer);
  useGetMovieTrailer(videoId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
