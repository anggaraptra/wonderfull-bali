export default function ImageCardButton({ image, title, description, link }) {
  return (
    <div className="image-card-button">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Learn more</a>
    </div>
  );
}
