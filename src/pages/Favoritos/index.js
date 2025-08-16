import { useEffect, useState } from 'react';
import './favoritos.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Favoritos() {
    const [filmes,setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@devreels");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id) !== id
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@devreels", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span className='favspan'>Você nao tem nenhum filme salvo 😔</span>}

            <div className='carrossel'>
                {filmes.map((filme) => (
                    <article key={filme.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                            alt={filme.title}
                        />
                        <div className="overlay">
                            <h3>{filme.title}</h3>
                            <div className="links">
                                <button className='btnlinks'>
                                    <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Assistir</a>
                                </button>
                                <button className='btnlinks' onClick={() => excluirFilme(filme.id)}>Excluir</button>
                                <Link className='btnlinks favlink' to={`/detalhes/${filme.id}`}>Detalhes</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    )
}

export default Favoritos;