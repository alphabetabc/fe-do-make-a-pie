var labelStyle={show:!0,rich:{a:{color:"#fff",align:"center",fontSize:20,fontWeight:"bold"},b:{color:"#fff",align:"center",fontSize:10}},formatter:function(e){return"{a|"+e.value+`%}

{b|在线统计}`},position:"center"},itemStyles=function(e,a){return{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e},{offset:1,color:a}]),borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e},{offset:1,color:a}]),borderWidth:5}};option={backgroundColor:"#0e2147",series:[{center:["25%","50%"],radius:["12%","13%"],clockWise:!1,hoverAnimation:!1,type:"pie",label:{show:!1},labelLine:{show:!1},itemStyle:itemStyles("rgba(209,226,112,1)","rgba(175,191,86,1)"),data:[{name:" ",value:20,itemStyle:{borderWidth:0}},{name:"",label:labelStyle,value:80}]},{center:["50%","50%"],radius:["12%","13%"],clockWise:!1,hoverAnimation:!1,type:"pie",label:{show:!1},labelLine:{show:!1},itemStyle:itemStyles("rgba(241,155,88,1)","rgba(242,119,22,1)"),data:[{name:" ",value:20,itemStyle:{borderWidth:0}},{name:"",label:labelStyle,value:80}]},{center:["75%","50%"],radius:["12%","13%"],clockWise:!1,hoverAnimation:!1,type:"pie",label:{show:!1},labelLine:{show:!1},itemStyle:itemStyles("rgba(220,122,111,1)","rgba(190,65,85,1)"),data:[{name:" ",value:20,itemStyle:{borderWidth:0}},{name:"",label:labelStyle,value:80}]}]};