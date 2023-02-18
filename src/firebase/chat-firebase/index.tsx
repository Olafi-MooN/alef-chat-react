import { getItemDb, createItem } from "../index";
import { v4 } from "uuid";
import { MessagesModel } from "../../../@types/messages";

const ChatFirebase = {
	getUsersList: async (path: string = "users") => await getItemDb(path),
	searchMessages: async (path: string = "chat") => await getItemDb(path),
	insertMessageInChat: async (path: string, data: MessagesModel.IMessage) => {
		const itemDb = await getItemDb(path);
		if (itemDb) {
			if (itemDb?.messages) {
				itemDb?.messages.push(data);
			} else {
				itemDb.messages = [data];
			}
			createItem(path, itemDb);
		} else {
			createItem(path, {
				chatId: v4(),
			}).then(() => ChatFirebase?.insertMessageInChat(path, data));
		}
	},
};

export default ChatFirebase;
