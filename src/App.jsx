import logo from "./logo.svg";
import { Router, Routes, Route, Link } from "solid-app-router";
import styles from "./App.module.css";
import { lazy } from "solid-js";
import Counter from "./components/Counter";
const Schedule = lazy(() => import("./components/Schedule"));
const Parent = lazy(() => import("./views/Parent"));
const NestedReactivity = lazy(() => import("./views/NestedReactivity"));
const Resource = lazy(() => import("./views/Resourse"));
function App() {
  return (
    <>
      <Router>
        <div class={styles.app}>
          <Link href="counter">Counter Page</Link> |
          <Link href="schedule">Schedule Page</Link>|
          <Link href="parent">Parent Page</Link>|
          <Link href="todos">NestedReactivity Page</Link>|
          <Link href="resource">Resource Page</Link>|

          <Routes>
            <Route path="counter" element={<Counter />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="parent" element={<Parent />} />
            <Route path="todos" element={<NestedReactivity />} />
            <Route path="resource" element={<Resource />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
