var colors=["#5793f3","#d14a61","#675bba","#5793f3","#d14a61","#675bba"],aCategorys=["","鼠","牛","虎","兔","龙","蛇",""],aSeries=[];aCategorys.forEach(function(r,a,e){var t=r;if(r!=""){var o=[],s=2;a%2==1&&(s=3);for(var l=0;l<aCategorys.length;l++)o.push("-");o[a-1]=0,o[a]=Math.round(Math.random()*30+5),o[a+1]=0,aSeries.push({name:t,type:"line",smooth:!0,showSymbol:!1,areaStyle:{normal:{opacity:.7,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:colors[a-1]},{offset:1,color:colors[a-1]}],globalCoord:!1}}},data:o,z:s})}});var option=null;option={color:colors,tooltip:{trigger:"axis",formatter:function(r){var a;return r.forEach(function(e,t,o){e.data!=0&&e.data!="-"&&(a=e.seriesName+": "+e.data)}),a}},xAxis:[{type:"category",boundaryGap:!1,data:aCategorys,splitLine:{show:!1}}],yAxis:[{type:"value",splitLine:{show:!1}}],series:aSeries},option&&typeof option=="object"&&myChart.setOption(option,!0),$(window).resize(function(){myChart.resize()});