option={backgroundColor:"#003366",tooltip:{position:"inside",formatter:"小于20%有发展空间<br>20%~40%为健康<br>40%~60%为预警<br>大于60%为过度",textStyle:{fontSize:10}},series:[{name:"刻度",type:"gauge",center:["50%","65%"],radius:"90%",min:0,max:100,splitNumber:8,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#0ab7ff",fontSize:15,distance:-50,formatter:function(e){return e+"%"}},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"#0ab7ff",width:1},length:-3},splitLine:{show:!0,length:-5,lineStyle:{color:"#0ab7ff"}}},{type:"gauge",radius:"80%",center:["50%","65%"],splitNumber:0,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:50,color:[[.2,"#00a65a"],[.4,"#2b64fc"],[.6,"#f39c11"],[1,"#fa4e4b"]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!0,length:"80%",width:"2%"},title:{show:!0,offsetCenter:[0,"60%"],textStyle:{fontWeight:"bold",color:"#0ab7ff",fontSize:30}},detail:{show:!0,offsetCenter:[0,"30%"],color:"#ffffff",formatter:function(e){return e<=20?"有发展空间":e<=40?"健康":e<=60?"预警":"过度"},textStyle:{fontSize:30}},data:[{name:"GDP比重",value:30}]},{type:"pie",radius:"90%",hoverAnimation:!0,label:{normal:{show:!1,position:"center"}},labelLine:{normal:{show:!1}},z:3,zlevel:0,itemStyle:{borderWidth:0},data:[{value:50,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"transparent"}}}]}]};
