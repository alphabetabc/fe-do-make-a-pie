var dataValArray=.63,value=25,max=50;color=[["#49afff"],["#68A54A"],["#f56c6c"]];var uploadedDataURL="/asset/get/s/data-1559120606810-8K55q2kWT.png";option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},angleAxis:{axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1},min:0,max:6.666,startAngle:225},radiusAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:["a","b","c"],z:10},polar:{radius:"85%"},series:[{type:"bar",data:[,,value/10],z:1,coordinateSystem:"polar",barMaxWidth:10,name:"当前温度",roundCap:!0,color:[],barGap:"-100%"},{type:"bar",data:[,,5],z:0,silent:!0,coordinateSystem:"polar",barMaxWidth:45,name:"",roundCap:!0,color:"rgb(255,255,255,0.5)",barGap:"-100%"},{name:"温度",type:"gauge",max:50,startAngle:225,endAngle:-45,detail:{formatter:["{value}℃","{a|当前温度}"].join(`
`),fontSize:120,width:"100%",height:"30%",padding:[-300,0,0,0],rich:{a:{color:"#666",fontSize:30,padding:[10,0,10,0]}}},data:[{value}],axisLine:{lineStyle:{color:[[.4,"#49afff"],[.6,"#68A54A"],[1,"#f56c6c"]],width:22}},splitLine:{length:15,lineStyle:{width:1}},splitNumber:50,axisLabel:{distance:-20,show:!0,formatter:function(a){return a===0||a===50?a+"℃":""},lineHeight:-60,fontSize:40},pointer:{show:!1},axisTick:{show:!1}}]};function init_polarColor(a){0<a&&a<20?option.series[0].color[0]="#49afff":20<=a&&a<30?option.series[0].color=color[1]:30<=a&&a<=50&&(option.series[0].color=color[2]),series[0].color=color[0]}setInterval(function(){let a=value;myChart.setOption(option,!0),init_polarColor(value)},2e3);
