import { UsersModel } from './users';


namespace MessagesModel {

  export interface IMessage {
    message: string;
    hour: string;
    user: UsersModel.User;
  }

  export interface IMessages {
    chatId: string;
    messages: IMessage[]
  }

}


export type { MessagesModel };
