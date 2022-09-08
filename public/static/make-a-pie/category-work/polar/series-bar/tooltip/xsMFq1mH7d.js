let barColor=["#16FFF1","#37D3FF","#FA7575","#FD9D66","#FFE57C"].reverse(),total=0;data=[{name:"其他",value:2},{name:"环境污染",value:6},{name:"城市管理",value:18},{name:"矛盾纠纷",value:22},{name:"其他",value:2}],data.forEach(a=>{total+=a.value});let value=data.map(a=>a.name);option={backgroundColor:"#313131",angleAxis:{type:"value",min:0,max:100,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},radiusAxis:{type:"category",data:value,z:100,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},polar:{center:["50%","50%"],radius:["20%","96%"]},tooltip:{show:!0,formatter:a=>`<span>${a.name}<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${barColor[a.dataIndex]}'></span>占比：${(a.value/total*100).toFixed(0)}%</span>`},series:[{type:"bar",coordinateSystem:"polar",barWidth:6,barGap:10,showBackground:!0,backgroundStyle:{color:"rgba(89,113,126,.5)"},itemStyle:{color:function(a){var e=a.dataIndex;return barColor[e]}},roundCap:!0,data:data.reverse()}]};
