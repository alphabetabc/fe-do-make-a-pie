$('<div class="back">返回</div>').appendTo($("#chart-panel")),$(".back").css({position:"absolute",left:"17px",top:"25px",color:"black","font-size":"15px",cursor:"pointer","z-index":"100"}),$(".back").click(function(){parentInfo.length!==1&&(parentInfo.pop(),getRealData(parentInfo[parentInfo.length-1].code))});var parentJson=null,parentInfo=[{code:1}];function echartsMapClick(e){if(parentInfo.slice(-1)[0].code==e.data.code)return;let a=e.data;parentInfo.push({code:a.code}),getRealData(a.code)}function getRealData(e){let a=[];e===1&&(a=[{value:1048,name:"搜索引擎",code:2},{value:735,name:"直接访问",code:2},{value:580,name:"邮件营销",code:2},{value:484,name:"联盟广告",code:2},{value:300,name:"视频广告",code:2}]),e===2&&(a=[{value:33,name:"泰罗",code:3},{value:2222,name:"杰克",code:3},{value:122,name:"赛文",code:3},{value:1133,name:"迪迦",code:3},{value:800,name:"艾迪",code:3}]),e===3&&(a=[{value:367,name:"大力一号",code:3},{value:333,name:"葫芦娃",code:3},{value:389,name:"悟空",code:3},{value:368,name:"猪八戒",code:3},{value:359,name:"金刚",code:3}]),initEcharts(a)}getRealData(parentInfo[0].code);function initEcharts(e){myChart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{top:"5%",left:"center"},series:[{name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:e}]},!0),myChart.off("click"),myChart.on("click",echartsMapClick)}
