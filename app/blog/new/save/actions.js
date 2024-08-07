'use server';

import { redirect } from "next/navigation";
import { dbConnection } from "../../db";

export async function saveAction(formData) {
  const db = await dbConnection();

  await db.Article.create({
    title: formData.get('title'),
    content: formData.get('content'),
    image: formData.get('image')
  })

  redirect('/blog');
}