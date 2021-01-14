import echarts from "echarts";

export default {
  N: 100,
  svgSize: `width: ${document.body.clientWidth - 30}px; height: ${document.body.clientWidth - 30}px;`,

  option: {
    color: ['#5793f3', '#d14a61', '#675bba'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: []
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        name: 'x',
        type: 'value',
        max: 1,
        axisPointer: {
          handle: {
            show: true,
            color: '#004E52'
          }
        }
      }
    ],
    yAxis: [
      {
        name: '',
        type: 'value',
        scale: true
      }
    ],
    dataset: {
      source: undefined
    },
    series: []
  },

  updateOption(target: string, data: number[][]) {
    let option = this.option;
    if (data.length < 3) {
      option.series.push({name: target, type: 'line', encode: {x: 0, y: 1}});
    } else {
      for (let idx = 1; idx < data[0].length; idx++) {
        let name = `${target}${idx}`;
        option.series.push({name, type: 'line', encode: {x: 0, y: idx}});
        option.legend.data.push(name);
      }
    }
    option.yAxis[0].name = target;
    option.dataset.source = data;
    return option;
  },
  plot(container: any, target: string, data: number[][]) {
    echarts.init(container).setOption(this.updateOption(target, data));
  }
}