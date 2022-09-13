var geoCoordMap={"白云机场南-地铁站":["113.303097","23.38669"],"昌岗-地铁站":["113.276885","23.090654"],"车陂南-地铁站":["113.389561","23.11593"],"大石-地铁站":["113.321744","23.017761"],"大塘-地铁站":["113.321677","23.077974"],"东山口-地铁站":["113.295373","23.12398"],"番禺广场-地铁站":["113.385642","22.935482"],"岗顶-地铁站":["113.339601","23.13488"],"公园前-地铁站":["113.264315","23.125446"],"广州火车站-地铁站":["113.256603","23.148143"],"广州南站-地铁站":["113.269125","22.98898"],"广州塔-地铁站":["113.323618","23.106375"],"海珠广场-地铁站":["113.265344","23.114796"],"汉溪长隆-地铁站":["113.33017","22.992931"],"华师-地铁站":["113.345349","23.140306"],"黄沙-地铁站":["113.239856","23.110524"],"嘉禾望岗-地铁站":["113.289243","23.23746"],"客村-地铁站":["113.320331","23.096197"],"沥滘-地铁站":["113.319077","23.054898"],"区庄-地铁站":["113.296725","23.134483"],"厦滘-地铁站":["113.320837","23.038007"],"石牌桥-地铁站":["113.332124","23.133135"],"市桥-地铁站":["113.361726","22.949743"],"坦尾-地铁站":["113.218387","23.125234"],"体育西路-地铁站":["113.321503","23.131138"],"天河客运站-地铁站":["113.3436","23.171"],"万胜围-地铁站":["113.384796","23.097712"],"五山-地铁站":["113.351812","23.152833"],"西朗-地铁站":["113.231978","23.065437"],"燕塘-地铁站":["113.327132","23.15998"],"杨箕-地铁站":["113.307563","23.127543"],"珠江新城-地铁站":["113.321206","23.119293"]},metroData=[[{name:"白云机场南-地铁站",value:415},{name:"昌岗-地铁站",value:205}]],convertData=function(r){for(var t=[],a=0;a<r.length;a++){var o=r[a],e=geoCoordMap[o[0].name],l=geoCoordMap[o[1].name];e&&l&&t.push([{coord:e,value:o[1].value},{coord:l}])}return t},outInPercentstr=[{color:"aqua",gt:0,lte:2e3},{color:"lime",gt:2e3,lte:4e3},{color:"yellow",gt:4e3,lte:6e3},{color:"orange",gt:6e3,lte:8e3},{color:"#ff3333",gt:8e3}],series=[];[["广州市",metroData]].forEach(function(r,t){series.push({name:"广州市",type:"map",geoIndex:0,tooltip:{show:!0,formatter:function(e){}},data:r[1].map(function(e){return{name:e[1].name,value:e[1].value}})},{name:r[2],type:"lines",symbol:["none","none"],symbolSize:20,lineStyle:{normal:{width:.1,opacity:.4,curveness:.3}},zlevel:2,effect:{show:!0,period:3,symbol:"pin",constantSpeed:60,symbolSize:5,color:"#fff",shadowBlur:8},lineStyle:{normal:{width:.1,curveness:.3}},data:convertData(r[1])});for(var a=r[1][0],o=0;o<a.length;o++)series.push({type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:"4",scale:"4",brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"arial",fontSize:12}}},tooltip:{show:!0,formatter:function(e){var l=e.name.split("-")[0];return e.value[2]!=null&&e.value[2]!=null&&e.value[2]!="NaN"?l+"："+e.value[2]:l}},symbolSize:8,data:r[1].map(function(e){return{name:e[o].name,value:geoCoordMap[e[o].name].concat([e[o].value])}})})}),option={backgroundColor:"#2b3a65",tooltip:{show:!1},legend:{show:!1},visualMap:{type:"piecewise",splitNumber:5,calculable:!0,itemWidth:20,itemHeight:16,itemGap:5,align:"left",seriesIndex:["1","2","3"],pieces:outInPercentstr,right:40,bottom:170,textStyle:{color:"#4ac7f5",fontSize:14}},geo:[{map:"china",z:1,label:{emphasis:{show:!0,textStyle:{color:"#fff"}}},roam:!0,zoom:1.3,itemStyle:{normal:{areaColor:"rgba(61,97,166,0.5)",borderWidth:3,borderColor:"rgba(108,136,216,0.9)"},emphasis:{areaColor:"rgba(61,97,166,1)"}}},{backgroundColor:"#2b3a65",top:339,left:693,z:0,label:{emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!1,zoom:4.85,itemStyle:{normal:{areaColor:"#2b3a65",borderWidth:1,borderColor:"#fff"},emphasis:{areaColor:"transparent"}}}],series};