var checkColor=t=>t<10?"red":t<100?"blue":t<1e3?"green":"yellow",xAxisData=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],yAxisData=[0,1,2],seriesData=[];data1=xAxisData.map(t=>{const a=(Math.random()*1e3).toFixed();return[t,yAxisData[0],a]}),data2=xAxisData.map(t=>{let a=(Math.random()*100).toFixed();return[t,yAxisData[1],a]}),data3=xAxisData.map(t=>{let a=(Math.random()*10).toFixed();return[t,yAxisData[2],a]}),seriesData=seriesData.concat(data1).concat(data2).concat(data3),option={title:{text:"heatMap 实现网格区间自定义"},tooltip:{position:"top"},visualMap:{min:0,max:1e3,type:"piecewise",orient:"horizontal",color:["red","blue","yellow","pink","gray"],pieces:[{gt:1500,label:"(1500, Infinity]"},{gt:300,lte:1500,label:"(300, 1500]"},{gt:200,lte:300,label:"(200, 300]"},{gt:5,lte:200,label:"(5, 200]"},{lt:5,label:"(-Infinity, 5)"}],left:"center",top:65,textStyle:{color:"#000"}},animation:!1,grid:{height:"10%",y:"10%"},xAxis:{show:!1,type:"category",data:xAxisData,splitArea:{show:!1}},yAxis:{show:!1,type:"category",data:yAxisData,splitArea:{show:!1}},series:[{name:"Card",type:"heatmap",data:seriesData,label:{show:!0}}]};
