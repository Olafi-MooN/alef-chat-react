import React from "react";

const HomeFunctions = () => {
	const [openSettings, setOpenSettings] = React.useState(false);

	return {
		openSettings,
		setOpenSettings,
	};
};

export { HomeFunctions };
