option={xAxis:{scale:!0,splitLine:{show:!1}},yAxis:{scale:!0,splitLine:{show:!1},axisLabel:{formatter:"{value} 元"}},tooltip:{padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:function(o){var e=o.value;return console.log(e),"年份:"+e[0]+",数值"+e[1]}},series:[{type:"scatter",symbolSize:10,data:[[1960,2e5],[1961,2e5],[1962,2e5],[1963,2e5],[1964,2e5],[1965,2e5],[1966,2e5],[1967,2e5],[1968,2e5],[1969,2e5],[1970,2e5],[1971,2e5],[1973,2e5],[1974,2e5],[2001,2e5],[2002,2e5]]}]};