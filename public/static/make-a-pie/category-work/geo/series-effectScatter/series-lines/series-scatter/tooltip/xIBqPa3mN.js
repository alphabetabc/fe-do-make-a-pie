var GeoCoordMap={中国:[100.501765,30.756331],美国:[-83.357567,35.951935],巴西:[-56.903606,-5.480594],澳大利亚:[135.209296,-20.86882]},Datas=[[{name:"中国",value:"192.168.0.1",price:100,num:2}],[{name:"美国",value:"192.168.0.1",price:100,num:2}],[{name:"巴西",value:"192.168.0.1",price:100,num:2}],[{name:"澳大利亚",value:"192.168.0.1",price:100,num:2}]],convertData=function(e){for(var o=[],r=0;r<e.length;r++){var a=e[r],l=[100.501765,30.756331],n=GeoCoordMap[a[0].name];l&&n&&o.push([{coord:l,value:a[0].value},{coord:n,dataItem:a}])}return o},series=[];[["中国",Datas]].forEach(function(e,o){series.push({type:"lines",zlevel:0,effect:{show:!0,period:4,trailLength:.1,symbol:"circle",symbolSize:3,color:"#fff"},lineStyle:{normal:{width:.7,opacity:1,curveness:.2,color:function(r){return"	#359fd1"}},color:"red"},data:convertData(e[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:4,brushType:"fill",scale:4.2},symbol:"circle",symbolSize:function(r){return 5},itemStyle:{normal:{show:!1,color:function(r){return"	#ffffff"},borderWidth:0,shadowColor:"#359fd1",shadowBlur:4}},data:e[1].map(function(r){return{dataItem:r,name:r[0].name,value:GeoCoordMap[r[0].name].concat([r[0].value])}})},{type:"scatter",coordinateSystem:"geo",zlevel:1,rippleEffect:{period:4,brushType:"stroke",scale:4},symbol:"circle",color:"rgba(128, 220, 251, .6)",symbolSize:20,data:[{name:e[0],value:GeoCoordMap[e[0]].concat(["192.168.0.1"])}]})}),option={type:"map",mapType:"world",tooltip:{formatter:function(e){return typeof e.value[2]>"u"||e.name==""?e.name:"IP<br>"+e.name+":"+e.value[2]}},geo:{map:"world",zoom:1.2,label:{emphasis:{show:!0,color:"white"}},roam:!0,itemStyle:{normal:{color:"#68d9fb",borderColor:"#68d9fb",borderWidth:1},emphasis:{color:"rgba(104, 217, 251, 127)"}}},series};
