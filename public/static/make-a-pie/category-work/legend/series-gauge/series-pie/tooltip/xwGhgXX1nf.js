option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:"center",data:["内部","外部"],bottom:"20%",icon:"circle",itemGap:50},series:[{name:"访问来源",type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:"30%",center:["50%","50%"],label:{show:!0,formatter:"{d}%"},data:[{value:20,name:"内部",itemStyle:{normal:{color:"#ffc545"},emphasis:{color:"#ffc545"}}},{value:152,name:"外部",itemStyle:{normal:{color:"#22cfe0"},emphasis:{color:"#22cfe0"}}}]},{name:"大环",type:"gauge",splitNumber:30,radius:"34%",center:["50%","50%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!1},axisTick:{show:!0,length:5,lineStyle:{color:"#1cbdca"}},splitLine:{show:!1,length:3},axisLabel:{show:!1},detail:{show:!1}},{type:"pie",zlevel:2,silent:!0,radius:["36%","38%"],startAngle:85,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie2()}]};function _pie2(){let a=[];for(var e=0;e<8;e++)e%2===0?a.push({name:(e+1).toString(),value:18,itemStyle:{normal:{color:"#1fbfcd",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):a.push({name:(e+1).toString(),value:2,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return a}
