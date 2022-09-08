let echartData=[{value:8777,name:"陆家派出所"},{value:6547,name:"花桥派出所"},{value:2347,name:"张浦派出所"},{value:2187,name:"锦溪派出所"},{value:1357,name:"巴城派出所"}],attackSourcesColor=[new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#ff9250"},{offset:1,color:"#ff5252"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#ffbf25"},{offset:1,color:"#ff802a"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#f4e973"},{offset:1,color:"#ffb949"}]),new echarts.graphic.LinearGradient(0,1,1,1,[{offset:0,color:"#649dfb"},{offset:1,color:"#649dfb"}])],max=parseInt(echartData[0].value);for(let e=0;e<echartData.length-1;e++)max=max<parseInt(echartData[e+1].value)?parseInt(echartData[e+1].value):max;option={tooltip:{trigger:"axis",formatter(e){for(var r=0;r<e.length;r++)return e[r].name+":"+e[r].data.value}},legend:{show:!1},grid:{top:"1%",bottom:0,left:"0%",right:"0%",containLabel:!0},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},data:echartData.map(e=>e.name),axisLabel:{margin:0,fontSize:15,align:"left",color:"#000000",padding:[0,0,60,-30],interval:0,rich:{a1:{color:"#fff",backgroundColor:"#ff5454",borderColor:"#fd2829",borderWidth:2,width:24,height:24,align:"center",borderRadius:24,fontSize:15},a2:{color:"#fff",backgroundColor:"#ff7e00",borderColor:"#f27200",borderWidth:2,width:24,height:24,align:"center",borderRadius:24,fontSize:15},a3:{color:"#fff",backgroundColor:"#ffbd54",borderColor:"#ff9f06",borderWidth:2,width:24,height:24,align:"center",borderRadius:24,fontSize:15},b:{color:"#fff",backgroundColor:"#57aaff",borderColor:"#3096ff",borderWidth:2,width:24,height:24,align:"center",borderRadius:24,fontSize:15}},formatter:function(e){var r=echartData.map(a=>a.name).indexOf(e);return r=r+1,r-1<3?["{a"+r+"|"+r+"}  "+e].join(`
`):["{b|"+r+"}  "+e].join(`
`)}}},{triggerEvent:!0,show:!0,inverse:!0,data:echartData.map(e=>e.value),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"rgba(29, 145, 245, 1)",align:"right",verticalAlign:"bottom",lineHeight:30,fontSize:15,padding:[0,30,10,0],formatter:"{value}"}}],series:[{z:2,name:"value",type:"bar",barWidth:15,zlevel:1,data:echartData.map((e,r)=>{let a={color:r>3?attackSourcesColor[3]:attackSourcesColor[r]};return{value:e.value,itemStyle:a}}),label:{show:!1,position:"right"}},{name:"背景",type:"bar",barWidth:15,barGap:"-100%",itemStyle:{normal:{color:"rgba(213,220,237,0.9)"}},data:new Array(echartData.length).fill(max*2)}]};