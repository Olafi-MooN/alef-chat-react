namespace UsersModel {
	export interface User {
		image?: string | ArrayBuffer | null;
		name: string;
		uuid: string;
		uid?: string;
		status?: boolean;
	}

	export interface Users {
		list: User[];
	}
}

export type { UsersModel };
