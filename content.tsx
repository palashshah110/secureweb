import React from "react";
import { render } from "react-dom";

const PhishingAlert = () => (
  <div style={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "red", color: "white", zIndex: 9999, textAlign: "center" }}>
    This site might be a phishing attempt. Proceed with caution.
  </div>
);

const injectAlert = () => {
  render(<PhishingAlert />, document.body);
};

chrome.runtime.onMessage.addListener((message) => {
  if (message === "showAlert") {
    injectAlert(); 
  }
});
