import { Access, Search, ThreeRecentStudyGroups } from "./(components)/cards";

export default function Dashboard() {
  return (
    <>
      <main className="flex flex-col items-center gap-5">
        <Search />
        <Access />
        <ThreeRecentStudyGroups />
      </main>
    </>
  );
}
