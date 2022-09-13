var minPieRadius=20,base=1e4;function getPieRadius(e){var a=Math.floor(e/(1.1*base)*40)>minPieRadius?Math.floor(e/base*40):minPieRadius;return a}function getVirtulData(){for(var e=+echarts.number.parseDate("2022-01-01"),a=+echarts.number.parseDate("2022-01-10"),r=3600*24*1e3,i=[],t=e;t<a;t+=r)i.push([echarts.format.formatTime("yyyy-MM-dd",t),Math.floor((Math.random()+.1)*base)]);return i}function getPieSeries(e,a){return echarts.util.map(e,function(r,i){var t=a.convertToPixel({seriesIndex:0},r);return{id:i+"pie",type:"pie",center:t,label:{normal:{formatter:"{c}",position:"inside"}},zlevel:1,radius:getPieRadius(r[1]),data:[{name:"工作",value:Math.round(Math.random()*24)},{name:"娱乐",value:Math.round(Math.random()*24)},{name:"睡觉",value:Math.round(Math.random()*24)}]}})}var lineData=getVirtulData();option={tooltip:{},legend:{data:["工作","娱乐","睡觉"],bottom:20},grid:{left:"10%",right:"10%",top:"10%",bottom:"20%"},xAxis:{type:"category",name:"日",nameGap:5,axisLabel:{color:"#000",textStyle:{fontSize:"13"}},axisTick:{show:!0},axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1}},yAxis:{type:"value",name:"步数",nameGap:10,nameTextStyle:{fontSize:13},axisLabel:{textStyle:{fontSize:"13"}},axisTick:{show:!0},axisLine:{show:!0,lineStyle:{color:"#000"}},splitLine:{show:!1}},series:[{type:"line",symbolSize:0,lineStyle:{color:"#000a",width:1},data:lineData}]},setTimeout(function(){myChart.setOption({series:getPieSeries(lineData,myChart)})},10);