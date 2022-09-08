var datas=splitData([["2017-1-3",21.37,20.99,20.9,21.37],["2017-1-4",20.92,21.17,20.84,21.24],["2017-1-5",21.15,20.99,20.95,21.18],["2017-1-6",20.98,20.69,20.68,21.07],["2017-1-9",20.7,20.47,20.4,20.78],["2017-1-10",20.44,20.7,20.42,20.97],["2017-1-11",20.67,20.69,20.57,20.98],["2017-1-12",20.62,20.54,20.45,20.9],["2017-1-13",20.5,20.13,19.91,20.66],["2017-1-16",20.18,18.73,18.12,20.2],["2017-1-17",18.62,18.9,18.15,19.1],["2017-1-18",18.97,19.02,18.89,19.31],["2017-1-19",18.85,19.12,18.63,19.25],["2017-1-20",18.99,19.42,18.98,19.51],["2017-1-23",19.48,19.65,19.42,19.96],["2017-1-24",19.65,19.3,19.22,19.87],["2017-1-25",19.28,19.66,19.11,19.66],["2017-1-26",19.6,19.68,19.6,19.73],["2017-2-3",19.69,19.44,19.32,19.69],["2017-2-6",19.45,19.71,19.37,19.83],["2017-2-7",19.64,19.87,19.45,19.87],["2017-2-8",20.55,20.45,20.35,21.49],["2017-2-9",20.21,20.58,20.21,20.66],["2017-2-10",20.58,20.7,20.58,21.14],["2017-2-13",20.41,20.98,20.32,21.16],["2017-2-14",20.98,20.78,20.71,20.98],["2017-2-15",20.88,20.81,20.7,21.27],["2017-2-16",20.63,20.72,20.54,20.74],["2017-2-17",20.72,20.2,20.11,20.85],["2017-2-20",20.17,20.4,20.08,20.42],["2017-2-21",20.39,20.56,20.27,20.7],["2017-2-22",20.65,20.8,20.61,21.1],["2017-2-23",20.85,20.95,20.52,20.96],["2017-2-24",20.94,20.95,20.8,21.11],["2017-2-27",21.03,20.71,20.61,21.1],["2017-2-28",20.73,20.84,20.6,20.84],["2017-3-1",21.08,21.91,21.08,22.2],["2017-3-2",21.7,21.42,21.35,21.92],["2017-3-3",21.43,21.8,21.42,22.15],["2017-3-6",21.81,21.86,21.7,22.33],["2017-3-7",21.91,22.13,21.59,22.13],["2017-3-8",22.1,21.83,21.7,22.1],["2017-3-9",21.79,21.73,21.52,21.99],["2017-3-10",21.8,21.54,21.42,21.8],["2017-3-13",21.54,21.86,21.45,21.99],["2017-3-14",21.78,21.67,21.6,21.96],["2017-3-15",21.9,21.94,21.85,22.42],["2017-3-16",21.82,22.34,21.8,22.43],["2017-3-17",22.28,21.84,21.81,22.28],["2017-3-20",21.78,21.7,21.55,21.98],["2017-3-21",21.7,21.71,21.5,21.79],["2017-3-22",21.71,21.2,21.08,21.71],["2017-3-23",21.2,21.07,20.82,21.3],["2017-3-24",21.06,21.4,20.91,21.4],["2017-3-27",21.38,21.01,20.98,21.39],["2017-3-28",21.01,21.02,20.97,21.17],["2017-3-29",21.15,21,20.9,21.36],["2017-3-30",20.87,20.2,20.11,20.99],["2017-3-31",20.27,20.09,20.03,20.39],["2017-4-5",20.12,20.69,20.11,20.8],["2017-4-6",20.7,20.67,20.55,20.83],["2017-4-7",20.62,20.64,20.61,20.79],["2017-4-10",20.57,20.24,20.2,20.57],["2017-4-11",20.24,20.53,20.2,20.6],["2017-4-12",20.6,20.4,20.38,20.63],["2017-4-13",20.4,20.7,20.4,20.79],["2017-4-14",20.68,20.2,20.2,20.75],["2017-4-17",20.15,19.87,19.84,20.24],["2017-4-18",19.95,19.56,19.52,20.05],["2017-4-19",19.58,19.67,19.2,19.83],["2017-4-20",19.6,19.95,19.58,19.98],["2017-4-21",19.86,20.03,19.86,20.28],["2017-4-24",20.03,19.86,19.53,20.04],["2017-4-25",19.81,19.9,19.7,20.22],["2017-4-26",19.9,19.75,19.73,19.95],["2017-4-27",19.9,20.15,19.42,20.17],["2017-4-28",20.26,20.45,20.23,20.58],["2017-5-2",20.5,20.32,20.26,20.62],["2017-5-3",20.17,20.18,20.01,20.33],["2017-5-4",20.1,19.87,19.82,20.15],["2017-5-5",19.87,19.58,19.58,19.87],["2017-5-8",19.5,19.17,19.08,19.5],["2017-5-9",19.15,19.4,19.06,19.53],["2017-5-10",19.4,19.2,19.18,19.52],["2017-5-11",19.09,19.54,18.82,19.55],["2017-5-12",19.55,20,19.41,20],["2017-5-15",19.96,20.13,19.8,20.15],["2017-5-16",20.04,20.34,19.81,20.4],["2017-5-17",20.35,20.17,20.12,20.38],["2017-5-18",15.1,15.1,15.1,15.55],["2017-5-19",15.12,15.11,15.05,15.23],["2017-5-22",15.55,15.41,15.15,15.56],["2017-5-23",15.28,15.03,14.75,15.3],["2017-5-24",14.92,15.16,14.6,15.21],["2017-5-25",15.06,15.32,15.06,15.35],["2017-5-26",15.33,15.41,15.18,15.46],["2017-5-31",15.59,15.53,15.31,15.67],["2017-6-1",15.49,15.12,15.05,15.5],["2017-6-2",15,15.08,14.65,15.23],["2017-6-5",15.11,15.49,15.02,15.54],["2017-6-6",15.39,15.47,15.33,15.55],["2017-6-7",15.46,15.95,15.39,15.98],["2017-6-8",15.9,15.93,15.8,15.96],["2017-6-9",15.92,15.91,15.73,15.95],["2017-6-12",15.8,15.86,15.65,15.88],["2017-6-13",15.79,16.15,15.78,16.24],["2017-6-14",16.19,16.15,16.06,16.29],["2017-6-15",16,16.15,15.93,16.39],["2017-6-16",16.06,16,15.93,16.14],["2017-6-19",15.89,15.96,15.85,16.04],["2017-6-20",15.86,15.88,15.81,15.99],["2017-6-21",15.87,15.96,15.74,16.21],["2017-6-22",15.97,15.72,15.71,16.04],["2017-6-23",15.66,16.05,15.64,16.05],["2017-6-26",16.45,16.24,16.06,16.76],["2017-6-27",16.29,16.48,16.12,16.79],["2017-6-28",16.36,16.03,16,16.4],["2017-6-29",16.05,16.26,16.02,16.28],["2017-6-30",16.25,16.41,16.08,16.43],["2017-7-3",16.46,16.58,16.31,16.63],["2017-7-4",16.59,16.5,16.39,16.59],["2017-7-5",16.6,16.31,16.18,16.65],["2017-7-6",16.32,16.07,15.95,16.32],["2017-7-7",16.07,16.09,16,16.16],["2017-7-10",16.09,16.03,15.94,16.22],["2017-7-11",16.04,15.52,15.51,16.1],["2017-7-12",15.5,15.47,15.16,15.64],["2017-7-13",15.76,16.23,15.75,16.25],["2017-7-14",16.35,16.1,15.89,16.35],["2017-7-17",16.37,15.15,15.11,16.37],["2017-7-18",14.9,15.27,14.71,15.3],["2017-7-19",15.21,15.12,14.92,15.26],["2017-7-20",15.12,15.02,14.98,15.3],["2017-7-21",15.02,15.16,14.93,15.3],["2017-7-24",15.14,14.98,14.88,15.25],["2017-7-25",15.08,14.95,14.9,15.15],["2017-7-26",14.91,15.03,14.89,15.18],["2017-7-27",15.02,15.47,15,15.57],["2017-7-28",15.42,15.28,15.24,15.57],["2017-7-31",15.37,15.36,15.25,15.49],["2017-8-1",15.3,15.25,15.14,15.42],["2017-8-2",15.26,15.02,15,15.3],["2017-8-3",15.07,15.26,15,15.45],["2017-8-4",15.25,15.11,15.1,15.26],["2017-8-7",15.12,15.37,15.12,15.56],["2017-8-8",15.37,15.62,15.21,15.65],["2017-8-9",15.66,16.32,15.52,16.58],["2017-8-10",16.1,16.46,16.07,16.68],["2017-8-11",16.27,16.54,16.15,16.78],["2017-8-14",16.54,16.81,16.4,16.81],["2017-8-15",16.75,16.68,16.56,16.81],["2017-8-16",16.68,16.82,16.51,16.93],["2017-8-17",16.63,16.52,16.43,16.82],["2017-8-18",16.52,17.26,16.51,17.38],["2017-8-21",17.15,17.2,16.98,17.23],["2017-8-22",17.2,17.33,17.13,17.71],["2017-8-23",17.42,16.74,16.7,17.42],["2017-8-24",16.7,16.53,16.36,16.73],["2017-8-25",16.55,16.78,16.51,16.97],["2017-8-28",16.8,16.86,16.74,17.24],["2017-8-29",17.2,17.34,17.2,17.7],["2017-8-30",17.36,17.2,17.16,17.75],["2017-8-31",18.37,18.42,18.06,18.92],["2017-9-1",18.76,18.28,18.07,18.78],["2017-9-4",18.15,18.1,18.08,18.64],["2017-9-5",18.35,19.38,18.35,19.89],["2017-9-6",19.08,19.08,18.78,19.38],["2017-9-7",19.01,19.01,18.83,19.58],["2017-9-8",18.88,18.75,18.65,19.45],["2017-9-11",18.6,18.44,18.15,18.74],["2017-9-12",18.46,18.42,18.05,18.76],["2017-9-13",18.4,18.34,18.27,18.57],["2017-9-14",18.3,18.34,18.28,18.76],["2017-9-15",18.45,18.23,18.1,18.77],["2017-9-18",18.2,18.03,17.75,18.2],["2017-9-19",18.02,18.06,17.86,18.18],["2017-9-20",18.08,18.12,17.88,18.17],["2017-9-21",18.1,17.91,17.9,18.39],["2017-9-22",17.87,17.4,17.3,17.87],["2017-9-25",17.32,17.43,17.02,17.59],["2017-9-26",17.3,17.38,17.25,17.47],["2017-9-27",17.45,17.43,17.38,17.6],["2017-9-28",17.38,17.62,17.26,17.85],["2017-9-29",17.68,17.76,17.6,17.85],["2017-10-9",17.85,17.71,17.44,17.97],["2017-10-10",17.7,18.44,17.64,18.45],["2017-10-11",18.5,18.18,18.16,18.87],["2017-10-12",18.08,17.74,17.59,18.25],["2017-10-13",18.02,18.24,17.9,18.39],["2017-10-16",18.35,17.78,17.72,18.38],["2017-10-17",17.7,17.65,17.4,17.87],["2017-10-18",17.69,17.75,17.54,17.82],["2017-10-19",17.88,18.54,17.88,19.16],["2017-10-20",18.51,18.63,18.23,18.81],["2017-10-23",18.63,18.85,18.48,18.93],["2017-10-24",18.84,19.14,18.71,19.46],["2017-10-25",19.08,19.24,19.01,19.29],["2017-10-26",19.19,18.85,18.71,19.19],["2017-10-27",18.85,19.19,18.85,19.62],["2017-10-30",19.2,18.82,18.3,19.39],["2017-10-31",18.8,19.4,18.61,19.48],["2017-11-1",19.34,19.08,18.97,19.56],["2017-11-2",19.01,19.51,18.83,19.8],["2017-11-3",19.66,20.2,19.43,20.47],["2017-11-6",20.45,21.24,19.9,21.25],["2017-11-7",21.4,21.55,21.18,22.3],["2017-11-8",21.54,21.65,21.27,22.1],["2017-11-9",21.51,21.04,20.86,21.58],["2017-11-10",21.07,22.72,21.07,22.74],["2017-11-13",22.6,23.15,22.26,23.79],["2017-11-14",23.15,23.05,23.03,24.18],["2017-11-15",23.04,23.62,22.23,23.76],["2017-11-16",23.65,24.7,23.6,24.88],["2017-11-17",24.6,23.3,23,24.94],["2017-11-20",22.93,24.2,22.6,24.23],["2017-11-21",24.02,23.87,23.36,24.76],["2017-11-22",23.8,24.89,23.3,24.89],["2017-11-23",25.16,23.14,22.67,25.35],["2017-11-24",22.91,21.7,21.7,23.25],["2017-11-27",21.88,21.41,21.41,22.5],["2017-11-28",21.5,22.29,21.5,22.39],["2017-11-29",22.18,21.9,21.5,22.49],["2017-11-30",21.7,21.57,21.42,22.22],["2017-12-1",21.62,22.1,21.55,22.44],["2017-12-4",22.12,20.68,20.41,22.17],["2017-12-5",20.66,20.8,20.48,21.23],["2017-12-6",20.77,21.36,20.63,21.36],["2017-12-7",21.4,21.58,21.11,21.68],["2017-12-8",21.43,22.71,21.43,22.96],["2017-12-11",22.67,24.1,22.61,24.88],["2017-12-12",24.16,24.26,23.86,25.1],["2017-12-13",24.19,24.9,24.03,25.3]]);function splitData(a){for(var e=[],l=[],s=0;s<a.length;s++)e.push(a[s].splice(0,1)[0]),l.push(a[s]);return{categoryData:e,values:l}}function calculateMA(a){for(var e=[],l=0,s=datas.values.length;l<s;l++){if(l<a){e.push("-");continue}for(var o=0,t=0;t<a;t++)o+=datas.values[l-t][1];e.push((o/a).toFixed(2))}return e}function calculateSA(){var a=[];a.push(0);for(var e=0,l=datas.values.length;e<l;e++)if(e>0){var s=Math.abs(datas.values[e][3]-datas.values[e][2])/datas.values[e-1][1]*100;a.push(s.toFixed(2))}return a}function calculateUD(){var a=[];a.push(0);for(var e=0,l=datas.values.length;e<l;e++)if(e>0){var s=(datas.values[e][1]-datas.values[e-1][1])/datas.values[e-1][1]*100;a.push(s.toFixed(2))}return a}option={title:{text:"XX生物"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["日K","MA5","MA30","Stock Amplitude（%）","Stock increase（%）"]},grid:[{top:"10%",left:"10%",height:"60%"},{top:"76%",height:"18%"}],xAxis:[{type:"category",scale:!0,axisLine:{onZero:!1},splitLine:{show:!1},data:datas.categoryData},{type:"category",gridIndex:1,axisTick:{show:!1},axisLabel:{show:!1},data:datas.categoryData}],yAxis:[{scale:!0,splitArea:{show:!1},splitLine:{show:!1},splitNumber:10},{gridIndex:1,xAxisIndex:1,splitArea:{show:!1},splitLine:{},axisLabel:{show:!0}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:40,end:100},{show:!0,type:"slider",xAxisIndex:[0,1],y:"94%",start:40,end:100}],series:[{type:"line",name:"MA5",data:calculateMA(5),lineStyle:{normal:{color:"#7974b9"}},itemStyle:{normal:{color:"#7974b9"}}},{type:"line",name:"MA30",data:calculateMA(30)},{type:"line",name:"Stock Amplitude（%）",xAxisIndex:1,yAxisIndex:1,data:calculateSA()},{type:"bar",name:"Stock increase（%）",xAxisIndex:1,yAxisIndex:1,data:calculateUD(),itemStyle:{normal:{color:function(a){var e;return a.data>=0?e="#d84f7c":e="#32c62f",e}}}},{type:"k",name:"日K",itemStyle:{normal:{color:"#d84f7c",color0:"#32c62f",borderColor:"#d84f7c",borderColor0:"#32c62f"}},markPoint:{symbol:"arrow",symbolSize:4,label:{normal:{show:!0,formatter:function(a){return a.value},color:"#2b8fa6",fontWeight:"bold"}},itemStyle:{normal:{color:"#f221d6"}},data:[{name:"最高",type:"max",valueDim:"highest"},{name:"最低",type:"min",valueDim:"lowest"},{name:"平均",type:"average",valueDim:"close"}]},markLine:{symbol:["none","none"],data:[{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"},[{name:"min line on close",type:"min",valueDim:"close",label:{normal:{show:!1},emphasis:{show:!1}}},{name:"average line on close",type:"average",valueDim:"close",label:{normal:{show:!1},emphasis:{show:!1}}}],[{name:"average line on close",type:"average",valueDim:"close",label:{normal:{show:!1},emphasis:{show:!1}}},{name:"max line on close",type:"max",valueDim:"close",label:{normal:{show:!1},emphasis:{show:!1}}}]]},data:datas.values}]};
