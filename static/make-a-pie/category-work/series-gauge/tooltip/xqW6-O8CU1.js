var dataArr=150,colorSet={color:"rgba(251,218,147,1)"},option={backgroundColor:"#000",tooltip:{formatter:"{a} <br/>值 : {c}"},grid:{top:0,left:0,right:0,bottom:0},series:[{name:"内部进度条",type:"gauge",center:["50%","60%"],radius:"48%",min:0,max:260,startAngle:180,endAngle:0,axisLine:{lineStyle:{color:[[dataArr/260,colorSet.color],[1,"rgba(25,42,57,0.5"]],width:30}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{offsetCenter:[0,-50],textStyle:{fontSize:20,fontWeight:"700",color:colorSet.color}},title:{show:!0,offsetCenter:[0,-5],textStyle:{color:"#fff",fontSize:15,fontWeight:400,fontFamily:"PingFangSC"}},data:[{name:"进入人数",value:dataArr}],pointer:{show:!1,length:"75%",radius:"20%",width:5},animationDuration:4e3},{name:"外部刻度",type:"gauge",center:["50%","60%"],radius:"50%",min:0,max:260,splitNumber:6,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#5c86aa",distance:-50,fontSize:20,formatter:function(e){switch(e+""){case"0":return"0";case"10":return"10";case"20":return"20";case"260":return"260"}}},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"#ff0",width:5},length:-1},splitLine:{show:!1,length:-10,lineStyle:{color:"#5c86aa"}},detail:{show:!1},pointer:{show:!0}}]};
