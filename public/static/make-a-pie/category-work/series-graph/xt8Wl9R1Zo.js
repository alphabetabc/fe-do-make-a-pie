var hazards=[{name:"Storm",value:5344},{name:"Landslide",value:3465},{name:"Flood",value:3110},{name:"Earthquake",value:2134},{name:"Drought",value:434},{name:"Wildfire",value:298},{name:"Tsunami",value:295},{name:"Extreme temperature",value:271},{name:"Volcanic",value:98}],chains=[{source:"Storm",target:"Flood",value:276},{source:"Landslide",target:"Storm",value:264},{source:"Landslide",target:"Flood",value:155},{source:"Earthquake",target:"Tsunami",value:53},{source:"Earthquake",target:"Volcanic",value:2},{source:"Volcanic",target:"Tsunami",value:4},{source:"Landslide",target:"Epidemic",value:1},{source:"Epidemic",target:"Storm",value:2},{source:"Landslide",target:"Volcanic",value:1},{source:"Volcanic",target:"Storm",value:2},{source:"Landslide",target:"Wildfire",value:1},{source:"Wildfire",target:"Storm",value:2},{source:"Extreme temperature",target:"Landslide",value:1},{source:"Extreme temperature",target:"Storm",value:1}];hazards.forEach(function(e){e.symbolSize=e.value/150,e.label={normal:{show:e.name}}}),chains.forEach(function(e){e.lineStyle={normal:{width:e.value/5,opacity:.5}}}),option={series:[{name:"hazards Interaction",type:"graph",layout:"circular",circular:{rotateLabel:!0},data:hazards,links:chains,roam:!0,label:{normal:{fontSize:20,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"#0f3475"}},lineStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1551c2"},{offset:1,color:"#7be0ff"}],globalCoord:!1},curveness:.3,opacity:.2}}}]};