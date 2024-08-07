export default function ImageCardDetails({ image }) {
  return (
    <div className="image-card-details">
      <img src={image.src} alt={image.alt} />
      <p>{image.description}</p>
    </div>
  );
}
