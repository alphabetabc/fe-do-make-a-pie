var dataAll={x_data:["07:00","08:00","09:00","10:00","11:00","12:00"],bar_data:[{type:"加工线",UPH:[70,70,70,70,70,70],lines:[{name:"加工线1",data:[11,23,45,66,78,44]},{name:"加工线2",data:[21,43,55,67,98,74]}]},{type:"组装线",UPH:[80,80,80,80,80,80],lines:[{name:"组装线1",data:[11,23,45,66,78,44]},{name:"组装线2",data:[21,43,55,67,98,74]}]},{type:"充电桩线",UPH:[90,90,90,90,90,90],lines:[{name:"充电桩线1",data:[11,23,45,66,78,44]},{name:"充电桩线2",data:[21,43,55,67,98,74]}]}]},makexAxis=function(){var a=[];return dataAll.bar_data.forEach(function(e,t){a.push({axisLabel:{interval:0,color:"#555"},gridIndex:t,data:dataAll.x_data})}),a},makeyAxis=function(){var a=[];return dataAll.bar_data.forEach(function(e,t){a.push({gridIndex:t,splitLine:{show:!1},axisLabel:{color:"#777"},max:function(i){return i.max+10}})}),a},makeseries=function(){var a=[];return dataAll.bar_data.forEach(function(e,t){a.push({name:"UPH",data:e.UPH,xAxisIndex:t,yAxisIndex:t,type:"line"}),e.lines.forEach(function(i,n){a.push({name:i.name,data:i.data,xAxisIndex:t,yAxisIndex:t,type:"bar"})})}),a},option={title:[{top:0,textStyle:{fontSize:14},textAlign:"left",text:"加工线生产情况"}],color:["#c23531","#6ca1ff","#4db64d","#6ca1ff","#4db64d","#6ca1ff","#4db64d"],legend:[{top:"3%",data:["UPH","加工线1","加工线2"]},{top:"33%",data:["UPH","组装线1","组装线2"]},{top:"66%",data:["UPH","充电桩线1","充电桩线2"]}],grid:[{top:"5%",left:"5%",right:"3%",height:"22%"},{top:"35%",left:"5%",right:"3%",height:"22%"},{top:"68%",left:"5%",right:"3%",height:"22%"}],xAxis:makexAxis(),yAxis:makeyAxis(),series:makeseries()};
