var color=["#e9df3d","#f79c19","#21fcd6","#08c8ff","#df4131"],data=[210,120,189,78,93];option={backgroundColor:"#01193d",grid:{position:"center"},radar:{shape:"circle",splitNumber:4,axisLine:{show:!0,lineStyle:{color:"rgba(4, 130, 248, 0.5)",width:"4"}},indicator:[{name:"",max:400},{name:"",max:400},{name:"",max:400},{name:"",max:400},{name:"",max:400}],splitArea:{show:!1},splitLine:{show:!0,lineStyle:{color:["rgba(4, 130, 248, 0)","rgba(4, 130, 248, 0.5)","rgba(4, 130, 248, 0.5)","rgba(4, 130, 248, 0.5)"],width:"4"}}},series:[{z:1,type:"radar",silent:!0,data:[{value:[300,0,0,0,0],symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:"yellow"}}}]},{z:1,type:"radar",silent:!0,data:[{value:[0,300,0,0,0],symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:"pink"}}}]},{z:1,type:"radar",silent:!0,data:[{value:[0,0,300,0,0],symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:"red"}}}]},{z:1,type:"radar",silent:!0,data:[{value:[0,0,0,300,0],symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:"orange"}}}]},{z:1,type:"radar",silent:!0,data:[{value:[0,0,0,0,300],symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:"green"}}}]},{z:90,type:"radar",silent:!0,data:[{value:data,symbol:"none",lineStyle:{normal:{color:"rgba(203, 158, 24, 1)",width:1}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(4, 130, 248, 1)",opacity:1},{offset:0,color:"rgba(195, 241, 255, 1)",opacity:1},{offset:1,color:"rgba(4, 130, 248, 1)",opacity:1}],!1),opacity:1}}}]}]};
