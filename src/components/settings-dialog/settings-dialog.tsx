import React, { useState } from "react";
import { DialogModel } from "../../../@types/dialog";
import { UserLogged } from "../../localStorage";
import Dialog from "../dialog";
import { SettingDialogFunctions } from "./settings-dialog.functions";
import "./settings-dialog.styles.css";

const SettingsDialog = (props: DialogModel.SettingsDialogProps) => {
	const [openImageZoom, setOpenImageZoom] = useState<boolean>(false);
	const { updateImageUser, actualImage } = SettingDialogFunctions();
	return (
		<>
			<Dialog {...props}>
				<div className="content-config">
					<div className="left-content-config">
						<h1 className="title config-title">Configurações</h1>
						<div className="list-items-config">
							<span className="material-symbols-outlined icons-config">manage_accounts</span>
							<p className="">Perfil</p>
						</div>
					</div>
					<div className="right-content-config">
						<div className="profile-config">
							<div
								className="image-config-edit"
								style={{
									backgroundImage: `url(${actualImage || UserLogged?.info()?.image})`,
								}}
								onClick={() => setOpenImageZoom((prev) => !prev)}
							>
								<input type="file" name="file" id="file" className="image-input-file" onChange={(e) => updateImageUser(e)} />
								<label htmlFor="file" className="image-label-file">
									Alterar imagem
								</label>
							</div>
							<h4 className="title name-config">{UserLogged.info().name}</h4>
						</div>
					</div>
				</div>
			</Dialog>
			{openImageZoom && (
				<Dialog height="90%" width="60%" onCloseDialog={() => setOpenImageZoom((prev) => !prev)}>
					<div
						className="background-filter"
						style={{
							background: "black",
							position: "relative",
							filter: "blur(0px)",
						}}
					></div>
					<img className="profile-image-full-size" src={(actualImage || UserLogged?.info()?.image) as string} alt="img-profile" />
				</Dialog>
			)}
		</>
	);
};

export { SettingsDialog };
