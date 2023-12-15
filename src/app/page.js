import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar/Navbar";

export default function Home() {
  return (
    <div className=" h-screen w-full border-2 border-dashed border-teal-600">
      <Navbar />
    </div>
  );
}
