option={backgroundColor:"#fff",title:{text:"投诉举报案件办理情况"},tooltip:{trigger:"axis"},legend:{left:"3%",top:"7%",data:["投诉举报立案数","投诉举报结案数"]},grid:{left:"3%",right:"65%",top:"11%",bottom:"67%",containLabel:!0},color:["#a4d8cc","#78d6ef"],toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var t="",a=e.length,r=4,l=Math.ceil(a/r);if(a>r){var o="";o=e.substring(0,4),t=o+"..."}else t=e;return t}},data:["崇左市","来宾市","河池市","贺州市","百色市","玉林市","贵港市","钦州市","防城港市","北海市","梧州市","桂林市","柳州市","南宁市"]}],yAxis:{type:"value"},series:[{name:"投诉举报立案数",type:"line",areaStyle:{normal:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00af87"},{offset:1,color:"#9ee1d2"}],!1)}},smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[710,312,321,754,500,830,710,521,504,660,530,410,530,410]},{name:"投诉举报结案数",type:"line",areaStyle:{normal:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5ebac8"},{offset:1,color:"#bce8ef"}],!1)}},smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[410,312,221,654,410,630,310,521,354,560,330,310,230,310]}]};
