for(var data1=[],data2=[],data3=[],random=function(a){return(Math.random()*a).toFixed(3)},i=0;i<10;i++)data1.push([random(15),random(10),random(1)]),data2.push([random(10),random(10),random(1)]),data3.push([random(15),random(10),random(1)]);option={backgroundColor:"#021236",animation:!1,tooltip:{},xAxis:{type:"value",min:"dataMin",max:"dataMax",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",min:"dataMin",max:"dataMax",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},series:[{name:"scatter",type:"scatter",symbolSize:function(a){return a[2]*40},data:data1},{name:"scatter",type:"scatter",symbolSize:function(a){return a[2]*41},itemStyle:{color:"#14B5CB",borderWidth:3,borderColor:"#D4EB36"},data:data1},{name:"scatter2",type:"scatter",symbolSize:function(a){return a[2]*40},data:data2},{name:"scatter3",type:"scatter",symbolSize:function(a){return a[2]*40},data:data3}]};
