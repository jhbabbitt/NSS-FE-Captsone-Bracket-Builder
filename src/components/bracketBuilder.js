import { Route, Routes } from "react-router-dom"
import "./bracketBuilder.css"
import { Login } from "./auth/login"
import { Register } from "./auth/register"
import { Authorized } from "./views/authorized"
import { HomePage } from "./views/homepage"

export const BracketBuilder = () => {
    return <Routes>
		<Route path="" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<HomePage />
				</>
			</Authorized>

		} />
	</Routes>
}