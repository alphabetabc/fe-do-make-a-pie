var data={antity:[{name:"选中的表",category:0,itemStyle:{color:"red"}},{name:"子表A",category:1,itemStyle:{color:"#4093F2"}},{name:"子表B",category:1,itemStyle:{color:"#4093F2"}},{name:"父亲表A",category:1,itemStyle:{color:"#4093F2"}},{name:"子表C",category:1,itemStyle:{color:"#4093F2"}},{name:"子表D",category:1,itemStyle:{color:"#4093F2"}},{name:"孙子表A",category:2,itemStyle:{color:"#4093F2"}}],relation:[{source:"父亲表A",target:"选中的表"},{source:"选中的表",target:"子表B"},{source:"选中的表",target:"子表A"},{source:"选中的表",target:"子表B"},{source:"子表C",target:"孙子表A"},{source:"子表C",target:"子表B"},{source:"选中的表",target:"子表C"},{source:"选中的表",target:"子表D"}]};option={title:{text:"血缘图自动版"},tooltip:{formatter(e){return e.data.source?e.data.source+"->"+e.data.target:e.data.name}},legend:{x:"center",data:["一级关系","二级关系","三级关系"]},series:[{type:"graph",layout:"force",symbol:"rect",symbolSize:[50,20],roam:!0,focusNodeAdjacency:!0,categories:[{name:"一级关系"},{name:"二级关系"},{name:"三级关系"}],edgeSymbol:["","arrow"],force:{repulsion:2e3,edgeLength:100},draggable:!0,itemStyle:{normal:{color:"#4b565b"}},lineStyle:{normal:{width:1,color:"#4b565b"}},label:{normal:{show:!0,textStyle:{}}},data:data.antity,links:data.relation}]};
