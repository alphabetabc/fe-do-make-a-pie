var hazards=[{name:"Landslide",value:2776},{name:"Storm",value:1950},{name:"Earthquake",value:1789},{name:"Flood",value:912},{name:"Drought",value:215},{name:"Tsunami",value:119},{name:"Wildfire",value:92},{name:"Extreme temperature",value:86},{name:"Volcanic",value:26}],chains=[{source:"Landslide",target:"Storm",value:186},{source:"Landslide",target:"Flood",value:79},{source:"Storm",target:"Flood",value:66},{source:"Earthquake",target:"Tsunami",value:15},{source:"Earthquake",target:"Volcanic",value:1},{source:"Volcanic",target:"Tsunami",value:2},{source:"Landslide",target:"Wildfire",value:1},{source:"Wildfire",target:"Storm",value:2},{source:"Extreme temperature",target:"Landslide",value:1},{source:"Extreme temperature",target:"Storm",value:1},{source:"Landslide",target:"Epidemic",value:1},{source:"Epidemic",target:"Storm",value:2}];hazards.forEach(function(e){e.symbolSize=e.value/10,e.label={normal:{show:e.name}}}),chains.forEach(function(e){e.lineStyle={normal:{width:e.value,opacity:.5}}}),option={series:[{name:"hazards Interaction",type:"graph",layout:"circular",circular:{rotateLabel:!0},data:hazards,links:chains,roam:!0,label:{normal:{fontSize:20,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"#0f3475"}},lineStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1551c2"},{offset:1,color:"#7be0ff"}],globalCoord:!1},curveness:.3,opacity:.5}}}]};