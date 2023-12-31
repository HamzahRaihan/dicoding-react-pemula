/* eslint-disable react/prop-types */
import CardBody from './CardBody';
import CardHeader from './CardHeader';

function Card({ image, category, date, title, content, link }) {
  return (
    <>
      <article>
        <CardHeader image={image} category={category} />
        <CardBody date={date} title={title} content={content} link={link} />
      </article>
    </>
  );
}

export default Card;
