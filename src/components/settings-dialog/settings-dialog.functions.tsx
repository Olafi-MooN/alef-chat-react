import React from "react";
import { UsersModel } from "../../../@types/users";
import { database } from "../../firebase/database";
import { UserLogged } from "../../localStorage";

const SettingDialogFunctions = () => {
	const [actualImage, setActualImage] = React.useState<string | ArrayBuffer | null>("");
	const getBase64 = async (file: Blob) => {
		return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function () {
				resolve(reader.result);
			};
			reader.onerror = function (error) {
				reject(error);
			};
		});
	};

	const updateImageUser = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			let users = await database.getItemDb("users");
			const base64File = await getBase64(event.target.files![0]);
			setActualImage(base64File);
			users = users.list.map((x: UsersModel.User) => {
				if (x.uid === UserLogged.info().uid) {
					x.image = base64File;
					UserLogged.setInfo(x);
				}
				return x;
			});
			database.createItem("users", { list: users });
		}
	};

	return {
		getBase64,
		updateImageUser,
		actualImage,
	};
};

export { SettingDialogFunctions };
