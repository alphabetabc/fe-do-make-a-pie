const item={value:.75,status:"这是我的标签",name:"这是我的名称"};option={angleAxis:{max:100,clockwise:!1,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{center:["50%","50%"],radius:"188%"},series:[{z:1,type:"pie",radius:["98%","90%"],center:["50%","50%"],data:[{value:0,itemStyle:{normal:{color:"#eee"}},label:{show:!1},labelLine:{normal:{smooth:!0,lineStyle:{width:0}}},hoverAnimation:!1},{label:{show:!1},labelLine:{normal:{smooth:!0,lineStyle:{width:0}}},value:100-Math.floor(Math.abs(item.value)*100),hoverAnimation:!1,itemStyle:{color:"#eee",emphasis:{color:"#eee"}}}]},{type:"pie",z:3,center:["50%","50%"],radius:["90%","0%"],data:[{label:{show:!1},labelLine:{normal:{smooth:!0,lineStyle:{width:0}}},value:0,hoverAnimation:!1,itemStyle:{color:"#fff",shadowOffsetY:3,shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10,emphasis:{color:"#fff"}}}]},{type:"pie",z:4,center:["50%","50%"],radius:["50%","0%"],data:[{label:{show:!0,formatter:[`{b|${item.name}}`,"{d|}",`{a|${item.value!=="--"?(Math.abs(item.value)*100).toFixed(2)+"%":"--"}}`,`{c|${item.status}}`].join(`
`),position:"center",rich:{a:{fontSize:72,color:"#ee011c",textAlign:"center",padding:[0,0,12,0]},b:{fontSize:36,color:"#999",padding:[0,0,12,0]},c:{padding:[8,6,6,6],backgroundColor:"rgba(74,144,226,0.5)",fontSize:20,color:"#fff"}}},labelLine:{normal:{smooth:!0,lineStyle:{width:0}}},value:0,hoverAnimation:!1,itemStyle:{color:"#fff",shadowOffsetY:3,shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10,emphasis:{color:"#fff"}}}]},{z:2,type:"bar",roundCap:!0,data:[{value:Math.abs(item.value)*100,itemStyle:{normal:{shadowOffsetY:2,shadowColor:"rgba(0, 0, 0, 0.39)",shadowBlur:10,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ee011c"},{offset:1,color:"#4a90e2"}],global:!1}}}}],coordinateSystem:"polar",barWidth:30}]};