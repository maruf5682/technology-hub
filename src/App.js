import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useSmoothScroll } from "./hooks/SmothScroll";
import Footer from "./components/Footer";

const App = () => {
	useSmoothScroll();
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
