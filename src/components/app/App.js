import MainPage from "../_pages/MainPage";
import {
  	BrowserRouter,
  	Routes,
  	Route,
} from "react-router-dom";
import CardPage from "../_pages/CardPage";
import { Provider } from "react-redux";
import store from "../../redux/store";

function App() {
  	return (
    	<BrowserRouter>
			<Provider store={store}>
				<main className="main">
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/card/:cardId" element={<CardPage/>}/>
					</Routes>
				</main>
			</Provider>
   	 	</BrowserRouter>
  	);
}

export default App;
