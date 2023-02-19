import { ref, set, get, child, onValue } from "firebase/database";
import { db, dbRef } from "../index";

const database = {
	getItemDb: async (path) => {
		const snapshot = await get(child(dbRef, path));
		if (snapshot.exists()) {
			return snapshot.val();
		}
	},
	createItem: async (path, data) => set(ref(db, path), data),
	onListEventMessage: async (path: string, callback: (...params) => void) => {
		const starCountRef = ref(db, path);
		onValue(starCountRef, async (snapshot) => {
			callback(path);
		});
	},
};

export { database };
