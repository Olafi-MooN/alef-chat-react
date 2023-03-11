interface ICardFilms {
	title: string;
	year: string;
	imdbRating: string;
	genre: string;
	thumb: string;
	link: string;
}

interface ICardFilmsProps extends React.HTMLAttributes<HTMLDivElement> {
	card: ICardFilms;
}

import "./card-film.style.css";

const CardFilms = (props: ICardFilmsProps) => {
	const { title, year, imdbRating, genre, thumb } = props.card;
	return (
		<div className="card-film" style={{ backgroundImage: `url(${thumb})` }} {...props}>
			<h3>{title}</h3>
			<div className="card-film-info">
				<p>{year}</p>
				<p>⭐{imdbRating}</p>
				<p>{genre}</p>
			</div>
		</div>
	);
};

export { CardFilms };
export type { ICardFilms, ICardFilmsProps };
