var colors=["#FA607F","#FF6531"];option={backgroundColor:"#ffffff",color:colors,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["空气温度","土壤温度"]},dataZoom:{top:"50%",height:"30",type:"inside",show:!0,xAxisIndex:[0,1],startValue:20,endValue:40},animation:!1,grid:[{left:50,right:50,height:"40%",width:"80%"},{left:50,right:50,top:"58%",height:"40%",width:"80%"}],xAxis:[{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12],axisTick:{show:!1},gridIndex:0},{gridIndex:1,axisLabel:{show:!1},type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12],position:"top"}],yAxis:[{splitLine:{show:!1},type:"value",name:"空气温度",min:0,max:65,axisTick:{show:!1},axisLine:{show:!1},gridIndex:0},{splitLine:{show:!1},type:"value",name:"土壤温度",min:0,max:65,inverse:!0,axisTick:{show:!1},axisLine:{show:!1},gridIndex:1}],series:[{name:"空气温度",type:"bar",barWidth:"10px",data:[5,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20]},{name:"土壤温度",type:"bar",barWidth:"10px",xAxisIndex:1,yAxisIndex:1,data:[8,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20,-12+20,-8+20,0+20,12+20,20+20,25+20,28+20,32+20,28+20,25+20,20+20,-1+20]}]};