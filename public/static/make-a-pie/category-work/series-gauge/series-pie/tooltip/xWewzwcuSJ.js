option={backgroundColor:"#072B79",tooltip:{formatter:"{b}{c}"},series:[{tooltip:{show:!1},name:"wrap",type:"pie",hoverAnimation:!1,legendHoverLink:!1,center:["50%","60%"],radius:["0%","7%"],z:5,label:{normal:{show:!1,position:"center"},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#072B79"},emphasis:{color:"#072B79"}}}]},{tooltip:{show:!1},name:"wrap",type:"pie",hoverAnimation:!1,legendHoverLink:!1,center:["50%","60%"],radius:["6%","8%"],z:5,label:{normal:{show:!1,position:"center"},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#24D8E7"},emphasis:{color:"#24D8E7"}}}]},{tooltip:{show:!1},name:"刻度",type:"gauge",radius:"83%",z:1,min:0,max:1,center:["50%","60%"],splitNumber:5,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:5,color:[[.12,"#E71A6D"],[.35,"#F88168"],[.63,"#FBF76B"],[.8,"#7AD4DF"],[1,"#70C27E"]]}},axisLabel:{show:!1},axisTick:{show:!0,lineStyle:{color:"auto",width:0},length:-15},splitLine:{show:!0,length:0,lineStyle:{color:"auto",width:2}},detail:{show:!1},pointer:{show:!1}},{name:"本期",type:"gauge",radius:"80%",min:0,max:1,center:["50%","60%"],data:[{value:.89,name:"本期"}],splitNumber:12,startAngle:180,endAngle:0,z:5,axisLine:{show:!0,lineStyle:{width:0,color:[[.12,"#E71A6D"],[.35,"#F88168"],[.63,"#FBF76B"],[.8,"#7AD4DF"],[1,"#70C27E"]]}},axisLabel:{show:!0,color:"#fff",fontSize:20,distance:-70,formatter:function(t){var e=t.toFixed(2);return e==0?"危":e==.25?"差":e==.5?"中":e==.75?"良":e==1?"优":""}},axisTick:{splitNumber:10,show:!0,lineStyle:{color:"auto",width:2},length:20},splitLine:{show:!0,length:25,lineStyle:{color:"auto",width:5}},itemStyle:{normal:{color:"#24D8E7"}},pointer:{width:10,length:"80%"},detail:{formatter:function(t){return(t*100).toFixed(0)+"%"},fontSize:50,color:"#fff",offsetCenter:["0%","-35%"]},title:{offsetCenter:["0","-60%"],fontSize:40,color:"#fff",show:!0}}]};