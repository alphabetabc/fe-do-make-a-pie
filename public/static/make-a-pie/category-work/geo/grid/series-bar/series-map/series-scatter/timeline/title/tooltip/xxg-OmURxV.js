var uploadedDataURL="https://geo.datav.aliyun.com/areas_v2/bound/511000_full.json",colors=[["#1DE9B6","#F46E36","#04B9FF","#5DBD32","#FFC809","#FB95D5","#BDA29A","#6E7074","#546570","#C4CCD3"],["#37A2DA","#67E0E3","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#FB7293","#E062AE","#E690D1","#E7BCF3","#9D96F5","#8378EA","#8378EA"],["#DD6B66","#759AA0","#E69D87","#8DC1A9","#EA7E53","#EEDD78","#73A373","#73B9BC","#7289AB","#91CA8C","#F49F42"]],colorIndex=0;$(function(){for(var u={资中县:[104.85212,29.76416],东兴区:[105.17157,29.69684],市中区:[104.94698,29.56942],威远县:[104.66885,29.52742],隆昌市:[105.28773,29.33948]},s=["2014","2015","2016","2017","2018","2019"],t=[[{year:"2014",name:"资中县",value:1056},{year:"2014",name:"东兴区",value:48},{year:"2014",name:"市中区",value:3594},{year:"2014",name:"威远县",value:108},{year:"2014",name:"隆昌市",value:8542}],[{year:"2015",name:"资中县",value:402},{year:"2015",name:"东兴区",value:402},{year:"2015",name:"市中区",value:402},{year:"2015",name:"威远县",value:402},{year:"2015",name:"隆昌市",value:402}],[{year:"2016",name:"资中县",value:402},{year:"2016",name:"东兴区",value:402},{year:"2016",name:"市中区",value:402},{year:"2016",name:"威远县",value:402},{year:"2016",name:"隆昌市",value:402}],[{year:"2017",name:"资中县",value:402},{year:"2017",name:"东兴区",value:402},{year:"2017",name:"市中区",value:402},{year:"2017",name:"威远县",value:402},{year:"2017",name:"隆昌市",value:402}],[{year:"2018",name:"资中县",value:402},{year:"2018",name:"东兴区",value:402},{year:"2018",name:"市中区",value:402},{year:"2018",name:"威远县",value:402},{year:"2018",name:"隆昌市",value:402}],[{year:"2019",name:"资中县",value:402},{year:"2019",name:"东兴区",value:402},{year:"2019",name:"市中区",value:402},{year:"2019",name:"威远县",value:402},{year:"2019",name:"隆昌市",value:402}]],p=[],i=[],l=0;l<t.length;l++){i.push([]);for(var m=0;m<t[l].length;m++)i[l].push(t[l][m].value)}$.getJSON(uploadedDataURL,function(h){echarts.registerMap("china",h);var d=function(a){for(var n=[],e=0;e<a.length;e++){var o=u[a[e].name];o&&n.push({name:a[e].name,value:o.concat(a[e].value)})}return n},f=function(a,n){for(var e=[],o=0;o<a.length;o++){var y=a[o],v=u[y.name];debugger;var c=n;v&&c&&e.push([{coord:v,value:y.value},{coord:c}])}return e};optionXyMap01={timeline:{data:s,axisType:"category",autoPlay:!0,playInterval:3e3,left:"10%",right:"10%",bottom:"3%",width:"80%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},baseOption:{animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",grid:{right:"1%",top:"15%",bottom:"10%",width:"20%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}}},geo:{show:!0,map:"china",roam:!0,zoom:1,center:[105.06776,29.58698],label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}}},options:[]};for(var r=0;r<s.length;r++)optionXyMap01.options.push({backgroundColor:"#051b4a",title:[{},{id:"statistic",text:s[r]+"年数据统计情况",left:"75%",top:"8%",textStyle:{color:"#fff",fontSize:30}}],xAxis:{type:"value",scale:!0,position:"top",min:0,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:p},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:d(t[r]),symbolSize:function(a){return a[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:colors[colorIndex][r]}}},{type:"map",map:"内江市",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:t},{zlevel:1.5,type:"bar",symbol:"none",itemStyle:{normal:{color:colors[colorIndex][r]}},data:i[r]}]});myChart.setOption(optionXyMap01)})});
