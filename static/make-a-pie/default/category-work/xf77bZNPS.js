var uploadedDataURL="/asset/get/s/data-1576567915648-y5r7guLI.json";$.getJSON(uploadedDataURL,function(a){var e=[].concat.apply([],a.map(function(o){return o.map(function(n){return n.coord.concat([1])})}));myChart.setOption({animation:!1,bmap:{center:[118.802566,32.077014],zoom:14,roam:!0},visualMap:{show:!1,top:"top",min:0,max:5,seriesIndex:0,calculable:!0,inRange:{color:["blue","blue","green","yellow","red"]}},series:[{type:"heatmap",coordinateSystem:"bmap",data:e,pointSize:5,blurSize:6}]});var t=myChart.getModel().getComponent("bmap").getBMap();t.addControl(new BMap.MapTypeControl)});
