var xData=["2016","2017","2018","2019","2020"],yData1=[120,150,120,460,220,240,150,50,440,180,240,180],yData2=[130,170,100,380,170,280,220,120,380,109,140,190],yData3=[62,50,42,60,20,20,30,30,4,8,4,8],colors=["#15BEFF","#11DBA2","#F03500"],names=["主体存量","注册","注销"],dataArr=[{type:"max",name:"最大值"},{coord:[1,9]},{coord:[2,4]}];option={title:{top:"0",left:"left",text:"",textStyle:{align:"center",color:"#00d6fd",fontSize:16}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{right:"30px",y:"12px",textStyle:{color:"#00d6fd",fontSize:12},itemHeight:12,data:names},grid:[{left:"6%",bottom:"8%",top:"25%",right:"6%",containLabel:!0}],xAxis:[{type:"category",data:xData,name:" ",nameTextStyle:{color:"#00d6fd"},axisLabel:{show:!0,textStyle:{color:"#00d6fd",fontSize:12}},axisLine:{lineStyle:{color:"#00d6fd"}},axisTick:{show:!1}}],yAxis:[{type:"value",name:"单位：万",nameTextStyle:{color:"#00d6fd"},position:"left",axisLine:{lineStyle:{color:"#00d6fd",width:1}},splitLine:{show:!0,lineStyle:{color:["#0b244c"],width:1,type:"solid"}},axisLabel:{color:"#00d6fd",fontSize:12}}],series:[{name:names[0],type:"line",yAxisIndex:0,smooth:!0,symbolSize:6,symbol:"circle",itemStyle:{normal:{color:colors[0]}},lineStyle:{width:2,color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:colors[0]},{offset:1,color:colors[0]}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},markPoint:{itemStyle:{borderColor:colors[0],color:{type:"circle",x:0,y:0,x2:0,y2:0,colorStops:[{offset:0,color:colors[0]},{offset:1,color:colors[0]}],globalCoord:!1}},data:dataArr},data:yData1},{name:names[1],type:"line",yAxisIndex:0,smooth:!0,symbolSize:0,symbol:"circle",itemStyle:{normal:{color:colors[1]}},lineStyle:{width:2,color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:colors[1]},{offset:1,color:colors[1]}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},data:yData2},{name:names[2],type:"line",yAxisIndex:0,smooth:!0,symbolSize:0,symbol:"circle",itemStyle:{normal:{color:colors[2]}},lineStyle:{width:2,color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:colors[2]},{offset:1,color:colors[2]}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},data:yData3}]};