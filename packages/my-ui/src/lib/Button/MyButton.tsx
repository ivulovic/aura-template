import { useEffect } from "react";
import "./style.css";

export default function MyButton(): JSX.Element {
  useEffect(() => {}, []);
  return <button onClick={(e) => console.log("hi2")}>Live Button Update</button>;
}
