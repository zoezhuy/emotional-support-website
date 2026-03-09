import { Lock } from "lucide-react";

export function Disclaimer() {
  return (
    <footer className="disclaimer">
      <p>
        <Lock size={14} /> This tool is for emotional support only and is not a substitute for
        professional care.
      </p>
    </footer>
  );
}
