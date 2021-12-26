import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [clock, setClock] = useState(null)

 const refresh = () => {
   setDate(new Date());
 }

 
 useEffect(() => {
   const timer = setInterval(refresh, 1000);
   const clear = () => {clearInterval(timer)}   
    }, [])

  return (
    <div>
      <h2>
        {date.toLocaleTimeString()}
      </h2>
    </div>
  )
}

export default Clock;