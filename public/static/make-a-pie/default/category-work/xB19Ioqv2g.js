var geoCoorddata={泸州:[105.39,28.91],宜宾:[104.56,29.77],成都:[104.06,30.67],绵阳:[104.741722,31.46402]},option={bmap:{center:[113.65,34.76],zoom:5,roam:!0,mapStyle:{styleJson:[{featureType:"land",elementType:"geometry",stylers:{color:"#081734"}},{featureType:"building",elementType:"geometry",stylers:{color:"#04406F"}},{featureType:"building",elementType:"labels",stylers:{visibility:"off"}},{featureType:"highway",elementType:"geometry",stylers:{color:"#015B99"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#003051"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"green",elementType:"geometry",stylers:{visibility:"off"}},{featureType:"water",elementType:"geometry",stylers:{color:"#044161"}},{featureType:"subway",elementType:"geometry.stroke",stylers:{color:"#003051"}},{featureType:"subway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"railway",elementType:"geometry",stylers:{visibility:"off"}},{featureType:"railway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"all",elementType:"labels.text.stroke",stylers:{color:"#313131"}},{featureType:"all",elementType:"labels.text.fill",stylers:{color:"#FFFFFF"}},{featureType:"manmade",elementType:"geometry",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"labels",stylers:{visibility:"off"}},{featureType:"local",elementType:"geometry",stylers:{visibility:"off"}},{featureType:"local",elementType:"labels",stylers:{visibility:"off"}},{featureType:"subway",elementType:"geometry",stylers:{lightness:-65}},{featureType:"railway",elementType:"all",stylers:{lightness:-40}},{featureType:"boundary",elementType:"geometry",stylers:{color:"#8b8787",weight:"1",lightness:-29}}]}},visualMap:{min:0,max:1500,left:"left",bottom:"20%",text:["High","Low"],seriesIndex:[1],inRange:{color:["#e0ffff","#006edd"]},textStyle:{color:"#fff"},calculable:!0},series:[{type:"lines",mapType:"sichuan",coordinateSystem:"bmap",zlevel:1,data:[{name:"泸州",toname:"成都",coords:[geoCoorddata.泸州,geoCoorddata.成都]},{name:"绵阳",toname:"成都",coords:[geoCoorddata.绵阳,geoCoorddata.成都]},{name:"宜宾",toname:"成都",coords:[geoCoorddata.宜宾,geoCoorddata.成都]}],effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:4},lineStyle:{normal:{width:"",color:"#a6c84c",curveness:.2}}},{type:"effectScatter",mapType:"sichuan",coordinateSystem:"bmap",zlevel:3,data:[{name:"成都",value:geoCoorddata.成都.concat(200)}],rippleEffect:{period:10,scale:5,brushType:"fill"}}]};myChart.setOption(option);