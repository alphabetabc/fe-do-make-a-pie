var wuXin=new Array("木","火","土","金","水"),color=["#78a355","#d93a49","#8e3e1f","#dea32c","#50b7c1"];function roundDatas(l){for(var a=[],e=0;e<l;e++){var r=Math.cos(72*e*Math.PI/180),o=Math.sin(72*e*Math.PI/180);a.push({name:wuXin[e],x:o,y:-r,itemStyle:{normal:{color:color[e]}}})}return a}function linkDatas(l){for(var a=[],e=0;e<l;e++)a.push({label:{normal:{show:!0,formatter:"相生"}},lineStyle:{normal:{color:"#94d6da",width:2,curveness:.3,opacity:.8,type:"dashed"}},source:e,target:e+1}),a.push({lineStyle:{normal:{color:"#FF5151",width:2,curveness:0,opacity:.8}},label:{normal:{show:!0,formatter:"相克"}},source:e,target:e+2});return a.push({label:{normal:{show:!0,formatter:"相生"}},lineStyle:{normal:{color:"#94d6da",type:"dashed",width:2,curveness:.3,opacity:.8}},source:e-1,target:0}),a.push({lineStyle:{normal:{color:"#FF5151",width:2,curveness:0,opacity:.8}},label:{normal:{show:!0,formatter:"相克"}},source:3,target:0}),a.push({lineStyle:{normal:{color:"#FF5151",width:2,curveness:0,opacity:.8}},label:{normal:{show:!0,formatter:"相克"}},source:4,target:1}),a}option={backgroundColor:"#2E2E2E",title:{text:"五行相生相克图",subtext:"",left:50,top:10,backgroundColor:"#FFFAFA",borderRadius:8,textStyle:{color:"#102b6a"},subtextStyle:{color:"#102b6a"}},color:["#000000","#FFFFFF"],series:[{name:"五行",type:"graph",focusNodeAdjacency:!0,edgeSymbol:["","arrow"],edgeSymbolSize:[3,15],edgeLabel:{normal:{textStyle:{fontSize:15}}},label:{normal:{show:!0,formatter:"{b}",fontSize:46}},symbol:"circle",symbolSize:60,top:"60",left:"200",width:"400",height:"400",data:roundDatas(5),links:linkDatas(5)},{name:"大圆",type:"pie",radius:"52",center:["400","268"],data:[{value:50,name:"阴"},{value:50,name:"阳"}],roseType:"radius",hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{name:"黑色圆",type:"pie",zlevel:2,radius:"26",center:["400","294"],data:[{value:50,name:""}],roseType:"radius",hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{name:"白色圆",type:"pie",zlevel:2,radius:"26",center:["400","242"],data:[{value:50,name:""}],roseType:"radius",hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{name:"黑色圆小",type:"pie",zlevel:3,radius:"12",center:["400","242"],data:[{value:50,name:""}],roseType:"radius",hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}}},{name:"白色圆小",type:"pie",zlevel:3,radius:"12",center:["400","294"],data:[{value:50,name:""}],roseType:"radius",hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}}}]};