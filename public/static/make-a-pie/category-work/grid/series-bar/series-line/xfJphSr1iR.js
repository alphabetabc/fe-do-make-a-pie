for(var data=[10],xMax=70,kd=[],i=0,len=70;i<=len;i++)i>70?kd.push("0"):i%5===0?kd.push("5"):kd.push("3");var option={backgroundColor:"#0e1733",xAxis:[{show:!1,min:0,max:70},{show:!1,data:[],min:0,max:70}],yAxis:[{show:!1,data:[]},{show:!1,data:[]},{show:!1,data:[]},{show:!1,min:-110,max:100}],series:[{type:"line",data:[{value:4+35,symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAAEAAAAAARKDfWAAAA4UlEQVQoFWNkQAIG5+cL/Pr76whIiI2ZzeaCYeIHmDQTjOF5exv7r38/N/1n+K8Nwr/+/doIEoPJgxU2/P/P9PDT46X//zPY/n3z6T8IA4EdSAwkB1LMDCJe+UlNAkok/Pv68/+rotmMX3efZ+R2MfzPyMqsde3FOeHXs7ZsZ9Q+M7PiH8P/9v9//v5/VTKX8eelByC9DOx6CgxiPcn/GVmYGZkYGCuZQIpAEm9bVsIVgfggDW9bVzGC2CA1cM98O3QFJIYCvh28DOfDFcJFcDBGpkJGzTMz/uMIERRhooMHAELwa35lY0h+AAAAAElFTkSuQmCC",symbolSize:8}]},{name:"刻度",type:"bar",xAxisIndex:1,yAxisIndex:3,label:{normal:{show:!0,position:"top",distance:15,color:"#fff",fontSize:12,formatter:function(A){return console.log(A.dataIndex),A.dataIndex%10===0?A.dataIndex-35+"°":""}}},data:kd,barGap:"10%",barWidth:1,itemStyle:{normal:{color:"#fff",barBorderRadius:10}},z:0}]};