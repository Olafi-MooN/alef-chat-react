import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Routes } from "./routes";
import { changeStatusUser } from "./firebase/use-case/auth-firebase";
import { UserLogged } from "./localStorage";

window.addEventListener("beforeunload", handleBeforeUnload);
function handleBeforeUnload(event) {
	event.preventDefault();
	event.returnValue = "";
	changeStatusUser(UserLogged.info(), false);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Routes />
);
