data=100,option={title:{text:"",x:"center",top:"43%",textStyle:{fontSize:"90",color:"#be8c3c",foontWeight:"500"}},polar:{radius:["30%","40%"],center:["50%","50%"]},angleAxis:{max:100*360/270,show:!1,type:"value",startAngle:225},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{type:"gauge",radius:"29%",startAngle:"225",endAngle:"-45",splitNumber:10,center:["50%","50%"],min:0,max:100,pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[],axisLine:{show:!1},axisTick:{length:5,lineStyle:{color:"auto"}},splitLine:{show:!1},axisLabel:{show:!1}},{type:"bar",data:[{value:data}],itemStyle:{color:{type:"linear",x:0,y:.5,x2:1,y2:0,colorStops:[{offset:0,color:"blue"},{offset:1,color:"cyan"}]}},barGap:"-100%",coordinateSystem:"polar",roundCap:!1,cursor:"auto",z:2},{type:"bar",data:[{value:100}],itemStyle:{color:"#cccccc"},barGap:"-100%",coordinateSystem:"polar",roundCap:!1,cursor:"auto",emphasis:{itemStyle:{color:"#cccccc"}},z:1},{type:"pie",hoverAnimation:!1,radius:["39%","45%"],center:["50%","50%"],startAngle:225,labelLine:{normal:{show:!1}},label:{normal:{position:"center"}},data:[{value:75,itemStyle:{normal:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(30, 144, 255, 0.1)"},{offset:.6,color:"rgba(30, 144, 255, 0.8)"},{offset:1,color:"rgba(30, 144, 255, 0.8)"}]}}}},{value:25,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0,0,0,0)",borderWidth:0},emphasis:{color:"rgba(0,0,0,0)",borderWidth:0}}}],z:-1}]},option.title.text="60%",option.series[1].data[0].value=60,myChart.setOption(option,!0);
