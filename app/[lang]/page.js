import { PhotoList } from "@/components/photo-list";
import { ENV } from "@/config/env.config";

export default async function Home() {
  const photos = await fetch(`${ENV.BASE_API_URL}/photos`, {
    headers: {},
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });

  return <PhotoList photos={photos} />;
}
