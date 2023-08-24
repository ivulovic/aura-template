import { useEffect } from "react";
import "./style.css";

export default function MyButton(): JSX.Element {
  useEffect(() => {}, []);
  return <button onClick={(): void => console.log("Hi UI.")}>Live Button Update</button>;
}
