for(var category=[],dottedBase=+new Date,lineData=[],barData=[],i=0;i<19;i++){var date=new Date(dottedBase+=864e5);category.push([date.getFullYear(),date.getMonth()+1,date.getDate()].join("-"));var b=Math.random()*200,d=Math.random()*200;i<11&&barData.push(b),i<11?lineData.push(b+4):lineData.push(+b-3)}option={backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{title:"a",data:["计划完成","实际完成"],textStyle:{color:"#ccc"}},xAxis:{data:category,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"计划完成",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:lineData},{name:"bar",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:barData},{name:"实际完成",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:lineData},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:lineData}]};
