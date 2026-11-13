import { useRef, useState } from "react";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!name || !email) return;
    console.log(name, email);
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          onKeyDown={handleKeyDown}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          onKeyDown={handleKeyDown}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
