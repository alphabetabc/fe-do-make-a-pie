var historyData=[{name:"1班",data:[40.82,25.33,40.82]},{name:"2班",data:{years:37.16,month:39.25,weeks:45}},{name:"3班",data:[44.82,40.48,35]},{name:"4班",data:[43.73,42.8,50]}],xData=[];historyData.map(function(a,e){xData.push(a.name)}),option={backgroundColor:"#012A5C",tooltip:{trigger:"axis"},color:["#00cb00","#FFFF00","#52FFFF"],grid:{left:"3%",right:"3%",bottom:"0",containLabel:!0},xAxis:{type:"category",axisLine:{lineStyle:{color:"#1b4264"}},axisLabel:{textStyle:{fontSize:14,color:"#fff"},margin:10},axisTick:{show:!1},boundaryGap:!1,data:xData},yAxis:{type:"value",splitNumber:3,splitLine:{lineStyle:{color:"#1b4264"}},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value}",margin:10,textStyle:{fontSize:12,color:"#fff"}}},series:[{name:"年",type:"line",symbol:"none",data:[40.82,37.16,44.68,43.73]},{name:"月",type:"line",symbol:"none",data:[25.33,39.25,40.48,42.8]},{name:"周",type:"line",symbol:"none",data:[20,45,35,50]}]};