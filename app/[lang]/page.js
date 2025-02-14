import { PhotoList } from "@/components/photo-list";

export default async function Home() {
  const photos = await fetch(`${process.env.BASE_API_URL}/photos`, {
    headers: {},
  }).then((res) => res.json());

  return <PhotoList photos={photos} />;
}
