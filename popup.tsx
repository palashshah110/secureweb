import React from "react";

export default function IndexPopup() {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "300px",
        alignItems: "center",
        textAlign: "center"
      }}>
      <h1 style={{ color: "#317A8A" }}>Welcome</h1>
    </div>
        </>
  )
}
// popup.tsx
// import React, { useState, useEffect } from "react";
// import { getHistory, clearHistory } from "./storage";

// const IndexPopup = () => {
//   const [history, setHistory] = useState<{ url: string, date: string }[]>([]);

//   useEffect(() => {
//     getHistory((result) => setHistory(result));
//   }, []);

//   const handleClearHistory = () => {
//     clearHistory(() => setHistory([]));
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         padding: 16,
//         width: "300px",
//         alignItems: "center",
//         textAlign: "center"
//       }}>
//     {/* // <div style={{ padding: "10px", width: "300px" }}> */}
//       <h2>Browsing History</h2>
//       {history.length === 0 ? (
//         <p>No history found.</p>
//       ) : (
//         history.map((entry, index) => (
//           <div key={index} style={{ marginBottom: "10px" }}>
//             <a href={entry.url} target="_blank" rel="noopener noreferrer">
//               {entry.url}
//             </a>
//             <br />
//             <small>{new Date(entry.date).toLocaleString()}</small>
//           </div>
//         ))
//       )}
//       <button onClick={handleClearHistory} style={{ marginTop: "10px", padding: "5px 10px" }}>
//         Clear History
//       </button>
//     </div>
//   );
// };

// export default IndexPopup;