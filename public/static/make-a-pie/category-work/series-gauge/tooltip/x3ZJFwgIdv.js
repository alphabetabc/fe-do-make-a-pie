option={backgroundColor:"#001533",tooltip:{format:function(e){console.log(e)}},series:[{type:"gauge",name:"外圈灰色线",radius:"90%",splitNumber:0,axisLine:{lineStyle:{color:[[1,"#818184"]],width:2}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},detail:{show:!1}},{radius:"86%",splitNumber:180,min:0,max:100,axisLine:{lineStyle:{color:[[1,"#818184"]],width:2}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{radius:"80%",splitNumber:"180",axisLine:{show:!1},pointer:{show:!1,length:"80%",radius:"20%",width:5},itemStyle:{normal:{color:"rgb(0,191,255)"}},splitLine:{length:15,lineStyle:{width:2,color:"#01b4e0",distance:5}},axisTick:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{radius:"80%",splitNumber:4,min:0,max:100,pointer:{show:!0,length:"80%",radius:"20%",width:5},itemStyle:{normal:{color:"rgb(0,191,255)"}},axisLine:{show:!0,fontSize:20,lineStyle:{width:0,color:[[1,"#01b4e0"]]}},splitLine:{length:30,lineStyle:{width:2,color:"#01b4e0",distance:5}},axisTick:{show:!1},axisLabel:{show:!0,fontSize:20,color:"#fff"},detail:{show:!0,formatter:function(e){return e!==0?e:0},textStyle:{fontSize:30,fontWeight:"700",color:"#67d9fe"}},data:[{name:"",value:50}]}]};for(var i=0;i<option.series.length;i++)option.series[i].type="gauge",option.series[i].startAngle=270,option.series[i].endAngle=-89.9999,option.series[i].center=["50%","50%"];
