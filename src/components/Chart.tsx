import Chart from 'chart.js/auto';
import {FC, useEffect, useRef, useState} from "react";
import {salary as SalaryData} from "@/helper/data";
import {formatSalary} from "@/helper/helper";

interface BarChartDataInterface {
    params: any;
    onSalaryChange: (salary: any) => void;
}

export const BarChart: FC<BarChartDataInterface> = (props) => {
    const {params, onSalaryChange} = props;
    const [salaryData, setSalaryData] = useState<any>({});
    const [data, setData] = useState<any>({});
    const getSalary = () => {
        const {role, experience, location} = params;
        const roleData = SalaryData.find((item: any) => item.role === role);
        const labels: any[] = [];
        const dataset: any = {
            data: [],
            backgroundColor: '#FFDE7C',
        };
        const stepsBefore = 4;
        const stepsAfter = 5;
        if (!roleData) {
            return null;
        }

        const experienceData = roleData.by_experience.find((item: any) => item.value === experience);

        if (!experienceData) {
            return null;
        }

        const locationData = experienceData.location.find((item: any) => item.value === location);

        if (!locationData) {
            return null;
        }
        const salary: any = locationData.salary;
        let count = stepsBefore / 3;
        // Generate values before the salary
        for (let i: any = salary - stepsBefore * 10000; i < salary; i += 10000) {
            labels.push(formatSalary(i));
            dataset.data.push(salary / (stepsBefore - count));
            count += 0.5;
        }

        // Add the salary itself
        labels.push(formatSalary(salary));
        dataset.data.push(salary);

        count = stepsAfter - 2;
        // Generate values after the salary
        for (let i: any = salary + 10000; i <= salary + stepsAfter * 10000; i += 10000) {
            labels.push(formatSalary(i));
            dataset.data.push(salary / (stepsAfter - count));
            count -= 0.5
        }
        setSalaryData(locationData.salary);
        setData({
            labels,
            datasets: [dataset],
        });
        onSalaryChange(locationData.salary);
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
                                    callback: (value) => `${Number(value) / 1000}`, // Customize the y-axis label format
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
                                const xValue = 4;
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
