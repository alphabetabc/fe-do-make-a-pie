option={title:{text:"抢修效率四象限分析"},grid:{left:"3%",right:"7%",bottom:"3%",containLabel:!0},tooltip:{showDelay:0,formatter:function(e){return e.value.length>1?e.seriesName+" :<br/>"+e.value[0]+"工单数 "+e.value[1]+"分钟 ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"分钟 "},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{feature:{dataZoom:{},brush:{type:["rect","polygon","clear"]}}},brush:{},legend:{data:["女性","男性"],left:"center"},xAxis:{scale:!0},yAxis:{scale:!0},series:[{type:"effectScatter",symbolSize:20,data:[[1392,66.4],[1e3,47.6]]},{type:"scatter",data:[[1200,51.6],[980,59],[700,49.2],[600,63],[1321,53.6],[999,59],[1e3,47.6],[876,69.8],[981,66.8],[1291,75.2],[1392,66.4],[876,67.3]],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{normal:{type:"solid"}},data:[{type:"average",name:"平均值"},{xAxis:1e3}]}}]};