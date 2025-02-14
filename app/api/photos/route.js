import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const photos = await getAllPhotos();

  return NextResponse.json(photos);
};
