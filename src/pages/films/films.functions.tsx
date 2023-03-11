import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { Utils } from "../../@types/utils";
import { ICardFilms } from "../../components/card/card-films/card-film";
import { createUsers, signInWithGoogle } from "../../firebase/use-case/auth-firebase";

const FilmsFunctions = () => {
	const navigate = useNavigate();
	const [openFilm, setOpenFilm] = useState<Utils.IOpenItem<ICardFilms>>({} as Utils.IOpenItem<ICardFilms>);

	return { openFilm, setOpenFilm, navigate };
};

export { FilmsFunctions };
