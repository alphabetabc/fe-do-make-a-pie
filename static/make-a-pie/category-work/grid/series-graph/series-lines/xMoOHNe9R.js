const targetCoord=[20,80],curveness=.2,linesData=[],item={name:"飞线",value:targetCoord,symbolSize:0},items=[{name:"1",category:0,active:!0,speed:"",value:[0,10]}],data=items.concat([item]);items.forEach(function(e){e.active&&linesData.push([{coord:e.value},{coord:targetCoord}])}),option={backgroundColor:"#000",xAxis:{show:!1,type:"value"},yAxis:{show:!1,type:"value"},series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:0,data},{name:"123",type:"lines",coordinateSystem:"cartesian2d",effect:{show:!0,smooth:!1,symbol:"arrow",color:"rgba(55,155,255,1)",symbolSize:12},lineStyle:{normal:{color:"#FFD700",type:"moddle",width:5,curveness}},data:linesData}]};
