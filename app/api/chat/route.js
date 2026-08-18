import Anthropic from "@anthropic-ai/sdk";

// This route runs server-side only, so the API key never reaches the browser.
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Bamse, the friendly AI assistant built by NoJuo Corporation. Be helpful, warm, and concise.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "messages array is required" }, { status: 400 });
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    return Response.json({ text });
  } catch (err) {
    console.error("Bamse API error:", err);
    return Response.json(
      { error: "Something went wrong talking to Bamse. Please try again." },
      { status: 500 }
    );
  }
}
