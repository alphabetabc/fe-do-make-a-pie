var option={title:{text:"运营商、代理商、企业会员增长趋势图（以30天为1个周期）",left:0,top:4,textStyle:{fontFamily:"MicrosoftYaHei",fontSize:17,color:"#2b3b60",fontWeight:500}},backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"line"}},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:["企业会员总数","代理商总数","运营商总数"],right:10,top:12,textStyle:{color:"#2b3b60"},itemWidth:12,itemHeight:10},xAxis:{type:"category",data:["2012","2013","2014","2015","2016","2017","2018","2019"],axisLine:{lineStyle:{color:"#d2d9e4"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei",color:"#6175a2"}}},yAxis:{type:"value",max:"1200",axisLine:{show:!1,lineStyle:{color:"#6175a2"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#d2d9e4"}},axisLabel:{}},dataZoom:[{show:!0,height:15,xAxisIndex:[0],bottom:"8%",start:10,end:90,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#6175a2"},borderColor:"rgba(144,151,156, 0.3)"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"企业会员总数",type:"line",barWidth:"15%",showAllSymbol:!0,symbol:"emptyCircle",symbolSize:10,itemStyle:{normal:{width:5,color:"#498cfc",barBorderRadius:11}},smooth:!0,lineStyle:{normal:{width:3,shadowColor:"rgba(73,140,252, 0.5)",shadowBlur:10,shadowOffsetY:7}},data:[600,1e3,600,1e3,600,1e3,600,1e3,600]},{name:"代理商总数",type:"line",barWidth:"15%",showAllSymbol:!0,symbol:"emptyCircle",symbolSize:10,itemStyle:{normal:{width:5,color:"#f9b555",barBorderRadius:11}},smooth:!0,lineStyle:{normal:{width:3,shadowColor:"rgba(249,181,85, 0.5)",shadowBlur:10,shadowOffsetY:7}},data:[400,600,400,600,400,600,400,600,400]},{name:"运营商总数",type:"line",barWidth:"15%",showAllSymbol:!0,symbol:"emptyCircle",symbolSize:10,itemStyle:{normal:{show:!0,color:"#55cf96",barBorderRadius:11}},smooth:!0,lineStyle:{normal:{width:3,shadowColor:"rgba(85,207,150, 0.5)",shadowBlur:10,shadowOffsetY:7}},data:[1e3,1200,1e3,1200,1e3,1200,1e3,1200,1e3]}]};
