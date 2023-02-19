import { v4 } from "uuid";
import { MessagesModel } from "../../../../@types/messages";
import { database } from "../../database";

const ChatFirebase = {
	getUsersList: async (path: string = "users") =>
		await database.getItemDb(path),
	searchMessages: async (path: string = "chat") =>
		await database.getItemDb(path),
	insertMessageInChat: async (path: string, data: MessagesModel.IMessage) => {
		const itemDb = await database.getItemDb(path);
		if (itemDb) {
			if (itemDb?.messages) {
				itemDb?.messages.push(data);
			} else {
				itemDb.messages = [data];
			}
			database.createItem(path, itemDb);
		} else {
			database
				.createItem(path, {
					chatId: v4(),
				})
				.then(() => ChatFirebase?.insertMessageInChat(path, data));
		}
	},
};

export default ChatFirebase;
