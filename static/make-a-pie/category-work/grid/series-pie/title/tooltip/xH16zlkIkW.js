option={tooltip:{trigger:"item",formatter:function(e,o,l){var t=e.seriesName;return t+="<br/>"+e.name+" : "+e.percent+"%",t}},backgroundColor:"#0f2d55",textStyle:{color:"#fff"},itemStyle:{normal:{color:"#c23531",shadowBlur:10,zlevel:10,shadowColor:"fcc",avoidLabelOverlap:!0,shadowOffsetY:"5"}},grid:{bottom:"20%",left:"10%"},title:[{text:"已结案",subtext:"75",left:"19%",top:"66%",textAlign:"center",textStyle:{color:"#fff",textAlign:"center"},subtextStyle:{color:"#fff"}},{text:"未结案",subtext:"75",left:"50%",top:"66%",textAlign:"center",textStyle:{color:"#fff"},subtextStyle:{color:"#fff"}}],xAxis:[{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0},data:["正常","同班"]}],yAxis:[{show:!1}],series:[{name:"正常",itemStyle:{normal:{color:"#01b0d1"}},center:["20.0%","50%"],radius:["20%","25%"],type:"pie",labelLine:{normal:{show:!1}},data:[{color:["#f60"],value:20,name:"相似度",label:{normal:{formatter:"{d} %",position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:"#fff"}}}},{value:80,tooltip:{show:!1},itemStyle:{normal:{color:"#465262"},emphasis:{color:"#0e1c3d"}},hoverAnimation:!1}]},{name:"同班",itemStyle:{normal:{color:"#00c7ab"}},center:["50.0%","50%"],radius:["20%","25%"],type:"pie",labelLine:{normal:{show:!1}},data:[{value:20,name:"相似度",label:{normal:{formatter:"{d} %",position:"center",show:!0,textStyle:{fontSize:"16",fontWeight:"bold",color:"#fff"}}}},{value:80,name:"22",tooltip:{show:!1},backgroundColor:"#f60",itemStyle:{normal:{color:"#465262"},emphasis:{color:"#0e1c3d"}},hoverAnimation:!1}]}]};