import { useState } from "react";
import { UsersModel } from "../../../../@types/users";
import Dialog from "../../dialog";
import { ProfileImg } from "../../profile-img/profile-img";
import "./profile-chat.style.css";
interface IProfileChatProps {
	user: UsersModel.User;
}

const ProfileChat = (props: IProfileChatProps) => {
	const { user } = props;

	return (
		<>
			<ProfileImg image={user.image as string} />
			<div className="profile-info">
				<h1 className="profile-name">{user?.name ?? "username"}</h1>
				<div className="profile-status">
					<div className="profile-status-circle"></div>Online
				</div>
			</div>
		</>
	);
};

export { ProfileChat };
