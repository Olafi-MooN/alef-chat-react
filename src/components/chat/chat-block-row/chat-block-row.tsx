const formatDate = (date) => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(date);
};

const actualUser = () => {
	return { uuid: "" };
};

const ChatBlockRow = (item) => {
	return (
		<div
			className={`chat-block-row ${
				item?.user?.uuid === actualUser().uuid ? "reverse" : ""
			}`}
		>
			<div className="chat-name-date-text">
				{item?.user?.uuid === actualUser().uuid
					? "Você"
					: item?.user?.name ?? "username"}{" "}
				- {formatDate(new Date())}
			</div>
			<div className="chat-block">
				{item?.message ?? "example message add in chat"}
			</div>
		</div>
	);
};

export { ChatBlockRow };
