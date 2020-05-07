import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as T from './types/types'
import styles from './styles/styles.module.css'

const MyD3Components = (props: T.IProps) => {
    const ref = useRef(null)
    const width = 1000
    const height = 500

    const margin: T.IMargin = { top: 100, right: 0, bottom: 20, left: 0 }


    useEffect(() => {
        if (props.math && ref.current) {

            const x: d3.ScaleBand<string> = d3.scaleBand()
                .domain(props.math.map((d: T.IScore) => d.name))
                .range([margin.left, width - margin.right])
                .padding(0.1)

            const y: d3.ScaleLinear<number, number> = d3.scaleLinear()
                .domain([0, d3.max(props.math, (d: T.IScore) => d.value) as number]).nice()
                .range([height - margin.bottom, margin.top])

            const xAxis = (g: d3.Selection<any, unknown, null, undefined>) => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickSizeOuter(0))

            const yAxis = (g: d3.Selection<any, unknown, null, undefined>) => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call((g: d3.Selection<any, unknown, null, undefined>) => g.select(".domain").remove())

            const svg: d3.Selection<null, unknown, null, undefined> = d3.select(ref.current)
                .attr("viewBox", `0, 0, ${width}, ${height}`)

            svg.append("g")
                .attr("fill", "steelblue")
                .selectAll("rect")
                .data(props.math)
                .join("rect")
                .style("mix-blend-mode", "multiply")
                .attr("x", (d: T.IScore) => x(d.name) as number)
                .attr("y", (d: T.IScore) => y(d.value))
                .attr("height", (d: T.IScore) => y(0) - y(d.value))
                .attr("width", x.bandwidth())

            svg.append("g")
                .call(xAxis)

            svg.append("g")
                .call(yAxis)

            let g: d3.Selection<SVGGElement, unknown, null, undefined> = svg.append("g")

            g.append("text")
                .attr("x", (width / 2))
                .attr("y", 40)
                .attr("text-anchor", "middle")
                .style("font-size", "30px")
                .text("Результаты экзаменов по математике");

            g.append("text")
                .attr("x", 70)
                .attr("y", 80)
                .attr("text-anchor", "end")
                .style("font-size", "12px")
                .text("Кол-во человек");

            g.append("text")
                .attr("x", width - 10)
                .attr("y", height - 25)
                .attr("text-anchor", "end")
                .style("font-size", "12px")
                .text("Балл");
        }
    }, [props.math, margin, width, height])

    return (
        <div>
            <svg
                className={styles.d3Component}
                ref={ref}
            />
        </div>
    )

}

export default MyD3Components
