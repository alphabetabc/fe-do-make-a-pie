var numbers={max:100,value:70.12,xl:"本月销量",name:"销售总览",colorA:"#05D2C3",colorB:"#2FD587"},axislineColor=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:numbers.colorA},{offset:1,color:numbers.colorB}]);option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{center:["50%","50%"],name:"刻度",type:"gauge",radius:"77%",min:0,max:10,splitNumber:10,startAngle:0,endAngle:180,axisLine:{show:!1,lineStyle:{width:1,color:[[1,"rgba(255,255,255,0)"]]}},axisTick:{show:!0,splitNumber:10,lineStyle:{color:"#fff",width:1},length:-20},splitLine:{show:!0,length:-20,lineStyle:{color:"#fff"}},detail:{show:!1,formatter:"亿",color:"#00C6D5",fontSize:25,offsetCenter:[65,-30]}},{min:0,max:numbers.max,startAngle:180,endAngle:0,name:numbers.name,type:"gauge",axisLabel:{show:!1},detail:{show:!1,formatter:numbers.value,color:"#00C6D5",fontSize:50,offsetCenter:[-20,-30]},axisLine:{lineStyle:{width:50,color:[[numbers.value/numbers.max,axislineColor],[1,"#DCDCDC"]]}},pointer:{show:!1},itemStyle:{color:"#DCDCDC"},axisTick:{show:!1},splitLine:{show:!1},data:[{value:numbers.value}]}]};
