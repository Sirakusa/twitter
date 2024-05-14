import SideBar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/widgets";

export default function Home() {
  return (
    <main className="lg:max-w-7xl grid grid-cols-9 mx-auto max-h-screen  overflow-hidden">
      <SideBar />

      <Feed />

      <Widgets />
    </main>
  );
}
