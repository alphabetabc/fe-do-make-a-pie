var yearCount=4,categoryCount=6,xAxisData=[],customData=[],legendData=[],dataList=[];legendData.push("趋势");for(var encodeY=[],i=0;i<yearCount;i++)legendData.push(1+i+"季度"),dataList.push([]),encodeY.push(1+i);for(var i=0;i<categoryCount;i++){var val=Math.random()*1e3;xAxisData.push(2015+i+"年");var customVal=[i];customData.push(customVal);for(var j=0;j<dataList.length;j++){var value=j===0?echarts.number.round(val,2):echarts.number.round(Math.max(0,dataList[j-1][i]+(Math.random()-.5)*200),2);dataList[j].push(value),customVal.push(value)}}function renderItem(e,r){for(var u=r.value(0),t=r.currentSeriesIndices(),d=r.barLayout({barGap:"30%",barCategoryGap:"20%",count:t.length-1}),s=[],a=0;a<t.length;a++){var o=t[a];if(o!==e.seriesIndex){var n=r.coord([u,r.value(o)]);n[0]+=d[a-1].offsetCenter,n[1]-=20,s.push(n)}}var l=r.style({stroke:r.visual("color"),fill:null});return{type:"polyline",shape:{points:s},style:l}}option={tooltip:{trigger:"axis"},legend:{data:legendData},dataZoom:[{type:"slider",start:50,end:70},{type:"inside",start:50,end:70}],xAxis:{data:xAxisData},yAxis:{},series:[{type:"custom",renderItem,itemStyle:{borderWidth:0},encode:{x:0,y:encodeY},data:customData,z:100}].concat(echarts.util.map(dataList,function(e,r){return{type:"bar",animation:!1,name:legendData[r+1],itemStyle:{opacity:.5},data:e}}))};
