function isHasElementTwo(t,a){var e=t.toString(),i=e.indexOf(a);if(i>=0){var o=new RegExp("((^|,)"+a+"(,|$))","gi");return e.replace(o,"$2@$3").replace(/[^,@]/g,"").indexOf("@")}else return-1}datas={name:"综治",nameArr:["电话举报","领导上报","监督员上报","群众上报"],dataArr:[[30],[80],[50],[20]],perArr:[10,50,30,10]},colors=["#0263FF","#CB3D21","#F1C551","#8E30FF"];let seriesArr=[];datas.nameArr.forEach(function(t,a){var e=0;a!=0&&(e=-20),seriesArr.push({name:t,type:"bar",stack:"案件数",barWidth:30,itemStyle:{normal:{color:colors[a],barBorderRadius:[20,20,20,20],shadowOffsetX:e,shadowColor:colors[a]}},label:{normal:{show:!0,position:"insideRight"}},z:datas.nameArr.length-a,data:datas.dataArr[a]})}),option={backgroundColor:"#000",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:datas.nameArr,icon:"circle",itemGap:50,itemWidth:10,itemHeight:10,top:"30%",formatter:function(t){var a=isHasElementTwo(datas.nameArr,t);return"{name|"+t+`}
{num|`+datas.dataArr[a][0]+"}{split| / }{per|"+datas.perArr[a]+"}{cell| %}"},width:300,textStyle:{rich:{name:{fontSize:11,fontFamily:"FZLanTingHei-L-GBK",fontWeight:400,color:"#FFFFFF",padding:[35,0,0,0]},num:{fontSize:32,fontFamily:"DigifaceWide",fontWeight:400,color:"#69A3FF"},split:{fontSize:16,fontFamily:"Avanti",fontWeight:400,color:" #8CACFF"},per:{fontSize:14,fontFamily:"Avanti",fontWeight:400,color:" #8CACFF"},cell:{fontSize:12,fontFamily:"Avanti",fontWeight:400,color:" #8CACFF"}}}},grid:{left:"3%",right:"4%",bottom:"30%",top:0,containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",data:datas.name,axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},series:seriesArr};