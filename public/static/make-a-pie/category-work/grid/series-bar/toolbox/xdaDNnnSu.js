var ma=[0,68.09,146.34,215.18,262.09],tu=[0,6.81,14.63,21.52,26.21],ji=[0,183.84,395.13,580.98,707.63],xData=function(){for(var a=[],e=2020;e<2101;e+=20)a.push(e+"");return a}();option={backgroundColor:"#fff",xAxis:{name:"year",nameTextStyle:{fontSize:28},nameLocation:"center",nameGap:32,data:xData,axisLine:{lineStyle:{color:"black"}},axisTick:{show:!1},axisLabel:{fontSize:18}},yAxis:[{name:"Lost land (km²)",nameTextStyle:{fontSize:25},nameLocation:"center",nameGap:43,axisLabel:{fontSize:18},splitLine:{show:!1},axisLine:{lineStyle:{color:"black"}}}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},series:[{name:"受灾面积",type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"black",fontSize:15}},barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#7b4397"},{offset:1,color:"#dc2430"}])}},data:ma}]};
