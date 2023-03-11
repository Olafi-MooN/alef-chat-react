namespace Utils {
	interface IOpenItem<T = any> {
		open: boolean;
		item: T;
	}
}

export { Utils };
