import { LoginFunctions } from "./login.functions";
import "./login.style.css";

const Login = () => {
	const { handleLogin } = LoginFunctions();
	return (
		<div className="container-login">
			<div className="login-box">
				<form action="">
					<div className="field">
						<input
							className="field-input"
							id="login-name"
							type="text"
							name="name"
							required
						/>
						<label className="field-label" htmlFor="name">
							Nome
						</label>
					</div>
					<button
						type="button"
						id="button-login"
						className="button-form"
						onClick={handleLogin}
					>
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
};

export { Login };
