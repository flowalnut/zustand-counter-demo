import React from 'react'
import CounterStore from "../stores/CounterStore";

const CountBox = () => {
    const {count} = CounterStore();
  return (
    <h2 className="fs_40 fw_bl">CountBox:{count}</h2>
  )
}

export default CountBox
