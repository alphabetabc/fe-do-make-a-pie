let listN="温度",unit="°C",xAxisData=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","31/00"],yAxisData=[20,21,20,23,26,25,26,25,28,29,30,29,28,27,26,25,24,23,23,21,20,21,22,23];option={grid:{left:"10%",top:"30%",right:"10%",bottom:"30%"},tooltip:{triggerOn:"none",formatter:function(t){return"X: "+t.name+"<br>Y: "+t.data}},dataZoom:{bottom:"20%",end:50},xAxis:{type:"category",data:xAxisData},yAxis:{type:"value",min:0,max:100,name:`${listN}${unit}`,nameGap:35,splitLine:{lineStyle:{color:"#DBDBDB",type:"dashed"}},axisLine:{show:!1},axisTick:{show:!1}},series:[{id:"aaa",name:listN,type:"line",color:"#EC5176",smooth:!0,symbolSize:10,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 204, 99, 1)"},{offset:1,color:"rgba(242, 198, 106, 0)"}],globalCoord:!1}},data:yAxisData},{id:"bbb",type:"bar",color:"#EC5176",label:{normal:{show:!0,position:"inside"}},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 204, 99, 1)"},{offset:1,color:"rgba(242, 198, 106, 0)"}],globalCoord:!1}},data:yAxisData}]},setTimeout(function(){myChart.setOption({graphic:echarts.util.map(yAxisData,function(t,o){let e=myChart.convertToPixel({seriesIndex:0},[o,t]);return{id:o,type:"circle",position:e,shape:{r:5},invisible:!0,draggable:!0,ondrag:echarts.util.curry(onPointDragging,o),onmousemove:echarts.util.curry(showTooltip,o),onmouseout:echarts.util.curry(hideTooltip,o),ondragend:echarts.util.curry(onPointDragEnd,o),z:100}})})},0),window.addEventListener("resize",updatePosition),myChart.on("dataZoom",updatePosition);function updatePosition(){myChart.setOption({graphic:echarts.util.map(yAxisData,function(t,o){return{position:myChart.convertToPixel({seriesIndex:0},[o,t])}})})}function showTooltip(t){myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t})}function hideTooltip(t){myChart.dispatchAction({type:"hideTip"})}function onPointDragging(t,o,e){myChart.convertFromPixel("grid",this.position)[1]>=0&&myChart.convertFromPixel("grid",this.position)[1]<=100&&(yAxisData[t]=Math.round(myChart.convertFromPixel({seriesIndex:0},this.position)[1]),myChart.setOption({series:[{id:"aaa",data:yAxisData},{id:"bbb",data:yAxisData}]}))}function onPointDragEnd(t,o,e){myChart.setOption({graphic:echarts.util.map(yAxisData,function(r,i){return{id:i,position:myChart.convertToPixel({seriesIndex:0},[i,r])}})})}