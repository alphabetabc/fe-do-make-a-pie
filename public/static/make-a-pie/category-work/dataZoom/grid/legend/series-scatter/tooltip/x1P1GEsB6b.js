for(var data1=[],data2=[],data3=[],random=function(t){return(Math.random()*t).toFixed(3)},i=0;i<5;i++)data1.push([random(15),random(10),random(1)]),data2.push([random(10),random(10),random(1)]),data3.push([random(15),random(10),random(1)]);option={animation:!1,legend:{},tooltip:{},xAxis:{type:"value",splitLine:{show:!1}},yAxis:{type:"value",show:!1},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:0,end:50},{type:"inside",xAxisIndex:[0],start:0,end:50}],series:[{name:"scatter",type:"bar",itemStyle:{normal:{opacity:.8}},symbolSize:function(t){return t[2]*40},data:data1},{name:"scatter2",type:"bar",itemStyle:{normal:{opacity:.8}},symbolSize:function(t){return t[2]*40},data:data2},{name:"scatter3",type:"bar",itemStyle:{normal:{opacity:.8}},symbolSize:function(t){return t[2]*40},data:data3}]};
