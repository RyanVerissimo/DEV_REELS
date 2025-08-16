import { useEffect, useState } from 'react';
import './home.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { salvarFilme } from '../../Utils/salvarFilme';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "d60cdfbe049e7f284b758fff148c44f3",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }
        loadFilmes();
    }, []);

    if(loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <span>ÚLTIMOS LANÇAMENTOS</span>

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
                                <button className='btnlink'>
                                    <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Assistir</a>
                                </button>
                                <button className='btnlink' onClick={() => salvarFilme(filme)}>Adicionar</button>
                                <Link className='btnlink' to={`/detalhes/${filme.id}`}>Detalhes</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home;
