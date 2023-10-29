/* eslint-disable react/prop-types */
function CardHeader({ image, category }) {
  return (
    <>
      <header>
        <h4>{category}</h4>
        <img src={image} alt="image" />
      </header>
    </>
  );
}

export default CardHeader;
