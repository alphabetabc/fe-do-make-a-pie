var datas={value:80,company:"%",ringColor:[{offset:0,color:"#cf1c27"},{offset:1,color:"#5e37ac"}]},option={backgroundColor:"#142468",title:{text:datas.value+datas.company,x:"center",y:"center",textStyle:{fontWeight:"bold",color:"white",fontSize:"90"}},color:["#282c40"],legend:{show:!1,data:[]},series:[{name:"Line 1",type:"pie",clockWise:!1,startAngle:90,radius:["50%","60%"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,data:[{value:datas.value,name:"",itemStyle:{normal:{color:{colorStops:datas.ringColor},label:{show:!1},labelLine:{show:!1}}}},{name:"",value:100-datas.value},{name:"统计",type:"gauge",splitNumber:30,min:0,max:100,radius:"68%",center:["50%","50%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:[[0,"#0dc2fe"],[1,"#0dc2fe"]]}},axisTick:{show:!0,lineStyle:{color:"#0dc2fe",width:2},length:20,splitNumber:5},splitLine:{show:!0,length:20,lineStyle:{color:"#0dc2fe"}},axisLabel:{show:!1},pointer:{show:0},detail:{borderColor:"#fff",shadowColor:"#fff",shadowBlur:2,offsetCenter:[0,"0%"],textStyle:{color:"#fff",fontSize:30},formatter:"{value}"},data:[]}]},{type:"pie",zlevel:21,silent:!0,radius:["71%","70%"],hoverAnimation:!1,clockWise:!1,startAngle:90,color:"#2dc0c9",data:[1],labelLine:{normal:{show:!1}}},{type:"pie",zlevel:20,silent:!0,radius:["62%","61%"],hoverAnimation:!1,clockWise:!1,startAngle:90,color:"#2dc0c9",data:[1],labelLine:{normal:{show:!1}}},{name:"统计",type:"gauge",splitNumber:30,min:0,max:100,radius:"68%",center:["50%","50%"],clockWise:!1,startAngle:90,endAngle:-269.9999,axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:[[0,"#0dc2fe"],[1,"#0dc2fe"]]}},axisTick:{show:!0,lineStyle:{color:"#0dc2fe",width:2},length:20,splitNumber:5},splitLine:{show:!0,length:20,lineStyle:{color:"#0dc2fe"}},axisLabel:{show:!1},pointer:{show:0},detail:{show:!1}}]};
