import React from "react";
import Chat from "../../components/chat";
import { ProfileChat } from "../../components/chat/profile-chat/profile-chat";
import close2x from "../../assets/images/close@2x.svg";
import sendIcon from "../../assets/images/send.svg";

import "./home.style.css";
import Dialog from "../../components/dialog";
import { SettingsDialog } from "../../components/settings-dialog/settings-dialog";
import { HomeFunctions } from "./home.functions";

const Home = () => {
	const { openSettings, setOpenSettings } = HomeFunctions();

	return (
		<div className="container-home">
			<div className="toolbar">
				<div className="toolbar-top">
					<span className="material-symbols-outlined icons-config toolbar-icons menu-btn">
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
			<div className="content-users">
				<div className="content-users-title">
					<h1 className="title">Participantes Ativos</h1>
				</div>
				<div className="content-users-list"></div>
			</div>
			<div className="content-chat">
				<div className="container-chat">
					<div className="chat-header">
						<div className="profile">
							<ProfileChat />
						</div>
						<button className="close">
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
						<Chat />
					</div>
					<div className="chat-footer">
						<div className="container-chat-form">
							<input
								className="chat-input"
								type="text"
								placeholder="Digite uma mensagem"
							/>
							<button className="chat-send-button">
								<object data={sendIcon} width="30" height="30">
									{" "}
								</object>
							</button>
						</div>
					</div>
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
