option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:[50,80],center:["50%","40%"],label:{normal:{show:!1},emphasis:{show:!1}},data:[{value:40,name:"货币",itemStyle:{normal:{color:"#5877F0"}}},{value:20,name:"股票",itemStyle:{normal:{color:"#AA9FFD"}}},{value:40,name:"债券",itemStyle:{normal:{color:"#F96481"}}}]}],legend:{x:"center",bottom:5,itemGap:30,itemWidth:5,textStyle:{rich:{a:{fontSize:20,verticalAlign:"top",align:"center",padding:[0,0,28,0]},b:{fontSize:14,align:"center",padding:[0,10,0,0],lineHeight:25}}},align:"left",data:[{name:"货币",icon:"circle"},{name:"股票",icon:"circle"},{name:"债券",icon:"circle"}],formatter:function(a){for(var t=0,r,e=0,n=data.length;e<n;e++)t+=data[e].value,data[e].name==a&&(r=data[e].value);var l=["{a|"+(r/t*100).toFixed(2)+"%}","{b|"+a+"}"];return l.join(`
`)}},backgroundColor:"#fff"};
