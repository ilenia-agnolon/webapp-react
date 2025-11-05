// componente ReviewCard
const ReviewCard = ({ reviewProp }) => {
  // destrutturo le proprietà dell'oggetto recensione
  const { name, vote, text } = reviewProp;

  return (
    <div className="review">
      <div className="review-card">
        <p className="review-meta">
          <strong>⭐ {vote}</strong> · <i>by {name}</i>
        </p>
        <p className="review-text">“{text}”</p>
      </div>
      <hr />
    </div>
  );
};

export default ReviewCard;
