var rate=10,option={tooltip:{axisPointer:{type:"cross"}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!0,lineStyle:{color:"red",type:"dashed"}},axisTick:{show:!1}},yAxis:[{type:"value",position:"left",max:function(e){return 10},min:function(e){return-10},axisLabel:{color:"red",inside:!0},axisTick:{show:!1}},{type:"value",position:"right",max:function(e){return rate},min:function(e){return-rate},axisLabel:{formatter:function(e){return e+" %"},inside:!0},axisTick:{show:!1}}],series:[{data:[5,1,2,4,7,8,2],type:"line"}]};
