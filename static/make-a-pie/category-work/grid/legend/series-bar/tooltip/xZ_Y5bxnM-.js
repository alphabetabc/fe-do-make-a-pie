let data={female:{name:"女性",data:[{value:22,weight:30,label:"小于1岁"},{value:23,weight:30,label:"1 ～ 9 岁"},{value:4,weight:30,label:"10 ～ 19 岁"},{value:56,weight:30,label:"20 ～ 29 岁"},{value:32,weight:30,label:"30 ～ 39 岁"},{value:5,weight:30,label:"40 ～ 49 岁"},{value:9,weight:30,label:"50 ～ 59 岁"},{value:48,weight:30,label:"大于60岁"}]},male:{name:"男性",data:[{value:5,weight:30,label:"小于1岁"},{value:19,weight:30,label:"1 ～ 9 岁"},{value:23,weight:30,label:"10 ～ 19 岁"},{value:43,weight:30,label:"20 ～ 29 岁"},{value:34,weight:30,label:"30 ～ 39 岁"},{value:53,weight:30,label:"40 ～ 49 岁"},{value:12,weight:30,label:"50 ～ 59 岁"},{value:34,weight:30,label:"大于60岁"}]}},yAxisData=new Set,yAxisDataN=new Set,yAxisDataV=new Set,legendData=[];_.forEach(data,e=>{legendData.push(e.name),_.forEach(e.data,a=>{e.name=="男性"&&yAxisDataN.add(a.label),e.name=="女性"&&yAxisDataV.add(a.label)})});let top=60,bottom=60;yAxisData=[...yAxisData],yAxisDataN=[...yAxisDataN],yAxisDataV=[...yAxisDataV],option={tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow"}},legend:{icon:"none",left:"center",top:24,orient:"horizontal",itemWidth:0,itemHeight:0,y:" center",borderRadius:0,formatter:e=>e==data.female.name?"{a|"+e+"}":"{b|"+e+"}",textStyle:{rich:{a:{padding:[8,15,8,15],align:"center",backgroundColor:"#238bf2"},b:{padding:[8,15,8,15],align:"center",backgroundColor:"#f9c807"}}},data:legendData},grid:[{left:"12%",width:"34%",containLabel:!0,bottom},{left:"50%",width:"0%",top:top+16},{right:"12%",width:"34%",containLabel:!0,bottom}].map(e=>_.merge({top},e)),xAxis:[{type:"value",inverse:!0,axisLabel:{show:!0},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!0}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLabel:{show:!0},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!0}}].map(e=>_.merge(e,{axisLabel:{color:"#949AA8",margin:8},splitLine:{lineStyle:{color:"#E0E0E0",type:"dashed"}}})),yAxis:[{position:"right",axisLabel:{color:"#262C41",show:!0},axisLine:{show:!1},type:"category",inverse:!1,axisTick:{show:!1},data:yAxisDataN},{gridIndex:1,position:"center",type:"category",axisLabel:{show:!1},axisLine:{show:!0}},{gridIndex:2,position:"left",axisLabel:{color:"#262C41"},axisLine:{show:!1},type:"category",inverse:!1,axisTick:{show:!1},data:yAxisDataV}],series:[{name:_.get(data,"female.name"),label:{color:"#767676",position:"left"},itemStyle:{color:"#238bf2",barBorderRadius:[4,0,0,4]},data:_.map(_.get(data,"female.data"),e=>e.value)},{name:_.get(data,"female.name"),label:{color:"#767676",position:"left"},itemStyle:{color:"#a0d0ff",barBorderRadius:[4,0,0,4]},data:_.map(_.get(data,"female.data"),e=>e.weight)},{xAxisIndex:2,yAxisIndex:2,name:_.get(data,"male.name"),label:{color:"#767676",position:"right"},itemStyle:{color:"#f9c807",barBorderRadius:[0,4,4,0]},data:_.map(_.get(data,"male.data"),e=>e.value)},{xAxisIndex:2,yAxisIndex:2,name:_.get(data,"male.name"),label:{color:"#9c9c9c",position:"right"},itemStyle:{color:"#ffeea9",barBorderRadius:[0,4,4,0]},data:_.map(_.get(data,"male.data"),e=>e.weight)}].map(e=>_.merge(e,{type:"bar",barWidth:11,label:{show:!0,fontFamily:"Rubik-Medium",fontSize:14,distance:10}}))};