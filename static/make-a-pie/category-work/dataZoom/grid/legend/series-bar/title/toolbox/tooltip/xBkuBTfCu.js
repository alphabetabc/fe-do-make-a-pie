option={title:{text:"交叉柱图模拟",subtext:"数据来自网络"},dataZoom:{show:!1},grid:{right:"15%"},toolbox:{right:"15%",itemGap:30,itemSize:24,feature:{saveAsImage:{},restore:{}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var a,l;return e[0].value==="-"&&e[1].value==="-"?"no data":(e[0].value!="-"?(a=e[0],e[5].value!="-"?l=e[5]:e[6].value!="-"||e[6].value!="-"?l=e[6]:e[7].value!="-"?l=e[7]:e[8].value!="-"&&(l=e[8])):e[1].value!="-"&&(a=e[1],e[2].value!="-"?l=e[2]:e[3].value!="-"?l=e[3]:e[4].value!="-"&&(l=e[4])),a.seriesName+" : "+a.value+"<br/>"+l.seriesName+" : "+l.value)}},legend:{orient:"vertical",top:"20%",right:"5%",itemGap:30,data:["Company A","Company B","Company C","Q1","Q2","Q3","Q4"]},xAxis:{boundaryGap:!0,splitLine:{show:!1},axisLabel:{interval:function(e,a){var l=a;return l!="-"}},data:[" ","-","Company A","-","-","-","-","Company B","-","-","-","-","Company C","-","-","-","-","-","Q1","-","-","-","Q2","-","-","-","Q3","-","-","-","Q4","-"]},yAxis:{},series:[{name:"Company Total",type:"bar",slient:!0,barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"red"}},data:["-",{value:6593,itemStyle:{normal:{color:"#743C08"}}},{value:6593,itemStyle:{normal:{color:"#743C08"}}},{value:6593,itemStyle:{normal:{color:"#743C08"}}},{value:6593,itemStyle:{normal:{color:"#743C08"}}},"-",{value:7049,itemStyle:{normal:{color:"#DF760B"}}},{value:7049,itemStyle:{normal:{color:"#DF760B"}}},{value:7049,itemStyle:{normal:{color:"#DF760B"}}},{value:7049,itemStyle:{normal:{color:"#DF760B"}}},"-",{value:4333,itemStyle:{normal:{color:"#F6B61E"}}},{value:4333,itemStyle:{normal:{color:"#F6B61E"}}},{value:4333,itemStyle:{normal:{color:"#F6B61E"}}},{value:4333,itemStyle:{normal:{color:"#F6B61E"}}},"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]},{name:"Quarter Total",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"red"}},data:["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",{value:3172,itemStyle:{normal:{color:"#BBE9DB"}}},{value:3172,itemStyle:{normal:{color:"#BBE9DB"}}},{value:3172,itemStyle:{normal:{color:"#BBE9DB"}}},"-",{value:4548,itemStyle:{normal:{color:"#AECCC6"}}},{value:4548,itemStyle:{normal:{color:"#AECCC6"}}},{value:4548,itemStyle:{normal:{color:"#AECCC6"}}},"-",{value:5174,itemStyle:{normal:{color:"#9BA6A5"}}},{value:5174,itemStyle:{normal:{color:"#9BA6A5"}}},{value:5174,itemStyle:{normal:{color:"#9BA6A5"}}},"-",{value:4949,itemStyle:{normal:{color:"#757A79"}}},{value:4949,itemStyle:{normal:{color:"#757A79"}}},{value:4949,itemStyle:{normal:{color:"#757A79"}}}]},{name:"Company A",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#743C08"}},data:["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",1215,"-","-","-",2303,"-","-","-",1617,"-","-","-",2300,"-","-"]},{name:"Company B",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#DF760B"}},data:["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",669,"-","-","-",1738,"-","-","-",1378,"-","-","-",1804,"-"]},{name:"Company C",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#F6B61E"}},data:["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",1288,"-","-","-",507,"-","-","-",2179,"-","-","-",845]},{name:"Q1",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#BBE9DB"}},data:["-",1487,"-","-","-","-",2145,"-","-","-","-",772,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]},{name:"Q2",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#AECCC6"}},data:["-","-",2023,"-","-","-","-",1735,"-","-","-","-",899,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]},{name:"Q3",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#9BA6A5"}},data:["-","-","-",1528,"-","-","-","-",960,"-","-","-","-",883,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]},{name:"Q4",type:"bar",barGap:"-100%",barCategoryGap:"0%",itemStyle:{normal:{color:"#757A79"}},data:["-","-","-","-",1555,"-","-","-","-",2209,"-","-","-","-",1779,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]}]};
