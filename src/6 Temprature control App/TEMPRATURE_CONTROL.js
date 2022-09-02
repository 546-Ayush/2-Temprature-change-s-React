import React, { useState } from "react";
import style from './App.module.css'
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";

function TEMPRATURE_CONTROL() {
  const [count, setCount] = useState(0);

  function handleOnIncre() {
    setCount(count + 1);
  }
  function handleOnDecre() {
    setCount(count - 1);
  }

  let col = ''
  if (count > 45) { col = '#ff0000' }
  else if (count > 35) { col = '#ff1c1c'; }
  else if (count > 25) { col = '#ff510d' }
  else if (count > 10) { col = '#ff6161' }
  else if (count > 0) { col = '#e49391' }
  else if (count < 0) { col = '#3de8ff' }
  else if (count < -10) { col = '#25bad9' }
  else if (count < -20) { col = '#148eb0' }
  else if (count < -30) { col = '#086586' }
  else if (count < -40) { col = '#003f5c' }

  return (
    <>
      <div className={style.parent}>
        <div className={style.card} style={{ backgroundColor: col }}>

          <p className={style.display}>{count} °C</p>

          <div className={style.buttons}>
            <button onClick={handleOnDecre}>
              <BsFillArrowDownSquareFill className={style.iconbtn} />
            </button>
            <button onClick={handleOnIncre}>
              <BsFillArrowUpSquareFill className={style.iconbtn} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TEMPRATURE_CONTROL;