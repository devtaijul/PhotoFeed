import { PhotoDetails } from "@/components/photo-details";

export default async function Page({ params: { photo_id, lang } }) {
  return <PhotoDetails photo_id={photo_id} lang={lang} />;
}
