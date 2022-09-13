var series_data=[{value:1959,name:"服装鞋包"}];option={series:[{type:"pie",cursor:"default",radius:["49.5%","50%"],center:["50%","50%"],color:"#00CCFF",label:{show:!0,position:"center",formatter:["{x|{c}}","{x|{b}}"].join(`
`),rich:{x:{fontSize:25,padding:5}}},data:series_data}],animation:!1},myChart.on("click",function(e){console.log(e)});
