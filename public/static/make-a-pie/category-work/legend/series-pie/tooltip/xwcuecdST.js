option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#8fc31f","#f35833","#00ccff","#ffcc00"],legend:{orient:"vertical",x:"left",data:["日志破坏","系统提权","错误日志"],formatter:function(t){for(var e=option.series[0].data,r=e[0].value+e[1].value+e[2].value,a=0;a<option.series[0].data.length;a++)if(t==e[a].name)return t+"   "+(e[a].value/r*100).toFixed(2)+"%  /   "+e[a].value}},series:[{name:"签到比例分析",type:"pie",radius:"55%",center:["40%","50%"],data:[{value:335,name:"日志破坏"},{value:310,name:"系统提权"},{value:234,name:"错误日志"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},itemStyle:{normal:{label:{show:!0,formatter:"{b} : {c} ({d}%)"}},labelLine:{show:!0}}}]};
