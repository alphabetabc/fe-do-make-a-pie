for(var data1=[],data2=[],number1=3,number2=3,number3=parseFloat(number1)*6,number4=parseFloat(number2)*6,i=60;i>=0;i--)i<=number3&&data1.push({value:1,name:"景区评分",itemStyle:{color:"#29E8E9",borderWidth:1,borderColor:"#ffffff"}}),i>number3&&i<=30&&data1.push({value:1,name:"景区仕分",itemStyle:{color:"rgba(41,232,233,0.4)"}}),i>30&&i<=60&&data1.push({value:1,name:"景区未评分",itemStyle:{color:"transparent"}});for(var i=60;i>=0;i--)i<=number4&&data2.push({value:1,name:"酒店评分",itemStyle:{color:"#29E8E9",borderWidth:1,borderColor:"#ffffff"}}),i>number4&&i<=30&&data2.push({value:1,name:"酒店失分",itemStyle:{color:"rgba(41,232,233,0.4)"}}),i>30&&i<=60&&data2.push({value:1,name:"酒店未评分",itemStyle:{color:"transparent"}});option={title:[{text:"     "+number1+"分",subtext:"景区综合评分",x:"25%",y:"45%",textStyle:{color:"#FFFFFF",fontSize:14},subtextStyle:{color:"#D0E4F9",fontSize:12}},{text:"     "+number2+"分",subtext:"酒店综合评分",x:"65%",y:"45%",textStyle:{color:"#FFFFFF",fontSize:14},subtextStyle:{color:"#D0E4F9",fontSize:12}}],tooltip:{show:!1},series:[{name:"库存情况",type:"pie",radius:["40%","30%"],center:["30%","50%"],clockwise:!1,data:data1,startAngle:180,hoverAnimation:!1,legendHoverLink:!1,label:{show:!1},labelLine:{show:!1}},{name:"库存情况",type:"pie",radius:["40%","30%"],center:["70%","50%"],clockwise:!1,data:data2,startAngle:180,hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}}}]};