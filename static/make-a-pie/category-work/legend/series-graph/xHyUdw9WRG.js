var webkitDep={type:"force",categories:[{name:"甲公司",keyword:{},base:"网格关系"},{name:"乙公司",keyword:{},base:"网格关系"}],nodes:[{name:"甲公司",value:10,symbolSize:40,category:0},{name:"甲公司A股东",value:8,symbolSize:25,category:0,itemStyle:{color:"#3398db"}},{name:"甲公司B股东",value:10,symbolSize:25,category:0,itemStyle:{color:"#3398db"}},{name:"子公司1",value:10,symbolSize:15,category:0,itemStyle:{color:"green"}},{name:"子公司2",value:110,symbolSize:15,category:0,itemStyle:{color:"green"}},{name:"子公司3",value:100,symbolSize:15,category:0,itemStyle:{color:"green"}},{name:"子公司4",value:1e3,symbolSize:15,category:0,itemStyle:{color:"green"}},{name:"乙公司",value:10,symbolSize:40,color:"#fff",category:1},{name:"乙公司A股东",value:8,symbolSize:25,category:1},{name:"乙公司B股东",value:10,symbolSize:25,category:1},{name:"乙公司C股东",value:8,symbolSize:25,category:1},{name:"子公司1",value:10,symbolSize:15,category:1},{name:"子公司2",value:110,symbolSize:15,category:1},{name:"子公司3",value:100,symbolSize:15,category:1}],links:[{source:0,target:1},{source:0,target:2},{source:1,target:3},{source:1,target:4},{source:2,target:5},{source:2,target:6},{source:7,target:8},{source:7,target:9},{source:7,target:10},{source:8,target:11},{source:9,target:12},{source:10,target:13}]};myChart.hideLoading(),option={legend:{data:["甲公司","乙公司"]},series:[{type:"graph",layout:"force",animation:!1,label:{normal:{show:!0,position:"right"}},draggable:!0,data:webkitDep.nodes.map(function(e,a){return e.id=a,e}),categories:webkitDep.categories,force:{edgeLength:80,repulsion:100},edges:webkitDep.links}]};
