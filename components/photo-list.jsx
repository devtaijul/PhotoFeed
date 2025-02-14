import { PhotoCard } from "./photo-card";

export const PhotoList = ({ photos = [] }) => {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard photo={photo} key={photo.id} />
      ))}
    </div>
  );
};
