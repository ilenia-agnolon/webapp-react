// componente ReviewCard
const ReviewCard = ({ reviewProp }) => {
  // destrutturo le proprietà dell'oggetto recensione
  const { name, vote, text } = reviewProp;

  return (
    <div>
      <div className="review-card">
        <p className="review-meta">
          <strong>⭐ {vote}</strong> · <i>by {name}</i>
        </p>
        <p className="review-text">“{text}”</p>
      </div>
    </div>
  );
};

export default ReviewCard;
