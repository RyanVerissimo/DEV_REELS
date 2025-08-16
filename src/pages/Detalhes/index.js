import { useNavigate, useParams } from 'react-router-dom';
import './detalhes.css'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { salvarFilme } from '../../Utils/salvarFilme';

function Detalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"d60cdfbe049e7f284b758fff148c44f3",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilmes()


        return () => {
            console.log("Componente foi desmontado")
        }
    },[navigate, id])

    if(loading) {
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }





    return(
        <div className='filme-info'>
            <h2>{filme.title}</h2>
            <div className='info-details'>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
                <div className='filme-details'>
                    <div className='details'>
                        <p>
                            <span>Título:</span>{' '}
                            {filme.title || 'Não informado'}
                        </p>

                        <p>
                            <span>Nota:</span>{' '}
                            {filme.vote_average !== undefined && filme.vote_average !== null
                                ? filme.vote_average.toFixed(1)
                                : 'Não informada'}
                        </p>

                        <p>
                            <span>Gêneros:</span>{' '}
                            {filme.genres && filme.genres.length > 0
                                ? filme.genres.map((genre, index) => (
                                    <span key={genre.id}>
                                    {genre.name}
                                    {index < filme.genres.length - 1 && ', '}
                                    </span>
                                ))
                                : 'Não informado'}
                        </p>

                        <p>
                            <span>Sinopse:</span>{' '}
                            {filme.overview || 'Não disponível'}
                        </p>

                        <p>
                            <span>Duração:</span>{' '}
                            {filme.runtime ? `${filme.runtime} min` : 'Não informada'}
                        </p>

                        <p>
                            <span>Data de Lançamento:</span>{' '}
                            {filme.release_date
                                ? new Date(filme.release_date).toLocaleDateString('pt-BR')
                                : 'Não informada'}
                        </p>

                    </div>
                    <div className='buttons-details'>
                        <button className='info-btn'>
                            <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>🟣 Assistir</a>
                        </button>
                        <button className='info-btn desejo' onClick={() => salvarFilme(filme)}>➕ Lista de Desejo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;