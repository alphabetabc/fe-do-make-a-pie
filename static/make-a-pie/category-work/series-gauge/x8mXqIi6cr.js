option={backgroundColor:"#001533",series:[{type:"gauge",name:"外圈灰色线",radius:"98%",splitNumber:0,axisLine:{lineStyle:{color:[[1,"#818184"]],width:3}},splitLine:{show:!1},detail:{show:!1}},{radius:"88%",splitNumber:"52",axisLine:{show:!1,lineStyle:{color:[[1,"#818184"]],width:20}},splitLine:{length:15,lineStyle:{width:2,color:"#818184",distance:10}},detail:{show:!1}},{radius:"75%",splitNumber:"15",axisLine:{show:!1},splitLine:{length:25,lineStyle:{color:"#2f9ed3",width:25}},detail:{show:!1}},{radius:"60%",splitNumber:0,axisLine:{lineStyle:{color:[[1,"#818184"]],width:3}},splitLine:{show:!1},detail:{show:!1}},{radius:"50%",splitNumber:"10",axisLine:{lineStyle:{color:[[0,"#37c0fe"],[1,"#175068"]],width:25}},pointer:{show:!0,length:"40%",radius:"20%",width:8},itemStyle:{normal:{color:"rgb(0,191,255)"}},splitLine:{length:30,lineStyle:{color:"#001533",width:25}},detail:{show:!0,formatter:function(e){return e!==0?e:0},textStyle:{fontSize:25,fontWeight:"700",color:"#67d9fe"}},data:[{name:"",value:50}]}]};for(var i=0;i<option.series.length;i++)option.series[i].type="gauge",option.series[i].startAngle=270,option.series[i].endAngle=-89.9999,option.series[i].center=["50%","50%"],option.series[i].axisTick={show:!1},option.series[i].axisLabel={show:!1};var num1=0,myInterval=setInterval(function(){num1+=Math.round(Math.random())===0?.011:.005,num1>=1&&(num1=0),option.series[4].axisLine.lineStyle.color=[[num1,"#37c0fe"],[1,"#175068"]]},50);
