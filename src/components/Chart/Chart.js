import React, { Component } from "react";
import * as d3 from "d3";
import "../Chart/chart.css";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    console.log(this.props);
    const data = this.props.data;
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    const h = this.props.height;

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d - 3);

    //selection.attr(“property", (d, i) => {})
  }

  render() {
    return <div id={"#" + this.props.GraphId}></div>;
  }
}

export default BarChart;
