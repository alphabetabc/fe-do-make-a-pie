option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",position:function(e){return[e[0]+10,e[1]-10]}},legend:{top:"90%",itemWidth:10,itemHeight:10,data:["空调在线","空调离线"],textStyle:{color:"rgba(255,255,255,1)",fontSize:"12"}},series:[{name:"空调在线率",type:"pie",center:["50%","50%"],radius:["40%","60%"],color:["rgba(25, 22, 240, 1)","rgba(240, 22, 22, 1)"],label:{formatter:e=>e.name+`
数量：`+e.value+`
占比：`+e.percent.toFixed(0)+"%",fontSize:20},labelLine:{show:!0},data:[{value:1,name:"空调在线"},{value:4,name:"空调离线"}]}]};
