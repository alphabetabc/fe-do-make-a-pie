var xData=["2020-09-07","2020-09-08","2020-09-09","2020-09-10","2020-09-11","2020-09-12","2020-09-13","2020-09-14","2020-09-15"],lines=[[400,400,300,300,300,400,400,400,350],[400,500,500,500,500,400,400,500,500]],option={backgroundColor:"#060B1C",tooltip:{trigger:"axis",padding:5},grid:{left:"10%",top:"18%",right:"5%",bottom:"19%"},legend:{show:!0,icon:"circle",orient:"horizontal",top:"10%",right:"8%",itemWidth:18.5,itemHeight:6,itemGap:30,textStyle:{color:"#C9C8CD"}},xAxis:[{type:"category",data:xData,axisLabel:{show:!0,fontSize:9,textStyle:{color:"#C9C8CD"},formatter:function(e){var o="";return o+=e.substring(0,4)+`
`,o+=e.substring(5,10),o}},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!1,width:.08,lineStyle:{type:"solid",color:"#03202E"}},axisPointer:{type:"shadow",z:1,shadowStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(18,155,249,0)"},{offset:1,color:"rgba(18,155,249,1)"}],global:!1},shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:5}}}],yAxis:[{type:"value",show:!1,axisLabel:{show:!0,textStyle:{fontSize:9,color:"#C9C8CD"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#FFFFFF"},splitArea:{show:!1}}],series:[{name:"进入",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#6830E7"}]),barBorderRadius:2}},data:lines[0]},{name:"离开",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#00CA98"}]),barBorderRadius:2}},data:lines[1]}]};
