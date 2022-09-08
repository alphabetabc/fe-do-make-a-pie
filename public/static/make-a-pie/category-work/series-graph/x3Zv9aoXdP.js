var hazards=[{name:"Storm",value:258},{name:"Flood",value:231},{name:"Earthquake",value:86},{name:"Tsunami",value:23},{name:"Extreme temperature",value:19},{name:"Wildfire",value:14},{name:"Drought",value:10},{name:"Volcanic",value:10},{name:"Landslide",value:3}],chains=[{source:"Storm",target:"Flood",value:11},{source:"Earthquake",target:"Tsunami",value:11},{source:"Earthquake",target:"Volcanic",value:1},{source:"Volcanic",target:"Tsunami",value:2}];hazards.forEach(function(a){a.symbolSize=a.value/10,a.label={normal:{show:a.name}}}),chains.forEach(function(a){a.lineStyle={normal:{width:a.value,opacity:.5}}}),option={series:[{name:"hazards Interaction",type:"graph",layout:"circular",circular:{rotateLabel:!0},data:hazards,links:chains,roam:!0,label:{normal:{fontSize:20,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"#0f3475"}},lineStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1551c2"},{offset:1,color:"#7be0ff"}],globalCoord:!1},curveness:.3,opacity:.5}}}]};
