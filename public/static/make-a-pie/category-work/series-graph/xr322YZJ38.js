let data={nodes:[{name:"新基建",category:0},{name:"数字新基建",category:1},{name:"特高压",category:1},{name:"充电桩",category:1}],links:[{source:"新基建",target:"特高压",name:""},{source:"新基建",target:"充电桩",name:""},{source:"新基建",target:"数字新基建",name:""}]};const color1="#006acc",color2="#ff7d18",color3="#10a050";data.nodes.forEach(e=>{e.category===0?(e.symbolSize=100,e.itemStyle={color:new echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"#A2D1FA"},{offset:.5,color:"#0955AD"},{offset:1,color:"#013E96"}])}):e.category===1&&(e.itemStyle={color:new echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"#A2D1FA"},{offset:.5,color:"#0955AD"},{offset:1,color:"#013E96"}])})}),data.links.forEach(e=>{e.label={align:"center",fontSize:12},e.name==="参股"?e.lineStyle={color:color2}:e.name===""?e.lineStyle={color:color1}:e.name==="法人"&&(e.lineStyle={color:color3})});let categories=[{name:"公司",itemStyle:{color:color1}},{name:"董事",itemStyle:{color:color2}}];option={series:[{type:"graph",layout:"force",symbolSize:58,draggable:!0,roam:!0,focusNodeAdjacency:!0,categories,edgeSymbol:["","arrow"],edgeLabel:{normal:{show:!0,textStyle:{fontSize:20},formatter(e){return e.data.name}}},label:{show:!0},circular:{rotateLabel:!0},force:{repulsion:1e3,edgeLength:[100,140]},data:data.nodes,links:data.links}]},setInterval(function(){myChart.setOption({})},10);