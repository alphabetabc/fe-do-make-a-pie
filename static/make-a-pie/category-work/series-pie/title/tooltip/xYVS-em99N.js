let dataArr=[5e3,4500,4e3,3500,3e3,2500,2e3,1500,1e3],obj1={value:0,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"#2281d4",borderWidth:3,borderColor:"transparent"}}},datas=[];for(var i=0;i<dataArr.length;i++)datas.push(obj1);dataArr.map((l,e)=>{let a=0;a+=-20*e,e>4&&(a=10*(dataArr.length-e));let r={value:l,name:"1",label:{normal:{rotate:a}}};datas.push(r)}),option={backgroundColor:"rgb(43, 51, 59)",color:["rgb(62, 131, 217)"],calculable:!0,tooltip:{trigger:"item",formatter:"{b}:<br/>{c}"},calculable:!0,series:[{name:"半圆",type:"pie",radius:["0%","5%"],startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,label:{normal:{show:!1}},data:[{value:"500",name:"半圆",label:{show:!1}},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第一条圆弧",type:"pie",radius:["9.8%","10%"],startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,label:{normal:{show:!1}},data:[{value:"500",name:"第一条圆弧",label:{show:!1}},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第二条圆弧",type:"pie",startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,radius:["19.8%","20%"],label:{normal:{show:!1}},data:[{value:"500",name:"第二条圆弧"},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第三条圆弧",type:"pie",startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,radius:["29.8%","30%"],label:{normal:{show:!1}},data:[{value:"500",name:"第三条圆弧"},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第四条圆弧",type:"pie",startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,radius:["39.8%","40%"],label:{normal:{show:!1}},data:[{value:"500",name:"第四条圆弧"},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第五条圆弧",type:"pie",startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,radius:["49.8%","50%"],label:{normal:{show:!1}},data:[{value:"500",name:"第五条圆弧"},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"第六条圆弧",type:"pie",startAngle:-180,hoverAnimation:!1,legendHoverLink:!0,radius:["59.8%","60%"],label:{normal:{show:!1}},data:[{value:"500",name:"第六条圆弧"},{value:"500",itemStyle:{normal:{color:"transparent"}}}]},{name:"工作类型",type:"pie",radius:[37,255],avoidLabelOverlap:!1,startAngle:0,center:["50.1%","50%"],roseType:"area",selectedMode:"single",label:{normal:{show:!0,formatter:"{b} {c}",position:"inside",color:"#fff"},emphasis:{show:!0}},labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"#2281d4",borderWidth:3,borderColor:"#4b5bd0"}},data:datas}]};
