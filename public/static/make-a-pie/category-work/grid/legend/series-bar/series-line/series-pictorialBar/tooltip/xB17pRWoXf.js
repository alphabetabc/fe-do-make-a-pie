var category=[],lineData=[],barData=[],dottedBase=new Date;dottedBase.setMonth(dottedBase.getMonth()-12),dottedBase.setDate(dottedBase.getDate()-dottedBase.getDate()+1);for(var date=dottedBase,i=0;i<12;i++){date.setMonth(date.getMonth()+1),category.push([date.getFullYear(),date.getMonth()+1,date.getDate()].join("-"));var b=Math.random()*20,d=Math.random()*20,h=d+b;barData.push(b.toFixed(2)),lineData.push(h.toFixed(2))}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}},formatter:"{a0}: {c0}<br />{a1}: {c1}"},legend:{data:["投资收益","扶贫企业"],textStyle:{color:"#ccc"}},xAxis:{data:category,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"投资收益",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:lineData},{name:"扶贫企业",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:barData},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:lineData},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:lineData}]};
