import { onAuthStateChanged } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth, verifyUserAuthentication } from "../firebase/use-case/auth-firebase";

interface IAuthContextProps {
	authorized: boolean;
	setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext({} as IAuthContextProps);

const AuthProvider = ({ children }) => {
	const [authorized, setAuthorized] = useState<boolean>(false);

	return (
		<>
			<AuthContext.Provider value={{ authorized, setAuthorized }}>{children}</AuthContext.Provider>
		</>
	);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	let location = useLocation();

	if (!auth?.currentUser?.uid) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export { AuthProvider, RequireAuth };
