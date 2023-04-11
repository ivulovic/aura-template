import { useEffect, useState } from "react";
import CryptoTable from "./CryptoTable";
import "./style.css";
export default function Home(): JSX.Element {
  const [symbols, setSymbols] = useState();
  useEffect(() => {
    fetch("/api/symbols")
      .then((res) => res.json())
      .then((res) => setSymbols(res.slice(0, 5)));
  }, []);
  return (
    <div className="home">
      <CryptoTable symbols={symbols} />
      {/* <CryptoTable symbols={symbols} /> */}
    </div>
  );
}
