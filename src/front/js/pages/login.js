import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState(false); // Si no contiene datos
	const handleClick = (e) => {
		e.preventDefault();
		if (email == "" || password == "") {
			setAlert(true);
		}
		if (email != "" && password != "") {
			actions.Login(email, password);
		}
	};
	return (
		<section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-6 text-center mb-5">
						<h2 class="heading-section">Bienvenidos a 4Geeks</h2>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-6 col-lg-5">
						<div class="login-wrap p-4 p-md-5">
							<div class="icon d-flex align-items-center justify-content-center">
								<span class="fa fa-user-o"></span>
							</div>
							<h3 class="text-center mb-4">Have an account?</h3>
							<form action="#" class="login-form">
								<div class="form-group">
									<input type="text" class="form-control rounded-left" placeholder="Email" value={email}
										onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div class="form-group d-flex">
									<input
										type="password"
										class="form-control rounded-left"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)} />
								</div>
								<div class="form-group d-md-flex">
									<div class="w-50">

									</div>
									<div class="w-50 text-md-right">
										<Link to="/signup">
											<a href="#">Registrate</a>
										</Link>
									</div>
								</div>
								<div class="form-group">
									<button onClick={(e) => {
										handleClick(e);
									}} type="submit" 
									class="btn btn-primary rounded submit p-3 px-5"
									value="Login">Get Started</button>
								</div>
									
           
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
