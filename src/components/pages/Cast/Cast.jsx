import { useEffect, useState } from 'react';
import fetchUsers from '../../../fetchData'
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')
  const { movieId } = useParams()

  
  const getActors = async id => {
    setStatus('pending')
    try {
      const response = await fetchUsers(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`)
      setError('false')
      setActors(response.cast)
      setStatus('resolved')
    } catch (error) {
      setError(error.message)
      setStatus('rejected')
    }
  }
  useEffect(() => {
    getActors(movieId)
  }, [movieId])

  if (status === 'pending') {
    return <p>Loading...</p>
  }
  if (status === 'rejected') {
    return <p>{error}</p>
  }
  if (status === 'resolved') {
    return (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`} alt={actor.name} />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  }

}
