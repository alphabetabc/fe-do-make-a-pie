for(var data=[],data2=[],data3=[],i=0;i<=360;i++){var s=i,r=5*(1+Math.sin(s/180*Math.PI));data.push([r,s])}for(var i=1;i<=360;i++){var s=i,r=5*(1+Math.sin(s/180*Math.PI));data2.push(r),data3.push(s)}for(var data4=[],data5=[],i=1;i<=100;i++){var s=i/100*360,r=5*(1+Math.sin(s/180*Math.PI));data5.push(r),data4.push({max:10})}options=[{title:{text:"极坐标双数值轴"},legend:{data:["line","bar"]},polar:{},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},angleAxis:{type:"value",startAngle:0},radiusAxis:{},series:[{coordinateSystem:"polar",name:"line",type:"line",data,color:["#d60600"],areaStyle:{}}]},{title:{text:"极坐标心型"},angleAxis:{type:"category",startAngle:0},radiusAxis:{},polar:{},series:[{type:"bar",data:data2,coordinateSystem:"polar",name:"心型",color:["#d60600"]}]},{title:{text:"基础雷达图心型"},tooltip:{},legend:{data:["心"]},radar:{shape:"circle",startAngle:180,indicator:data4},series:[{type:"radar",areaStyle:{normal:{}},data:[{value:data5,name:"心"}]}]}];
