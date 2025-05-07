import { FormEvent, useState } from "react";

const Generate = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const submitMessage = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/flashcard/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: message }),
        }
      );
      const data = await response.json();
      setMessages((prev) => [...prev, message, data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitMessage}>
        <input
          required
          type="text"
          className="border"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter prompt"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {messages.map((message, id) => (
          <p key={id}>{message}</p>
        ))}
      </div>
    </>
  );
};

export default Generate;
