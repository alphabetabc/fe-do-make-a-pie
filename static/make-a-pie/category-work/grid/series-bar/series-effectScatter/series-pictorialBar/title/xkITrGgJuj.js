var data=[];for(let o=0;o<6;++o)data.push(Math.round(Math.random()*10));var data1=[62,47,30,22,9,7],data2=[100,100,100,100,100,100],path="path://M1390,595h79l-39,22Z",myColor=["#ff68bd","#ef73ef","#c37ef5","#8787ff","#1bdef2","#37edc4"];option={backgroundColor:"#273454",title:[{text:"Project",x:"20",y:"20",textStyle:{fontSize:"30",fontWeight:"100",color:"#9c9c9c"}},{text:"Infographic",x:"120",y:"20",textStyle:{fontSize:"30",fontWeight:"100",color:"#b7bbc6"}}],grid:{left:100,top:100},xAxis:{axisLabel:{interval:0,textStyle:{color:function(o,e){return myColor[e]},fontSize:16,fontFamily:"FZYaoti",fontWeight:100},margin:5},position:"top",splitLine:{show:!0,lineStyle:{color:"#9c9c9c"},interval:0},axisLine:{lineStyle:{color:"#9c9c9c",width:1}},splitArea:{show:!1},axisTick:{show:!1},data:["2017","2018","2019","2020","2021","2022"]},yAxis:{axisLine:{lineStyle:{color:"#9c9c9c",width:1}},axisLabel:{interval:0,formatter:"{value}%",textStyle:{color:"#b7bbc6",fontFamily:"FZYaoti"},margin:20},splitLine:{show:!1},axisTick:{lineStyle:{color:"#b7bbc6",width:1,height:5}}},series:[{type:"bar",barWidth:60,barGap:"-100%",stack:"广告",itemStyle:{color:function(o){var e=[new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#ff68bd"},{offset:.5,color:"#ff68bd"},{offset:.5,color:"#9e3b72"},{offset:1,color:"#9e3b72"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#ef73ef"},{offset:.5,color:"#ef73ef"},{offset:.5,color:"#883e89"},{offset:1,color:"#883e89"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#c37ef5"},{offset:.5,color:"#c37ef5"},{offset:.5,color:"#724892"},{offset:1,color:"#724892"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#8787ff"},{offset:.5,color:"#8787ff"},{offset:.5,color:"#5959b1"},{offset:1,color:"#5959b1"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#1bdef2"},{offset:.5,color:"#1bdef2"},{offset:.5,color:"#0a8491"},{offset:1,color:"#0a8491"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#37edc4"},{offset:.5,color:"#37edc4"},{offset:.5,color:"#1b8970"},{offset:1,color:"#1b8970"}])];return e[o.dataIndex]}},data},{name:"",type:"pictorialBar",symbol:path,symbolSize:[60,20],symbolOffset:[0,0],z:12,symbolPosition:"end",itemStyle:{color:"#3c4765",opacity:1},data:data2},{name:"",type:"pictorialBar",symbol:path,symbolSize:[60,20],symbolOffset:[0,20],z:12,itemStyle:{opacity:1,color:function(o){var e=[new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#ff68bd"},{offset:.5,color:"#ff68bd"},{offset:.5,color:"#9e3b72"},{offset:1,color:"#9e3b72"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#ef73ef"},{offset:.5,color:"#ef73ef"},{offset:.5,color:"#883e89"},{offset:1,color:"#883e89"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#c37ef5"},{offset:.5,color:"#c37ef5"},{offset:.5,color:"#724892"},{offset:1,color:"#724892"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#8787ff"},{offset:.5,color:"#8787ff"},{offset:.5,color:"#5959b1"},{offset:1,color:"#5959b1"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#1bdef2"},{offset:.5,color:"#1bdef2"},{offset:.5,color:"#0a8491"},{offset:1,color:"#0a8491"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#37edc4"},{offset:.5,color:"#37edc4"},{offset:.5,color:"#1b8970"},{offset:1,color:"#1b8970"}])];return e[o.dataIndex]}},data:[1,1,1,1,1,1]},{name:"",type:"pictorialBar",symbol:path,symbolSize:[60,20],symbolOffset:[0,0],z:12,label:{show:!0,formatter:"{c}%",position:"top",distance:5,color:"#fff",fontFamily:"FZYaoti",fontWeight:100,fontSize:16},itemStyle:{opacity:1,color:function(o){var e=[new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#d2589d"},{offset:.5,color:"#d2589d"},{offset:.5,color:"#d04d98"},{offset:1,color:"#d04d98"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#c160c1"},{offset:.5,color:"#c160c1"},{offset:.5,color:"#bc52be"},{offset:1,color:"#bc52be"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#a16ac8"},{offset:.5,color:"#a16ac8"},{offset:.5,color:"#995fc5"},{offset:1,color:"#995fc5"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#7c7ae5"},{offset:.5,color:"#7c7ae5"},{offset:.5,color:"#7171e3"},{offset:1,color:"#7171e3"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#1bb7c6"},{offset:.5,color:"#1bb7c6"},{offset:.5,color:"#0ab1c1"},{offset:1,color:"#0ab1c1"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#2ebe9d"},{offset:.5,color:"#2ebe9d"},{offset:.5,color:"#21bb99"},{offset:1,color:"#21bb99"}])];return e[o.dataIndex]}},symbolPosition:"end",data},{name:"",type:"effectScatter",rippleEffect:{period:1,scale:5,brushType:"fill"},z:20,symbolPosition:"end",symbol:path,symbolSize:[15,5],symbolOffset:[0,9],itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:5,shadowOffsetY:3,shadowOffsetX:0,color:"#fff"}},data},{name:"2019",type:"bar",barWidth:60,barGap:"-100%",z:0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#2e3b5b"},{offset:.5,color:"#2e3b5b"},{offset:.5,color:"#3d4864"},{offset:1,color:"#3d4864"}],global:!1},opacity:1},data:data2}]};function run(){for(var o=option.series[0].data,e=0;e<o.length;++e)Math.random()<=100?o[e]=Math.round(Math.random()*60):o[e]=Math.round(Math.random()*80);myChart.setOption(option)}setTimeout(function(){run()},0),setInterval(function(){run()},3e3);