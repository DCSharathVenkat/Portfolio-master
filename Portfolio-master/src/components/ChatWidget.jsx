import React, { useState, useRef } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  async function ask(q) {
    setMessages((m) => [...m, { role: "user", content: q }]);
    setLoading(true);
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q }),
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
    setLoading(false);
  }

  return (
    <>
      {/* Pulse animation + hover styles */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 4px 8px rgba(0,0,0,0.10); }
          50% { transform: scale(1.06); box-shadow: 0 8px 16px rgba(0,0,0,0.18); }
          100% { transform: scale(1); box-shadow: 0 4px 8px rgba(0,0,0,0.10); }
        }
        .ask-btn {
          position: fixed; bottom: 20px; right: 20px; z-index: 9999;
          background: #fff; color: #000; border-radius: 24px;
          padding: 10px 14px; border: 1px solid #ccc; cursor: pointer;
          font-weight: 500; transition: all .25s ease;
        }
        .ask-btn:hover { transform: scale(1.08); background: #f0f0f0; }
        .ask-btn.pulsing { animation: pulse 1.6s ease-in-out infinite; }
      `}</style>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`ask-btn ${open ? "" : "pulsing"}`}
      >
        {open ? "Close" : "Ask Me"}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 380,
            maxWidth: "95vw",
            height: 550,
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,.15)",
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #e0e0e0",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 12,
              borderBottom: "1px solid #eee",
              background: "#f9f9f9",
              fontWeight: 600,
              color: "#000",
              fontSize: "15px",
            }}
          >
            Ask about my school, college or projects
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 12,
              fontSize: "15px",
              background: "#fff",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.role === "user" ? "right" : "left",
                  margin: "6px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: 16,
                    background: m.role === "user" ? "#000" : "#f2f2f2",
                    color: m.role === "user" ? "#fff" : "#000",
                    whiteSpace: "pre-wrap",          // <<< keeps bullets/newlines
                    lineHeight: 1.35,
                  }}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <div style={{ opacity: 0.6 }}>typing…</div>}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const v = inputRef.current.value.trim();
              if (!v) return;
              inputRef.current.value = "";
              ask(v);
            }}
            style={{
              display: "flex",
              borderTop: "1px solid #eee",
              background: "#fff",
            }}
          >
            <input
              ref={inputRef}
              placeholder="Ask me about Sharath…"
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                outline: "none",
                background: "#fff",
                color: "#000",
                fontSize: "15px",
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "#000",
                color: "#fff",
                padding: "0 16px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              ASK
            </button>
          </form>
        </div>
      )}
    </>
  );
}
