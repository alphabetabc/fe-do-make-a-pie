var colorData=["#337d76","#29ba89","#cc9933","#ca3636","#4282c2","#c371c3"],data=[{name:"个人",value:20},{name:"单位",value:84},{name:"物资",value:52},{name:"资金",value:90}],create=function(t){for(var a=[],e=0;e<t.length;e++)a.push({name:"",center:[e*25+12.5+"%","50%"],radius:["15%","20%"],type:"pie",labelLine:{normal:{show:!1}},markPoint:{data:[{symbol:"triangle",symbolSize:15,symbolRotate:0,itemStyle:{normal:{color:"transparent"}},name:"",value:t[e].name,x:myChart.getWidth()*(e+.5)/4,y:myChart.getHeight()*.45+120,label:{normal:{show:!0,position:"center",formatter:function(o){return o.value},textStyle:{color:colorData[e]}}}}]},markLine:{silent:!0,symbolSize:0,data:[{0:{x:e*25+"%",y:"40%",lineStyle:{normal:{color:e?"#ccc":"transparent",width:1,type:"solid"}}},1:{x:e*25+"%",y:"70%",lineStyle:{normal:{color:e?"#ccc":"transparent",width:1,type:"solid"}}}}]},data:[{value:t[e].value,name:t[e].name,itemStyle:{normal:{color:colorData[e]},emphasis:{color:colorData[e]}},label:{normal:{formatter:"{d} %",position:"center",show:!0,textStyle:{fontSize:"16",fontWeight:"bold",color:colorData[e]}}}},{value:100-t[e].value,name:"",tooltip:{show:!1},itemStyle:{normal:{color:"#aaa"},emphasis:{color:"#aaa"}},hoverAnimation:!1}]});return a};option={tooltip:{trigger:"item",formatter:function(t,a,e){var o=t.name+" : "+t.percent+"%";return o}},grid:{bottom:100,top:150},xAxis:[{show:!1}],yAxis:[{show:!1}],series:create(data)};
