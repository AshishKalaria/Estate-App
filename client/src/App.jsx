import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/signin" element={<SignIn />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
