for(var nodes=[{x:"8",y:"12",name:"DNS",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"1",y:"3",name:"爬虫数据",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"3",y:"12",name:"域名缓存",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"3",y:"8",name:"DPI用户面",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"3",y:"5",name:"场景特征",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"3",y:"1",name:"终端特征",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"5",y:"10",name:"增强特征",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"7",y:"12",name:"HTTP",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"7",y:"8",name:"通用",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"9",y:"10",name:"用户中间表",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"9",y:"6",name:"网元信息表",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"11",y:"8",name:"质差网元",img:"data-1547632686885-o5Rfi3tyk.png"}],links=[{source:"DNS",target:"域名缓存",name:"访问"},{source:"爬虫数据",target:"场景特征",name:"访问"},{source:"爬虫数据",target:"终端特征",name:"访问"},{source:"域名缓存",target:"增强特征",name:"访问"},{source:"DPI用户面",target:"增强特征",name:"访问"},{source:"场景特征",target:"增强特征",name:"访问"},{source:"终端特征",target:"增强特征",name:"访问"},{source:"增强特征",target:"HTTP",name:"访问"},{source:"增强特征",target:"通用",name:"访问"},{source:"HTTP",target:"用户中间表",name:"访问"},{source:"通用",target:"用户中间表",name:"访问"},{source:"用户中间表",target:"质差网元",name:"访问"},{source:"网元信息表",target:"质差网元",name:"访问"}],charts={nodes:[],links:[],linesData:[]},dataMap=new Map,j=0;j<nodes.length;j++){var x=parseInt(nodes[j].x),y=parseInt(nodes[j].y),node={name:nodes[j].name,value:[x,y],symbolSize:50,alarm:nodes[j].alarm,symbol:"image:///asset/get/s/"+nodes[j].img,itemStyle:{normal:{color:"#12b5d0"}}};dataMap.set(nodes[j].name,[x,y]),charts.nodes.push(node)}for(var i=0;i<links.length;i++){var link={source:links[i].source,target:links[i].target,label:{normal:{show:!0,formatter:links[i].name}},lineStyle:{normal:{color:"#12b5d0"}}};charts.links.push(link);var lines=[{coord:dataMap.get(links[i].source)},{coord:dataMap.get(links[i].target)}];charts.linesData.push(lines)}option={title:{text:"网络拓扑图"},tooltip:{trigger:"item",formatter:"{b}"},backgroundColor:"#F5F5F5",xAxis:{min:0,max:12,show:!1,type:"value"},yAxis:{min:0,max:12,show:!1,type:"value"},series:[{type:"graph",layout:"none",id:"a",coordinateSystem:"cartesian2d",edgeSymbol:["","arrow"],label:{normal:{show:!0,position:"bottom",color:"#12b5d0"}},lineStyle:{normal:{width:2,shadowColor:"none"}},xAxis:{min:0,max:12,show:!1,type:"value"},yAxis:{min:0,max:12,show:!1,type:"value"},draggable:!0,data:charts.nodes,links:charts.links,z:4,itemStyle:{normal:{label:{show:!0,formatter:function(t){return t.data.name}}}}},{name:"A",type:"lines",coordinateSystem:"cartesian2d",z:4,effect:{show:!0,trailLength:0,symbol:"arrow",color:"#12b5d0",symbolSize:8},lineStyle:{normal:{curveness:0}},data:charts.linesData}]},myChart.setOption(option),myChart.on("click",function(t){var e=[{x:"1",y:"12",name:"DNS",img:"data-1547632686885-o5Rfi3tyk.png"},{x:"1",y:"3",name:"爬虫数据",img:"data-1547632686885-o5Rfi3tyk.png"}],o=[{source:"DNS",target:"爬虫数据",name:"访问"}];console.info(1);for(var a={nodeses:[],linkses:[],linesDataes:[]},s=new Map,r=0;r<e.length;r++){var m=parseInt(e[r].x),l=parseInt(e[r].y),g={name:e[r].name,value:[m,l],symbolSize:50,alarm:e[r].alarm,symbol:"image:///asset/get/s/"+e[r].img,itemStyle:{normal:{color:"#12b5d0"}}};s.set(e[r].name,[m,l]),a.nodeses.push(g)}for(var n=0;n<o.length;n++){var d={source:o[n].source,target:o[n].target,label:{normal:{show:!0,formatter:o[n].name}},lineStyle:{normal:{color:"#12b5d0"}}};a.linkses.push(d);var c=[{coord:s.get(o[n].source)},{coord:s.get(o[n].target)}];a.linesDataes.push(c)}myChart.setOption({notMerge:!0,series:[{data:a.nodeses,links:a.linkses},{data:a.linesDataes}]})}),myChart.setOption({graphic:echarts.util.map(charts.nodes,function(t,e){return{type:"circle",position:myChart.convertToPixel("grid",t.value),shape:{cx:5,cy:5,r:20},invisible:!0,draggable:!0,ondrag:echarts.util.curry(onPointDragging,e),onmousemove:echarts.util.curry(showTooltip,e),onmouseout:echarts.util.curry(hideTooltip,e),z:100}})});function onPointDragging(t,e,o){console.log("tempV-----");var a=myChart.convertFromPixel("grid",this.position);console.log("tempV",a),charts.nodes[t].value=[a[0],a[1]],myChart.setOption({series:[{id:"a",data:charts.nodes}]})}function showTooltip(t){myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t})}function hideTooltip(t){myChart.dispatchAction({type:"hideTip"})}window.addEventListener("resize",function(){myChart.resize(),myChart.setOption({series:[{id:"a",data:charts.nodes}]})});