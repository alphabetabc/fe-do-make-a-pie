var commerce="/asset/get/s/data-1544515325236-xeknMHyjK.png",social_security="/asset/get/s/data-1544515319190-NtpnXCAf4.png",land_tax="/asset/get/s/data-1544515311252-yaQXbZ_lR.png",police="/asset/get/s/data-1544515299877-vHx3D6am7.png",data_clound="/asset/get/s/data-1544515285844-Z2k1x7F12.png";const targetCoord=[1e3,140],curveness=.2,linesData=[],categories=[{name:"流入中",label:{normal:{fontSize:"14",distance:-2}}},{name:"暂无流入",label:{normal:{fontSize:"14",distance:2}}}],item={name:"数据中心",value:targetCoord,symbolSize:[110,88],symbol:"image://"+data_clound,symbolOffset:["-20%","-20%"],symbolKeepAspect:!0,z:22,label:{normal:{fontSize:"16"}}};var items=[],graphData=[{name:"公安",speed:"",imgUrl:police},{name:"地税",speed:"",imgUrl:land_tax},{name:"工商",speed:"50kb/s",imgUrl:commerce},{name:"社保",speed:"50kb/s",imgUrl:social_security}];for(let e=graphData.length-1;e>=0;e--){let t={};var valueMax=(graphData.length-1-e)*100;graphData[e].speed=="undefined"||graphData[e].speed==""?t={name:graphData[e].name,category:1,value:[0,valueMax],symbolSize:[35,33],symbol:"image://"+graphData[e].imgUrl,symbolOffset:["-90%","50%"],symbolKeepAspect:!0}:t={name:graphData[e].name,category:0,active:!0,speed:"50kb/s",value:[0,valueMax],symbolSize:[35,33],symbol:"image://"+graphData[e].imgUrl,symbolOffset:["-90%","50%"],symbolKeepAspect:!0},items.push(t)}const data=items.concat([item]);items.forEach(function(e){e.active&&linesData.push([{coord:e.value},{coord:targetCoord}])});const links=items.map(e=>({source:e.name,target:item.name,speed:e.speed,lineStyle:{normal:{color:(e.speed,"#20b4f4"),curveness}}}));option={backgroundColor:"#000",legend:[{formatter:function(e){return echarts.format.truncateText(e,100,"14px Microsoft Yahei","…")},textStyle:{color:"#fff",fontSize:14},itemGap:25,itemWidth:10,selectedMode:!1,left:0,data:categories.map(function(e){return{name:e.name,icon:"circle"}})}],grid:{top:"16%",bottom:"16%"},color:["#20b4f4","#f9f48e"],xAxis:{show:!1,type:"value"},yAxis:{show:!1,type:"value"},series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:60,z:1,edgeLabel:{normal:{show:!0,textStyle:{fontSize:14,color:"#fff"},formatter:function(e){let t="";return e.data.speed!==void 0&&(t=e.data.speed),t}}},label:{normal:{show:!0,position:"top",color:"#fff",distance:2}},lineStyle:{normal:{width:2,curveness:.3,shadowColor:"none"}},edgeSymbol:["none","none"],edgeSymbolSize:8,data,links,categories},{name:"A",type:"lines",coordinateSystem:"cartesian2d",z:1,effect:{show:!0,smooth:!1,trailLength:0,symbol:"arrow",color:"rgba(32,180,244,0.8)",symbolSize:12},lineStyle:{normal:{curveness,color:"transparent"}},data:linesData}]};