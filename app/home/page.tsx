import MovieVedio from "../components/MovieVideo";
import { NavBar } from "../components/NavBar";
import RecentlyAdded from "../components/RecentlyAdded";
export default function HomePage() {
  return (
    <>
      {" "}
      <MovieVedio />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <RecentlyAdded />{" "}
    </>
  );
}
