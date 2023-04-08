import { ICardFilms } from "../../components/card/card-films/card-film";

const listOfFilms = () => {
	return [
		{
			genre: "Comedia",
			title: "Como Se Fosse a Primeira Vez",
			imdbRating: "6.8",
			link: "//streamtape.com/get_video?id=yx6ga3bMdrs1MvB&expires=1678740672&ip=FRuOExyOR0gN&token=29Lp2ZfjUg4q&stream=1",
			thumb: "https://vizer.in/content/movies/posterPt/342/20817.webp",
			year: "2004",
		},
		{
			genre: "Intelectual",
			title: "O homem que viu o infinito",
			imdbRating: "6.8",
			link: "//streamtape.com/get_video?id=9kG90aZLMAua2OQ&expires=1680994570&ip=FRuOExyOR0gN&token=iYBVVaXFaYtO&stream=1",
			thumb: "https://thumb.tapecontent.net/thumb/9kG90aZLMAua2OQ/78ZXp1mjzziAZpy.jpg",
			year: "2004",
		},
	] as ICardFilms[];
};

export { listOfFilms };
