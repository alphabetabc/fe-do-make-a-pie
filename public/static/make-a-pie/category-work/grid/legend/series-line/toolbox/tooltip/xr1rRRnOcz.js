var data1=[133,333,222,541,341,133,333,222,312,321,352,321],data2=[120,132,101,134,90,120,132,101,134,90,312,221],data3=[220,112,141,234,190,160,162,401,334,190,112,261];options=[{backgroundColor:"#ffffff",tooltip:{trigger:"axis"},grid:{top:120,left:"10%",right:"40%",bottom:"65%"},legend:{align:"left",orient:"vertical",left:"7%",top:30,data:["未取得《食品生产许可证》从事食品添加剂生产活动","未取得《食品经营许可证》从事食品经营活动","未取得《食品生产许可证》从事食品生产活动）"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var a="",t=e.length,r=4,i=Math.ceil(t/r);if(t>r){var l="";l=e.substring(0,4),a=l+"..."}else a=e;return a}},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}],yAxis:[{name:"立案数",type:"value"}],series:[{name:"未取得《食品生产许可证》从事食品添加剂生产活动",type:"line",itemStyle:{normal:{color:"#ed400b",lineStyle:{width:3}}},data:data1},{name:"未取得《食品经营许可证》从事食品经营活动",type:"line",itemStyle:{normal:{lineStyle:{color:"#55a4ee",width:3}}},data:data2},{name:"未取得《食品生产许可证》从事食品生产活动）",type:"line",itemStyle:{normal:{color:"#e59be1",lineStyle:{width:3}}},data:data3}]}],myChart.on("click",function(e){alert(1)});