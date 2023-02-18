import React, { useEffect } from "react";
import ChatFirebase from "../../firebase/chat-firebase";
import { UsersModel } from "../../../@types/users";
import { UserLogged } from "../../localStorage";
import { cryptoRelationUUID } from "../../utils";

const HomeFunctions = () => {
	const [openSettings, setOpenSettings] = React.useState(false);
	const [openParticipants, setOpenParticipants] = React.useState(false);
	const [participantsList, setParticipantsList] =
		React.useState<UsersModel.Users>({} as UsersModel.Users);
	const [actualUserInChat, setActualUserInChat] =
		React.useState<UsersModel.User>({} as UsersModel.User);
	const [conversationList, setConversationList] =
		React.useState<UsersModel.User>({} as UsersModel.User);

	useEffect(() => {
		ChatFirebase.getUsersList().then((res) => {
			setParticipantsList(res);
		});
	}, []);

	useEffect(() => {
		if (actualUserInChat?.uuid) {
			ChatFirebase.searchMessages(
				`chat/${cryptoRelationUUID(
					actualUserInChat.uuid,
					UserLogged.info.uuid
				)}`
			).then((res) => {
				setConversationList(res);
			});
		}
	}, [actualUserInChat.uuid]);

	return {
		openSettings,
		openParticipants,
		participantsList,
		actualUserInChat,
		conversationList,
		setConversationList,
		setActualUserInChat,
		setOpenParticipants,
		setOpenSettings,
	};
};

export { HomeFunctions };
