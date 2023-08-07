import { useState, useEffect } from "react";
import fetchData from '../../fetchData'
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')
  const { movieId } = useParams()

  const getReviews = async id => {
    setStatus('pending')
    try {
      const response = await fetchData(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`)
      setError('false')
      setReviews(response.results)
      setStatus('resolved')
    } catch (error) {
      setError(error.message)
      setStatus('rejected')
    }
  }

  useEffect(() => {
    getReviews(movieId)
  }, [movieId])

  if (status === 'pending') {
    return <p>Loading...</p>
  }
  if (status === 'rejected') {
    return <p>{error}</p>
  }
  if (status === 'resolved') {
    if (reviews.length === 0) {
      return <p>No reviews available</p>
    }
    return (
      <ul className={css.reviewList}>
        {reviews.map(review => (
          <li className={css.review} key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    )
  }

}
