model={nodes:[{id:"a",name:"a"},{id:"b",name:"b"},{id:"c",name:"c"},{id:"d1",name:"d"},{id:"d2",name:"d"}],links:[{source:"a",target:"b",value:.342284047256003},{source:"b",target:"c",value:.32322870366987},{source:"d1",target:"a",value:.177682517071359},{source:"d2",target:"c",value:.133681507072122}]},option={title:{text:"Sankey Diagram"},tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"sankey",layout:"none",data:model.nodes,links:model.links,itemStyle:{normal:{borderWidth:1,borderColor:"#aaa"}},lineStyle:{normal:{curveness:.5}},label:{normal:{formatter:function(e){return e.name}}}}]};