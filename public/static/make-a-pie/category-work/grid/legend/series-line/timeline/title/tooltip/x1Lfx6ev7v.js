for(var data_array=[{"2019/8/12 08:00:00":[{x1:14,y1:10,x2:25,y2:22},{x1:17,y1:29,x2:25,y2:42},{x1:27,y1:9,x2:5,y2:2},{x1:15,y1:29,x2:5,y2:2},{x1:7,y1:21,x2:25,y2:2},{x1:37,y1:19,x2:15,y2:12},{x1:27,y1:22,x2:15,y2:42},{x1:27,y1:22,x2:25,y2:12},{x1:47,y1:29,x2:25,y2:22},{x1:27,y1:21,x2:25,y2:21},{x1:37,y1:23,x2:45,y2:32},{x1:7,y1:39,x2:25,y2:32},{x1:13,y1:20,x2:35,y2:20},{x1:47,y1:24,x2:35,y2:22},{x1:13,y1:49,x2:35,y2:2},{x1:15,y1:25,x2:45,y2:19}]}],current_check_time="",x_rate_data=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],timeData=[],data_option=[],i=0;i<data_array.length;i++){var single_x1_data=[],single_x2_data=[],single_y1_data=[],single_y2_data=[],json_data=data_array[i];for(var key in json_data){timeData.push(key);for(var singleData=json_data[key],j=0;j<singleData.length;j++)single_x1_data.push(singleData[j].x1),single_y1_data.push(singleData[j].y1),single_x2_data.push(singleData[j].x2),single_y2_data.push(singleData[j].y2);data_option.push(setSingleOption(single_x1_data,single_y1_data,single_x2_data,single_y2_data))}}timeData=timeData.map(function(t){return t.replace("2019/","")});var current_check_time=timeData[timeData.length-1],option={baseOption:{timeline:{show:!1,bottom:0,left:36,right:36,lineStyle:{color:"#000000"},itemStyle:{color:"#000000"},label:{color:"#000000"},type:"slider",axisType:"category",currentIndex:data_array.length-1,loop:!1,symbol:"circle",symbolSize:10,data:timeData,controlStyle:{showPlayBtn:!1,itemSize:12,color:"#000000",borderColor:"#000000"}}},options:data_option};function drawChecekedCharts(t){var l=echarts.init(document.getElementById(t));l.setOption(option)}function setSingleOption(t,l,c,s){var p={title:{text:"深层水平位移",x:"center",textStyle:{color:"#000000"}},tooltip:{trigger:"axis",formatter:function(x,u,S){for(var r="",n="",m="",e=0;e<x.length;e++){var a=x[e],y=a.name,d=a.seriesName,h=a.value,v=a.color;y="当前深度:"+y+"米",e===0&&(r+=y+"<br/>",r+=current_check_time+"<br/>");var o="<div>";o+='<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+v+';"></span>',o+=d+"："+h,o+="</div>",e%2==0?(n+=o,e==2&&(n+="08/13 08:00:00<br/>")):m+=o}return r=r+n+m,r}},legend:{data:["x_当前值","x_对比值","y_当前值","y_对比值"],orient:"horizontal",x:"center",y:"top",padding:35},axisPointer:{link:{xAxisIndex:"all"}},grid:[{left:50,right:50,height:"30%"},{left:50,right:50,top:"55%",height:"30%"}],xAxis:[{type:"category",name:"深度(m)",nameGap:5,nameTextStyle:{color:"#000000"},boundaryGap:!1,axisLine:{onZero:!1,lineStyle:{type:"solid",color:"#000000"}},data:x_rate_data},{gridIndex:1,name:"深度(m)",type:"category",nameGap:5,nameTextStyle:{color:"#000000"},boundaryGap:!1,axisLine:{onZero:!1,lineStyle:{type:"solid",color:"#000000"}},data:x_rate_data}],yAxis:[{name:"x_位移量(mm)",nameGap:20,nameTextStyle:{color:"#000000"},type:"value",axisLine:{lineStyle:{color:"#000000"}},max:50,min:-50},{gridIndex:1,nameGap:30,name:"y_位移量(mm)",nameTextStyle:{color:"#000000"},type:"value",axisLine:{lineStyle:{color:"#000000"}},max:50,min:-50,inverse:!1}],series:[{name:"x_当前值",type:"line",symbolSize:8,hoverAnimation:!0,data:t,itemStyle:{normal:{lineStyle:{color:"#c23531"}}}},{name:"x_对比值",type:"line",symbolSize:8,hoverAnimation:!0,data:c,itemStyle:{normal:{lineStyle:{color:"#2f4554"}}}},{name:"y_当前值",type:"line",xAxisIndex:1,yAxisIndex:1,symbolSize:8,hoverAnimation:!0,data:l,itemStyle:{normal:{lineStyle:{color:"#61a0a8"}}}},{name:"y_对比值",type:"line",xAxisIndex:1,yAxisIndex:1,symbolSize:8,hoverAnimation:!0,data:s,itemStyle:{normal:{lineStyle:{color:"#d48265"}}}}]};return p}
