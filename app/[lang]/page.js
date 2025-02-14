import { getDictionary } from "./dictionaries";

export default async function Home({ params }) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return <div>{dictionary.hello}</div>;
}
