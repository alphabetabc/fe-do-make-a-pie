for(var nodes=[{x:500,y:1e3,nodeName:"Frontend",svgPath:"circle",symbolSize:50},{x:500,y:800,nodeName:"Order",svgPath:"circle"},{x:0,y:300,nodeName:"Log",svgPath:"circle"},{x:333,y:300,nodeName:"Pro",svgPath:"circle"},{x:666,y:300,nodeName:"ItemCenter",svgPath:"circle"},{x:1e3,y:300,nodeName:"Inventory",svgPath:"circle"}],charts={nodes:[],linesData:[{coords:[[500,1e3],[500,600]]},{coords:[[500,600],[0,600],[0,600]]},{coords:[[500,600],[1e3,600],[1e3,600]]},{coords:[[0,600],[0,300]]},{coords:[[333,600],[333,300]]},{coords:[[666,600],[666,300]]},{coords:[[1e3,600],[1e3,300]]}]},j=0;j<nodes.length;j++){const{x:e,y:o,nodeName:a,svgPath:r,symbolSize:t}=nodes[j];var node={nodeName:a,value:[e,o],symbolSize:t||50,symbol:r,itemStyle:{color:"orange"}};charts.nodes.push(node)}option={backgroundColor:"white",xAxis:{min:0,max:1e3,show:!1,type:"value"},yAxis:{min:0,max:1e3,show:!1,type:"value"},series:[{type:"graph",coordinateSystem:"cartesian2d",label:{show:!0,position:"bottom",color:"black",formatter:function(e){return e.data.nodeName}},data:charts.nodes},{type:"lines",polyline:!0,coordinateSystem:"cartesian2d",lineStyle:{type:"dashed",width:2,color:"#00ffff",curveness:.3},effect:{show:!0,trailLength:.1,symbol:"arrow",color:"green",symbolSize:8},data:charts.linesData}]};