import React, { useState } from "react";
import Dialog from "../dialog";

import "./profile-image.style.css";

interface IProfileImgProps {
	image: string;
}

const ProfileImg = (prop: IProfileImgProps) => {
	const { image } = prop;
	const [openImageZoom, setOpenImageZoom] = useState<boolean>(false);

	return (
		<>
			<img className="profile-image" onClick={() => setOpenImageZoom(true)} src={image} alt="img-profile" />
			{openImageZoom && (
				<Dialog height="90%" width="60%" onCloseDialog={() => setOpenImageZoom((prev) => !prev)}>
					<div
						className="background-filter"
						style={{
							backgroundImage: `url(${image})`,
							position: "relative",
						}}
					></div>
					<img className="profile-image-full-size" src={image} alt="img-profile" />
				</Dialog>
			)}
		</>
	);
};

export { ProfileImg };
