var min=100,max=2e3;option={backgroundColor:"#ffffff",grid:{left:"2.5%",top:"19.5%",right:"2.8%",bottom:"22%",containLabel:!0},legend:{data:["Admission"]},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:[{type:"category",axisLabel:{textStyle:{color:"rgba(0,0,0,0.8)",fontSize:"16"},interval:0,rotate:30},data:["USA","France","UK","Australia","Germany","China","Canada","Russia","India","SouthAfrica","Mongolia","Cambodia","Nigeria","Sudan"],axisLine:{lineStyle:{color:"#808A87"}},axisTick:{show:!1}}],yAxis:[{type:"value",name:"Score",nameGap:25,nameTextStyle:{color:"#000000",fontSize:"16"},axisLabel:{textStyle:{color:"rgba(0,0,0,0.8)",fontSize:"14"}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#808A87"}},splitLine:{lineStyle:{color:"rgba(130,130,130,0.3)"}}}],series:[{type:"bar",barWidth:"40%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#de682e"},{offset:1,color:"#ecc232"}])}},label:{normal:{show:!0,position:"top",formatter:function(e){return e.value==max||e.value==min?"":e.value},textStyle:{color:"#000000",fontSize:"16"}}},markPoint:{symbolSize:"90",label:{normal:{textStyle:{color:"#000000",fontSize:"14"}}},data:[{name:"年最低",value:min,xAxis:0,yAxis:100},{name:"年最高",value:max,xAxis:19,yAxis:2e3}]},data:[67.1,51.98,49.75,46.08,43.51,39.9,37.02,32.89,20.58,20.39,16.25,12.23,8.76,6.85]}]};
