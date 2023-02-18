namespace UsersModel {

  export interface User {
    image: string;
    name: string;
    uuid: string;
  }

  export interface Users {
    list: User[]
  }

}


export type { UsersModel };
