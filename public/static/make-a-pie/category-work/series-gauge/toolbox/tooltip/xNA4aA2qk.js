var colors=["#008b48","#64c128","#fadd1d","#ffaa01","#ff0101"],texts=["畅通","基本畅通","缓行","拥堵","严重拥堵"];function getIdx(e){var t=e/10,o=0;return t>.2&&t<=.4?o=1:t>.4&&t<=.6?o=2:t>.6&&t<=.8?o=3:t>.8&&t<=1&&(o=4),o}function getColor(e){return colors[getIdx(e)]}function getText(e){return texts[getIdx(e)]}option={tooltip:{formatter:"{a} : {c}"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"实时交通指数",type:"gauge",detail:{formatter:"{value}",fontSize:50,fontWeight:"bold"},data:[{value:0,name:getText(0)}],min:0,max:10,title:{offsetCenter:[0,"20%"],fontSize:20,color:getColor(0)},axisLine:{lineStyle:{width:25,color:[[.2,colors[0]],[.4,colors[1]],[.6,colors[2]],[.8,colors[3]],[1,colors[4]]]}},axisLabel:{fontSize:16,fontWeight:"bold"}}]},setInterval(function(){var e=Math.round(Math.random()*10*10)/10;option.series[0].data[0].value=e,option.series[0].data[0].name=getText(e),option.series[0].title.color=getColor(e),myChart.setOption(option,!0)},3e3);