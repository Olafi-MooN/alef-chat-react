import { ProfileChat } from "../../components/chat/profile-chat/profile-chat";
import close2x from "../../assets/images/close@2x.svg";
import { SettingsDialog } from "../../components/settings-dialog/settings-dialog";
import { HomeFunctions } from "./home.functions";
import { ProfileList } from "../../components/profile-list/profile-list";
import { UserLogged } from "../../localStorage";
import { UsersModel } from "../../../@types/users";
import { ChatBlockRow } from "../../components/chat/chat-block-row/chat-block-row";
import { InputChat } from "../../components/chat/input-chat/input-chat";

import "./home.style.css";
import { auth } from "../../firebase/use-case/auth-firebase";

const Home = () => {
	const {
		participantsList,
		openParticipants,
		openSettings,
		actualUserInChat,
		conversationList,
		chatBodyRef,
		chatTextValue,
		onSubmit,
		setChatTextValue,
		setActualUserInChat,
		setOpenSettings,
		setOpenParticipants,
	} = HomeFunctions();

	return (
		<div
			className={`container-home ${
				openParticipants ? "no-active-participants" : ""
			}`}
		>
			<div className="toolbar">
				<div className="toolbar-top">
					<span
						className="material-symbols-outlined icons-config toolbar-icons menu-btn"
						onClick={() => {
							console.log(auth.currentUser);
							setOpenParticipants((prev) => !prev);
						}}
					>
						menu
					</span>
				</div>
				<div className="toolbar-bottom">
					<span className="profile-image-icon">
						<img
							className="profile-image-img"
							src={UserLogged?.info?.image}
							alt="profile"
						/>
					</span>
					<span
						className="material-symbols-outlined icons-config toolbar-icons settings-btn"
						onClick={() => setOpenSettings(true)}
					>
						settings
					</span>
				</div>
			</div>
			<div
				className={`content-users ${
					openParticipants ? "no-active" : ""
				}`}
			>
				<div className="content-users-title">
					<h1 className="title">Participantes Ativos</h1>
				</div>
				<div className="content-users-list">
					{participantsList?.list
						?.filter((user) => user.uuid !== UserLogged.info?.uuid)
						.map((user) => (
							<ProfileList
								key={user.uuid}
								user={user}
								actualUserInChat={actualUserInChat}
								setActualUserInChat={setActualUserInChat}
							/>
						))}
				</div>
			</div>
			<div className="content-chat">
				<div className="container-chat">
					{actualUserInChat?.uuid && (
						<>
							<div className="chat-header">
								<div className="profile">
									<ProfileChat user={actualUserInChat} />
								</div>
								<button
									className="close"
									onClick={() =>
										setActualUserInChat(
											{} as UsersModel.User
										)
									}
								>
									<object
										data={close2x}
										width="30"
										height="30"
										style={{ pointerEvents: "none" }}
									>
										{" "}
									</object>
								</button>
							</div>
							<div className="chat-body" ref={chatBodyRef}>
								{conversationList?.messages?.map(
									(message, i) => (
										<ChatBlockRow
											key={i}
											hour={message.hour}
											message={message?.message}
											user={message?.user}
										/>
									)
								)}
							</div>
							<div className="chat-footer">
								<InputChat
									onSubmit={onSubmit}
									setValue={setChatTextValue}
									value={chatTextValue}
								/>
							</div>
						</>
					)}
				</div>
			</div>
			{openSettings && (
				<SettingsDialog
					height="80%"
					width="80%"
					onCloseDialog={() => setOpenSettings(false)}
				/>
			)}
		</div>
	);
};

export { Home };
