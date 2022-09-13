var geoCoordMap={"成都市·2500":[103.6251223,30.48689578],"佛山市·15000":[112.891962,23.27692655],"广元市·1530":[105.8013481,32.44590966],"嘉兴市·1000":[120.8969907,30.90084376],"钦州市·520":[109.1743342,22.36063782],"唐山市·1000":[118.080983,39.80509258],"铜陵市·5000":[117.5446667,30.87439523],"新乡市·1000":[113.9835451,35.05807364],"漳州市·600":[117.1921018,24.29526616],"镇江市·4000":[119.852025,32.16185649],"清远市·3000":[112.9746744,23.74934019],"茂名市·8000":[111.2190283,21.67200449],"石家庄市·15000":[114.5199299,38.02735555],"呼和浩特市·15000":[111.0778047,40.75528242]},CData=[[{name:"成都市·2500"},{name:"成都市·2500",value:50}],[{name:"佛山市·15000"},{name:"佛山市·15000",value:150}],[{name:"广元市·1530"},{name:"广元市·1530",value:30.6}],[{name:"嘉兴市·1000"},{name:"嘉兴市·1000",value:20}],[{name:"钦州市·520"},{name:"钦州市·520",value:10.4}],[{name:"唐山市·1000"},{name:"唐山市·1000",value:20}],[{name:"铜陵市·5000"},{name:"铜陵市·5000",value:100}],[{name:"新乡市·1000"},{name:"新乡市·1000",value:20}],[{name:"漳州市·600"},{name:"漳州市·600",value:12}],[{name:"镇江市·4000"},{name:"镇江市·4000",value:80}]],S2Data=[[{name:"清远市·3000"},{name:"清远市·3000",value:60}],[{name:"茂名市·8000"},{name:"茂名市·8000",value:80}],[{name:"石家庄市·15000"},{name:"石家庄市·15000",value:150}],[{name:"呼和浩特市·15000"},{name:"呼和浩特市·15000",value:150}]],S5Data=[],S8Data=[],planePath="path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705",convertData=function(a){for(var l=[],e=0;e<a.length;e++){var t=a[e],o=geoCoordMap[t[0].name],r=geoCoordMap[t[1].name];o&&r&&l.push([{coord:o},{coord:r}])}return l},color=["#FF8888"," #ffa022","#a6c84c","#3ed4ff"],series=[];[["汕头",CData],["昭通",S2Data],["白城",S5Data],["保定",S8Data]].forEach(function(a,l){series.push({type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:color[l],width:0,curveness:.2}},data:convertData(a[1])},{type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[l],width:1,opacity:.4,curveness:.2}},data:convertData(a[1])},{type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[l],width:1,opacity:.4,curveness:.2}},data:convertData(a[1])},{type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[l],width:1,opacity:.4,curveness:.2}},data:convertData(a[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(e){return e[2]/8},itemStyle:{normal:{color:color[l]}},data:a[1].map(function(e){return{name:e[1].name,value:geoCoordMap[e[1].name].concat([e[1].value])}})})});var option={backgroundColor:"#080a20",title:{text:"",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:[],textStyle:{color:"#fff"},selectedMode:"single"},geo:{map:"china",zoom:1.2,scaleLimit:{max:8,min:1},label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#132937",borderColor:"#0692a4"},emphasis:{areaColor:"#0b1c2d"}}},series};
