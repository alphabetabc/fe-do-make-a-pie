var data=[{name:"广州",value:5.3},{name:"深圳",value:3.8},{name:"珠海",value:4.6},{name:"汕头",value:3.6},{name:"佛山",value:3.4},{name:"韶关",value:3.2},{name:"湛江",value:1.6},{name:"肇庆",value:4.3},{name:"江门",value:4.1},{name:"茂名",value:2.4},{name:"惠州",value:3.3},{name:"梅州",value:3},{name:"汕尾",value:1},{name:"河源",value:3.9},{name:"阳江",value:3.5},{name:"清远",value:2},{name:"东莞",value:2.1},{name:"中山",value:3},{name:"潮州",value:1.2},{name:"揭阳",value:3.2},{name:"云浮",value:3.5}],yData=[];data.sort(function(e,a){return isNaN(e.value)||e.value==null?-1:isNaN(a.value)||a.value==null?1:e.value-a.value});for(var i=0;i<data.length;i++)yData.push(data[i].name);var option={title:{text:"全国色阶地图条形图",textStyle:{fontSize:30},x:"center"},tooltip:{show:!0,formatter:function(e){return e.name+"："+e.data.value+"%"}},visualMap:{type:"continuous",text:["",""],showLabel:!0,seriesIndex:[0],min:0,max:7,inRange:{color:["#edfbfb","#b7d6f3","#40a9ed","#3598c1","#215096"]},textStyle:{color:"#000"},bottom:30,left:"left"},grid:{right:10,top:80,bottom:30,width:"20%"},xAxis:{type:"value",scale:!0,position:"top",splitNumber:1,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!1,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#999"}},data:yData},geo:{roam:!0,map:"china",left:"left",right:"300",layoutSize:"80%",label:{emphasis:{show:!1}},itemStyle:{emphasis:{areaColor:"#fff464"}},regions:[{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}]},series:[{name:"mapSer",type:"map",roam:!1,geoIndex:0,label:{show:!1},data},{name:"barSer",type:"bar",roam:!1,visualMap:!1,zlevel:2,barMaxWidth:20,itemStyle:{normal:{color:"#40a9ed"},emphasis:{color:"#3596c0"}},label:{normal:{show:!1,position:"right",offset:[0,10]},emphasis:{show:!0,position:"right",offset:[10,0]}},data}]};