var data1=[133,333,222,541,341,133,333,222,312,321],data2=[120,132,101,134,90,120,132,101,134,90],data3=[220,112,141,234,190,160,162,401,334,190];options=[{backgroundColor:"#ffffff",tooltip:{trigger:"axis"},grid:{top:80,left:"10%",right:"45%",bottom:"73%"},legend:{align:"left",left:"7%",top:30,data:["优秀","良好","一般"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var a="",t=e.length,r=4,i=Math.ceil(t/r);if(t>r){var l="";l=e.substring(0,4),a=l+"..."}else a=e;return a}},data:["特大型餐馆","大型餐馆","中型餐馆","快餐店","小吃店","饮品店","食堂","集体用餐单位","中央厨房","其他"]}],yAxis:[{name:"评定企业数",type:"value"}],series:[{name:"优秀",type:"line",itemStyle:{normal:{color:"#ed400b",lineStyle:{width:3}}},data:data1},{name:"良好",type:"line",itemStyle:{normal:{lineStyle:{color:"#55a4ee",width:3}}},data:data2},{name:"一般",type:"line",itemStyle:{normal:{color:"#e59be1",lineStyle:{width:3}}},data:data3}]}],myChart.on("click",function(e){alert(1)});
