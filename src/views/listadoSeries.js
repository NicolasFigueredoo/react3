import Serie from "./serie";
import Listado from "./pageWrapper";
import '../App.css';
import { useEffect, useState } from 'react';
import Paginacion from "./paginacion";

const ListadoDeSeries = () =>{
	const [series, setSeries] = useState([]);
	const [paginaActual, setPaginaActual] = useState(1)
	const TOTALSERIES = 6

    useEffect(()=>{
        buscarPeliculas()
        }, [])
    
    const buscarPeliculas = async() =>{
		let url = "https://lucasmoy.dev/data/react/peliculas.json"
		fetch(url).then(res => res.json()).then(data =>{
		  
			let json = data
			setSeries(json)
			})
	
	}

    const getTotalPaginas = () =>{
		let cantidadSeries = series.length
		return Math.ceil(cantidadSeries / TOTALSERIES) //math ceil redondea para arriba

	}
    // aca creamos una variable, del array de peliculas, con slice decimos de donde queremos agarrar las peliiculas
	let SeriesPorPagina = series.slice((paginaActual - 1 ) * TOTALSERIES, paginaActual * TOTALSERIES)
    return(

        <Listado title="Series">
            { 
             SeriesPorPagina.map(serie =>
					<Serie titulo={serie.titulo} calificacion={serie.calificacion} img={serie.img} 
					director={serie.director}
					actores={serie.actores} fecha={serie.fecha} duracion={serie.duracion}>
					{serie.descripcion}
                    
					</Serie>
				)
            }

			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
				setPaginaActual(pagina)
			}} />
        </Listado>
    )
}
export default ListadoDeSeries;





