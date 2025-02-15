import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export const PhotoDetails = async ({ photo_id, lang }) => {
  const photo = await fetch(`${process.env.BASE_API_URL}/photos/${photo_id}`, {
    headers: {},
  }).then((res) => res.json());
  const dictionaries = await getDictionary(lang);
  console.log(dictionaries, photo);

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      {/* main photo */}
      <div className="col-span-12 border lg:col-span-8 rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={photo.url}
          alt={photo.title}
          width={700}
          height={700}
        />
      </div>
      {/* main photo ends */}
      {/* details card */}
      <div className="col-span-12 p-6 border rounded-xl lg:col-span-4 ">
        <h2 className="mb-2 text-lg font-bold lg:text-2xl">{photo.title}</h2>
        <div className="mb-6 text-xs lg:text-sm text-black/60">
          {photo.tags.map((tag) => `#${tag}, `)}
        </div>
        {/* info rows */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictionaries.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>
          {/* item ends */}
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictionaries.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>
          {/* item ends */}
          {/* item start */}
          <div className="flex justify-between">
            <span>{dictionaries.uploadedOn}</span>
            <span className="font-bold">{photo.uploaded}</span>
          </div>
          {/* item ends */}
        </div>
        {/* info rows ends */}
        {/* author info */}
        <div className="mt-6">
          {/* author header */}
          <div className="flex items-center justify-between mb-3">
            {/*  */}
            <div className="flex items-center gap-3">
              <Image
                className="border rounded-full size-12 lg:size-14"
                src={photo.author.avatar}
                alt="avatar"
                width={200}
                height={200}
              />
              <div className="spacy-y-3">
                <h6 className="font-bold lg:text-lg">{photo.author.name}</h6>
                <p className="text-xs text-black/60 lg:text-sm">
                  {photo.author.followers} Followers
                </p>
              </div>
            </div>
            {/* action */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                className="w-5 h-5"
                width={30}
                height={30}
                alt="foolow"
              />
              {dictionaries.follow}
            </button>
          </div>
          {/* author bio */}
          <p className="text-xs lg:text-sm text-black/60">{photo.author.bio}</p>
        </div>
        {/* author info ends */}
        {/* actions */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={30}
                height={30}
                src="/heart.svg"
                alt="heart"
                className="w-5 h-5"
              />
              {photo.likes}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={30}
                height={30}
                src="/save.svg"
                alt="save"
                className="w-5 h-5"
              />
              {dictionaries.save}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={30}
                height={30}
                src="/share.svg"
                alt="share"
                className="w-5 h-5"
              />
              {dictionaries.share}
            </button>
          </div>
        </div>
      </div>
      {/* details card ends */}
    </div>
  );
};
