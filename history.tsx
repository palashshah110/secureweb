import React, { useState, useEffect } from "react";
import { getHistory, clearHistory } from "./storage";

const History = () => {
  const [history, setHistory] = useState<{ url: string, date: string }[]>([]);

  useEffect(() => {
    getHistory(setHistory);
  }, []);

  const handleClearHistory = () => {
    clearHistory(() => setHistory([]));
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Browsing History</h1>
      {history.length === 0 && <p>No history found.</p>}
      {history.map((entry, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.url}</a>
          <br />
          <small>{new Date(entry.date).toLocaleString()}</small>
        </div>
      ))}
      <button onClick={handleClearHistory} style={{ marginTop: "10px" }}>Clear History</button>
    </div>
  );
};

export default History;
