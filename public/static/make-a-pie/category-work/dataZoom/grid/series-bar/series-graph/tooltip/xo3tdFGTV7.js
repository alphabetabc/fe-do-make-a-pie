var data=generateData(),links=data.valueData5.map(function(e,l){return{source:l,target:l+1}});links.pop();var option={tooltip:{trigger:"item",axisPointer:{type:"shadow"},textStyle:{align:"left"},transitionDuration:0,formatter:function(e,l,i){var r=e.seriesName,t="";return r=="线路拜访"&&(t=data.valueData1[e.dataIndex].title+"<br/>得分："),r=="线外拜访"&&(t=data.valueData2[e.dataIndex].title+"<br/>得分："),r=="线路新增"&&(t=data.valueData3[e.dataIndex].title+"<br/>得分："),r=="订单金额"&&(t=data.valueData4[e.dataIndex].title+"<br/>成交金额："),r=="订单金额"&&(t=data.valueData5[e.dataIndex].title+"<br/>成交金额："),e.seriesName+"<br/>"+t+e.value+"<br/>"+e.name}},grid:[{top:"30",bottom:"15%",right:"50",left:"55"},{top:"85%",bottom:"50",right:"50",left:"55"}],dataZoom:[{type:"slider",startValue:465,endValue:1260,zoomLock:"true",brushSelect:!1}],xAxis:[{type:"category",data:data.categoryData,axisLabel:{fontWeight:"bold",fontSize:10,interval:59},axisTick:{interval:15}}],yAxis:[{max:data.maxAmount,axisLine:{show:!0},name:"订单金额",axisLabel:{formatter:function(e,l){return e>999999?(e=e+"",e.substring(0,6)+`
`+e.substring(6)):e},fontSize:10}},{max:data.maxScore,name:"分数",axisLabel:{fontSize:10},axisLine:{show:!0}},{inverse:!0,max:10,axisLabel:{fontSize:10},axisLine:{show:!1},interval:10}],series:[{type:"bar",name:"线路拜访",data:data.valueData1,barGap:"-100%",barWidth:"100%",itemStyle:{color:"#003366"}},{type:"bar",name:"线外拜访",data:data.valueData2,barGap:"-100%",barWidth:"100%",itemStyle:{color:"#006699"}},{type:"bar",name:"线路新增",data:data.valueData3,barGap:"-100%",barWidth:"100%",itemStyle:{color:"#4cabce"}},{name:"得分",symbolSize:5,yAxisIndex:1,data:data.valueData5,type:"graph",links,lineStyle:{color:"#E43961",width:2},label:{show:!1},coordinateSystem:"cartesian2d",zlevel:999999,itemStyle:{color:"#E43961"}},{type:"bar",yAxisIndex:2,name:"任务",data:data.valueData4,barGap:"-100%",barWidth:"100%",itemStyle:{color:"#4cabce"}}]};function generateData(){for(var e=+new Date(2020,10,17),l=[],i=[],r=[],t=[],o=[],n=[],s=100,u=1100,v=Math.floor(u*.11),a=0;a<=1440;a++)l.push(echarts.format.formatTime("hh:mm",e)),a>=495&&a<500?i.push({value:556,title:"门店1<br>工时30",type:"1"}):i.push({value:0,title:""}),a>=510&&a<520?r.push({value:681,title:"门店2<br>工时35",type:"1"}):r.push({value:0,title:""}),a>=930&&a<=933?t.push({value:742,title:"门店3<br>工时35",type:"1"}):t.push({value:0,title:""}),a>=495&&a<500?o.push({value:10,title:"门店1",type:"1"}):o.push({value:0,title:"",type:"0"}),(a==931||a==953||a==1013||a==1133||a==431||a==453||a==513||a==533||a==631||a==653||a==713||a==733||a==831||a==853)&&n.push([echarts.format.formatTime("hh:mm",e),Math.floor(Math.random()*100)]),e+=6e4;return{categoryData:l,valueData1:i,valueData2:r,valueData3:t,valueData4:o,valueData5:n,maxAmount:u,maxScore:s}}