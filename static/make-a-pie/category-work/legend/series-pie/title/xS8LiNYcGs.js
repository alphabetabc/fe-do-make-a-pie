var data=[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],color=["#ee6666","#1492ff","#fac858","#91cc75","#5470c6","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#0ed2ff"],nametext="劳务用工";option={color,title:{show:!1,text:nametext,subtext:"122",textAlign:"center",textVerticalAlign:"middle",textStyle:{fontSize:20,lineheight:30,color:"#333",fontStyle:"normal"},subtextStyle:{color:"#1492ff",fontSize:16,fontWeight:"bold",padding:[0,10,0,10]},left:"30%",top:"center"},legend:{orient:"vertical",right:"5%",bottom:"center",itemWidth:14,itemGap:12,selectedMode:!1,textStyle:{rich:{a:{color:"#333",fontSize:16,width:150,padding:[0,10,0,0]},b:{color:"#1492ff",fontSize:16,fontWeight:"bold",padding:[0,10,0,10]}}},formatter:function(e){for(var o,n,t=0,a=data.length;t<a;t++)data[t].name==e&&(o=data[t].value,n=data[t].unit);return`{a| ${e}}{b|${o}}`}},series:[{name:"lwyg",type:"pie",radius:["40%","80%"],center:["30%","50%"],minAngle:30,avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!0,position:"center",formatter:`{b}
{c}`,textStyle:{fontSize:0,color:"#fff"}},emphasis:{show:!0,textStyle:{fontSize:20,fontWeight:"bold"},formatter:function(e){return`{a| ${e.name}}
{b|${e.value}}`},rich:{a:{color:"#333",fontSize:20,lineHeight:25},b:{color:"#1492ff",fontSize:20,fontWeight:"bold",lineHeight:25}}}},labelLine:{normal:{show:!1}},data}]};