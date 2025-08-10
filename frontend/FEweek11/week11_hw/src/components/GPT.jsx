import React, { useEffect, useState } from "react";

const GPT = ({ quest }) => {
  const [response, setResponse] = useState("");
  const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

  useEffect(() => {
    if (!quest) return;

    async function query() {
      const res = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-20b:fireworks-ai",
            messages: [{ role: "user", content: quest }],
          }),
        }
      );
      const data = await res.json();
      setResponse(data.choices[0].message.content);
    }

    query();
  }, [quest, HF_TOKEN]);

  return (
    <div>
      <p>{response}</p>
    </div>
  );
};

export default GPT;
