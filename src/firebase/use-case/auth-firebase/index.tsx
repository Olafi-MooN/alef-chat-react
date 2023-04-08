import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	UserCredential,
	setPersistence,
	inMemoryPersistence,
	onAuthStateChanged,
} from "firebase/auth";
import { UsersModel } from "../../../../@types/users";
import { UserLogged } from "../../../localStorage";
import { database } from "../../database";

const auth = getAuth();

const changeStatusUser = async (user: UsersModel.User, status: boolean) => {
	let users = await database.getItemDb("users");
	users = users.list.map((x: UsersModel.User) => {
		if (x.uid === user?.uid) {
			x.status = status;
			UserLogged.setInfo(x);
		}
		return x;
	});
	return database.createItem("users", { list: users });
};

const signInWithGoogle = async () => {
	return new Promise<UserCredential>((resolve, reject) => {
		setPersistence(auth, inMemoryPersistence)
			.then(() => {
				const provider = new GoogleAuthProvider();

				return signInWithPopup(auth, provider)
					.then((result) => {
						const credential =
							GoogleAuthProvider.credentialFromResult(result);
						if (credential) {
							resolve(result);
						}
					})
					.catch((error) => {
						reject(error);
					});
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const verifyUserAuthentication = async () => {
	return new Promise<boolean>((resolve, reject) => {
		onAuthStateChanged(auth, async (user) => {
			if (user?.uid) {
				return resolve(true);
			} else {
				return resolve(false);
			}
		});
	});
};

const createUsers = async (path: string, data: UsersModel.User) => {
	return new Promise<void>(async (resolve, reject) => {
		let itemDb = await database.getItemDb(path);
		if (itemDb?.list) {
			const findUser = itemDb.list.find(
				(_) => _?.uid === auth?.currentUser?.uid
			);
			if (!findUser?.uuid) {
				itemDb.list.push(data);
			} else {
				data = findUser;
			}
		} else {
			itemDb = { list: [] };
			itemDb.list = [data];
		}
		const res = await database.createItem(path, itemDb);
		localStorage.setItem("user", JSON.stringify(data));

		changeStatusUser(data, true).then(() => resolve(res));
	});
};

export {
	auth,
	signInWithGoogle,
	verifyUserAuthentication,
	createUsers,
	changeStatusUser,
};
