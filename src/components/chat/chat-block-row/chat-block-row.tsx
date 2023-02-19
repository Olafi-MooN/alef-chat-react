import { UsersModel } from "../../../../@types/users";
import { UserLogged } from "../../../localStorage";
import "./chat-block-row.style.css";

interface IChatBlockRowProps {
	hour: string;
	user: UsersModel.User;
	message: string;
}

const formatDate = (date) => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);
};

const ChatBlockRow = (props: IChatBlockRowProps) => {
	const { user, message, hour } = props;
	return (
		<div className={`chat-block-row ${user?.uuid === UserLogged?.info()?.uuid ? "reverse" : ""}`}>
			<div className="chat-name-date-text">
				{user?.uuid === UserLogged?.info()?.uuid ? "Você" : user?.name ?? "username"} - {formatDate(new Date(hour))}
			</div>
			<div className="chat-block">{message ?? "example message add in chat"}</div>
		</div>
	);
};

export { ChatBlockRow };
