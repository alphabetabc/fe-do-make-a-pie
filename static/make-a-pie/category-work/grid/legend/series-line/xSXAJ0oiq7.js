option={xAxis:{type:"time",nameTextStyle:{color:"#A4A6AD"},axisLine:{lineStyle:{color:"#D8D8D8"}},axisTick:{show:!1},axisLabel:{color:"#A4A6AD"},splitLine:{show:!1}},yAxis:{data:[0,1,2,3,4],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:e=>{if(e==="0")return"#3DBD7D";if(e==="1")return"#40AFFF";if(e==="2")return"#FFBF00";if(e==="3")return"#FB990B";if(e==="4")return"#F56A00"},formatter:function(e,i){if(e==="0")return"设备正常";if(e==="1")return"基本正常";if(e==="2")return"横向关注";if(e==="3")return"低值报警";if(e==="4")return"高值报警"}}},legend:{show:!0,icon:"rect"},series:[{data:[["2021-06-05",1],["2021-08-08",1]],type:"line",symbolSize:0,itemStyle:{color:"#40AFFF"},lineStyle:{width:30}},{data:[["2021-08-08",0],["2021-08-12",0]],type:"line",symbolSize:0,itemStyle:{color:"#3DBD7D"},lineStyle:{width:30}},{data:[["2021-08-12",3],["2021-08-20",3]],type:"line",symbolSize:0,itemStyle:{color:"#FB990B"},lineStyle:{width:30}},{data:[["2021-08-20",4],["2021-09-20",4]],type:"line",symbolSize:0,itemStyle:{color:"#F56A00"},lineStyle:{width:30}},{data:[["2021-09-20",1],["2021-10-20",1]],type:"line",symbolSize:0,itemStyle:{color:"#108EE9"},lineStyle:{width:30}}]};