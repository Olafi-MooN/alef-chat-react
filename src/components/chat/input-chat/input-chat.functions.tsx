import React, { useEffect } from "react";
import { InputChatProps } from "./input-chat";
import { EmojiClickData } from "emoji-picker-react";

interface InputChatFunctionsProps extends InputChatProps {}

const InputChatFunctions = (props: InputChatFunctionsProps) => {
	const { setValue } = props;
	const [emojiSelected, setEmojiSelected] = React.useState<EmojiClickData>({} as EmojiClickData);

	useEffect(() => {
		if (emojiSelected?.unified) {
			setValue((prev) => prev + emojiSelected.emoji);
		}
	}, [emojiSelected]);

	return {
		...props,
		emojiSelected,
		setEmojiSelected,
	};
};

export { InputChatFunctions };
