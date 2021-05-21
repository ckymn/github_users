// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart);

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "100%", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        theme: "fusion",
        subCaption: "This year",
        decimals: 0,
        pieRadius: "55%",
        doughnutRadius: "70%",
        showPercentValues: 0,
        captionFontColor: "#fff",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 16,
        baseFontColor: "#617d98",
        smartLineColor: "#fff",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: "black",
        color: "white",
        showBorder: 0,
        outCnvBaseFontColor: "#fff"
      },
      // Chart Data
      data,
    },
  };

  return (
    <ReactFC {...chartConfigs} />
  );
};

export default ChartComponent;
