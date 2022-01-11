export default function Paginacion(props) {
   
// recorre el total de las peliculas y segun el total agrega las paginas que se necesiten
    const getpaginas = () => {
        let resultados = []
        for (let i = 0; i < props.total; i++) {
            let pagina = i + 1
            resultados.push(
            <a onClick={() => props.onChange(pagina)} className={props.pagina === pagina ? "active" : ""} >{pagina}</a>)
        }

        return resultados
    }
    return (
        // devuelve los divs con su css, y la funcion de getpaginas(donde devuelve la cantidad de paginas y su clase activa)
            <div className="topbar-filter">
                <div className="pagination2">
                    <span>Page {props.pagina} of {props.total}:</span>
                    {getpaginas()}
                </div>
            </div>
    
    )
}