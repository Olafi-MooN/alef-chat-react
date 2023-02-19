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
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user?.uid) {
				return resolve(true);
			} else {
				return resolve(false);
			}
		});
	});
};

const createUsers = async (path: string, data: UsersModel.User) => {
	let itemDb = await database.getItemDb(path);
	if (itemDb?.list) {
		const findUser = itemDb.list.find(
			(_) => _.uuid === UserLogged.info.uuid
		);
		if (!findUser?.uuid) {
			itemDb.list.push(data);
		}
	} else {
		itemDb = { list: [] };
		itemDb.list = [data];
	}
	await database.createItem(path, itemDb);
	localStorage.setItem("user", JSON.stringify(data));
};

export { auth, signInWithGoogle, verifyUserAuthentication, createUsers };
