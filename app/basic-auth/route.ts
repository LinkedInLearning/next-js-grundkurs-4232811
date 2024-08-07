export async function GET(request: Request) {
  return new Response("User und Passwort angeben!", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='privat'",
    },
  });
}
