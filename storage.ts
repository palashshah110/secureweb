export async function checkUrl(url: string): Promise<boolean> {
  const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyAhVO9E_jmPaqLwW3UyHJqjdyEHJ6tf2aY`, {
    method: "POST",
    body: JSON.stringify({
      client: { clientId: "student", clientVersion: "1.0" },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url }]
      }
    })
  });
  const data = await response.json();
  return data.matches && data.matches.length > 0;
}

export function saveUrl(url: string) {
  chrome.storage.local.get({ history: [] }, (result) => {
    const newHistory = [...result.history, { url, date: new Date().toISOString() }];
    chrome.storage.local.set({ history: newHistory });
  });
}

export function getHistory(callback: (history: { url: string; date: string }[]) => void) {
  chrome.storage.local.get({ history: [] }, (result) => {callback(result.history);console.log(result.history)});
}

export function clearHistory(callback: () => void) {
  chrome.storage.local.set({ history: [] }, callback);
}
