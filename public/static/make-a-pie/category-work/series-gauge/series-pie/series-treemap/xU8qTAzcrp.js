var bgColor="#041F34",borderColor="rgb(88,142,197)";option={backgroundColor:bgColor,color:[borderColor],series:[{type:"pie",zlevel:1,radius:["60%"],center:["50%","105.5%"],silent:!0,startAngle:180,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie1()},{type:"pie",zlevel:0,silent:!0,center:["50%","60%"],radius:["87%","90%"],startAngle:-100,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[1]},{name:"",type:"gauge",splitNumber:15,min:0,max:200,radius:"80%",center:["50%","60%"],axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:[[1,"#666"]]}},axisTick:{show:!0,lineStyle:{color:"auto",width:2},length:28,splitNumber:5},splitLine:{show:!0,length:22,lineStyle:{color:"auto"}},axisLabel:{show:!1},pointer:{show:0},detail:{show:0}},{name:"统计",type:"gauge",splitNumber:15,min:0,max:200,radius:"80%",center:["50%","60%"],axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:[[0,borderColor],[.1,borderColor],[.2,borderColor],[.3,borderColor],[.4,borderColor],[.5,borderColor],[.6,borderColor],[.7,"transparent"],[.8,"transparent"],[.9,"transparent"],[1,"transparent"]]}},axisTick:{show:!0,lineStyle:{color:"auto",width:2},length:28,splitNumber:5},splitLine:{show:!0,length:22,lineStyle:{color:"auto"}},axisLabel:{show:!1},pointer:{show:0,length:"70%",width:2},detail:{show:!1},data:[{name:"",value:10}]},{zlevel:3,top:"95.1%",breadcrumb:{show:!1},levels:[{color:[bgColor]}],itemStyle:{normal:{borderColor:bgColor}},roam:!1,nodeClick:!1,width:"100%",height:80,type:"treemap",data:[{name:"",value:1}]}]};function _pie1(){let l=[];for(var e=0;e<2;e++)e%2===0?l.push({name:(e+1).toString(),value:20,itemStyle:{normal:{color:borderColor,borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):l.push({name:(e+1).toString(),value:20,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return l}
