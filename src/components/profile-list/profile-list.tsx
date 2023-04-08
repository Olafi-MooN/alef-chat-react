import { UsersModel } from "../../../@types/users";
import "./profile-list.style.css";

interface IProfileListProps {
	user: UsersModel.User;
	actualUserInChat: UsersModel.User;
	setActualUserInChat: React.Dispatch<React.SetStateAction<UsersModel.User>>;
}

const ProfileList = (props: IProfileListProps) => {
	const { user, actualUserInChat, setActualUserInChat } = props;

	return (
		<div
			className={`profile-content-users ${
				actualUserInChat?.uuid === user?.uuid ? "active" : ""
			}`}
			id={user?.uuid}
			onClick={() => setActualUserInChat(user)}
		>
			<img
				className="profile-image"
				src={user?.image as string}
				alt="img-profile"
			/>
			<div className="profile-info">
				<h1 className="profile-name sm">{user?.name}</h1>
				<div
					className={`profile-status ${
						user.status ? "online" : "offline"
					}`}
				>
					<div
						className={`profile-status-circle ${
							user.status ? "online" : "offline"
						}`}
					></div>{" "}
					{user.status ? "Online" : "Offline"}
				</div>
			</div>
		</div>
	);
};

export { ProfileList };
