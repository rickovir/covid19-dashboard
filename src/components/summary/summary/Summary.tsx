import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import { PositiveData } from "../../../redux/types/UpdatesType";
import { ChartConfig, ChartData } from "../../charts/ChartCore";
import { LineChart } from "../../charts/line/LineChart";
import './Summary.css';

interface Props {
    totalPositivePerweek?: number;
    positivePersixmonth?: Array<PositiveData>;
}

const bulan = [
    'jan',
    'feb',
    'mar',
    'apr',
    'mei',
    'jun',
    'jul',
    'agu',
    'sep',
    'okt',
    'nov',
    'des'
]

const Summary: React.FC<Props> = (props) => {
    const chartConf: ChartConfig = {
        isSeries: false,
        isSimpleChart: true
    }

    const chartData: ChartData = {
        categories: ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam'],
        seriesData: [{
            name: 'ini chart',
            data: [9,529,348, 929,100,689]
        }]
    }

    const chartPositiveData: ChartData = {
        categories: ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam'],
        seriesData: [{
            name: 'ini chart',
            data: [9,529,348, 929,100,689]
        }]
    };

    if (props.positivePersixmonth?.length) {
        chartPositiveData.categories = [];
        chartPositiveData.seriesData[0].data = [];

        props.positivePersixmonth.forEach(data => {
            const months = (new Date(data.date)).getMonth()
            chartPositiveData.categories.push(bulan[months-1] ? bulan[months-1] : 'des');
            chartPositiveData.seriesData[0].data.push(data.total);
        });

        console.log(chartPositiveData)
    }

    return(
        <div className="summaries-wrapper row">
            <div className="col-xl-3 col-md-6 summary py-3">
                <p className="title mb-0">Cases</p>
                <h4>People tested positive</h4>
                <p className="date">Latest data provided on 14 April 2022</p>
                <div className="couter">
                    <p>Last 7 days</p>
                    <h4>{ props?.totalPositivePerweek || 0 }</h4>
                </div>
                <div className="chart-summary">
                    <LineChart config={chartConf} data={chartPositiveData} chartType={"spline"} />
                </div>
            </div>
            <div className="col-xl-3 col-md-6 summary py-3">
                <p className="title mb-0">Deaths</p>
                <h4>Deaths within 28 days of positive test</h4>
                <p className="date">Latest data provided on 14 April 2022</p>
                <div className="couter">
                    <p>Last 7 days</p>
                    <h4>1130</h4>
                </div>
                <div className="chart-summary">
                    <LineChart config={chartConf} data={chartData} chartType={"spline"} />
                </div>
            </div>
            <div className="col-xl-3 col-md-6 summary py-3">
                <p className="title mb-0">Healthcare</p>
                <h4>Patients admitted</h4>
                <p className="date">Latest data provided on 14 April 2022</p>
                <div className="couter">
                    <p>Last 7 days</p>
                    <h4>1130</h4>
                </div>
                <div className="chart-summary">
                    <LineChart config={chartConf} data={chartData} chartType={"spline"} />
                </div>
            </div>
            <div className="col-xl-3 col-md-6 summary py-3">
                <p className="title mb-0">Cured</p>
                <h4>People cured</h4>
                <p className="date">Latest data provided on 14 April 2022</p>
                <div className="couter">
                    <p>Last 7 days</p>
                    <h4>1130</h4>
                </div>
                <div className="chart-summary">
                    <LineChart config={chartConf} data={chartData} chartType={"spline"} />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState) => {
    return {
        totalPositivePerweek : state.update.totalPositivePerweek,
        positivePersixmonth: state.update.positivePersixmonth
    }
}

export default connect(mapStateToProps)(Summary);