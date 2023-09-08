import Features from "@web/components/Features";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Button from "remoteApp/Button";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Button />
      <Features />
    </div>
  );
}
