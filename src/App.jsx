import Calculator from "./components/calculator/Calculator";
import Clock from "./components/clock/Clock";
import Drums from "./components/drums/Drums";
import Stopwatch from "./components/stopwatch/stopwatch";

export default function App() {
  return (
    <>
      <Stopwatch />
      <Clock />
      <Calculator />
      {/* <Drums /> */}
    </>
  )
}
