
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { AllRoutes } from "./routes/AllRoutes";

function App() {

		const params=useParams()

	useEffect(() => {
	console.log(params)	
	},[])
	return (
		<div className="App">
			
			<Navbar />
			<AllRoutes />
		</div>
	);
}

export default App;
