let topData=[502.84,205.97,332.79,281.55,398.35,214.02,502.84,205.97,332.79,281.55,398.35,214.02,398.35,214.02],bottomData=[281.55,398.35,214.02,179.55,289.57,356.14,281.55,398.35,214.02,179.55,289.57,356.14,289.57,356.14],timeData=["1：00","2:00","3:00","4:00","5:00","6:00","7：00","8:00","9:00","10:00","11:00","12:00","13:00","14:00"];option={title:{show:!0,text:"实时网络上传下载速率",textStyle:{align:"center",color:"#333",fontSize:20},top:"5%",left:"5%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}},formatter:function(o){var e="";e+="<div>"+o[0].name+"</div>";for(var t=0;t<o.length;t++)e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+o[t].color+';"></span>'+o[t].seriesName+"</span> : <span>"+o[t].data+"KB/s</br>";return e}},legend:{top:"10%",left:"80%",data:["上传","下载"]},grid:{top:"25%",left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0},splitArea:{color:"#333",lineStyle:{color:"#333"}},axisLabel:{interval:2,color:"#333"},splitLine:{show:!1},boundaryGap:!1,data:timeData}],yAxis:[{type:"value",min:0,splitNumber:6,splitLine:{show:!0,lineStyle:{color:["#333"],opacity:.6}},axisLine:{show:!0},axisLabel:{show:!0,margin:20,formatter:"{value} KB/s",textStyle:{fontSize:14,color:"rgba(51,51,51,0.9)"}},axisTick:{show:!0}}],series:[{name:"上传",type:"line",smooth:!1,showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{color:"#FFBC0D",shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!0,position:"top",textStyle:{color:"#FFF",fontSize:14}},itemStyle:{color:"#FFBC0D",borderColor:"rgb(108,78,0)",borderWidth:0,shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:0,shadowOffsetX:0},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[],global:!1}},data:topData},{name:"下载",type:"line",smooth:!1,showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{color:"#41B5FF",shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!1,position:"top",textStyle:{color:"#fff",fontSize:14}},itemStyle:{color:"#00DAFF",borderColor:"rgb(0,115,100)",borderWidth:0,shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0,shadowOffsetY:0,shadowOffsetX:0},tooltip:{show:!0},data:bottomData}]},setInterval(()=>{let o=new Date,e=o.getHours(),t=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes(),l=o.getSeconds()<10?"0"+o.getSeconds():o.getSeconds(),r=e+":"+t+":"+l;timeData.splice(0,1),timeData.push(r);let s=Math.random()*1e3,a=Math.random()*1500;topData.splice(0,1),topData.push(s.toFixed(2)),bottomData.splice(0,1),bottomData.push(a.toFixed(2)),myChart.setOption(option)},2e3);