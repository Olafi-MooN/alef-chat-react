import React from "react";
import { IEmojiInputPickerProps } from "./emoji-input-picker";

interface IEmojiInputPickerFunctionsProps extends IEmojiInputPickerProps {}

const EmojiInputPickerFunctions = (props: IEmojiInputPickerFunctionsProps) => {
	const [openEmojiPicker, setOpenEmojiPicker] = React.useState<boolean>(false);
	return { openEmojiPicker, setOpenEmojiPicker, ...props };
};

export { EmojiInputPickerFunctions };
