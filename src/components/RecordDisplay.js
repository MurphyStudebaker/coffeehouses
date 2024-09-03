export default function RecordDisplay({ record }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        {record ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Record Details</h1>
            <ul className="space-y-2">
              {Object.entries(record).map(([key, value]) => (
                <li key={key} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <strong className="block text-sm font-medium text-gray-700">
                    {key}:
                  </strong>
                  <span className="block mt-1 text-gray-900">
                    {JSON.stringify(value)}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-red-500">No record found.</p>
        )}
      </div>
    </div>
  );
}
