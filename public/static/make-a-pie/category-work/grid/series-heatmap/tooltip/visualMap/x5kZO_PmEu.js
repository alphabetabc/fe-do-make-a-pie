var types=["路基工程质量检验","桥梁工程质量检验","隧道工程质量检验","路面工程质量检验","交安工程质量检验"],names=["TJ-01","TJ-02","TJ-03","TJ-04","TJ-05","TJ-06","TJ-07","TJ-8"],data=[[0,0,5],[0,1,1],[0,2,6],[0,3,2],[0,4,4],[1,0,7],[1,1,2],[1,2,5],[1,3,7],[1,4,2],[2,0,1],[2,1,1],[2,2,4],[2,3,2],[2,4,3],[3,0,5],[3,1,4],[3,2,7],[3,3,4],[3,4,4],[4,0,1],[4,1,3],[4,2,4],[4,3,8],[4,4,5],[5,0,2],[5,1,1],[5,2,3],[5,3,2],[5,4,4],[6,0,1],[6,1,1],[6,2,5],[6,3,10],[6,4,5],[7,0,7],[7,1,6],[7,2,5],[7,3,3],[7,4,4]];data=data.map(function(t){return[t[1],t[0],t[2]||"-"]}),option={tooltip:{position:"top"},animation:!1,grid:{height:"50%",top:"10%"},xAxis:{type:"category",data:types,splitArea:{show:!0}},yAxis:{type:"category",data:names,splitArea:{show:!0}},visualMap:{type:"continuous",min:0,max:10,calculable:!0,orient:"horizontal",left:"center",bottom:"15%",inRange:{color:["#ebedf0","#c6e48b","#7bc96f","#239a3b","#196027"]}},series:[{name:"检验完成情况",type:"heatmap",data,label:{show:!0,formatter(t){return t.value[2]*10+"%"}},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},tooltip:{formatter:function(t){console.log(t);var e=t.seriesName,a=t.name,o=names[t.value[1]],r=t.value[2];return`${e}:${r*10}%<br>标段：${o}<br>类型：${a}<br>`}}}]};
