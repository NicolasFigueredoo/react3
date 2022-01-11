import '../App.css';
import Pelicula from './pelicula';
import Paginacion from './paginacion';
import Listado from './pageWrapper';
import { useEffect, useState } from 'react';

function ListadoDePeliculas() {
	// pagina actual es la pagina que se inicia cuando carga la pagina
	// setPaginaActual 2da variable para cambiar la primer pagina
	//useState(1) la variable pagina actual comenzara con el valoor 1
    const [paginaActual, setPaginaActual] = useState(1)
	//total de peliculas que quiero ver por paginas
    const TOTALPELICULAS = 4
	//peliculas se guarda en el array
	//set peliculas va guardando cada json que viene del servidor renderizandolo
	const [peliculas, setPeliculas] = useState([]);
	//use effect renderiza la pagina cuando entra, es decir carga el json ni bien se carga la pagina
	useEffect(()=>{
    buscarPeliculas()
	}, [])

	 // se busca el json desde un servidor, luego con la variable setPeliculas lo vamos guardando
	const buscarPeliculas = async() =>{
		let url = "https://lucasmoy.dev/data/react/peliculas.json"
		fetch(url).then(res => res.json()).then(data =>{
		  
			let json = data
			setPeliculas(json)
			})
	
	}
    // esta funcion agarra la cantidad de peliculas que hay y las divide por la cantidad de peliculas
	// es decir si tengo 10 peliculas, y quiero mostrar 4 peliculas por pagina, van hacer 3 paginas 2 de 4 y una de 2
	//con un total de 3 paginas
	const getTotalPaginas = () =>{
		let cantidadPeliculas = peliculas.length
		return Math.ceil(cantidadPeliculas / TOTALPELICULAS) //math ceil redondea para arriba

	}
    // aca creamos una variable, del array de peliculas, con slice decimos de donde queremos agarrar las peliiculas
	let peliculaPorPagina = peliculas.slice((paginaActual - 1 ) * TOTALPELICULAS, paginaActual * TOTALPELICULAS)
	return (
		//listado es la funcion que llamamos desde Pagewrapper es el html inicial, lo que agregemos adentro se 
		// agrega como un hijo
		<Listado title="Movies">
			{
				//buscamos las peliculas por map y nos devuelve el slice, luego llamamos la etiqueta creada
				//Pelicula le pasamos los datos del json y esa pelicula luego pasa al listado donde se agrega a la web 
				peliculaPorPagina.map(pelicula =>
					<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} img={pelicula.img} 
					director={pelicula.director}
					actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}>
					{pelicula.descripcion}
					</Pelicula>
				)
			}
			
		
			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) =>{ 
				//le pasamos la pagina actual en la que estamos
				//el total de las paginas conseguidas,
				//y una funcion onChange donde le pasamos la pagina donde estamos
				setPaginaActual(pagina)
			}} />
			
		</Listado>

	

	);
}

export default ListadoDePeliculas;
