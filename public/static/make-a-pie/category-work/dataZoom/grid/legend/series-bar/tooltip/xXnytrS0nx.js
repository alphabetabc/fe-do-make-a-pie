let xAxisData=[],startTime=+new Date(2020,10,10);for(let e=0;e<1e3;e++)xAxisData.push(echarts.format.formatTime(`yyyy-MM-dd
hh:mm:ss`,startTime)),startTime+=1e3;function generateSeriesData(){let e=[];for(let a=0;a<1e3;a++)e.push(a%30===0?Math.random()*700:600+Math.random()*500-250);return e}let seriesData=[];option={tooltip:{trigger:"axis",backgroundColor:"rgba(50,50,50,.2)",textStyle:{color:"#222"}},grid:{left:60,right:60},legend:{itemWidth:14,itemHeight:4},xAxis:[{axisLine:{show:!1},axisTick:{length:0},axisLabel:{color:"rgba(0,0,0,0.45)"},data:xAxisData}],yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#666"},splitLine:{lineStyle:{type:"dotted",color:"#000",opacity:.23}}},color:["#fcf","#fc3","#f63","#fc9","#0fc","#ff9","#966"],dataZoom:[{type:"slider",height:20,bottom:8,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#409eff"},textStyle:{color:"#666"},fillerColor:"rgba(255,255,255,0.2)",borderColor:"rgba(64,158,225,0.3)"},{type:"inside"}],series:[{type:"bar",name:"访问控制",symbol:"none",barMaxWidth:25,data:generateSeriesData()},{type:"bar",name:"访问限速",symbol:"none",barMaxWidth:25,data:generateSeriesData()},{type:"bar",name:"状态码限速",symbol:"none",barMaxWidth:25,data:generateSeriesData()}]};
