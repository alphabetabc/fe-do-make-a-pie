let data=50;option={backgroundColor:"#00111b",polar:{radius:["24%","30%"],center:["50%","50%"]},angleAxis:{max:100*360/270,show:!1,type:"value",startAngle:225},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{type:"bar",data:[{value:data}],itemStyle:{color:function(){let e={type:"linear",x:0,y:.5,x2:1,y2:0,colorStops:[{offset:0,color:"#8ac4d4"},{offset:1,color:"#ec5e26"}]};return data>=0&&data<20?e.colorStops[1].color="#8ac4d4":data>=20&&data<40?(e.y=.3,e.x2=2):data>=40&&data<60?(e.y=.3,e.x2=1.5):data>=60&&data<80&&(e.y=.4,e.x2=1.1),e}},barGap:"-100%",coordinateSystem:"polar",roundCap:!0,cursor:"auto",z:2},{type:"bar",data:[{value:100}],itemStyle:{color:"#013f72",borderWidth:5,bordercolor:""},coordinateSystem:"polar",roundCap:!0,cursor:"auto",emphasis:{itemStyle:{color:"#013f72"}},z:1},{type:"gauge",radius:"35%",startAngle:"225",endAngle:"-45",splitNumber:10,center:["50%","50%"],min:0,max:100,pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:100,name:""}],axisLine:{lineStyle:{width:20,color:[[0,"#5fa7ca"],[1,"#5fa7ca"]],opacity:0}},axisTick:{length:8,lineStyle:{color:"auto"}},splitLine:{show:!1},axisLabel:{show:!0,distance:18,lineHeight:-50,formatter:function(e){return e%100===0?e:""}}}]};