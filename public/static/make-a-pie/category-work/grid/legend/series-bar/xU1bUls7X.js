var yData=["11.05","11.04","11.03","11.02","11.01","10.31","10.30"],data=[15.3,13.8,11.3,11.5,12.9,12.1,14.9];const blueItem={type:"linear",colorStops:[{offset:0,color:"#0e1b55"},{offset:1,color:"#1970ff"}]};var color=[blueItem,blueItem,blueItem,blueItem,blueItem,blueItem,blueItem],seriesData=[];data.map((e,a)=>{seriesData.push({name:"",value:e,itemStyle:{normal:{color:color[a]}}})}),option={backgroundColor:"#061247",legend:{show:!1},grid:{left:"8%",right:"12%",bottom:"10%",top:"10%",containLabel:!0},xAxis:{type:"value",axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},nameTextStyle:{color:"#6e69b2"}},yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:"dashed",color:"#093052"}},axisLabel:{inside:!1,textStyle:{color:"#0075db",fontSize:24},margin:20,align:"right"},data:yData},{type:"category",axisLine:{show:!1},axisLabel:{show:!1},data:yData},{type:"category",axisLine:{show:!1},axisLabel:{show:!1},data:yData}],series:[{name:"",type:"bar",stack:"1",yAxisIndex:0,data:seriesData,barWidth:20,z:3},{name:"",type:"bar",yAxisIndex:2,data:[15.3,15.3,15.3,15.3,15.3,15.3,15.3,15.3],barWidth:20,itemStyle:{color:"#061247",barBorderRadius:12},z:0,label:{normal:{show:!0,fontSize:30,padding:[0,0,0,20],position:"right",color:"#fff",distance:20,formatter:function(e){return data[e.dataIndex]+"TB"}}}}]};