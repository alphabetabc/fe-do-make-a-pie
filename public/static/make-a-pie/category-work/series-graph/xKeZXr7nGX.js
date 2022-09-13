var hazards=[{name:"Storm",value:936},{name:"Flood",value:593},{name:"Earthquake",value:96},{name:"Wildfire",value:93},{name:"Drought",value:80},{name:"Tsunami",value:58},{name:"Extreme temperature",value:52},{name:"Volcanic",value:46},{name:"Landslide",value:14}],chains=[{source:"Storm",target:"Flood",value:43},{source:"Earthquake",target:"Tsunami",value:19},{source:"Landslide",target:"Flood",value:1}];hazards.forEach(function(a){a.symbolSize=a.value/10,a.label={normal:{show:a.name}}}),chains.forEach(function(a){a.lineStyle={normal:{width:a.value,opacity:.5}}}),option={series:[{name:"hazards Interaction",type:"graph",layout:"circular",circular:{rotateLabel:!0},data:hazards,links:chains,roam:!0,label:{normal:{fontSize:20,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"#0f3475"}},lineStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1551c2"},{offset:1,color:"#7be0ff"}],globalCoord:!1},curveness:.3,opacity:.5}}}]};