import React from "react";

const GPT = () => {
  const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

  async function query(data) {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  query({
    messages: [
      {
        role: "user",
        content: "What is the capital of France?",
      },
    ],
    model: "openai/gpt-oss-20b:fireworks-ai",
  }).then((response) => {
    console.log(JSON.stringify(response.choices[0].message.content));
  });
  return (
    <div>
      <h2>Model Response:</h2>
    </div>
  );
};

export default GPT;
