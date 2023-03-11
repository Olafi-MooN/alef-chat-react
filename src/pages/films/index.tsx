import { CardFilms } from "../../components/card/card-films/card-film";
import { NavBarFilms } from "../../components/nav-bar/nav-bar-films/nav-bar-films";
import { FilmsFunctions } from "./films.functions";
import { listOfFilms } from "./list-films";
import "./films.style.css";
import { Video } from "../../components/video/video";

const Films = () => {
	const { navigate, openFilm, setOpenFilm } = FilmsFunctions();

	return (
		<div className="container-films">
			<NavBarFilms />

			{!openFilm.open && (
				<div className="content-films">
					<h2>Filmes adicionados</h2>

					{listOfFilms().map((film) => (
						<CardFilms
							card={film}
							onClick={() =>
								setOpenFilm({ item: film, open: true })
							}
						/>
					))}
				</div>
			)}

			<div
				style={{
					width: "100%",
					height: "100%",
					background: "red",
					overflow: "auto",
				}}
			>
				{openFilm.open && (
					<Video
						src={openFilm.item.link}
						poster={openFilm.item.thumb}
					/>
				)}
			</div>
		</div>
	);
};

export { Films };
