data=[{startTime:"2021-03-01",endTime:"2021-03-02",value:100},{startTime:"2021-03-02",endTime:"2021-03-03",value:120},{startTime:"2021-03-03",endTime:"2021-03-04",value:150},{startTime:"2021-03-04",endTime:"2021-03-05",value:160},{startTime:"2021-03-05",endTime:"2021-03-06",value:140}],xAxisData1=[],xAxisData2=[],seriesData1=[],seriesData2=[],data.forEach((e,t)=>{xAxisData1.push(e.startTime),xAxisData2.push(e.startTime),seriesData1.push(e.value),seriesData2.push(1),t===data.length-1&&xAxisData2.push(e.endTime)}),option={color:["#ffae00"],title:{text:"分时段平均值",top:20,left:"center",textStyle:{fontSize:20}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){e.map(a=>{});let t="";return t+=e[1].marker+e[1].seriesName+":"+e[0].data,t}},grid:{top:"25%",bottom:"15%"},legend:{data:["入库流量"],top:50,textStyle:{fontSize:14}},xAxis:[{type:"category",data:xAxisData1,show:!1},{type:"category",data:xAxisData2,boundaryGap:!1,position:"bottom",axisPointer:{type:"none"}}],yAxis:{type:"value",name:"流量(m³/s)"},series:[{name:"",type:"bar",stack:"A",xAxisIndex:0,data:seriesData1,itemStyle:{barBorderColor:"rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 0)"}},{name:"入库流量",type:"bar",stack:"A",data:seriesData2,itemStyle:{barBorderRadius:5}}]};