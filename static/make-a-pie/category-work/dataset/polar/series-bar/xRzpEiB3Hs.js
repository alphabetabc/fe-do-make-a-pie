option={backgroundColor:"#f4f2e3",dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]},polar:{radius:[300]},angleAxis:{show:!1,min:function(a){return a.min>=1?a.min-a.max/3:0},max:function(a){return a.max*4/3}},radiusAxis:{type:"category",axisLabel:{show:!0,interval:0,color:"#333",fontSize:14},axisLine:{show:!1},axisTick:{show:!1,alignWithLabel:!0},splitLine:{show:!0,color:"red"}},series:[{type:"bar",barWidth:10,barGap:"50%",barCategoryGap:"60%",coordinateSystem:"polar",itemStyle:{shadowBlur:10,shadowColor:"rgba(40, 40, 40, 0.5)",color:function(a){return["#85b6b2","#6d4f8d","#cd5e7e","#e38980","#f7db88"][a.dataIndex]}},encode:{radius:"product",angle:"2016"}}]};