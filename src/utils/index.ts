const cryptoRelationUUID = (uuid1: string, uuid2: string) => {
	let relationCodeCrypto = 0;
	for (let i = 0; i < uuid1?.length; i++) {
		const value1 = uuid1[i].charCodeAt(0);
		const value2 = uuid2[i].charCodeAt(0);
		relationCodeCrypto += value1 + value2;
	}
	return relationCodeCrypto;
};

export { cryptoRelationUUID };
