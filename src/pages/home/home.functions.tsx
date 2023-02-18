import React, { useCallback, useEffect, useLayoutEffect } from "react";
import ChatFirebase from "../../firebase/chat-firebase";
import { UsersModel } from "../../../@types/users";
import { MessagesModel } from "../../../@types/messages";
import { UserLogged } from "../../localStorage";
import { cryptoRelationUUID } from "../../utils";
import { onListEventMessage } from "../../firebase";

const HomeFunctions = () => {
	const [chatTextValue, setChatTextValue] = React.useState<string>("");
	const [openSettings, setOpenSettings] = React.useState<boolean>(false);
	const [openParticipants, setOpenParticipants] =
		React.useState<boolean>(false);
	const [participantsList, setParticipantsList] =
		React.useState<UsersModel.Users>({} as UsersModel.Users);
	const [actualUserInChat, setActualUserInChat] =
		React.useState<UsersModel.User>({} as UsersModel.User);
	const [conversationList, setConversationList] =
		React.useState<MessagesModel.IMessages>({} as MessagesModel.IMessages);
	const chatBodyRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);

	useEffect(() => {
		ChatFirebase.getUsersList().then((res) => {
			setParticipantsList(res);
		});
	}, []);

	useLayoutEffect(() => {
		chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
	}, [conversationList]);

	const handleGetMessages = useCallback(() => {
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

	useEffect(() => {
		handleGetMessages();
	}, [handleGetMessages]);

	const onSubmit = (value: string) => {
		ChatFirebase.insertMessageInChat(
			`chat/${cryptoRelationUUID(
				actualUserInChat.uuid,
				UserLogged.info.uuid
			)}`,
			{
				hour: String(new Date()),
				message: value,
				user: {
					uuid: UserLogged.info.uuid,
					name: UserLogged.info.name,
				},
			}
		);
	};

	useEffect(() => {
		onListEventMessage(
			`chat/${cryptoRelationUUID(
				actualUserInChat.uuid,
				UserLogged.info.uuid
			)}`,
			handleGetMessages
		);
	}, [actualUserInChat]);

	return {
		openSettings,
		openParticipants,
		participantsList,
		actualUserInChat,
		conversationList,
		chatBodyRef,
		chatTextValue,
		onSubmit,
		setChatTextValue,
		setConversationList,
		setActualUserInChat,
		setOpenParticipants,
		setOpenSettings,
	};
};

export { HomeFunctions };
