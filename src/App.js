import './App.reset.css';
import './App.root.css';
import './App.css';
import CountBox from "./components/CountBox";
import CounterStore from "./stores/CounterStore";

function App() {
 // const [count, setCount] = useState(0);
  const {count,increase,increaseBy,increaseBy2,increaseBy3,decrease,decreaseBy,decreaseBy2,decreaseBy3} = CounterStore();
  return (
    <div className="counter_wrap">
      <div className="ch_inner">
        <div className="count_wrap">
          <li><h1 className="fs_50 fw_bl">count:{count}</h1></li>
          <li><CountBox /></li>
        </div>
        <div className="btn_wrap">
          <div className="btn">
            <button onClick = {increase}>+1</button>
            <button onClick = {() => increaseBy(10)}>+10</button>
            <button onClick = {() => increaseBy2(20)}>+20</button>
            <button onClick = {() => increaseBy3(30)}>+30</button>
          </div>
          <div className="btn">
            <button onClick = {decrease}>-1</button>
            <button onClick = {() => decreaseBy(10)}>-10</button>
            <button onClick = {() => decreaseBy2(20)}>-20</button>
            <button onClick = {() => decreaseBy3(30)}>-30</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
