"use client";
import { useState } from "react";
import styles from "./page.module.css";
import BenchMarkMenu from "@/components/BenchMarkMenu";
import OneMile from "@/components/Benchmarks/OneMile";
import TwelveMinute from "@/components/Benchmarks/TwelveMinute";
import CatchMeIfYouCan from "@/components/Benchmarks/CatchMeIfYouCan";
import Row2000Meter from "@/components/Benchmarks/Row2000Meter";

export default function Home() {
  const [benchmark, setBenchmark] = useState("");

  const renderSwitch = (param) => {
    switch (param) {
      case "1 Mile":
        return <OneMile />;
      case "12 minute run for distance":
        return <TwelveMinute />;
      case "Catch Me If You Can":
        return <CatchMeIfYouCan />;
      case "2000 meter row":
        return <Row2000Meter />;
      default:
        return <p>Select a benchmark</p>;
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Benchmark Calculator</h1>
        <BenchMarkMenu onClick={setBenchmark} />
        {renderSwitch(benchmark)}
      </main>
    </div>
  );
}
