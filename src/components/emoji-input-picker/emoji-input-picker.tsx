import { EmojiInputPickerFunctions } from "./emoji-input-picker.functions";
import EmojiPicker, {
	EmojiStyle,
	Theme,
	SuggestionMode,
	SkinTonePickerLocation,
	EmojiClickData,
} from "emoji-picker-react";

import "./emoji-input-picker.style.css";

interface IEmojiInputPickerProps {
	emojiSelected: EmojiClickData;
	setEmojiSelected: React.Dispatch<React.SetStateAction<EmojiClickData>>;
}

const EmojiInputPicker = (props: IEmojiInputPickerProps) => {
	const { openEmojiPicker, setOpenEmojiPicker, setEmojiSelected } =
		EmojiInputPickerFunctions(props);
	return (
		<>
			<div className="chat-emoji-action">
				{openEmojiPicker && (
					<div className="tooltip-emoji">
						<EmojiPicker
							onEmojiClick={(e) => setEmojiSelected(e)}
							autoFocusSearch={false}
							theme={Theme.DARK}
							searchDisabled
							skinTonePickerLocation={
								SkinTonePickerLocation.SEARCH
							}
							height={"100%"}
							width="100%"
							lazyLoadEmojis={true}
							previewConfig={{ defaultCaption: "" }}
							suggestedEmojisMode={SuggestionMode.RECENT}
							skinTonesDisabled
							searchPlaceHolder="Filter"
							emojiStyle={EmojiStyle.FACEBOOK}
						/>
					</div>
				)}
				<button
					className="chat-emoji-button"
					onClick={() => setOpenEmojiPicker((prev) => !prev)}
				>
					<span className="material-symbols-outlined emoji-icon-add">
						add_reaction
					</span>
				</button>
			</div>
		</>
	);
};

export default EmojiInputPicker;
export type { IEmojiInputPickerProps };
