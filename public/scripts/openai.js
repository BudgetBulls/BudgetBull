const apiKey = "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";

let conversation = [];
export const getBotResponse = async (userMessage) => {
    conversation.push({
        role: "user",
        content: userMessage,
      });
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: conversation,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
};