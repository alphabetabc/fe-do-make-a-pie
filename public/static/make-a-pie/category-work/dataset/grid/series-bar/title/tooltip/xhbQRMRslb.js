const DATA=[["线下扫码",455],["任务栏",56],["小程序跳转",8],["手机端搜索",6],["发现 - 小程序",5],["单聊分享",4],["小程序功能",4],["收藏",3],["相册选择",2],["Android系统",12]].sort((t,e)=>t[1]-e[1]);let SUM=0;DATA.map(t=>{SUM+=t[1]}),option={dataset:{source:DATA},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{if(t[0].name!=="")return`${t[0].name}：${t[0].value[1]} (${Math.round(t[0].value[1]/SUM*1e4)/100+"%"})`}},title:{text:"09/17 周五",left:"left",top:20,textStyle:{color:"#797979"}},grid:{containLabel:!0,left:"4%"},xAxis:{name:"人次/百分比"},yAxis:{type:"category",axisLabel:{show:!0,margin:15,textStyle:{color:"#000000"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},series:[{type:"bar",barWidth:20,itemStyle:{barBorderRadius:[0,30,30,0],color:"#07c160"},label:{show:!0,position:"right",fontSize:12,fontWeight:"bold",color:"#727272",formatter:function(t,e){return`${t.value[1]} (${Math.round(t.value[1]/SUM*1e4)/100+"%"})`}}}]};
