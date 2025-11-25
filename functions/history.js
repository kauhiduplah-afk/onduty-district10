export async function onRequestGet(context) {
  const { env } = context;
  const data = await env.HISTORY_DB.get("history", "json");
  return Response.json(data || []);
}

export async function onRequestPost(context) {
  const { env, request } = context;
  const body = await request.json();
  await env.HISTORY_DB.put("history", JSON.stringify(body));
  return new Response("OK", { status: 200 });
}
