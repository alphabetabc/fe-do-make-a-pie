option={tooltip:{trigger:"item"},legend:{top:"40%",left:"80%",orient:"vertical",icon:"circle",itemWidth:15,itemHeight:15,data:["罚款","责令整改","责令停产停业","罚没","警告"],formatter:function(l){let e=0,n=["罚款","责令整改","责令停产停业","罚没","警告"],t=[9,1,10,11,222],i=0;t.forEach(a=>i+=a),n.forEach(function(a,r){a==l&&(e=r)});let o=Math.round(t[e]/i*1e4)/100+"%";return l+" --- "+o+" --- "+t[e]}},series:[{name:"访问来源",type:"pie",radius:["40%","70%"],center:["45%","47%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"罚款"},{value:735,name:"责令整改"},{value:580,name:"责令停产停业"},{value:484,name:"罚没"},{value:300,name:"警告"}]}]};