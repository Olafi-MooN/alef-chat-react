import { UsersModel } from "../../../../@types/users";
import "./profile-chat.style.css";
interface IProfileChatProps {
	user: UsersModel.User;
}

const ProfileChat = (props: IProfileChatProps) => {
	const { user } = props;

	return (
		<>
			<img className="profile-image" src={user?.image ?? `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 20)}.jpg`} alt="img-profile" data-profile={JSON.stringify(user)} />
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
