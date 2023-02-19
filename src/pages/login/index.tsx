import { LoginFunctions } from "./login.functions";
import "./login.style.css";
import GoogleIcon from "../../assets/images/google.png";

const Login = () => {
	const { handleLogin } = LoginFunctions();
	return (
		<div className="container-login">
			<div className="login-box">
				<form action="">
					<div className="field" style={{ display: "none" }}>
						<input className="field-input" id="login-name" type="text" name="name" required />
						<label className="field-label" htmlFor="name">
							Nome
						</label>
					</div>
					<button type="button" id="button-login" className="button-form" onClick={handleLogin}>
						<img src={GoogleIcon} alt="google" className="google-icon-login" />
						Entrar com o Google
					</button>
				</form>
			</div>
		</div>
	);
};

export { Login };
