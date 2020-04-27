import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import MyD3Component from './MyD3Component'
import * as T from './types/types'
import styles from './styles/styles.module.css'

async function saveData(): Promise<T.IProps> {
  let data: T.IMathScore = {math: {}}
  let resultData: T.IProps = {math: []}
  resultData = await d3.csv('https://raw.githubusercontent.com/foxygen98/13/master/StudentsPerformance.csv').then((dt: d3.DSVRowArray<string>) => {
    dt.forEach((i: d3.DSVRowString) => {
      if (i.Math !== undefined) {
        i.Math = `${Math.floor(+i.Math/2) * 2}`
        if (data.math[i.Math] === undefined) {
          data.math[i.Math] = 0
        }
        data.math[i.Math] += 1
      }
    })
    Object.entries(data.math).forEach(([key, value]) => resultData.math.push({name: key, value: value}))
    return resultData
  })
  return resultData
}

function App() {
  const [data, setData] = useState({math: []} as T.IProps)
  useEffect(() => {
    saveData().then((dt: T.IProps) => setData(dt))
  }, [])
  return (
    <div className={styles.box}>
      <MyD3Component math={data.math}/>
    </div>
  );
}

export default App;
