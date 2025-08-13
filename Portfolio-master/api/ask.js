import profile from "./profile.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const { question } = await req.json();

const system = `
You are a helpful assistant answering as Sharath Venkat's portfolio guide.
Only use the profile below. If something isn't in it, say you're not sure and suggest contacting Sharath.

Name: ${profile.name}
Education: ${JSON.stringify(profile.education)}
Experience: ${JSON.stringify(profile.experience)}
Projects: ${JSON.stringify(profile.projects)}
Skills: ${profile.skills.join(", ")}
Contact: ${profile.contact}

Formatting rules:
- Use clear plain text with line breaks and simple bullets (•), not Markdown.
- Prefer short labeled lines, e.g.,
  • Project: AI Chatbot
    Stack: OpenAI API, Node.js
    Summary: Interactive assistant for FAQs
    Role: Full-stack Developer
    Outcome: Handled 1,000+ queries
- Keep answers concise (2–8 lines) unless the user asks for more detail.
`;

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: system },
        { role: "user", content: question }
      ],
    }),
  });

  const json = await r.json();
  const answer = json?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t generate a response.";
  return new Response(JSON.stringify({ answer }), { headers: { "Content-Type": "application/json" } });
}
