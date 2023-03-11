import { useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "./video.style.css";
import "plyr-react/plyr.css";

interface IVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}
const videoId = "yWtFb9LJs3o";
const provider = "html5";
const videoOptions = undefined;

const Video = (props: IVideoProps) => {
	const ref = useRef<APITypes>(null);

	const plyrVideo =
		videoId && provider ? (
			<Plyr
				ref={ref}
				source={{
					type: "video",
					sources: [
						{
							src: props.src as string,
							provider: provider,
						},
					],
				}}
				options={videoOptions}
			/>
		) : null;
	return <div className="container-video">{plyrVideo}</div>;
};

export { Video };
