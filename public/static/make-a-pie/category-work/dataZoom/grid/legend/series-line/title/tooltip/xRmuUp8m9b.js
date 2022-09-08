const colorList=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];for(var base=+new Date(2e3,9,3),oneDay=24*3600*1e3,date=[],data1=[],data2=[],data3=[],j=1;j<10;j++){var now=new Date(base+=oneDay);date.push([now.getFullYear(),now.getMonth()+1,now.getDate()].join("-"))}for(var i=1;i<8;i++)data1.push(Math.round(Math.random()*20)),data2.push(Math.round(Math.random()*20)),data3.push(Math.round(Math.random()*20));option={backgroundColor:"#fff",title:{text:"利润收支曲线",textStyle:{fontSize:12,fontWeight:400},left:"center",top:"5%",show:!1},legend:{x:"center",y:"top",show:!0,top:"5%",right:"5%",itemWidth:6,itemGap:20,textStyle:{color:"#556677"},data:["预估净利润","实时均价","目标成本"]},tooltip:{trigger:"axis",axisPointer:{label:{show:!0,backgroundColor:"#fff",color:"#556677",borderColor:"rgba(0,0,0,0)",shadowColor:"rgba(0,0,0,0)",shadowOffsetY:0},lineStyle:{width:0}},backgroundColor:"#fff",textStyle:{color:"#5c6c7c"},padding:[10,10],extraCssText:"box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)"},grid:{top:"15%",y2:88},dataZoom:[{type:"inside",start:0,end:100},{start:0,end:100}],xAxis:[{type:"category",data:date,axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisTick:{show:!0},axisLabel:{interval:0,textStyle:{color:"#556677"},fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},splitLine:{show:!0,lineStyle:{type:"dashed"}},boundaryGap:!1}],yAxis:[{type:"value",name:"单位：元",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{textStyle:{color:"#556677"}},splitLine:{show:!0,lineStyle:{type:"dashed"}}}],series:[{name:"预估净利润",type:"line",data:data1,symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,emphasis:{focus:"series"},lineStyle:{width:5,shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[0],borderColor:colorList[0]}},markPoint:{symbol:"pin",symbolSize:50,itemStyle:{borderColor:"#000",borderWidth:0,borderType:"solid"},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"实时均价",type:"line",data:data2,symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,emphasis:{focus:"series"},lineStyle:{width:5,color:new echarts.graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[1],borderColor:colorList[1]}},markPoint:{symbol:"pin",symbolSize:50,itemStyle:{color:"#4587E7",borderColor:"#000",borderWidth:0,borderType:"solid"},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"目标成本",type:"line",data:data3,symbolSize:1,yAxisIndex:0,symbol:"circle",smooth:!0,showSymbol:!1,emphasis:{focus:"series"},lineStyle:{width:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#fe9a"},{offset:1,color:"#fe9a8b"}]),shadowColor:"rgba(254,154,139, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:colorList[2],borderColor:colorList[2]}},markPoint:{symbol:"pin",symbolSize:50,itemStyle:{borderColor:"#000",borderWidth:0,borderType:"solid"},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]};
