var builderJson={charts:{积极情绪:63.11,消极情绪:29.14,中性情绪:7.75},components:{积极情绪:65.12,消极情绪:27.26,中性情绪:7.62}},downloadJson={积极情绪:63.11,消极情绪:29.14,中性情绪:7.75},themeJson={积极情绪:65.12,消极情绪:27.26,中性情绪:7.62};option={tooltip:{},title:[{text:"上海踩踏事件网民情绪分布",x:"25%",textAlign:"center"},{text:"深圳滑坡事件网民情绪分布",x:"25%",y:"50%",textAlign:"center"},{text:"上海踩踏事件不同情绪分布图",x:"75%",textAlign:"center"},{text:"深圳滑坡事件不同情绪分布图",x:"75%",y:"50%",textAlign:"center"}],grid:[{top:50,width:"50%",bottom:"55%",left:10,containLabel:!0},{top:"55%",width:"50%",bottom:"10%",left:10,containLabel:!0}],xAxis:[{type:"value",max:100,splitLine:{show:!1}},{type:"value",max:100,gridIndex:1,splitLine:{show:!1}}],yAxis:[{type:"category",data:Object.keys(builderJson.charts),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}},{gridIndex:1,type:"category",data:Object.keys(builderJson.components),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}}],series:[{type:"bar",stack:"chart",z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.charts).map(function(t){return builderJson.charts[t]})},{type:"bar",stack:"chart",silent:!0,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.charts).map(function(t){return builderJson.all-builderJson.charts[t]})},{type:"bar",stack:"component",xAxisIndex:1,yAxisIndex:1,z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.components).map(function(t){return builderJson.components[t]})},{type:"bar",stack:"component",silent:!0,xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.components).map(function(t){return builderJson.all-builderJson.components[t]})},{type:"pie",radius:[0,"30%"],center:["75%","25%"],data:Object.keys(downloadJson).map(function(t){return{name:t.replace(".js",""),value:downloadJson[t]}})},{type:"pie",radius:[0,"30%"],center:["75%","75%"],data:Object.keys(themeJson).map(function(t){return{name:t.replace(".js",""),value:themeJson[t]}})}]};
