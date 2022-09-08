for(var xLabel=[1],goToSchool=[2],i=900;i<3100;i+=.2)xLabel.push(i),goToSchool.push([i,Math.random()*10-23]),parseInt(i)%5===0&&goToSchool.push([i,Math.random()*12-27]),parseInt(i)%10===0&&goToSchool.push([i,Math.random()*12-22]),parseInt(i)==1561&&goToSchool.push([i,15.8]),parseInt(i)==1268&&goToSchool.push([i,27.4]);option={title:{text:"导航频段占用态势分布",textStyle:{align:"center",color:"#fff",fontSize:25},top:"5%",left:"center"},backgroundColor:"#0e1c47",tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:16},itemGap:25,itemWidth:18,icon:"path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",data:[{name:"上学"},{name:"放学"}]},grid:{top:"15%",left:"10%",right:"2%",bottom:"55%"},xAxis:[{show:!0,name:"频率（频段） / MHz",nameLocation:"middle",nameTextStyle:{color:"#7ec7ff",fontSize:20,padding:70,fontWeight:"bolder"},type:"value",min:1150,max:1630,maxInterval:1,axisLabel:{textStyle:{color:"#7ec7ff",padding:16,fontSize:14,fontWeight:"bolder"},formatter:function(e){if(parseInt(e)==1561)return`1561\r
\r
B1I`;if(parseInt(e)==1207)return`1207\r
\r
B2I\r
E5b`;if(parseInt(e)==1268)return`1268\r
\r
B3I`;if(parseInt(e)==1575)return`1575\r
\r
B1C\r
L1\r
E1`;if(parseInt(e)==1227)return`1227\r
\r
L2`;if(parseInt(e)==1176)return`1176\r
\r
B2a\r
L5\r
E5a`;if(parseInt(e)==1602)return`1602\r
\r
G1`;if(parseInt(e)==1246)return`1246\r
\r
G2`}},splitLine:{show:!1,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},data:xLabel}],yAxis:[{name:"功率谱密度 / (dBm/Hz)",nameLocation:"middle",nameTextStyle:{color:"#7ec7ff",fontSize:20,padding:50,fontWeight:"bolder"},min:-30,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,textStyle:{color:"#7ec7ff",padding:16,fontSize:14,fontWeight:"bolder"},formatter:function(e){return e}},axisTick:{show:!1}}],series:[{name:"",type:"line",symbol:"none",showAllSymbol:!1,symbolSize:0,smooth:!1,lineStyle:{normal:{width:1,color:"rgba(25,163,223,1)"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(25,163,223,1)",borderColor:"#646ace",borderWidth:0},label:{show:!1},labelLine:{show:!1},tooltip:{show:!0},data:goToSchool}]};
