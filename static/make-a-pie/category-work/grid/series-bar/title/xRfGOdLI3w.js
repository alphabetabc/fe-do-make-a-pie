var myChart1Data=[{name:"数学",value:72,sum:10},{name:"物理",value:63,sum:10},{name:"英语",value:51,sum:10},{name:"地理",value:48,sum:10},{name:"化学",value:46,sum:10}];getArrByKey=(t,e)=>{let r=e||"value",i=[];return t&&t.forEach(function(a){i.push(a[r])}),i},opt={index:0},myChart1Data=myChart1Data.sort((t,e)=>e.value-t.value),option={title:{text:"偏科科目TOP5",textStyle:{fontSize:25,fontWeight:"normal"},x:"center"},grid:{top:"2%",bottom:-15,right:10,left:-30,containLabel:!0},xAxis:{show:!1},yAxis:[{triggerEvent:!0,show:!0,inverse:!0,data:getArrByKey(myChart1Data,"name"),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,align:"left",margin:100,fontSize:13,formatter:function(t,e){return opt.index===0&&e<3?"{idx"+e+"|} {title|"+t+"}":opt.index!==0&&e+opt.index<9?"{idx|0"+(1+e+opt.index)+"} {title|"+t+"}":"{idx|"+(1+e+opt.index)+"} {title|"+t+"}"},rich:{idx0:{color:"#FB375E",backgroundColor:{image:"../img/icon_ranking_01.png"},width:22,height:28},idx1:{color:"#FF9023",backgroundColor:{image:"../img/icon_ranking_02.png"},width:22,height:28},idx2:{color:"#01B599",backgroundColor:{image:"../img/icon_ranking_03.png"},width:22,height:28},idx:{color:"#333",borderRadius:100,padding:[5,8]},title:{fontSize:14,color:"#000"}}}},{triggerEvent:!0,show:!0,inverse:!0,data:getArrByKey(myChart1Data,"name"),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"#000",align:"left",margin:20,fontSize:18,formatter:function(t,e){return myChart1Data[e].value}}}],series:[{name:"条",type:"bar",yAxisIndex:0,data:myChart1Data,barWidth:15,itemStyle:{color:"#5fb878",barBorderRadius:30}},{type:"bar",barWidth:15,xAxisIndex:0,barGap:"-100%",data:[100,100,100,100,100,100,100],itemStyle:{normal:{color:"#e8f0eb",barBorderRadius:14}},zlevel:-1}]};
