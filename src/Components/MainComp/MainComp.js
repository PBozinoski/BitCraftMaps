import React, { useState } from 'react'
import Styles from './MainComp.module.css'
import Card from '../Card/Card'
import Dropdown from '../Dropdown/Dropdown'

const MainComp = () => {
  const data = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];

  const [selectedValue, setSelectedValue] = useState(data[0].value);

  return (
    <div className={Styles.main}>
      <h2 className={Styles.title}>BitCraft Resource and Player Tracker</h2>
      <Dropdown
        items={data}
        value={selectedValue}
        onChange={setSelectedValue}
      />
      <Card />
    </div>
  )
}

export default MainComp