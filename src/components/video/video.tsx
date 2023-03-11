interface IVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}
import "./video.style.css";

const Video = (props: IVideoProps) => {
	return <video controls className="container-video" {...props}></video>;
};

export { Video };
