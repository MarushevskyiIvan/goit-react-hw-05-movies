import { FetchReviews } from 'fetch/FetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { results } = await FetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        toast.error('sorry movies not found');
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h3>Author {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movies </p>
      )}
      <Toaster />
    </>
  );
};

export default Reviews;
