option={backgroundColor:"#212121",animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:a=>a*2,coordinateSystem:null,label:{normal:{show:!0,position:"bottom",color:"#ffffff"}},edgeSymbol:["none","arrow"],edgeSymbolSize:5,categories:[{name:"资本",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f5cb62"},{offset:1,color:"rgba(245, 203, 98, 0.5)"}])}},label:{normal:{fontSize:"14"}}},{name:"大公司",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#43a6f7"},{offset:1,color:"rgba(67, 166, 247, 0.5)"}])}},label:{normal:{fontSize:"20"}}},{name:"小公司",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1ccada"},{offset:1,color:"rgba(28, 202, 218, 0.5)"}])}},label:{normal:{fontSize:"14"}}}],data:[{name:"节点1",x:300,y:80,value:20,category:0},{name:"节点2",x:300,y:150,value:30,category:0},{name:"节点3",x:550,y:150,value:40,category:1},{name:"节点4",x:750,y:80,value:25,category:2},{name:"节点5",x:750,y:150,value:25,category:2},{name:"节点6",x:750,y:220,value:25,category:2}],links:[{source:"节点1",target:"节点3",lineStyle:{normal:{color:"#f5cb62",curveness:-.1}}},{source:"节点2",target:"节点3",lineStyle:{normal:{curveness:0,color:"#f5cb62"}}},{source:"节点3",target:"节点4",lineStyle:{normal:{curveness:-.1,color:"#43a6f7"}}},{source:"节点3",target:"节点5",lineStyle:{normal:{curveness:0,color:"#43a6f7"}}},{source:"节点3",target:"节点6",lineStyle:{normal:{curveness:.1,color:"#43a6f7"}}}]}]};function cal(a,r,o){var e=0;return r===1?e=0:a<r/2?e=-o*(a+1):a*1===parseInt(r/2)?e=0:e=o*(r-a),e}function getRandomNum(a,r){var o=r-a,e=Math.random();return a+Math.round(e*o)}app.timeTicket=setInterval(function(){var a=[],r=[];a.push({name:"中间点",x:522,y:cal(0,1,50),value:30,category:1});for(var o=getRandomNum(5,10),e=0;e<o;e++)a.push({name:"起点"+e,x:300,y:cal(e,o,50),value:20,category:0}),r.push({source:"起点"+e,target:"中间点",lineStyle:{normal:{curveness:cal(e,o,.1),color:"#f5cb62"}}});for(var n=getRandomNum(5,10),e=0;e<n;e++)a.push({name:"终点"+e,x:750,y:cal(e,n,50),value:20,category:2}),r.push({source:"中间点",target:"终点"+e,lineStyle:{normal:{curveness:cal(e,n,.1),color:"#43a6f7"}}});option.series[0].data=a,option.series[0].links=r,myChart.setOption(option,!0)},2e3);