var colors=["rgba(251,210,73,0.7)","rgba(251,210,73,0.7)","rgba(124,213,253,0.7)","rgba(124,213,253,0.7)","rgba(124,213,253,0.7)","rgba(124,213,253,0.7)","rgba(124,213,253,0.7)","rgba(124,213,253,0.7)","rgba(181,236,69,0.7)","rgba(181,236,69,0.7)","rgba(136,243,227,0.7)","rgba(136,243,227,0.7)","rgba(136,243,227,0.7)","rgba(136,243,227,0.7)"],aCategorys=["","男","女",` 5
\r年
\r及
\r以
\r下`,` 6
\r-
\r10
\r年`,`11
\r-
\r15
\r年`,`16
\r-
\r20
\r年`,`21
\r-
\r25
\r年`,`26
\r年
\r及
\r以
\r上`,` 大
\r专
\r及
\r以
\r下`,` 本
\r科`,` 语
\r文`,` 数
\r学`,` 英
\r语`,` 其
\r他`,""],topdata=[0,96,96,97,95,98,94,89,94,80,67,90,94,90,89],aSeries=[{name:"职业行为倾向",type:"line",symbol:"circle",symbolSize:12,itemStyle:{normal:{color:"#F6A623",borderColor:"#ffffff",borderWidth:2}},lineStyle:{normal:{opacity:0}},data:["-",96,96,97,95,98,94,89,94,80,52,75,94,90,89,"-"]},{name:"角色价值观",type:"line",symbol:"circle",symbolSize:12,lineStyle:{normal:{opacity:0}},itemStyle:{normal:{color:"#A5A7AD",borderColor:"#ffffff",borderWidth:2}},data:["-",77,89,79,70,69,60,80,91,69,67,90,84,70,69,"-"]}];aCategorys.forEach(function(o,r,e){var n=o;if(o!==""){for(var a=[],l=0;l<aCategorys.length;l++)a.push("-");a[r-1]=0,a[r]=topdata[r],a[r+1]=0,aSeries.push({name:n,type:"pictorialBar",smooth:!1,legendHoverLink:!1,symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",barCategoryGap:"-130%",label:{normal:{show:!1},emphasis:{show:!1}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:colors[r-1]},{offset:1,color:colors[r-1]}],globalCoord:!1}}},data:a})}});var option=null;option={color:colors,tooltip:{trigger:"axis",formatter:function(o){console.log(o);var r=o[0].name+"<br>";return o.forEach(function(e,n,a){e.data!==0&&e.data!=="-"&&e.seriesType=="line"&&(r+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span>'+e.seriesName+":"+e.data+"<br>")}),r}},legend:{icon:"circle",itemWidth:14,itemHeight:14,itemGap:15,data:["职业行为倾向","角色价值观","职业归属感"],right:"4%",textStyle:{fontSize:14,color:"#424242"}},xAxis:[{type:"category",boundaryGap:!1,data:aCategorys,axisLabel:{textStyle:{fontSize:14}},splitLine:{show:!0,lineStyle:{color:"#f7f7f7"}}}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:[{type:"value",splitLine:{show:!0,lineStyle:{color:"#f7f7f7"}}}],series:aSeries},$(window).resize(function(){myChart.resize()});
