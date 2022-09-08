var builderJson={all:10887,charts:{map:3237,lines:2164,bar:7561,line:7778,pie:7355,scatter:2405,candlestick:1842,radar:2090,heatmap:1762,treemap:1593,graph:2060,boxplot:1537,parallel:1908,gauge:2107,funnel:1692,sankey:1568},components:{geo:2788,title:9575,legend:9400,tooltip:9466,grid:9266,markPoint:3419,markLine:2984,timeline:2739,dataZoom:2744,visualMap:2466,toolbox:3034,polar:1945},ie:9743},downloadJson={"echarts.min.js":17365,"echarts.simple.min.js":4079,"echarts.common.min.js":6929,"echarts.js":14890},themeJson={"dark.js":1594,"infographic.js":925,"shine.js":1608,"roma.js":721,"macarons.js":2179,"vintage.js":1982};option={tooltip:{},title:[{text:"成功率",subtext:"总计 "+builderJson.all,x:"25%",textAlign:"center"},{text:"波动",subtext:"总计 "+Object.keys(downloadJson).reduce(function(e,t){return e+downloadJson[t]},0),x:"75%",textAlign:"center"},{text:"错误返回占比",subtext:"总计 "+Object.keys(themeJson).reduce(function(e,t){return e+themeJson[t]},0),x:"75%",y:"50%",textAlign:"center"}],grid:[{top:50,width:"50%",bottom:"45%",left:10,containLabel:!0},{top:"55%",width:"50%",bottom:0,left:10,containLabel:!0}],xAxis:[{type:"value",max:builderJson.all,splitLine:{show:!1}},{type:"value",max:builderJson.all,gridIndex:1,splitLine:{show:!1}}],yAxis:[{type:"category",data:Object.keys(builderJson.charts),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}},{gridIndex:1,type:"category",data:Object.keys(builderJson.components),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}}],series:[{type:"bar",stack:"chart",z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.charts).map(function(e){return builderJson.charts[e]})},{type:"bar",stack:"chart",silent:!0,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.charts).map(function(e){return builderJson.all-builderJson.charts[e]})},{type:"bar",stack:"component",xAxisIndex:1,yAxisIndex:1,z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.components).map(function(e){return builderJson.components[e]})},{type:"bar",stack:"component",silent:!0,xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.components).map(function(e){return builderJson.all-builderJson.components[e]})},{type:"pie",radius:[0,"30%"],center:["75%","25%"],data:Object.keys(downloadJson).map(function(e){return{name:e.replace(".js",""),value:downloadJson[e]}})},{type:"pie",radius:[0,"30%"],center:["75%","75%"],data:Object.keys(themeJson).map(function(e){return{name:e.replace(".js",""),value:themeJson[e]}})}]};
