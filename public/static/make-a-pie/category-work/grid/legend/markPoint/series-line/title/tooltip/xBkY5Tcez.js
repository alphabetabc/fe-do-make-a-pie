var data=[0,1,5,4,5,2,3,5,5],series=[{name:"热度",type:"line",data,symbolSize:40,lineStyle:{normal:{width:1}},markPoint:{data:[{name:"最大值",type:"max"}]}}];option={tooltip:{trigger:"axis"},title:{text:"ECharts",subtext:`可能是最好用的图表
http://echarts.baidu.com`,left:"20",top:"15",textStyle:{fontSize:"40"},subtextStyle:{fontSize:"23"}},xAxis:{data:[],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},grid:{left:"0",right:"0",bottom:"0",containLabel:!0},series,legend:{show:!0,data:["热度"],top:"bottom"},backgroundColor:"white"};var tick=0;setInterval(function(){++tick,data.push((Math.random()+.9)*9*tick),console.log("tick"),myChart.setOption({series})},10);var $dom=$(myChart.getDom());$dom.css({transform:"perspective(1000px) rotateX(-60deg) rotateY(-20deg) scaleX(0.5) scaleY(0.8)","box-shadow":"-3px -2px 10px -2px #999"});