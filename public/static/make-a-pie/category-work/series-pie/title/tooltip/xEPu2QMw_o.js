var getxb1=600,getxb2=400,rich={name:{color:"red",fontSize:130,padding:[6,100],align:"left"},percent:{color:"#656565",align:"center",fontSize:103,padding:[5,10]},hr:{borderColor:"#C8C8C8",width:"100%",borderWidth:.5,height:0}};return option={title:{show:!0,left:"45%",bottom:"25%",textAlign:"center",textStyle:{fontWeight:"600",fontSize:"28",color:"#000"}},tooltip:{show:!1},series:[{name:"性别分布",type:"pie",radius:["55%","115%"],startAngle:180,center:["45%","83%"],roseType:"radius",labelLine:{show:!1},label:{normal:{show:!0,position:"center",textStyle:{fontSize:"12px",padding:[-20,0,0,0]},formatter:function(o){for(var e="",r=0;r<option.series[0].data.length-1;r++)r===0?e=e+option.series[0].data[r].value.toString():e=e+" : "+option.series[0].data[r].value.toString();return e}},position:"center",show:!0},data:[{value:getxb1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#4C8DFA"},{offset:1,color:"#5CCFFF"}],!1)}}},{value:getxb2,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFD18B"},{offset:1,color:"#FDAD59"}],!1)}}},{value:getxb1+getxb2,name:"",label:{show:!1},labelLine:{show:!1},itemStyle:{normal:{color:"transparent",borderWidth:0,shadowBlur:0}}}]},{type:"pie",radius:["55%","130%"],startAngle:180,hoverAnimation:!1,center:["45%","83%"],roseType:"radius",labelLine:{normal:{show:!1}},data:[{value:getxb1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(76,141,250,.3)"},{offset:1,color:"rgba(92,207,255,.3)"}],!1)}}},{value:getxb2,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,209,139,.3)"},{offset:1,color:"rgba(253,173,89,.3)"}],!1)}}},{value:getxb1+getxb2,name:"",label:{show:!1},labelLine:{show:!1},itemStyle:{normal:{color:"transparent",borderWidth:0,shadowBlur:0,borderColor:"transparent",shadowColor:"transparent"}}}],z:-1}]},option;