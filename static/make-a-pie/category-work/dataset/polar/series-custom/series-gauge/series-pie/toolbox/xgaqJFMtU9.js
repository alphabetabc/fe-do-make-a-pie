var seriesOption=[{type:"custom",coordinateSystem:"polar",renderItem:function(e,r){return{type:"group",children:[{type:"circle",shape:{cx:e.coordSys.cx,cy:e.coordSys.cy,r:80},style:{fill:"#071039",shadowBlur:66,shadowOffsetX:6,shadowOffsetY:6,shadowColor:"rgba(76,107,167,0.4)"}}]}},itemStyle:{borderWidth:1,borderType:"dotted"}},{type:"gauge",splitNumber:90,radius:"20%",center:["50%","50%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,length:25,lineStyle:{width:1,color:"#FFF"}},axisLabel:{show:!1},pointer:{show:0},detail:{show:0}},{type:"pie",radius:["9%","22%"],hoverAnimation:!1,data:[{name:"三级",value:25,itemStyle:{normal:{color:"rgba(36, 180, 255, 0.5)",borderColor:"rgba(36, 180, 255, 1)",borderWidth:1}}},{name:"二级",value:32,itemStyle:{normal:{color:"rgba(255, 201, 92, 0.5)",borderColor:"rgba(255, 201, 92, 1)",borderWidth:1}}},{name:"一级",value:33,itemStyle:{normal:{color:"rgba(244, 255, 77, 0.5)",borderColor:"rgba(244, 255, 77, 1)",borderWidth:1}}}],label:{normal:{formatter:`

{b|{b}}
{c|{c}万}
{c|}`,padding:[0,-3],rich:{b:{padding:4,fontSize:14,align:"left",color:"#4872A8"},hr:{width:"100%",height:0,borderWidth:1,borderColor:"#4872A8"},c:{padding:4,fontSize:12,align:"right",color:"#B3E3F8"}}}},avoidLabelOverlap:!0,labelLine:{normal:{show:!0,length:25,length2:15,lineStyle:{color:"#94C1FF"}},emphasis:{show:!0}}}];option={backgroundColor:"#071039",dataset:{source:[[1,156]]},angleAxis:{type:"value",startAngle:0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},min:0,max:200},radiusAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{},toolbox:{show:!1},series:seriesOption};
