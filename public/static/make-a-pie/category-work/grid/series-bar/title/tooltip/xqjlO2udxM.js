var data=[{name:"设备总数",value:50},{name:"运行中",value:40},{name:"关机",value:30},{name:"故障",value:20},{name:"低电量",value:10}],color=["#1a9bfc","#94d96c","#999","#e32f46","#ffc20e"],xData=[],yData=[],min=0,max=100;data.map(function(e,a){xData.push(e.name),e.value===0?yData.push(e.value+min):yData.push(e.value)}),option={backgroundColor:"#111c4e",title:{text:"物联设备概况条形统计图",subtext:"2018年",subtextStyle:{color:"#fff"},textStyle:{color:"#fff",align:"center",width:"200"},left:"center"},color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}},formatter:function(e){return e[0].data===min?e[0].name+"：0":e[0].name+"："+e[0].data}},grid:{left:"0%",right:"0%",bottom:"5%",top:"7%",height:"85%",containLabel:!0,z:22},xAxis:[{type:"category",gridIndex:0,data:xData,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{show:!0,color:"rgb(170,170,170)",fontSize:14}}],yAxis:[{type:"value",gridIndex:0,splitLine:{show:!1},axisTick:{show:!1},min,max,axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{color:"rgb(170,170,170)",formatter:"{value}"}},{type:"value",gridIndex:0,min,max:100,splitNumber:12,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}}],series:{name:"个数",type:"bar",barWidth:"20%",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:function(e){var a=color.length;return color[e.dataIndex%a]}}},label:{normal:{show:!0}},data:yData,zlevel:1}};