// airtableService.js
import { API_KEY, BASE_ID, TABLE_NAME, TABLE_ID } from './config.js';

export async function listRecords() {
  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  return response.json();
}

export async function createRecord(fields) {
  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fields })
  });
  return response.json();
}
