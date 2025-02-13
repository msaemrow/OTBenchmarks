"use client";
import { useState } from "react";
import styles from "./page.module.css";
import BenchMarkMenu from "@/components/BenchMarkMenu";
import OneMile from "@/components/Benchmarks/OneMile";
import TwelveMinute from "@/components/Benchmarks/TwelveMinute";
import CatchMeIfYouCan from "@/components/Benchmarks/CatchMeIfYouCan";
import Row2000Meter from "@/components/Benchmarks/Row2000Meter";
import Row500Meter from "@/components/Benchmarks/Row500Meter";
import OrangeEverest from "@/components/Benchmarks/OrangeEverest";

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
      case "500 meter row":
        return <Row500Meter />;
      case "Orange Everest":
        return <OrangeEverest />;
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
