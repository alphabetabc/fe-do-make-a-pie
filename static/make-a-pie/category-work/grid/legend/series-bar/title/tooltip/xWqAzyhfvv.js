option={title:{text:"因素分析:品牌贡献",x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e;return t[1].value!=="-"?e=t[1]:e=t[0],e.name+"<br/>"+e.seriesName+" : "+e.value}},legend:{x:"center",top:"8%",data:["支出","收入"]},grid:{top:"16%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",splitLine:{show:!1},data:function(){var t=["兰蔻","雅诗兰黛","香奈儿","SKII","资生堂","奥迪","科颜氏","馥蕾氏","海蓝之谜","娇韵诗"];return t}()},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,900,1245,1530,1376,1376,1511,1689,1856,1495,1292]},{name:"收入",type:"bar",stack:"总量",label:{show:!0,position:"top"},data:[900,345,393,"-","-",135,178,286,"-","-","-"]},{name:"支出",type:"bar",stack:"总量",label:{show:!0,position:"bottom"},data:["-","-","-",108,154,"-","-","-",119,361,203]}]};
