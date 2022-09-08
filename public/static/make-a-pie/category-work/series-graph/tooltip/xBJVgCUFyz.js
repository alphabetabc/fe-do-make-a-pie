var timeFn=null,sourceData={nodes:[{name:"0",label:"xx大学",number:40,flag:1,category:0},{name:"1",label:"校区1",number:30,flag:0,category:1},{name:"2",label:"学院1",number:20,flag:0,category:2},{name:"3",label:"学院2",number:20,flag:0,category:2},{name:"4",label:"校区2",number:30,flag:0,category:1},{name:"5",label:"学院1",number:20,flag:0,category:2},{name:"6",label:"学院2",number:20,flag:0,category:2},{name:"7",label:"学院3",number:20,flag:0,category:2},{name:"8",label:"校区3",number:30,flag:0,category:1},{name:"9",label:"学院1",number:20,flag:0,category:2},{name:"10",label:"学院2",number:20,flag:0,category:2},{name:"11",label:"学院3",number:20,flag:0,category:2},{name:"12",label:"学院4",number:20,flag:0,category:2},{name:"13",label:"一班",number:45,flag:0,category:3},{name:"14",label:"二班",number:52,flag:0,category:3}],links:[{target:"1",source:"0"},{target:"4",source:"0"},{target:"8",source:"0"},{target:"2",source:"1"},{target:"3",source:"1"},{target:"5",source:"4"},{target:"6",source:"4"},{target:"7",source:"4"},{target:"9",source:"8"},{target:"10",source:"8"},{target:"11",source:"8"},{target:"12",source:"8"},{target:"13",source:"6"},{target:"14",source:"6"}]},graphOpt=createGraphOption(sourceData);myChart.setOption(graphOpt);function createGraphOption(o){var e=o.nodes,a=o.links,i=["#2e2e2e","#5b9bd5","#70ad47","#f6ae8f","#ffc000"];for(var r in e){var m=0;for(var u in a)e[r].name==a[u].source&&m++;e[r].childrenNum=m,e[r].itemStyle={normal:{color:i[e[r].category]}}}var t=[e[0]],f=a.filter(function(n){if(n.source=="0"){for(var g in e)n.target==e[g].name&&t.push(e[g]);return!0}}),s={tooltip:{},animationEasingUpdate:"quinticInOut",label:{normal:{show:!0,textStyle:{fontSize:12}}},series:[{type:"graph",layout:"force",symbolSize:45,roam:!0,tooltip:{trigger:"item",formatter:function(n){return n.data.label+": "+n.data.childrenNum}},label:{normal:{show:!0,formatter:function(n){return n.data.label+`
`+n.data.childrenNum}}},edgeSymbolSize:[0,5],edgeSymbol:"arrow",nodes:t,links:f,force:{repulsion:1e3,initLayout:"circular",layoutAnimation:!1}}]};return s}myChart.on("click",cevent);function cevent(o){clearTimeout(timeFn),timeFn=setTimeout(function(){var e=myChart.getOption(),a=o.data,i=sourceData.nodes,r=sourceData.links;if(a!=null&&a!=null){var m=a.name,u=e.series[0].nodes,t=e.series[0].links;if(a.childrenNum<1)return!1;if(a.flag===0){for(var f in r)if(m==r[f].source){t.push(r[f]);for(var s in i)if(r[f].target==i[s].name){u.push(i[s]);break}}}else{let y=function(c){for(var l in t)c==t[l].source&&(g.push(t[l]),n.push(t[l].target),y(t[l].target))};var p=y,n=[],g=[];y(m),u=u.filter(function(c){var l=0;for(var b in n)if(n[b]==c.Name){l=1;break}return l==0}),t=t.filter(function(c){var l=0;for(var b in g)if(g[b].source==c.source&&g[b].target==c.target){l=1;break}return l==0})}var v=a.flag==0?1:0;for(var f in u)if(m==u[f].name){u[f].flag=v;break}e.series[0].nodes=quicksort(u),e.series[0].links=t,myChart.clear(),myChart.setOption(e)}},300)}function quicksort(o){if(o.length==0)return[];for(var e=new Array,a=new Array,i=o[0],r=1;r<o.length;r++)o[r].name<i.name?e.push(o[r]):a.push(o[r]);return quicksort(e).concat(i,quicksort(a))}$(document).on("resize",function(){myChart.resize()});
