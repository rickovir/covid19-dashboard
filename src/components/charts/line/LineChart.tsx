import react, { Component } from "react";
import { ChartCore, ChartProperty } from "../ChartCore";

export class LineChart extends ChartCore{
    constructor(props: ChartProperty) {
      super(props);
    }

    render() {
        const {config, data, chartType} = this.props;
        const type = chartType?.includes('spline') ? chartType : 'spline';
        const lineOptions = this.transform(config, data, type);
        console.log(lineOptions)

        return this.baseRender(lineOptions);
    }
}