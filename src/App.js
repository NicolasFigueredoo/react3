import './App.css';
import ListadoDePeliculas from './views/listadodepeliculas';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListadoDeSeries from './views/listadoSeries';

function App() {
    
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListadoDePeliculas />}>
				</Route>
			</Routes>
			<Routes>
				<Route path="Series" element={<ListadoDeSeries/>}></Route>
			</Routes>
		</BrowserRouter>
	

	);
}

export default App;
