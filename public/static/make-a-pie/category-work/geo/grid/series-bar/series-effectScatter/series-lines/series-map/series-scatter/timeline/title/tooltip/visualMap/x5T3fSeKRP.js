var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",geoGpsMap=[113.4668,34.6234],t=1,r=2,geoCoordMap={郑州局:[118.8062,31.9208],武汉局:[127.9688,45.368],西安局:[110.3467,41.4899],成都局:[125.8154,44.2584],哈局:[123.1238,42.1216],沈阳局:[101.4038,36.8207],太原局:[103.9526,30.7617],北京局:[113.4668,34.6234]},d1={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},d2={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},d3={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},d4={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},d5={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},d6={沈阳局:10041,郑州局:13093,武汉局:1157,西安局:4903,成都局:2667,哈局:8331,太原局:3727,北京局:681},colors=["#1DE9B6","#EEDD78","#32C5E9","#FFDB5C","#37A2DA","#04B9FF"],colorIndex=0;$(function(){var y=["2020-01","2020-02","2020-03","2020-04","2020-05","2020-06"],a=[[],[],[],[],[],[]],p=[],v=[];for(var e in geoCoordMap)a[0].push({year:"2020-01",name:e,value:d1[e]/100,value1:d1[e]/100}),a[1].push({year:"2020-02",name:e,value:d2[e]/100,value1:d2[e]/100}),a[2].push({year:"2020-03",name:e,value:d3[e]/100,value1:d3[e]/100}),a[3].push({year:"2020-04",name:e,value:d4[e]/100,value1:d4[e]/100}),a[4].push({year:"2020-05",name:e,value:d5[e]/100,value1:d5[e]/100}),a[5].push({year:"2020-06",name:e,value:d6[e]/100,value1:d6[e]/100});for(var i=0;i<a.length;i++){a[i].sort(function(h,d){return h.value-d.value}),v.push([]),p.push([]);for(var u=0;u<a[i].length;u++)v[i].push(a[i][u].value1),p[i].push(a[i][u].name)}$.getJSON(uploadedDataURL,function(g){$("body").css({background:"url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y",position:"fixed",top:0,left:0,width:"100%",height:"100%","background-size":"cover","-webkit-background-size":"cover","-o-background-size":"cover","background-position":"center 0"}),echarts.registerMap("china",g);var h=function(l){for(var n=[],s=0;s<l.length;s++){var c=geoCoordMap[l[s].name];c&&n.push({name:l[s].name,value:c.concat(l[s].value)})}return n},d=function(l,n){for(var s=[],c=0;c<l.length;c++){var f=l[c],m=geoCoordMap[f.name],b=n;b&&m&&(t==1?s.push([{coord:m},{coord:b,value:f.value}]):s.push([{coord:b,value:f.value},{coord:m}]))}return t==0?t=1:t=0,s};optionXyMap01={timeline:{data:y,axisType:"category",autoPlay:!0,playInterval:5e3,left:"10%",right:"10%",bottom:"3%",width:"80%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},baseOption:{animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",grid:{right:"2%",top:"10%",bottom:"10%",width:"18%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}}},visualMap:{min:0,max:250,left:"left",top:"bottom",text:["高","低"],textStyle:{color:"white"},calculable:!0,colorLightness:[.8,100],color:["#c05050","#e5cf0d","#5ab1ef"],dimension:0},geo:{show:!0,map:"china",roam:!0,zoom:1,center:[113.83531246,34.0267395887],label:{emphasis:{show:!0}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}}},options:[]};for(var o=0;o<y.length;o++){var S="销售量排行";optionXyMap01.options.push({title:[{text:"兴平公司销售网络",left:"25%",top:"1%",textStyle:{color:"#fff",fontSize:25}},{id:"statistic",text:S,left:"75%",top:"3%",textStyle:{color:"#fff",fontSize:16}}],xAxis:{type:"value",scale:!0,position:"top",min:0,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:1,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:p[o]},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:h(a[o]),symbolSize:function(l){return 6},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:colors[o]}}},{type:"map",map:"china",geoIndex:0,aspectScale:1,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:a},{type:"effectScatter",coordinateSystem:"geo",data:h(a[o].sort(function(l,n){return n.value-l.value}).slice(0,20)),symbolSize:function(l){return 5},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:colors[o],shadowBlur:10,shadowColor:colors[o]}},zlevel:1},{type:"lines",zlevel:2,effect:{show:!0,period:5,trailLength:.2,symbol:"arrow",symbolSize:6},lineStyle:{normal:{color:colors[o],width:1,opacity:.2,curveness:.3}},data:d(a[o],geoGpsMap)},{zlevel:1.5,type:"bar",barMaxWidth:8,symbol:"none",itemStyle:{normal:{color:colors[o],barBorderRadius:[0,30,30,0]}},data:v[o]}]}),r==0?r=1:r=0}myChart.setOption(optionXyMap01)})});