import React from "react";
import { DialogModel } from "../../../@types/dialog";
import { UserLogged } from "../../localStorage";
import Dialog from "../dialog";
import "./settings-dialog.styles.css";

const SettingsDialog = (props: DialogModel.SettingsDialogProps) => {
	return (
		<>
			<Dialog {...props}>
				<div className="content-config">
					<div className="left-content-config">
						<h1 className="title config-title">Configurações</h1>
						<div className="list-items-config">
							<span className="material-symbols-outlined icons-config">
								manage_accounts
							</span>
							<p className="">Perfil</p>
						</div>
					</div>
					<div className="right-content-config">
						<div className="profile-config">
							<div
								className="image-config-edit"
								style={{
									backgroundImage: `url(${UserLogged.info.image})`,
								}}
							>
								<input
									type="file"
									name="file"
									id="file"
									className="image-input-file"
								/>
								<label
									htmlFor="file"
									className="image-label-file"
								>
									Alterar imagem
								</label>
							</div>
							<h4 className="title name-config">
								{UserLogged.info.name}
							</h4>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export { SettingsDialog };
