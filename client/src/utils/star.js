import React from 'react';

function StarRating({ rating }) {
  // Create an array to represent the stars
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else if (i - rating < 1) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star">★</span>);
    }
  }
const numOfReviews = 34;
  return (
    <div className="rating-container">
      {stars}
      <span className="num-of-reviews">({numOfReviews})</span>
    </div>
  );
}

const styles = `
  .rating-container {
    display: flex;
    align-items: center;
  }
  .star {
    font-size: 20px;
    color: #d3d3d3; /* Light gray for empty stars */
  }
  .star.filled {
    color: #ffb400; /* Gold for filled stars */
  }
  .star.half {
    background: linear-gradient(90deg, #ffb400 50%, #d3d3d3 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .num-of-reviews {
    margin-left: 5px;
    font-size: 14px;
    color: #666;
  }
`;

function App() {
  // Simulated product data
  const product = {
    ratings: 4.6,
    numOfReviews: 120
  };

  return (
    <div>
      <StarRating rating={product.ratings} numOfReviews={product.numOfReviews} />
      <style>{styles}</style>
    </div>
  );
}

export default App;
