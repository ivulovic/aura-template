import { createPortal } from "react-dom";
import lazyLoad from "./lazyLoad";
import useInjectComponents from "./useInjectComponents";

function App() {
  const components = useInjectComponents({
    Component: lazyLoad(() => import("./lib/Button/MyButton")),
  });
  return <>{components.map(({ Component, props, htmlElement }) => createPortal(<Component {...props} />, htmlElement))}</>;
}

export default App;
