let data={female:{name:"女性",data:[{value:5,label:"小于1岁"},{value:12,label:"1 ～ 9 岁"},{value:10,label:"10 ～ 19 岁"},{value:7,label:"20 ～ 29 岁"},{value:32,label:"30 ～ 39 岁"},{value:40,label:"40 ～ 49 岁"},{value:28,label:"50 ～ 59 岁"},{value:34,label:"大于60岁"}]},male:{name:"男性",data:[{value:5,label:"小于1岁"},{value:19,label:"1 ～ 9 岁"},{value:23,label:"10 ～ 19 岁"},{value:43,label:"20 ～ 29 岁"},{value:34,label:"30 ～ 39 岁"},{value:53,label:"40 ～ 49 岁"},{value:12,label:"50 ～ 59 岁"},{value:34,label:"大于60岁"}]}},yAxisData=new Set,legendData=[];_.forEach(data,e=>{legendData.push(e.name),_.forEach(e.data,a=>{yAxisData.add(a.label)})});let top=60,bottom=60;yAxisData=[...yAxisData],option={tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}},legend:{left:"center",bottom:24,itemWidth:15,itemHeight:11,itemGap:20,borderRadius:4,textStyle:{color:"#262C41",fontSize:14},data:legendData},grid:[{left:"12%",width:"28%",containLabel:!0,bottom},{left:"52%",width:"0%",bottom:bottom+16},{right:"12%",width:"28%",containLabel:!0,bottom}].map(e=>_.merge({top},e)),xAxis:[{type:"value",inverse:!0,axisLabel:{show:!0},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0}},{gridIndex:1,show:!0},{gridIndex:2,type:"value",axisLabel:{show:!0},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0}}].map(e=>_.merge(e,{axisLabel:{color:"#949AA8",margin:0},splitLine:{lineStyle:{color:"#E0E0E0",type:"dashed"}}})),yAxis:[{position:"right",axisLabel:{show:!1},axisLine:{show:!0}},{gridIndex:1,position:"center",axisLabel:{align:"center",padding:[8,0,0,0],fontSize:12,color:"#262C41"},axisLine:{show:!1}},{gridIndex:2,position:"left",axisLabel:{show:!1},axisLine:{show:!0}}].map(e=>_.merge(e,{type:"category",inverse:!1,axisLine:{lineStyle:{color:"#E0E0E0"}},axisTick:{show:!1},data:yAxisData})),series:[{name:_.get(data,"male.name"),label:{position:"left"},itemStyle:{color:"#01C5B2",barBorderRadius:[4,0,0,4]},data:_.map(_.get(data,"male.data"),e=>e.value)},{xAxisIndex:2,yAxisIndex:2,name:_.get(data,"female.name"),label:{position:"right"},itemStyle:{color:"#FB6F6C",barBorderRadius:[0,4,4,0]},data:_.map(_.get(data,"female.data"),e=>e.value)}].map(e=>_.merge(e,{type:"bar",barWidth:11,label:{show:!0,fontFamily:"Rubik-Medium",fontSize:14,distance:10}}))};
