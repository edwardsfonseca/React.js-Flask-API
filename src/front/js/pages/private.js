import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private= () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			Estas en private para salir sola cierra la session
		</div>
	);
};
