var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",geoCoordMap={郑州:[113.858976,34.532204],杭州:[120.44332,30.240977],无锡:[120.439564,31.508458],泉州:[118.598632,24.807175],南京:[118.88331,31.736424],南昌:[115.919301,28.865286],深圳:[113.821705,22.638172],新疆:[87.9236,43.5883],淮安:[119.137859,33.795129]},geoCoordEMap={郑州:[113.858976,34.532204],杭州:[120.44332,30.240977],无锡:[120.439564,31.508458],泉州:[118.598632,24.807175],南京:[118.88331,31.736424],南昌:[115.919301,28.865286],深圳:[113.821705,22.638172],淮安:[119.137859,33.795129]},geoCoordArray=[{key:1,start:"杭州",end:"郑州",route:"杭州-郑州-杭州",num:"O36922/O36989",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:2,start:"郑州",end:"杭州",route:"杭州-郑州-杭州",num:"O36990",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:3,start:"泉州",end:"无锡",num:"I99862",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:4,start:"无锡",end:"郑州",num:"I99862",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:5,start:"南京",end:"郑州",num:"CF9092",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:6,start:"新疆",end:"郑州",num:"CF9092",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:7,start:"南昌",end:"郑州",num:"HT3810",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:8,start:"深圳",end:"郑州",route:"深圳-郑州",num:"O36879",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"},{key:9,start:"淮安",end:"郑州",num:"I99872",type:"B733",fly:"[19]05:30",to:"[19]06:01",remark:"公司计划延误"}],geoCoordEArray=[{郑州:[113.858976,34.532204],杭州:[120.44332,30.240977]},{杭州:[120.44332,30.240977],郑州:[113.858976,34.532204],"杭州 ":[120.44332,30.240977]},{郑州:[113.858976,34.532204],无锡:[120.439564,31.508458],泉州:[118.598632,24.807175]},{郑州:[113.858976,34.532204],南京:[118.88331,31.736424]},{郑州:[113.858976,34.532204],南昌:[115.919301,28.865286]},{郑州:[113.858976,34.532204],深圳:[113.821705,22.638172]},{郑州:[113.858976,34.532204],淮安:[119.137859,33.795129]}],colors=["#1DE9B6","#04B9FF"];$(function(){var a=["进港","出港"],r=[];for(var e of geoCoordArray)r.push({name:e.start,value:geoCoordMap[e.start],num:e.num,key:e.key,route:e.route,type:e.type,fly:e.fly,to:e.to,remark:e.remark,coords:[geoCoordMap[e.start],geoCoordMap[e.end]]});$.getJSON(uploadedDataURL,function(l){$("body").css({background:"url(/asset/get/s/data-1596589418370-i0oW0darx.jpg) repeat-y",position:"fixed",top:0,left:0,width:"100%",height:"100%","background-size":"cover","-webkit-background-size":"cover","-o-background-size":"cover","background-position":"center 0"}),echarts.registerMap("china",l),optionCargoMap={timeline:{data:a,axisType:"category",autoPlay:!0,playInterval:24e3,left:"30%",right:"30%",bottom:"3%",width:"40%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},baseOption:{animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",visualMap:{min:0,max:20,left:"left",top:"bottom",text:["高","低"],textStyle:{color:"white"},calculable:!0,colorLightness:[.8,100],color:["#c05050","#e5cf0d","#5ab1ef"],dimension:3},geo:{show:!0,map:"china",roam:!0,silent:!0,zoom:1,left:"20%",center:[113.83531246,34.0267395887],label:{emphasis:{show:!0}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}},tooltip:{show:!0,trigger:"item",triggerOn:"mousemove|click",enterable:!0,formatter:function(t,i,n){return t.seriesType=="lines"?"航线："+t.data.route+"<br/><hr/>航班："+t.data.num+"<br/><hr/>机型："+t.data.type:t.name}}},options:[]};for(var o=0;o<a.length;o++)optionCargoMap.options.push({title:[{text:"全货机航班动态",left:"35%",top:"1%",textStyle:{color:"#fff",fontSize:32}}],series:[{type:"effectScatter",coordinateSystem:"geo",effectType:"ripple",data:r,symbolSize:6,showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:colors[o],shadowBlur:10,shadowColor:colors[o]}},zlevel:1},{name:"zzcargo_lines",type:"lines",zlevel:2,effect:{show:!0,period:12,trailLength:0,symbol:planePath,symbolSize:12},lineStyle:{normal:{color:colors[o],width:2,type:"solid",opacity:.2,curveness:.2}},label:{show:!0,position:"middle",verticalAlign:"middle",formatter:function(t){return t.data.num}},data:r}]});myChart.setOption(optionCargoMap),myChart.resize()})});
