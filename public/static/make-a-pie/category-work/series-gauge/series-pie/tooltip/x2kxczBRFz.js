let value=.89,color=[[value,"#15ffff"],[1,"#ffb2ad"]];option={backgroundColor:"none",tooltip:{formatter:"{b}{c}"},series:[{tooltip:{show:!1},name:"wrap",type:"pie",hoverAnimation:!1,legendHoverLink:!1,center:["50%","60%"],radius:["2%","3%"],z:5,label:{normal:{show:!1,position:"center"},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#24D8E7"},emphasis:{color:"#24D8E7"}}}]},{name:"占比",type:"gauge",radius:"70%",min:0,max:1,center:["50%","60%"],data:[{value,name:"占比"}],splitNumber:10,startAngle:180,endAngle:0,z:5,axisLine:{show:!0,lineStyle:{width:0,color}},axisLabel:{show:!0,color:"#fff",fontSize:20,distance:-70,formatter:function(e){var t=e.toFixed(2);return t==0?"男":t==1?"女":""}},axisTick:{splitNumber:10,show:!0,lineStyle:{color:"auto",width:3},length:30},splitLine:{show:!0,length:35,lineStyle:{color:"auto",width:5}},itemStyle:{normal:{color:"#fff"}},pointer:{width:10,length:"80%"},detail:{formatter:function(e){return(e*100).toFixed(0)+"%"},fontSize:50,color:"#fff",offsetCenter:["0%","-35%"]},title:{offsetCenter:["0","-60%"],fontSize:40,color:"#fff",show:!0}}]};