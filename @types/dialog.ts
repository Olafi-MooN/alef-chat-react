namespace DialogModel {
	export interface DialogOptions {
		children?: React.ReactNode;
		width: string;
		height: string;
		icon?: string;
		modalStyle?: React.CSSProperties
		onCloseDialog?: () => void;
	}

	export interface SettingsDialogProps extends DialogOptions { }
}

export type { DialogModel };
