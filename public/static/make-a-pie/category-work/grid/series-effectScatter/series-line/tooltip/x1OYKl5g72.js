let seriesData=[[-10.2,-74.5,0],[19.7,1.1,0],["-6","-4","-2","2","3","4"]],type=[1,1,0],symbolArr=[],data=seriesData[1];type.forEach(function(e,t){symbolArr[t]={value:data[t],symbolSize:13,itemStyle:{normal:{color:e==1?"#1572E9":"#E4007F",shadowBlur:50,shadowColor:"#333"}}}});let priceData=seriesData[1],priceDataFirst=[];priceData.forEach((e,t)=>{t==priceData.length-1?priceDataFirst.push(String(e)):priceDataFirst.push(null)});let priceLastNew=priceDataFirst.concat(seriesData[2]),max1,max2,line1=seriesData[0].map(e=>Math.abs(e));max1=Math.max(...line1);let rightY=seriesData[1].concat(seriesData[2]),line2=rightY.map(e=>Math.abs(e));max2=Math.max(...line2);let _series=[{type:"line",smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:"rgba(16,97,204,0.1)",shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgba(16,97,204,1)"},emphasis:{color:"rgb(0,196,132)",borderColor:"rgba(0,196,132,0.2)",extraCssText:"box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",borderWidth:1}},data:seriesData[0]},{type:"line",boundaryGap:!1,smooth:!0,yAxisIndex:1,data:seriesData[1],itemStyle:{normal:{color:"#0ACAF3"}}},{type:"line",boundaryGap:!1,smooth:!0,yAxisIndex:1,data:priceLastNew,lineStyle:{normal:{width:1,type:"dashed"}},itemStyle:{normal:{color:"#0ACAF3"}}},{label:{show:!1},type:"effectScatter",coordinateSystem:"cartesian2d",data:symbolArr,yAxisIndex:1,symbolSize:0,showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0}];option={backgroundColor:"#071729",tooltip:{show:!0,trigger:"axis",formatter:"<div><div>{b0}</div><div>成交面积环比：{c0}%</div><div>成交均价环比：{c1 }%</div></div>",formatter:function(e){return e.length>1?`<div><div>${e[0].name}</div><div>成交面积环比：${e[0].value}%</div><div>成交均价环比：${e[1].value}%</div></div>`:`<div><div>${e[0].name}<div>成交均价环比：${e[0].value}%</div></div>`}},grid:{left:"5%",right:"5%",bottom:"13%",top:"15%",containLabel:!0},xAxis:{data:["2019.07","2019.08","2019.09","2019.10","2019.11","2019.12"],boundaryGap:!1,axisLine:{lineStyle:{color:"rgba(0,160,233,0.25)"}},axisLabel:{textStyle:{color:"#ccc",fontSize:14}},axisTick:{show:!1}},yAxis:[{type:"value",name:"面积%",axisTick:{show:!1},nameTextStyle:{color:"#ccc",fontSize:13,padding:[0,30,0,0]},splitLine:{show:!1},axisLabel:{color:"#ccc",textStyle:{color:"#ccc",fontSize:13}},axisLine:{lineStyle:{color:"rgba(0,160,233,0.25)",fontSize:13}},nameTextStyle:{color:"#ccc",fontSize:"90%"},min:-Math.ceil(max1),max:Math.ceil(max1)},{type:"value",name:"均价%",axisTick:{show:!1},nameTextStyle:{color:"#ccc",fontSize:13,padding:[0,30,0,0]},splitLine:{show:!1},axisLabel:{color:"#ccc",textStyle:{color:"#ccc",fontSize:13}},axisLine:{lineStyle:{color:"rgba(0,160,233,0.25)",fontSize:13}},nameTextStyle:{color:"#ccc",fontSize:"90%"},min:-Math.ceil(max2),max:Math.ceil(max2)}],series:_series};
