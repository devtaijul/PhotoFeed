import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/image-data";

export const GET = async (req, { params }) => {

  const id = params?.photo_id;

  const photo = await getPhotoById({ id });

  return NextResponse.json(photo);
};
