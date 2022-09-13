app.title="水印 - ECharts 性别统计";var builderJson={all:500,charts:{传媒:394,体育:33,信息技术:95,化学:128,历史文化:96,外国语:298,政法:145,教育科学:346,数学:35,文学:176,旅游与地理科学:172,物理:108,环境科学与工程:114,经济:183,管理:257,美术:258,音乐:90,计算机:153},components:{传媒:122,体育:171,信息技术:80,化学:28,历史文化:18,外国语:37,政法:31,教育科学:151,数学:29,文学:24,旅游与地理科学:38,物理:48,环境科学与工程:49,经济:51,管理:52,美术:117,音乐:30,计算机:103},ie:9743},downloadJson={传媒学院:.76,信息技术学院:.16,化学学院:.54,历史文化学院:.82,外国语学院:.84,政法学院:.89,教育科学学院:.82,数学学院:.84,文学院:.88,旅游与地理科学学院:.82,物理学院:.7,环境科学与工程学院:.7,经济学院:.78,管理学院:.83,美术学院:.69,音乐学院:.75,计算机学院:.58,生命科学学院:.88},themeJson={传媒学院:.24,体育学院:.84,信息技术学院:.46,化学学院:.18,历史文化学院:.16,外国语学院:.11,政法学院:.18,教育科学学院:.1,数学学院:.16,文学院:.12,旅游与地理科学学院:.18,物理学院:.31,环境科学与工程学院:.3,经济学院:.22,管理学院:.17,美术学院:.31,计算机学院:.4,生命科学学院:.12},waterMarkText="ECHARTS",canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=canvas.height=100,ctx.textAlign="center",ctx.textBaseline="middle",ctx.globalAlpha=.08,ctx.font="20px Microsoft Yahei",ctx.translate(50,50),ctx.rotate(-Math.PI/4),ctx.fillText(waterMarkText,0,0),option={backgroundColor:{type:"pattern",image:canvas,repeat:"repeat"},tooltip:{},title:[{text:"大一新生男女汇总",subtext:"总计 "+builderJson.all,x:"25%",textAlign:"center"},{text:"各学院女生占比",subtext:"总计 "+Object.keys(downloadJson).reduce(function(t,e){return t+downloadJson[e]},0),x:"75%",textAlign:"center"},{text:"各学院男生占比",subtext:"总计 "+Object.keys(themeJson).reduce(function(t,e){return t+themeJson[e]},0),x:"75%",y:"50%",textAlign:"center"}],grid:[{top:50,width:"50%",bottom:"45%",left:10,containLabel:!0},{top:"55%",width:"50%",bottom:0,left:10,containLabel:!0}],xAxis:[{type:"value",max:builderJson.all,splitLine:{show:!1}},{type:"value",max:builderJson.all,gridIndex:1,splitLine:{show:!1}}],yAxis:[{type:"category",data:Object.keys(builderJson.charts),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}},{gridIndex:1,type:"category",data:Object.keys(builderJson.components),axisLabel:{interval:0,rotate:30},splitLine:{show:!1}}],series:[{type:"bar",stack:"chart",z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.charts).map(function(t){return builderJson.charts[t]})},{type:"bar",stack:"chart",silent:!0,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.charts).map(function(t){return builderJson.all-builderJson.charts[t]})},{type:"bar",stack:"component",xAxisIndex:1,yAxisIndex:1,z:3,label:{normal:{position:"right",show:!0}},data:Object.keys(builderJson.components).map(function(t){return builderJson.components[t]})},{type:"bar",stack:"component",silent:!0,xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{color:"#eee"}},data:Object.keys(builderJson.components).map(function(t){return builderJson.all-builderJson.components[t]})},{type:"pie",radius:[0,"30%"],center:["75%","25%"],data:Object.keys(downloadJson).map(function(t){return{name:t.replace(".js",""),value:downloadJson[t]}})},{type:"pie",radius:[0,"30%"],center:["75%","75%"],data:Object.keys(themeJson).map(function(t){return{name:t.replace(".js",""),value:themeJson[t]}})}]};
