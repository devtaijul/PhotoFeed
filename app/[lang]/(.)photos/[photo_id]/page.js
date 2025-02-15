import { Modal } from "@/components/modal";
import { PhotoDetails } from "@/components/photo-details";

export default function page({ params: { lang, photo_id } }) {
  return (
    <Modal>
      <PhotoDetails lang={lang} photo_id={photo_id} />
    </Modal>
  );
}
