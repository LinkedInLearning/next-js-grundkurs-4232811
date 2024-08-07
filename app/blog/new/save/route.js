import { NextResponse } from "next/server";
import { dbConnection } from "../../db";

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');

  const db = await dbConnection();

  await db.Article.create({
    title,
    content,
    image
  })

  return NextResponse.redirect(
    new URL('/blog', request.url)
  )
}