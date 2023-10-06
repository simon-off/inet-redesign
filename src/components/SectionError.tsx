export default function SectionError({ error }: { error: Error }) {
  return (
    <section className="px-4">
      <h2 className="pb-2 font-mono font-semibold uppercase opacity-80">Något gick snett</h2>
      <div className="rounded-md border border-gray-300 bg-white p-4 pb-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-red-500 pb-2">Could not fetch the correct data...</h2>
        <p className="text-sm opacity-75">{JSON.stringify(error.message)}</p>
      </div>
    </section>
  );
}
