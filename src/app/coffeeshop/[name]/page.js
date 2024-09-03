import base from "@/lib/airtable";
import RecordDisplay from "@/components/RecordDisplay";

async function fetchRecordByName(name) {
  try {
    const records = await base("Coffeehouses")
      .select({
        filterByFormula: `{name} = "${name}"`,
      })
      .firstPage();

    return records.length > 0 ? records[0].fields : null;
  } catch (error) {
    console.error("Error fetching record from Airtable:", error);
    return null;
  }
}

export default async function RecordPage({ params }) {
  const { name } = params;
  const record = await fetchRecordByName(name);

  return <RecordDisplay record={record} />;
}
