const set=[["商品","最高到手价","品牌"],["商品7",70,"海尔"],["商品15",91,"格力"],["商品16",110,"格力"],["商品17",118,"格力"],["商品2",123,"美的"],["商品9",154,"海尔"],["商品21",181,"小狗电器"],["商品14",191,"格力"],["商品4",193,"华帝"],["商品6",199,"海尔"],["商品13",210,"格力"],["商品11",247,"海尔"],["商品19",255,"小狗电器"],["商品3",274,"华帝"],["商品20",275,"小狗电器"],["商品12",277,"海尔"],["商品1",277,"美的"],["商品5",280,"海尔"],["商品10",291,"海尔"],["商品18",299,"小狗电器"],["商品8",300,"海尔"]];option={grid:[{left:80,right:56,top:64,bottom:24}],dataset:{source:set},visualMap:{type:"piecewise",orient:"horizontal",categories:["海尔","格力","美的","小狗电器","华帝"],color:["#409eff","#67c23a","#e6a23c","#f56c6c","#fbc4c4","#f5dab1","#a3d0fd"],left:32,top:0,dimension:2},xAxis:{name:`最高
到手价`},yAxis:{name:"商品价格排行",type:"category"},series:[{type:"bar",barWidth:"50%",encode:{x:"最高到手价",y:"商品"}}]},myChart.resize({width:536,height:320});
