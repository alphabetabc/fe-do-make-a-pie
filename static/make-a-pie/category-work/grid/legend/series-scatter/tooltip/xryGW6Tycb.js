var data={cate:[1,2,3,4,5,6,7,8],yAxisLeft:{人数:[1,2,3,4,5,6,7,8],人数二:[[2,3],[3,3],[6,8]]},yAxisRight:{个数:[1,2,3,4,5,6,7,8],个数二:[[2,3],[3,3],[6,8]]}},leftLegends=Object.keys(data.yAxisLeft),rightLegends=Object.keys(data.yAxisRight),leftSeries=leftLegends.map(e=>({name:e,data:data.yAxisLeft[e],yAxisIndex:0,type:"scatter"})),rightSeries=rightLegends.map(e=>({name:e,data:data.yAxisRight[e],yAxisIndex:1,type:"scatter"}));option={legend:{data:leftLegends.concat(rightLegends)},xAxis:{name:"xAxis",data:data.cate},yAxis:[{type:"value",name:"人数",min:0,position:"left"},{type:"value",name:"个数",min:0,position:"right"}],tooltip:{show:!0},series:leftSeries.concat(rightSeries)};
