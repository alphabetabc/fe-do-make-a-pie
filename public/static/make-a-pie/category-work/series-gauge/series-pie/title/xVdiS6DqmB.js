var dataArr={data:65,percent:.65};option={backgroundColor:"#031245",title:[{text:`{a|${dataArr.data}}{b|%}`,top:"center",left:"center",textStyle:{fontWeight:"normal",rich:{a:{fontWeight:"normal",fontSize:45,color:"#FFF",textShadowColor:"#7f00fcff",textShadowBlur:10,fontFamily:"Microsoft YaHei"},b:{fontWeight:"normal",fontSize:30,padding:[0,0,5,5],color:"#FFF",textShadowColor:"#7f00fcff",textShadowBlur:10}}}}],series:[{name:"内层进度条",z:3,type:"gauge",center:["center","center"],radius:"35%",detail:{show:!1,formatter:`${dataArr.data}%`},title:{show:!1},data:[{value:dataArr.data,name:"Percent"}],startAngle:"225",endAngle:"-45",min:0,max:100,splitNumber:20,axisLine:{show:!0,lineStyle:{roundCap:!0,width:30,color:[[dataArr.percent,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6FE9FE"},{offset:1,color:"#FFC4DD"}])],[1,"#15337C"]]}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{name:"外层进度条",type:"gauge",z:2,center:["center","center"],radius:"43%",detail:{show:!1},title:{show:!1},data:[{value:dataArr.data,name:"Percent"}],startAngle:"225",endAngle:"-45",min:0,max:100,axisLine:{show:!0,lineStyle:{roundCap:!0,width:35,color:[[dataArr.percent,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"RGB(111,233,254,0.1)"},{offset:1,color:"#FFC4DD"}])],[1,"#15337C"]]}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{name:"外层刻度",type:"gauge",center:["center","center"],radius:"27%",detail:{show:!1},min:0,max:100,startAngle:"225",endAngle:"-45",axisLabel:{show:!1},splitLine:{show:!1},pointer:{show:!1},axisLine:{show:!1},axisTick:{show:!0,splitNumber:4,lineStyle:{color:"#7987AE",width:3},length:6}},{name:"内部刻度",type:"gauge",center:["center","center"],radius:"20%",detail:{show:!1},startAngle:"0",endAngle:"360",axisLabel:{show:!1},splitLine:{show:!1},pointer:{show:!1},axisLine:{show:!1},axisTick:{show:!0,splitNumber:8,lineStyle:{color:"#7987AE",width:2},length:3}},{name:"内部实心圆",type:"pie",silent:!0,center:["center","center"],radius:"19%",label:{show:!1},itemStyle:{normal:{color:"#041a63"}},data:[{value:100}]},{name:"外层背景",z:1,type:"gauge",center:["center","center"],radius:"45%",detail:{show:!1},startAngle:"225",endAngle:"-45",splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLabel:{show:!1},pointer:{show:!1},axisLine:{lineStyle:{color:[[1,"#15337C"]],width:"100%"}}}]};