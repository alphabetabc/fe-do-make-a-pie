myChart.showLoading();var webkitDep={type:"circular",categories:[{name:"人物关系",keyword:{},base:"人物关系"}],nodes:[{name:"刘烨",value:3,category:0},{name:"霓娜",value:1,category:0},{name:"诺一",value:1,category:0}],links:[{source:0,target:1},{source:0,target:2}]};myChart.hideLoading(),option={legend:{data:["人物关系"]},series:[{type:"graph",layout:"force",animation:!1,label:{normal:{show:!0,position:"right"}},draggable:!0,data:webkitDep.nodes.map(function(e,a){return e.id=a,e}),categories:webkitDep.categories,force:{edgeLength:105,repulsion:100},edges:webkitDep.links}]},myChart.setOption(option);
