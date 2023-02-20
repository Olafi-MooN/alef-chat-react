import React from "react";
import { DialogModel } from "../../../@types/dialog";
import close2x from "../../assets/images/close@2x.svg";

import "./dialog.styles.css";

const Dialog = (props: DialogModel.DialogOptions) => {
	const { onCloseDialog, icon, height, width, children, modalStyle } = props;
	return (
		<>
			<div className="container-modal">
				<div className="modal" style={{ width, height, ...modalStyle }}>
					<button className="button-close-modal" onClick={onCloseDialog}>
						<object data={close2x} width="30" height="30" style={{ pointerEvents: "none" }}>
							{" "}
						</object>
					</button>
					{children}
				</div>
			</div>
		</>
	);
};

export default Dialog;
