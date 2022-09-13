const colorList=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];option={backgroundColor:"rgba(128, 128, 128, 0.0)",toolbox:{feature:{saveAsImage:{}}},legend:{icon:"circle",top:"2%",itemWidth:48,itemGap:40,textStyle:{color:"#556677"}},tooltip:{trigger:"axis",axisPointer:{label:{show:!0,backgroundColor:"#fff",color:"#556677",borderColor:"rgba(0,0,0,0)",shadowColor:"rgba(0,0,0,0)",shadowOffsetY:0},lineStyle:{width:0}},backgroundColor:"#fff",textStyle:{color:"#5c6c7c"},padding:[10,10],extraCssText:"box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)"},grid:{top:"5%"},xAxis:[{type:"category",data:["0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"#556677"},fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{textStyle:{color:"#556677"}},splitLine:{show:!1}},{type:"value",position:"right",axisTick:{show:!1},axisLabel:{textStyle:{color:"#556677"},formatter:"{value}"},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},splitLine:{show:!1}}],series:[{name:"销量",type:"line",data:[10,10,30,12,15,3,7,10,10,30,12,15,3,7],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[0],borderColor:colorList[0]}},markLine:{silent:!0,data:[{yAxis:100}]}},{name:"订单量",type:"line",data:[5,12,11,14,25,16,10,5,12,11,14,25,16,10],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new echarts.graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[1],borderColor:colorList[1]}}},{name:"销售金额",type:"line",data:[1500.99,1200,1700,140.01,500.4,160.02,110.98,500.99,1200,1700,140.01,500.4,160.02,110.98],symbolSize:1,yAxisIndex:1,symbol:"circle",smooth:!0,showSymbol:!1,lineStyle:{width:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#fe9a"},{offset:1,color:"#fe9a8b"}]),shadowColor:"rgba(254,154,139, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[2],borderColor:colorList[2]}}},{name:"退货量",type:"line",data:[2,0,3,0,5,0,1,2,3,4,3,1,1,2],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new echarts.graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[1],borderColor:colorList[1]}}}]};