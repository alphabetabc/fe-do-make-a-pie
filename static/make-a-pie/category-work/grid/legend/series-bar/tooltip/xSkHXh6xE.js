var spNum=5,_max=1e3,legendData=["民用用气","商业用气","总用气"],y_data=["2014年","2015年","2016年","2017年","2018年","2019年"],_datamax=[1e3,1e3,1e3,1e3,1e3,1e3],_data1=[260,298,320,318,360,365],_data2=[288,310,340,362,395,360],_data3=[548,608,660,680,755,725],fomatter_fn=function(a){return(a.value/_max*1e3).toFixed(0)},_label={normal:{show:!0,position:"inside",formatter:fomatter_fn,textStyle:{color:"#fff",fontSize:16}}};option={backgroundColor:"#17385A",legend:{data:legendData,textStyle:{color:"#ccc"}},grid:{containLabel:!0,left:0,right:15,bottom:30},tooltip:{show:!0,backgroundColor:"#fff",borderColor:"#ddd",borderWidth:1,textStyle:{color:"#3c3c3c",fontSize:16},formatter:function(a){console.log(a);var e=a.seriesName.split("/"),t=a.seriesIndex;return"名称："+a.seriesName+"<br>完成："+a.value+"<br>占比："+(a.value/_max*100).toFixed(0)+"%"},extraCssText:"box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)"},xAxis:{splitNumber:spNum,interval:_max/spNum,max:_max,axisLabel:{show:!1,formatter:function(a){var e=(a/_max*100).toFixed(0);return e==0?e:e+"%"}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:[{data:y_data,axisLabel:{fontSize:16,color:"#fff"},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},{show:!1,data:y_data,axisLine:{show:!1}}],series:[{type:"bar",name:"民用用气",stack:"2",label:_label,legendHoverLink:!1,barWidth:40,itemStyle:{normal:{color:"#7E47FF"},emphasis:{color:"#7E47FF"}},data:_data1},{type:"bar",name:"商业用气",stack:"2",legendHoverLink:!1,barWidth:40,label:_label,itemStyle:{normal:{color:"#FD5916"},emphasis:{color:"#FD5916"}},data:_data2},{type:"bar",stack:"2",name:"总用气",legendHoverLink:!1,barWidth:40,label:_label,itemStyle:{normal:{color:"#01A4F7"},emphasis:{color:"#01A4F7"}},data:_data3}]};