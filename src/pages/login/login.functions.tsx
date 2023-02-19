import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import {
	createUsers,
	signInWithGoogle,
} from "../../firebase/use-case/auth-firebase";

const LoginFunctions = () => {
	const navigate = useNavigate();

	const handleLogin = async () => {
		const userCredential = await signInWithGoogle();
		if (userCredential?.user?.uid) {
			createUsers("users", {
				uid: userCredential.user.uid,
				uuid: v4(),
				name: userCredential.user.displayName as string,
				image: userCredential.user.photoURL as string,
			}).then(() => {});
			navigate("/");
		}
	};

	return {
		handleLogin,
	};
};

export { LoginFunctions };
