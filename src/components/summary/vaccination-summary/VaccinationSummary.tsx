import React, { useEffect, useRef, useState } from "react";
import { ChartConfig, ChartData } from "../../charts/ChartCore";
import { LineChart } from "../../charts/line/LineChart";
import './VaccinationSummary.css';

const VaccinationSummary: React.FC<{}> = ({}) => {
    const chartConf: ChartConfig = {
        isSeries: false,
        isSimpleChart: true
    }
    const chartData: ChartData = {
        categories: ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam'],
        seriesData: [{
            name: 'ini chart',
            data: [9,529,348, 929,100,7000]
        }]
    }
    return (
        <div className="vaccination-summary-wrapper row py-3 mb-2">
            <div className="col-xl-3 topic">
                <p className="title mb-0">Vaccinations</p>
                <h4>People vaccinated</h4>
                <p className="date">Up to and including 7 April 2022</p>
            </div>
            <div className="col-xl-5 col-md-6 row doses">
                <div className="col-xl-12 col-6 row">
                    <div className="col-xl-6 doses-item">
                        <p>Daily – first dose</p>
                        <h4>1130</h4>
                    </div>
                    <div className="col-xl-6 doses-item">
                        <p>Daily – second dose</p>
                        <h4>1130</h4>
                    </div>
                </div>
                <div className="col-xl-12 col-6 row">
                    <div className="col-xl-6 doses-item">
                        <p>Total – first dose</p>
                        <h4>56389281</h4>
                    </div>
                    <div className="col-xl-6 doses-item">
                        <p>Total – second dose</p>
                        <h4>40928184</h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 row chart">
                <LineChart config={chartConf} data={chartData} chartType={"areaspline"} />
            </div>
        </div>
    );
};

export default VaccinationSummary;