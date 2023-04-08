import { LoginFunctions } from "./login.functions";
import "./login.style.css";
import GoogleIcon from "../../assets/images/google.png";
import MovieIcon from "../../assets/images/movie.svg";
import { useEffect } from "react";

const Login = () => {
	const { handleLogin, handleOpenFilms } = LoginFunctions();
	return (
		<div className="container-login">
			<div className="login-box">
				<form action="">
					<div className="field" style={{ display: "none" }}>
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
						<img
							src={GoogleIcon}
							alt="google"
							className="google-icon-login"
						/>
						Entrar com o Google
					</button>
					<button
						type="button"
						id="button-login"
						className="button-form"
						onClick={handleOpenFilms}
					>
						<img
							src={MovieIcon}
							alt="google"
							className="google-icon-login"
						/>
						Apenas assistir filmes
					</button>
				</form>
			</div>
		</div>
	);
};

export { Login };
