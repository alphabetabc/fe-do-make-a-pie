var categories=["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],data=[5,20,36,10,10,20],times=0;function fetchData(a){setInterval(function(){categories.push("name"+times++),data.push(20+Math.random()*5),categories.shift(),data.shift(),a({categories,data})},3e3)}option={title:{text:"异步数据加载示例"},tooltip:{},legend:{data:["销量"]},xAxis:{type:"category",data:categories},yAxis:{},series:[{name:"销量",type:"line",data}],animationEasingUpdate:"linear",animationDurationUpdate:3e3},fetchData(function(a){myChart.setOption({xAxis:{data:a.categories},series:[{name:"销量",data:a.data}]})});