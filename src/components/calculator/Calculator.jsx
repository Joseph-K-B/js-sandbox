import { useEffect, useState } from "react";
import CalculatorKey from "../controls/CalculatorControls";
import css from './calculator.css'


function Calculator() {
  const [op, setOp] = useState(null);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState('0');

  useEffect(() => {}, [op, next, prev]);

  const CalculatorOperations = {
    "/" : (firstValue, secondValue) => firstValue / secondValue,
    "*" : (firstValue, secondValue) => firstValue * secondValue,
    "+" : (firstValue, secondValue) => firstValue + secondValue,
    "-" : (firstValue, secondValue) => firstValue - secondValue,
    "=" : (firstValue, secondValue) => secondValue,
  };

  const executeOp = () => {
    let val = CalculatorOperations[op] (
      parseFloat(prev),
      parseFloat(next)
    );
    setOp(null);
    setNext(String(val));
    setPrev(null);
  };

  const handleNumber = (num) => {
    setNext(next === '0' ? String(num) : next + num)
  };

  const decimal = () => {
    if(!/\./.test(next)) {
      setNext(next + '.')
    }
  };

  const percent = () => {
    setNext(parseFloat(next) / 100);
    if(prev && next === '') {
      setPrev(parseFloat(prev) / 100);
    }
  };

  const changeNeg = () => {
    setNext(parseFloat(next) * -1);
  }

  const reset = () => {
    setNext('0');
    setPrev(0);
  }

  const handleOp = (value) => {
    if(Number.isInteger(value)) {
      handleNumber(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrev(next);
        setNext('');
      }
      if(op) {
        setOp(value);
      }
      if(prev && op && next) {
        executeOp();
      }
    } else if (value === 'c') {
      reset();
    } else if (value === '\xB1') {
      changeNeg();
    } else if (value === '.') {
      decimal();
    } else if (value === '%') {
      percent();
    }
  }


  return (
    <section>
      <div className={css.result}>
        <p>{next}</p>
      </div>
      <div className={css.keyPad}>
        <div className={css.keyFunction}>
          <CalculatorKey keyValue={'%'} onClick={handleOp} />
          <CalculatorKey keyValue={'\xB1'} onClick={handleOp} />
          <CalculatorKey keyValue={'c'} onClick={handleOp} />
        </div>
        <div className={css.keyOperators}>
          <CalculatorKey keyValue={'+'} onClick={handleOp}/>
          <CalculatorKey keyValue={'-'} onClick={handleOp}/>
          <CalculatorKey keyValue={'*'} onClick={handleOp}/>
          <CalculatorKey keyValue={'/'} onClick={handleOp}/>
          <CalculatorKey keyValue={'='} onClick={handleOp}/>
        </div>
        <div>
          <CalculatorKey keyValue={9} onClick={handleOp} />
          <CalculatorKey keyValue={8} onClick={handleOp} />
          <CalculatorKey keyValue={7} onClick={handleOp} />
          <CalculatorKey keyValue={6} onClick={handleOp} />
          <CalculatorKey keyValue={5} onClick={handleOp} />
          <CalculatorKey keyValue={4} onClick={handleOp} />
          <CalculatorKey keyValue={3} onClick={handleOp} />
          <CalculatorKey keyValue={2} onClick={handleOp} />
          <CalculatorKey keyValue={1} onClick={handleOp} />
          <CalculatorKey
            className={css.decimal} 
            keyValue={'.'} 
            onClick={handleOp} 
          />
          <CalculatorKey
            className={css.cero} 
            keyValue={0} 
            onClick={handleOp} 
          />
        </div>
      </div>
    </section>
  )
}

export default Calculator