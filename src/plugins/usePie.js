// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart, LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  PieChart,
  LineChart,
  CanvasRenderer,
  LegendComponent,
]);

const usePie = (element) => {
  const pirChart = echarts.init(element, null, {
    // width: '100%',
    height: 75,
  });

  const setOption = (data) => {
    const option = {
      title: {
        left: "center",
      },
      grid: {
        right: 0,
      },
      xAxis: {
        show: false,
        type: "category",
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        show: false,
        min: 0,
        max: 2000,
      },
      series: [
        {
          data: data,
          type: "line",
          smooth: true,
          color: "#991b1b47",
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(252, 165, 165, 1)",
              },
              {
                offset: 1,
                color: "rgba(252, 165, 165, 0.1)",
              },
            ]),
          },
        },
      ],
    };
    return pirChart.setOption(option);
  };

  return { setOption };
};

export default usePie;
