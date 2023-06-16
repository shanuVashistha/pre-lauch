import Chart from 'chart.js/auto';
import {FC, useEffect, useRef, useState} from "react";
import {user_salary_data as userData} from "@/helper/data";

interface BarChartDataInterface {
    params: any;
    onSalaryChange: (salary: any) => void;
}

export const BarChart: FC<BarChartDataInterface> = (props) => {
    const {params, onSalaryChange} = props;
    const [salaryData, setSalaryData] = useState<any>({});
    const [data, setData] = useState<any>({});
    const getSalary = () => {
        const {role, experience, location, skill, industry, companySize} = params;
        let filteredData = userData.filter((item: any) => item.role === role && item.designation === experience && item.country === location);
        const labels: any[] = [];
        const dataset: any = {
            data: [],
            backgroundColor: '#FFDE7C',
        };
        if (!filteredData) {
            return null;
        }
        if(skill){
            filteredData = userData.filter((item: any) => item.skills.includes(skill));
        }
        if(industry){
            filteredData = userData.filter((item: any) => item.industry.includes(industry));
        }
        if(companySize){
            filteredData = userData.filter((item: any) => item.companySize === companySize);
        }

        // const salaryArray: any = filteredData.map((item: any) => item.salary );

        // const minimum = Math.min(...salaryArray);
        // const maximum = Math.max(...salaryArray);
        const bars = Math.min(filteredData.length,10);
        // const rangeSize = (maximum - minimum) / bars;
        // const labels = [];

        for (let i = 0; i < bars; i++) {
            dataset.data.push(filteredData[i].salary);
            labels.push(`${filteredData[i].salary}k`);
        }

        const salary: any = maximum;
        setSalaryData(salary);
        setData({
            labels,
            datasets: [dataset],
        });
        onSalaryChange(salary);
    }

    useEffect(() => {
        getSalary();
    }, []);

    useEffect(() => {
        getSalary();
    }, [params]);

    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let chart: Chart;
        const createChart = () => {
            const ctx = chartRef.current?.getContext('2d');

            if (ctx) {
                if (chart) {
                    chart.destroy(); // Destroy the existing chart
                }

                chart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: (value) => `${Number(value)}`, // Customize the y-axis label format
                                },
                            },
                            x: {
                                position: 'top',
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                    plugins: [
                        // @ts-ignore
                        {
                            afterDraw: (chart: any) => {
                                const {ctx, scales} = chart;
                                const xScale = scales.x;
                                const xValue = (data.datasets && data.datasets.length > 0 ) ? data.datasets[0].data.indexOf(Math.max(...data.datasets[0].data)) : 1;
                                const xPixel = xScale.getPixelForValue(xValue);
                                ctx.save();
                                ctx.strokeStyle = '#615C55';
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 5]);
                                ctx.beginPath();
                                ctx.moveTo(xPixel, chart.chartArea.top);
                                ctx.lineTo(xPixel, chart.chartArea.bottom);
                                ctx.stroke();
                                ctx.restore();
                            },
                        },
                    ],
                });
            }
        };

        createChart();

        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [salaryData]);

    return <canvas ref={chartRef}/>;
};