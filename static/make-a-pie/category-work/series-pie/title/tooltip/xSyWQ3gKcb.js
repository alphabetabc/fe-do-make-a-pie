option={title:{text:`投票人数
1200人`,x:"center",y:"center",subtextStyle:{fontWeight:"500",fontSize:26}},tooltip:{trigger:"item",formatter:function(e,n,i){var t=e.seriesName;return t+="<br/>"+e.name+" : "+e.percent+"%",t}},series:[{name:"满意度",type:"pie",radius:["50%","70%"],data:[{value:500,name:"满意"},{value:400,name:"一般"},{value:300,name:"不满意"}]}]};
