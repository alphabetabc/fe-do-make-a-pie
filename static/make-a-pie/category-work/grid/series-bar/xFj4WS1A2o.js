var spNum=2,_max=100,legendData=["电子资源","纸本资源"],y_data=["馆藏总量","净刊量"],_datamax=[1e3,1e3],_data1=[60,50],_data2=[15,33],fomatter_fn=function(a){return(a.value/_max*100).toFixed(0)},_label={normal:{show:!0,position:["90%",-20],formatter:fomatter_fn,textStyle:{color:"#fff",fontSize:16}}};option={backgroundColor:"#1d1f34",grid:{containLabel:!0,left:0,right:15,bottom:30},xAxis:{splitNumber:spNum,interval:_max/spNum,max:_max,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:[{data:y_data,axisLabel:{fontSize:16,color:"#fff"},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},{show:!1,data:y_data,axisLine:{show:!1}}],series:[{type:"bar",name:"电子资源",stack:"1",label:_label,legendHoverLink:!1,barWidth:10,itemStyle:{normal:{color:"#7E47FF"},emphasis:{color:"#5c16ff"}},data:_data1},{type:"bar",name:"纸本资源",stack:"1",legendHoverLink:!1,barWidth:10,label:_label,itemStyle:{normal:{color:"#fc6525"},emphasis:{color:"#fe8e5e"}},data:_data2}]};
