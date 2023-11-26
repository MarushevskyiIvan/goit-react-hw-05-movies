const { FetchReviews } = require('components/fetch/FetchAPI');
const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const result = await FetchReviews(params.movieId);
        setReviews(result);
      } catch (error) {}
    }
    fetchReviews();
  }, [params.movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ author, id, content }) => {
          return (
            <div key={id}>
              <h3>Author {author}</h3>
              <p>{content}</p>
            </div>
          );
        })}
    </ul>
  );
};

export default Reviews;
