import { useState } from "react";
import { sayHello } from "../unit/unit";

export const Greeting = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <div>
      Greeting Compnent:
      <p data-testid="greeting">{showGreeting && sayHello()}</p>
      <button
        data-testid="show-greeting-button"
        onClick={() => setShowGreeting(true)}
      >
        Show Greeting
      </button>
    </div>
  );
};
