option={backgroundColor:"rgba(255,255,255,0)",tooltip:{formatter:"{a} <br/>{c} {b}"},toolbox:{show:!0,feature:{restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"计划项目建成投产率",type:"gauge",z:3,min:0,max:100,splitNumber:10,radius:"50%",axisLine:{lineStyle:{width:10}},axisTick:{length:15,lineStyle:{color:"auto"}},splitLine:{length:20,lineStyle:{color:"auto"}},title:{textStyle:{fontWeight:"bolder",fontSize:20,fontStyle:"italic"}},detail:{textStyle:{fontWeight:"bolder"}},data:[{value:40,name:"计划项目投产率（%）"}]},{name:"计划施工项目数（个）",type:"gauge",center:["22%","55%"],radius:"35%",min:0,max:8e3,endAngle:45,splitNumber:8,axisLine:{lineStyle:{width:8}},axisTick:{length:12,lineStyle:{color:"auto"}},splitLine:{length:20,lineStyle:{color:"auto"}},pointer:{width:5},title:{offsetCenter:[0,"-30%"]},detail:{textStyle:{fontWeight:"bolder"}},data:[{value:6458,name:"个"}]},{name:"计划项目投产个数（个）",type:"gauge",center:["79%","55%"],radius:"35%",min:0,max:8e3,startAngle:140,endAngle:-45,splitNumber:8,axisLine:{lineStyle:{width:8}},axisTick:{length:12,lineStyle:{color:"auto"}},splitLine:{length:20,lineStyle:{color:"auto"}},pointer:{width:5},title:{offsetCenter:[0,"-30%"]},detail:{textStyle:{fontWeight:"bolder"}},data:[{value:2583,name:"个"}]}]},setInterval(function(){option.series[0].data[0].value=(Math.random()*100).toFixed(2)-0,option.series[1].data[0].value=(Math.random()*7).toFixed(2)-0,option.series[2].data[0].value=(Math.random()*2).toFixed(2)-0},2e3);
