var checkColor=a=>a<10?"red":a<100?"blue":a<1e3?"green":"yellow",xAxisData=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],yAxisData=[0,1,2],seriesData=[];data1=xAxisData.map(a=>{const t=(Math.random()*1e3).toFixed();return{value:[a,yAxisData[0],t],itemStyle:{color:checkColor(t)}}}),data2=xAxisData.map(a=>{let t=(Math.random()*100).toFixed();return{value:[a,yAxisData[1],t],itemStyle:{color:checkColor(t)}}}),data3=xAxisData.map(a=>{let t=(Math.random()*10).toFixed();return{value:[a,yAxisData[2],t],itemStyle:{color:checkColor(t)}}}),seriesData=seriesData.concat(data1).concat(data2).concat(data3),option={title:{text:"heatMap 实现网格"},tooltip:{position:"top"},animation:!1,grid:{height:"10%",y:"10%"},xAxis:{show:!1,type:"category",data:xAxisData,splitArea:{show:!1}},yAxis:{show:!1,type:"category",data:yAxisData,splitArea:{show:!1}},series:[{name:"Card",type:"heatmap",data:seriesData}]};
