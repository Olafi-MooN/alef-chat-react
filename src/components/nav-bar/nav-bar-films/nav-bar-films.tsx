import { Link, useNavigate } from "react-router-dom";
import LogoFilms from "../../../assets/images/logo-films.png";
import "./nav-bar-films.style.css";

const NavBarFilms = () => {
	const navigate = useNavigate();
	return (
		<div id="navbar" className="small">
			<Link className="navbar-left" to="/films">
				<img
					src={LogoFilms}
					className="logo-image"
					alt="AleTehFlix - Seus filmes online"
				/>
			</Link>
			<div className="navbar-right">
				<a href="docs.php">Docs</a>
				<a href="movies.html">Filmes</a>
				<a href="series.html" className="active">
					Séries
				</a>
			</div>
		</div>
	);
};
export { NavBarFilms };
