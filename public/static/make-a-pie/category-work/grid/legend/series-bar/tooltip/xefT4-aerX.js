var colors=["#EA6942","#DA4F79","#6C5BF7","#65C993"],name=["南宁市","柳州市","桂林市","百花市","北海市"],data1=[375,286,258,239,130],data2=[353,269,236,152,101],data3=[253,199,146,142,201],data4=[253,199,146,142,201],a=18,b=15,xAxisTextColor="#FFFFFF",legendColor="#FFFFFF",option={backgroundColor:"#000000",color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{left:"20%"},legend:{data:["1","2","3","4"],orient:"vertical",x:"35",y:"30",icon:"circle",textStyle:{fontSize:a,color:legendColor}},xAxis:{type:"category",data:name,axisLabel:{textStyle:{fontSize:a,color:xAxisTextColor}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{name:"个",nameTextStyle:{color:xAxisTextColor,fontSize:a},type:"value",splitLine:{show:!1,lineStyle:{type:"dotted"}},axisLabel:{formatter:"{value}",textStyle:{color:xAxisTextColor,fontSize:a}},axisTick:{show:!1},axisLine:{show:!1}}],series:[{name:"1",stack:"总量",type:"bar",barWidth:30,data:data1},{name:"2",stack:"总量",type:"bar",barWidth:30,data:data2},{name:"3",stack:"总量",type:"bar",barWidth:30,data:data3},{name:"4",stack:"总量",type:"bar",barWidth:30,data:data4}]};
