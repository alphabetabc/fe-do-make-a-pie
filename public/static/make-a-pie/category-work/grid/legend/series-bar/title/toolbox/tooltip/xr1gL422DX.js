option={backgroundColor:"rgba(46, 199, 201, 0)",color:["#94C833","#FE6918"],title:{},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},grid:{left:"3%",right:"4%",bottom:"20%",top:"8%",height:"40%",width:"60%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(o){var e;return o[1].value!="-"?e=o[1]:e=o[0],e.name+"<br/>"+e.seriesName+" : "+e.value}},legend:{data:["新增","减少"],textStyle:{color:"#fff"}},xAxis:[{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#fff"}},axisLabel:{show:!0,textStyle:{color:"#fff"}},data:function(){for(var o=[],e=1;e<=10;e++)o.push("9月"+e+"日");return o}()}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#fff"}},axisLabel:{show:!0,textStyle:{color:"#fff"}}}],series:[{name:"总计",type:"bar",stack:"总量",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,900,1245,1530,1376,1376,1511,1689,1856,1495,1292]},{name:"新增",type:"bar",stack:"总量",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFCA36"},{offset:.5,color:"#FA5801"},{offset:1,color:"#FB3800"}]),barBorderRadius:8,borderWidth:0,borderColor:"#333",label:{show:!0,textStyle:{color:"#fff"},position:"top"}}},data:[900,345,393,"-","-",135,178,286,"-","-","-"]},{name:"减少",type:"bar",stack:"总量",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#30E602"},{offset:1,color:"#8FFD17"},{offset:1,color:"#8FFD17"}]),barBorderRadius:8,borderWidth:0,borderColor:"#333",label:{show:!0,textStyle:{color:"#fff"},position:"bottom"}}},data:["-","-","-",108,154,"-","-","-",119,361]}]};