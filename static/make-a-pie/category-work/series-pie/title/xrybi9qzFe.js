var option={title:{text:"CPU使用率",x:"50%",y:"45%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:24},subtextStyle:{fontWeight:"bold",fontSize:32,color:"#3ea1ff"}},series:[{name:" ",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,startAngle:225,color:["#9f8fc1","transparent"],hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:75,name:"1"},{value:25,name:"2"}]},{name:"",type:"pie",radius:["52%","68%"],avoidLabelOverlap:!1,startAngle:317,color:["#fff","transparent"],hoverAnimation:!1,legendHoverLink:!1,clockwise:!1,itemStyle:{normal:{borderColor:"transparent",borderWidth:"20"},emphasis:{borderColor:"transparent",borderWidth:"20"}},z:10,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{name:""},{name:""}]}]};app.timeTicket=setInterval(function(){var e=parseInt(Math.random()*55)+30,t=(100-e)*266/360;option.title.subtext=e+"%",option.series[1].data[0].value=t,option.series[1].data[1].value=100-t,myChart.setOption(option,!0)},1e3);
