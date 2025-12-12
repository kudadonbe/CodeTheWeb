// fetchRecipients.js

// === Load recipients from a local file (data.json) ===
// Local files are relative to the project directory.
// Works when hosted (e.g., via VS Code Live Server, not from file:// URL).
async function loadRecipientsFromLocalFile() {
  try {
    const res = await fetch('data.json'); // Local relative path
    if (!res.ok) throw new Error('Failed to fetch local data.json');

    const data = await res.json();
    console.log('✅ Local file recipients:', data);
    return data;
  } catch (err) {
    console.error('❌ Local file error:', err.message);
    return [];
  }
}

// === Load recipients from a JSON API server ===
// Useful when working with mock APIs like json-server or real backends.
// Requires CORS if running from different domains.
async function loadRecipientsFromAPI() {
  try {
    const res = await fetch('http://localhost:3000/recipients'); // Example JSON server
    if (!res.ok) throw new Error('Failed to fetch from API');

    const data = await res.json();
    console.log('✅ API recipients:', data);
    return data;
  } catch (err) {
    console.error('❌ API error:', err.message);
    return [];
  }
}

/* =============================
   Key Differences (in comments)
   =============================

1. ✅ Local JSON file:
   - Path is relative (e.g., "data.json")
   - Good for static project files
   - Cannot be loaded with fetch if run from `file://` (needs a local server)

2. ✅ API JSON source:
   - Requires full URL (e.g., http://localhost:3000/recipients)
   - Can be dynamic or live data
   - Needs CORS permission if served from different origin

3. 🟡 Common:
   - Both use `await fetch(...)` and `await res.json()`
   - Always check `res.ok` before processing
   - Use `try/catch` to handle network/file errors gracefully
*/

