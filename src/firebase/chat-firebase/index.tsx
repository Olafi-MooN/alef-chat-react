import { getItemDb, createItem } from "../index";

const ChatFirebase = {
	getUsersList: async (path: string = "users") => await getItemDb(path),
	searchMessages: async (path: string = "chat") => await getItemDb(path),
};

export default ChatFirebase;
