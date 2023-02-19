namespace UsersModel {
	export interface User {
		image?: string | ArrayBuffer | null;
		name: string;
		uuid: string;
		uid?: string;
	}

	export interface Users {
		list: User[];
	}
}

export type { UsersModel };
