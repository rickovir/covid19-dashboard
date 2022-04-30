import react, { Component } from "react";
import React from "react";
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface ChartConfig {
    isSeries: boolean;
    isSimpleChart: boolean;
}

export interface ChartData {
    categories: Array<string>;
    seriesData: Array<any>;
}

export interface ChartProperty {
    config: ChartConfig;
    data: ChartData;
    chartType?: 'spline' | 'areaspline' | 'column' | 'combination';
}

export abstract class ChartCore extends React.Component<ChartProperty>{
    transform(config: ChartConfig, data: ChartData, type: string) {
        const {categories, series} = this.getChartSeries(data);

        const finalData: Highcharts.Options = {
            chart: {
                type: type,
                backgroundColor: '#f8f8f8'
            },
            xAxis: {
                categories,
                crosshair: true
            },
            series: series as any[],
            tooltip: {
                enabled: true,
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions:{},
            credits: {
                enabled: false
            },
            title: {
                text: ''
            } as any,
        };

        this.setColor(finalData);
        this.definePlotOptions(config, finalData, type)
        this.defineChartMode(config, finalData)

        return finalData;
    }

    getChartSeries(chartData: ChartData) {
        const categories = chartData.categories;
        const series = chartData.seriesData.map(seriesData => {
            const tempData = seriesData.data.map((data: number, i: number) => [i, data]);
            return {
                name: seriesData.name,
                data: tempData
            }
        });

        return { categories, series };
    }

    baseRender(chartOption: Highcharts.Options) {
        return (<HighchartsReact highcharts={Highcharts} options={chartOption} containerProps={{ style: { height: "100%" } }} />)
    }


    setColor(finalData: Highcharts.Options) {
        const colorList = ['#003078', '#5694ca', '#abcbe5'];
        finalData.series?.forEach((series, index: number) => {
            series.color = colorList[index];
        });
    }

    definePlotOptions(config: ChartConfig, finalData: Highcharts.Options, type: string) {
        const plotOption = {
            marker: {
            	enabled: false
            }
        };
        
        if(type !== 'combination') {
            (finalData.plotOptions as any)[type] = plotOption;
        }
    }

    defineChartMode(config: ChartConfig, finalData: Highcharts.Options) {
        if (config.isSimpleChart) {
            finalData.yAxis = {
                title: {
                    enabled: false
                } as any,
                labels: {
                    enabled: false
                }
            };

            finalData.tooltip = {
                enabled: false
            }
        }
    }
}
