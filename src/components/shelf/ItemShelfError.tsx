export default function ItemShelfError({ error }: { error: Error }) {
  return (
    <section>
      <h2 className="pb-2 font-mono font-semibold uppercase opacity-80">Något gick snett</h2>
      <div className="rounded-md bg-white p-4 pb-6 shadow-sm dark:bg-gray-900">
        <h2 className="text-red-500 pb-2">Could not fetch the correct data...</h2>
        <p className="text-sm opacity-75">{JSON.stringify(error.message)}</p>
      </div>
    </section>
  );
}
