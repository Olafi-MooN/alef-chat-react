import { useState } from "react";
import { UsersModel } from "../../../../@types/users";
import Dialog from "../../dialog";
import "./profile-chat.style.css";
interface IProfileChatProps {
	user: UsersModel.User;
}

const ProfileChat = (props: IProfileChatProps) => {
	const { user } = props;
	const [openImageZoom, setOpenImageZoom] = useState<boolean>(false);

	return (
		<>
			<img
				className="profile-image"
				onClick={() => setOpenImageZoom(true)}
				src={(user?.image as string) ?? `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 20)}.jpg`}
				alt="img-profile"
				data-profile={JSON.stringify(user)}
			/>
			<div className="profile-info">
				<h1 className="profile-name">{user?.name ?? "username"}</h1>
				<div className="profile-status">
					<div className="profile-status-circle"></div>Online
				</div>
			</div>

			{openImageZoom && (
				<Dialog height="90%" width="60%" onCloseDialog={() => setOpenImageZoom((prev) => !prev)}>
					<div
						className="background-filter"
						style={{
							backgroundImage: `url(${user?.image as string}`,
							position: "relative",
						}}
					></div>
					<img
						className="profile-image-full-size"
						src={(user?.image as string) ?? `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 20)}.jpg`}
						alt="img-profile"
						data-profile={JSON.stringify(user)}
					/>
				</Dialog>
			)}
		</>
	);
};

export { ProfileChat };
