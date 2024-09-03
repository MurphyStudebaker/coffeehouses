import Airtable from "airtable";

// Initialize Airtable with API key and base ID
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export default base;
