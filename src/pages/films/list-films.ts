import { ICardFilms } from "../../components/card/card-films/card-film";

const listOfFilms = () => {
	return [
		{
			genre: "Comedia",
			title: "Como Se Fosse a Primeira Vez",
			imdbRating: "6.8",
			link: "https://2475154694.tapecontent.net/radosgw/yx6ga3bMdrs1MvB/ffyfznqC74SkIyJ5IuDDZmRxNMN2DJoDOhyaJ9x9mGF6CAr56UVixjX3gaZNLpqd58frTZBV9g8mAVDTcTVSO29vxQ062lBTOlLgT7mTavTmOY9jQWe7jq60HHVvzBjdLRzNrM4cuenTEXHr6Xm8HJ2syVVkuddKBErTpG2f8PmVXTvUcCp9fZKVG19RWJBw9FAsUXhrEJPi3q9SfqO1PT2MWUxub5s5fwdpfXu3snUmmFx-AmeLyDG44dcrdLGZpJ1czumMYY4gcxtG8B6XdmLwnL15LsPz-7IQT57Fx41OpgZ3uAUHTdHxZic/SLUKeNmI5w3sNEvi.mp4?stream=1",
			thumb: "https://vizer.in/content/movies/posterPt/342/20817.webp",
			year: "2004",
		},
	] as ICardFilms[];
};

export { listOfFilms };
