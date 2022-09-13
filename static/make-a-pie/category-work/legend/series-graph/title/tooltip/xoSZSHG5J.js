var graph={nodes:[{name:"客户A",value:["高管",""],category:"高信誉白名单",symbolSize:50,tooltip:{formatter:"{b0}:{c0}"}},{name:"客户B",category:"白名单",value:["员工",""],symbolSize:20,tooltip:{formatter:"{b0}:{c0}"}},{name:"客户C",category:"黑名单",value:["员工",""],symbolSize:50},{name:"客户D",category:"白名单",value:["控股人",""],symbolSize:50,tooltip:{formatter:"{b0}:{c0}"}},{name:"客户E",category:"白名单",symbolSize:20,value:["股东"],tooltip:{formatter:"{b0}:{c0}"}},{name:"客户F",category:"白名单",symbolSize:50,value:["白名单","员工 "]},{name:"客户O",category:"白名单",symbolSize:50,value:["白名单","员工 "]},{name:"客户P",category:"白名单",symbolSize:50,value:["白名单","员工 "]},{name:"客户G",category:"类别B",symbolSize:20,value:["白名单","员工 "],tooltip:{formatter:"{b0}:{c0}"}}],links:[{source:"客户A",target:"客户B",value:"担保金额：1万"},{source:"客户B",target:"客户C",value:"持股比例：30%"},{source:"客户A",target:"客户D",value:["担保金额：2万","持股比例：60%"]},{source:"客户A",target:"客户E",value:"持股比例：10%"},{source:"客户E",target:"客户F",value:"持股比例：1%"},{source:"客户C",target:"客户O",value:"持股比例：1%"},{source:"客户E",target:"客户P",value:"持股比例：1%"},{source:"客户D",target:"客户G",value:"持股比例：1%"}]};const defaultCategory="高信誉白名单",graphTitle="关系图",currentGraph={nodes:{},links:{}},nodeMap={};function init(){for(let e=0;e<graph.nodes.length;e++)graph.nodes[e].category===defaultCategory&&(currentGraph.nodes[graph.nodes[e].name]=graph.nodes[e]),nodeMap[graph.nodes[e].name]=graph.nodes[e],nodeMap[graph.nodes[e].name].links={},nodeMap[graph.nodes[e].name].nodes={},nodeMap[graph.nodes[e].name].hasAppend=!1;for(let e=0;e<graph.links.length;e++){let t=graph.links[e];nodeMap[t.source]!==void 0&&nodeMap[t.target]!==void 0&&(nodeMap[t.source].links[t.target]=t,nodeMap[t.source].nodes[nodeMap[t.target].name]=nodeMap[t.target])}for(let e=0;e<graph.nodes.length;e++)graph.nodes[e].itemStyle=null,graph.nodes[e].label={normal:{show:graph.nodes[e].symbolSize>15}};redrawGraph()}function append(e){let t=nodeMap[e];if(t.hasAppend===!0||Object.keys(t.nodes).length===0||Object.keys(t.links).length===0){alert("无法继续展开");return}Object.values(t.nodes).forEach(o=>{currentGraph.nodes[o.name]=o}),Object.values(t.links).forEach(o=>{currentGraph.links[o.source+"_"+o.target]=o}),t.hasAppend=!0,redrawGraph()}function remove(e){let t=nodeMap[e];Object.values(t.nodes).forEach(o=>{delete currentGraph.nodes[o.name],o.hasAppend===!0&&Object.keys(o.nodes).length>0&&remove(o.name)}),Object.values(t.links).forEach(o=>{delete currentGraph.links[o.source+"_"+o.target]}),t.hasAppend=!1,redrawGraph()}function redrawGraph(){option.series[0].data=Object.values(currentGraph.nodes),option.series[0].links=Object.values(currentGraph.links),console.log(option),myChart.setOption(option)}var categories=[{name:"高信誉白名单",itemStyle:{color:"#10a050"}},{name:"白名单",itemStyle:{color:"#ff7d18"}},{name:"黑名单",itemStyle:{color:"#c23531"}}];const option={title:{text:graphTitle,top:"bottom",left:"center"},tooltip:{show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove",alwaysShowContent:!1,showDelay:100,hideDelay:2e3,enterable:!1,position:"right",confine:!1,transitionDuration:.2},legend:{left:"left",data:categories.map(e=>e.name)},animation:!1,series:[{type:"graph",layout:"force",symbolSize:48,data:Object.values(currentGraph.nodes),links:Object.values(currentGraph.links),categories,roam:!0,itemStyle:{normal:{borderColor:"#fff",borderWidth:1,shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.3)"}},label:{position:"inside",formatter:"{b}"},focusNodeAdjacency:!0,edgeSymbol:["none","arrow"],edgeLabel:{normal:{show:!0,textStyle:{fontSize:10},formatter:"{c}"}},lineStyle:{color:"target",opacity:.6,curveness:.3},emphasis:{lineStyle:{width:5}},force:{layoutAnimation:!1,repulsion:500}}]};init(),myChart.on("click",function(e){if(e.dataType==="node"){const t=nodeMap[e.data.name];t.hasAppend===!0?remove(t.name):append(t.name)}});