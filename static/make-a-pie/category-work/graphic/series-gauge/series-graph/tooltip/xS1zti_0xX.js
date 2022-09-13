option={tooltip:{show:!1},series:[{type:"graph",layout:"none",focusNodeAdjacency:!1,nodeScaleRatio:.1,roam:!0,zoom:1,zoomLimit:{max:1.5,min:.5},draggable:!1,animation:!1,circular:{rotateLabel:!0},edgeSymbol:["","arrow"],label:{show:!0,fontSize:8,color:"#000",fontWeight:"normal",position:"right",formatter:function(e){return e.name}},edgeLabel:{normal:{show:!0,textStyle:{fontSize:10},formatter:"{c}"}},data:[{name:"鹰眼",value:[10,35,50],x:240,y:192},{name:"Mysql",x:179,y:254,value:[6,7,8]},{name:"Redis",value:[9,31,11],x:100,y:100},{name:"ES",value:[23,65,50],x:263.3165375759196,y:108.7891462763019}],edges:[{source:0,target:1,value:"数据库调用"},{source:0,target:2,value:"数据库调用"},{source:0,target:3,value:"远程调用"},{source:1,target:2,value:"数据库调用"},{source:2,target:3,value:"远程调用"}]},{type:"gauge",center:["95%","10%"],radius:"10%",splitNumber:10,min:0,max:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,"#03b7c9"]]}},axisTick:{show:!0,lineStyle:{color:"#03b7c9",width:1},length:-5,splitNumber:2},splitLine:{show:!0,length:-10,lineStyle:{color:"#03b7c9"}},axisLabel:{distance:-12,textStyle:{color:"#03b7c9",fontSize:"10",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}},{name:"出巡区间",type:"gauge",center:["95%","10%"],radius:"10%",startAngle:225,endAngle:-45,min:0,max:10,axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"90%"},detail:{show:!0,offsetCenter:[0,"100%"],textStyle:{fontSize:12,color:"#fff"},formatter:["{value}个","{name|出巡区间}"].join(`
`),rich:{name:{fontSize:10,lineHeight:15,color:"#fff"}}},itemStyle:{normal:{color:"#03b7c9"}},data:[{value:0}]},{type:"gauge",center:["95%","26%"],radius:"10%",splitNumber:10,min:0,max:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,"#03b7c9"]]}},axisTick:{show:!0,lineStyle:{color:"#03b7c9",width:1},length:-5,splitNumber:2},splitLine:{show:!0,length:-10,lineStyle:{color:"#03b7c9"}},axisLabel:{distance:-12,textStyle:{color:"#03b7c9",fontSize:"10",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}},{name:"限速区间",type:"gauge",center:["95%","26%"],radius:"10%",startAngle:225,endAngle:-45,min:0,max:10,axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"90%"},detail:{show:!0,offsetCenter:[0,"100%"],textStyle:{fontSize:12,color:"#fff"},formatter:["{value}个","{name|限速区间}"].join(`
`),rich:{name:{fontSize:10,lineHeight:15,color:"#fff"}}},itemStyle:{normal:{color:"#03b7c9"}},data:[{value:0}]},{type:"gauge",center:["95%","42%"],radius:"10%",splitNumber:10,min:0,max:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,"#03b7c9"]]}},axisTick:{show:!0,lineStyle:{color:"#03b7c9",width:1},length:-5,splitNumber:2},splitLine:{show:!0,length:-10,lineStyle:{color:"#03b7c9"}},axisLabel:{distance:-12,textStyle:{color:"#03b7c9",fontSize:"10",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}},{name:"扣停区间",type:"gauge",center:["95%","42%"],radius:"10%",startAngle:225,endAngle:-45,min:0,max:10,axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"90%"},detail:{show:!0,offsetCenter:[0,"100%"],textStyle:{fontSize:12,color:"#fff"},formatter:["{value}个","{name|扣停区间}"].join(`
`),rich:{name:{fontSize:10,lineHeight:15,color:"#fff"}}},itemStyle:{normal:{color:"#03b7c9"}},data:[{value:0}]},{type:"gauge",center:["95%","58%"],radius:"10%",splitNumber:10,min:0,max:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,"#03b7c9"]]}},axisTick:{show:!0,lineStyle:{color:"#03b7c9",width:1},length:-5,splitNumber:2},splitLine:{show:!0,length:-10,lineStyle:{color:"#03b7c9"}},axisLabel:{distance:-12,textStyle:{color:"#03b7c9",fontSize:"10",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}},{name:"封锁区间",type:"gauge",center:["95%","58%"],radius:"10%",startAngle:225,endAngle:-45,min:0,max:10,axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"90%"},detail:{show:!0,offsetCenter:[0,"100%"],textStyle:{fontSize:12,color:"#fff"},formatter:["{value}个","{name|封锁区间}"].join(`
`),rich:{name:{fontSize:10,lineHeight:15,color:"#fff"}}},itemStyle:{normal:{color:"#03b7c9"}},data:[{value:0}]}]},app.inNode||setTimeout(function(){initDraggableGraphic(),window.addEventListener("resize",updatePosition),myChart.on("graphRoam",updatePosition),myChart.on("dataZoom",updatePosition),myChart.on("click",onLineClick),myChart.dispatchAction({type:"dataZoom",start:20,end:30})},0);function readStorage(){let e=localStorage.getItem("TOPO_POSITION");e&&JSON.parse(e).forEach(o=>{let i=option.series[0].data.find(n=>n.name==o.name);i&&(i.x=o.x,i.y=o.y)})}function initDraggableGraphic(){myChart.setOption({graphic:echarts.util.map(option.series[0].data,function(e,t){var o=myChart.convertToPixel({seriesIndex:0},[e.x,e.y]);return{type:"circle",id:t,position:o,shape:{cx:0,cy:0,r:30},style:{text:"",fill:"rgba(0,0,0,0)",font:"8px"},invisible:!1,draggable:!0,z:-100,ondrag:echarts.util.curry(function(i){onPointDragging(i,this)},t),onclick:echarts.util.curry(function(){alert("该操作为下钻或弹出详细信息:"+option.series[0].data[t].name)})}})})}function updatePosition(e){let t=myChart.getOption().series[0].zoom;console.log(t),t>1.5?t=1.5:t<.5&&(t=.5),option.series[0].zoom=t,myChart.setOption(option),myChart.setOption({graphic:echarts.util.map(option.series[0].data,function(o,i){var n=myChart.convertToPixel({seriesIndex:0},[o.x,o.y]);return{position:n}})})}function onPointDragging(e,t){var o=myChart.convertFromPixel({seriesIndex:0},t.position);option.series[0].data[e].x=o[0],option.series[0].data[e].y=o[1],myChart.setOption(option),updatePosition(),onSavePosition()}function onLineClick(e){if(e&&e.data){let t=option.series[0].data[e.data.source],o=option.series[0].data[e.data.target];alert(t.name+">>>"+o.name)}}function onSavePosition(){clearTimeout(this.timerid),this.timerid=setTimeout(function(){localStorage.setItem("TOPO_POSITION",JSON.stringify(option.series[0].data))},300)}kkk=1,intervalId=setInterval(function(){kkk+=1,option.series[0].data[0].name=kkk,myChart.setOption(option),console.log(kkk)},2e3);
