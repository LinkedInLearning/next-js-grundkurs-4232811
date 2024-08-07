export async function GET(request) {
  return new Response("Bitte autorisieren!", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='admin'",
    },
  });
}