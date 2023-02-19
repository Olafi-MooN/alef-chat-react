import { UsersModel } from "../../@types/users";

const UserLogged = {
	info: () => JSON.parse(localStorage.getItem("user") as string) as UsersModel.User,
	setInfo: (user: UsersModel.User) => {
		localStorage.setItem("user", JSON.stringify(user))
	},
};

export { UserLogged };
