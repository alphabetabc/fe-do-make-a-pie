var uploadedDataURL="/asset/get/s/data-1632648941519-ANY207-X8.png";color=["#8776ff","#fba544","#f36d8e"],data=[{name:"性能",value:"395"},{name:"时间",value:"160"},{name:"速度",value:"141"}],pointData=[{name:"性能",value:"56",x:"67%",y:"30%",symbolSize:85,itemStyle:{borderWidth:4,borderColor:"#6b03f0",shadowColor:"#ccc",shadowBlur:22,shadowOffsetY:12,shadowOffsetX:0}},{name:"时间",value:"20",x:"71%",y:"40%",symbolSize:70,itemStyle:{borderWidth:4,borderColor:"#f47d07"}},{name:"速度",value:"24",x:"76%",y:"30%",symbolSize:60,itemStyle:{borderWidth:4,borderColor:"#555588"}}],option={backgroundColor:"#eef1fa",title:{show:!1},series:[{name:"饼图",type:"pie",radius:["38%","40%"],z:3,splitNumber:6,startAngle:0,endAngle:360,itemStyle:{normal:{borderRadius:10,borderWidth:5,color:function(e){return color[e.dataIndex]}}},label:{show:!1,width:100,height:60,padding:[20,0],backgroundColor:"#fff",borderWidth:5,borderColor:"auto",verticalAlign:"middle",align:"center",borderRadius:80,position:"outside",formatter:`{title|{b}}
{per|{d}}{font|%}`,rich:{title:{align:"center",fontSize:14,fontWeight:600,color:"#555588",lineHeight:30},per:{align:"center",fontSize:24,fontWeight:"bold"},font:{align:"left",fontSize:14,fontWeight:"bold"}}},labelLine:{show:!1,length:30,length2:40},markPoint:{symbol:"circle",itemStyle:{color:"#fff"},label:{show:!0,verticalAlign:"middle",align:"center",borderRadius:80,position:"inside",formatter:function(e){return`{title|${e.data.name}}
{per|${e.data.value}}{font|%}`},rich:{title:{align:"center",fontSize:12,fontWeight:500,color:"#555588",lineHeight:20},per:{align:"center",fontSize:22,fontWeight:500},font:{align:"left",fontSize:12,fontWeight:"bold"}}},animation:!1,data:pointData},data,axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{name:"外部刻度",type:"gauge",radius:"65%",min:0,max:200,splitNumber:30,startAngle:0,endAngle:360,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!0,splitNumber:6,length:35,lineStyle:{color:"#e2defd",width:1}},splitLine:{show:!0,length:35,lineStyle:{color:"#e2defd",width:1}},detail:{show:!1},pointer:{show:!1}},{type:"pie",radius:["0","30%"],z:3,hoverAnimation:!1,data:[{value:75,itemStyle:{normal:{color:"#706dfc",shadowColor:"#ccc",shadowBlur:22,shadowOffsetY:12,shadowOffsetX:0}},label:{normal:{formatter:function(e){return`{icon|}
{title|总   览}
{a|`+e.value+"}{font|%}"},position:"center",show:!0,color:"#ffffff",rich:{icon:{height:50,align:"center",backgroundColor:{image:uploadedDataURL}},title:{fontSize:16,fontWeight:600,lineHeight:40},a:{align:"center",fontSize:74,fontWeight:600},font:{verticalAlign:"top",fontSize:26}}}},labelLine:{show:!1}}],animationType:"scale"},{type:"pie",radius:"65%",avoidLabelOverlap:!1,z:0,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1}],itemStyle:{normal:{color:"#ffffff",shadowColor:"#e7e5ff",shadowBlur:22,shadowOffsetY:12,shadowOffsetX:0}},animationType:"scale"},{type:"pie",radius:"47%",avoidLabelOverlap:!1,z:1,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1}],itemStyle:{normal:{color:"#eef1fa"}}},{type:"pie",radius:["36%","42%"],avoidLabelOverlap:!1,z:2,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1}],itemStyle:{normal:{color:"#fff"}}},{type:"gauge",radius:"80%",startAngle:360,endAngle:0,progress:{show:!1},axisLine:{lineStyle:{color:[[.5,"#d2d1f5"],[1,"#eef1fa"]],width:2}},axisTick:{show:!1},axisLabel:{show:!1},anchor:{show:!1},title:{show:!1},detail:{show:!0},splitNumber:4,splitLine:{show:!0,length:40,distance:-20,lineStyle:{width:100,color:"#eef1fa"}}},{type:"pie",radius:["86%","90%"],z:1,avoidLabelOverlap:!1,hoverAnimation:!1,legendHoverLink:!1,silent:!1,label:{show:!1},labelLine:{show:!1},emphasis:{},data:[{value:1}],itemStyle:{normal:{color:"#f4f4fd"}}}]};
