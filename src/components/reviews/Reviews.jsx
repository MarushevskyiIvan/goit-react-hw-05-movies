const { FetchReviews } = require('components/fetch/FetchAPI');
const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { results } = await FetchReviews(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {}
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <div key={id}>
                <h3>Author {author}</h3>
                <p>{content}</p>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
