import { PAGES } from "@/config/pages.config";
import Image from "next/image";
import Link from "next/link";

export const PhotoCard = ({ photo }) => {
  return (
    <Link href={PAGES.PHOTOS.PHOTO({ photo_id: photo.id })} className="group">
      <Image src={photo.url} alt={photo.title} width={700} height={700} />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
};
