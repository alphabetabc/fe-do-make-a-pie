option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#8fc31f","#f358de","#00ccfa","#ffc1b8"],legend:{orient:"vertical",x:"right",data:["准时","迟到","请假","未到"],formatter:function(t){for(var e=option.series[0].data,r=e[0].value+e[1].value+e[2].value+e[3].value,a=0;a<option.series[0].data.length;a++)if(t==e[a].name)return t+"     "+e[a].value+"     "+(e[a].value/r*100).toFixed(2)+"%"}},series:[{name:"签到比例分析",type:"pie",radius:"55%",center:["40%","50%"],data:[{value:335,name:"准时"},{value:310,name:"迟到"},{value:234,name:"请假"},{value:135,name:"未到"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},itemStyle:{normal:{label:{show:!0,formatter:"{b} : {c} ({d}%)"}},labelLine:{show:!0}}}]};
