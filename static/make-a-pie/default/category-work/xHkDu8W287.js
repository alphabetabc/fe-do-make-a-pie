var placeHoledStyle={normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},dataStyle={normal:{label:{show:!0,position:"insideLeft",formatter:"{c}%"}}};option={title:{text:"多维条形图",subtext:"From ExcelHome",sublink:"http://e.weibo.com/1341556070/AiEscco0H"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{y:55,itemGap:document.getElementById("main").offsetWidth/8,data:["男","女"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},grid:{y:80,y2:30},xAxis:[{type:"value",position:"top",splitLine:{show:!1},axisLabel:{show:!1}}],yAxis:[{type:"category",splitLine:{show:!1},data:["FE-3AC","FE-3AD","FE-4KA","FE-5"]}],series:[{name:"男",type:"bar",stack:"总量",itemStyle:dataStyle,data:[11424,15534,4119,10356]},{name:"女",type:"bar",stack:"总量",itemStyle:dataStyle,data:[46701,75232,8898,27082]}]};