let value=76.33,title="同比",int=value.toFixed(2).split(".")[0],float=value.toFixed(2).split(".")[1];option={title:{text:"{a|"+int+"}{b|."+float+`%}
{c|`+title+"}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:48,color:"#29EEF3"},b:{fontSize:48,color:"#29EEF3"},c:{fontSize:20,color:"#000000",padding:[5,0]}}}},series:[{type:"gauge",radius:"60%",clockwise:!1,startAngle:"90",endAngle:"-269.9999",splitNumber:80,detail:{offsetCenter:[0,-20],formatter:" "},pointer:{show:!1},axisLine:{show:!0,lineStyle:{color:[[0,"#007fff"],[.7622,"rgba(32,187,252,0.15)"],[1,"#8250e5"]],width:30}},axisTick:{show:!1},splitLine:{show:!0,length:32,lineStyle:{width:6}},axisLabel:{show:!1}}]};