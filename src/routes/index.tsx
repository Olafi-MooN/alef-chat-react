import { useEffect } from "react";
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";
import { Films } from "../pages/films";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { AuthProvider, RequireAuth } from "../store/auth-provider";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Switch>
						<Route
							path="/"
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						></Route>
						<Route path="/films" element={<Films />}></Route>
						<Route path="/login" element={<Login />}></Route>
					</Switch>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export { Routes };
