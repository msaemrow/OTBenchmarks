"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import BenchMarkMenu from "@/components/BenchMarkMenu";
import OneMile from "@/components/Benchmarks/OneMile";
import TwelveMinute from "@/components/Benchmarks/TwelveMinute";
import CatchMeIfYouCan from "@/components/Benchmarks/CatchMeIfYouCan";
import Row2000Meter from "@/components/Benchmarks/Row2000Meter";
import Row500Meter from "@/components/Benchmarks/Row500Meter";
import OrangeEverest from "@/components/Benchmarks/OrangeEverest";
import Row200Meter from "@/components/Benchmarks/Row200Meter";

export default function Home() {
  const [benchmark, setBenchmark] = useState("");
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Load saved theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

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
      case "200 meter row":
        return <Row200Meter />;
      case "Orange Everest":
        return <OrangeEverest />;
      default:
        return <h2>Select a benchmark from the above menu</h2>;
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>OTF Benchmark Calculator</h1>
        <button className={styles.themeButton} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <BenchMarkMenu onClick={setBenchmark} />
        <div className={styles.benchmarkContainer}>
          {renderSwitch(benchmark)}
        </div>
      </main>
    </div>
  );
}
