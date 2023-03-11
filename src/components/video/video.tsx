interface IVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}
import "./video.style.css";

const Video = (props: IVideoProps) => {
	return (
		<video
			preload="auto"
			x-webkit-airplay="allow"
			webkit-playsinline="true"
			id="vjs_video_2548_html5_api"
			tabIndex={-1}
			autoPlay={true}
			playsInline
			className="container-video"
			{...props}
		></video>
	);
};

export { Video };
