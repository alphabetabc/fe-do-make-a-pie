app.title="65k+ 飞机航线",myChart.showLoading(),$.get("data/asset/data/flights.json",function(e){myChart.hideLoading();function r(t){return[e.airports[t][3],e.airports[t][4]]}var i=e.routes.map(function(t){return[r(t[1]),r(t[2])]});myChart.setOption(option={title:{text:"World Flights",left:"center",textStyle:{color:"#eee"}},backgroundColor:"#000",width:"450",height:"160",tooltip:{formatter:function(t){var o=e.routes[t.dataIndex];return e.airports[o[1]][1]+" > "+e.airports[o[2]][1]}},geo:{map:"world",left:0,right:0,silent:!0,itemStyle:{normal:{borderColor:"#92c431",color:"#243510"}}},series:[{type:"lines",coordinateSystem:"geo",data:i,large:!0,largeThreshold:100,lineStyle:{normal:{opacity:0,width:.5,curveness:0}},blendMode:"lighter"}]})});