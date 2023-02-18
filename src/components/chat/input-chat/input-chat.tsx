import React from "react";
import sendIcon from "../../../assets/images/send.svg";
import { InputChatFunctions } from "./input-chat.functions";
import EmojiInputPicker from "../../emoji-input-picker/emoji-input-picker";

import "./input-chat.style.css";

interface InputChatProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: (value: string) => void;
}

const InputChat = (props: InputChatProps) => {
	const { onSubmit, value, setValue, emojiSelected, setEmojiSelected } =
		InputChatFunctions(props);
	return (
		<div className="container-chat-form">
			<textarea
				className="chat-input-textarea"
				placeholder="Digite uma mensagem"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<EmojiInputPicker
				emojiSelected={emojiSelected}
				setEmojiSelected={setEmojiSelected}
			/>
			<button
				className="chat-send-button"
				onClick={() => {
					setValue("");
					onSubmit(value);
				}}
			>
				<object data={sendIcon} width="30" height="30">
					{" "}
				</object>
			</button>
		</div>
	);
};

export { InputChat };
export type { InputChatProps };
