import { UsersModel } from "../../@types/users";

const UserLogged = {
	info: JSON.parse(localStorage.getItem("user") as string) as UsersModel.User,
};

export { UserLogged };
