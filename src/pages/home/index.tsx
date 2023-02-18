import React from "react";
import Chat from "../../components/chat";
import { ProfileChat } from "../../components/chat/profile-chat/profile-chat";
import close2x from "../../assets/images/close@2x.svg";
import sendIcon from "../../assets/images/send.svg";

import "./home.style.css";
import Dialog from "../../components/dialog";
import { SettingsDialog } from "../../components/settings-dialog/settings-dialog";
import { HomeFunctions } from "./home.functions";
import { ProfileList } from "../../components/profile-list/profile-list";
import { UserLogged } from "../../localStorage";
import { UsersModel } from "../../../@types/users";

const Home = () => {
	const {
		participantsList,
		openParticipants,
		openSettings,
		actualUserInChat,
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
						onClick={() => setOpenParticipants((prev) => !prev)}
					>
						menu
					</span>
				</div>
				<div className="toolbar-bottom">
					<span className="profile-image-icon">
						<img
							className="profile-image-img"
							src=""
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
							<div className="chat-body">
								<ChatBlockRow />
							</div>
							<div className="chat-footer">
								<div className="container-chat-form">
									<input
										className="chat-input"
										type="text"
										placeholder="Digite uma mensagem"
									/>
									<button className="chat-send-button">
										<object
											data={sendIcon}
											width="30"
											height="30"
										>
											{" "}
										</object>
									</button>
								</div>
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
