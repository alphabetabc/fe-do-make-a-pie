for(var scale=1,echartData=[{value:54,name:"打架斗殴",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E58B44"},{offset:1,color:"transparent"}])}}},{value:4,name:"校园暴力",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#D95CFF"},{offset:1,color:"transparent"}])}}},{value:115,name:"课堂违纪",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#06A3F4"},{offset:1,color:"transparent"}])}}},{value:50,name:"早恋",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#29AF62"},{offset:1,color:"transparent"}])}}},{value:100,name:"其它",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FF3939"},{offset:1,color:"transparent"}])}}}],total_datas=0,i=0;i<echartData.length;i++)total_datas+=echartData[i].value;var rich={yellow:{color:"#ffc72b",fontSize:15*scale,align:"center"},total:{color:"#ffc72b",fontSize:40*scale,align:"center"},blue:{color:"#49dff0",fontSize:16*scale,align:"center"},hr:{borderColor:"#0b5263",width:"100%",borderWidth:1,height:0}},option={backgroundColor:"#101a3c",title:{text:"学生违纪情况",subtext:total_datas,textStyle:{color:"#f2f2f2",fontSize:40,align:"center"},subtextStyle:{fontSize:30,color:["#ff9d19"]},x:"center",y:"center"},legend:{orient:"vertical",x:"left",y:"center",itemWidth:24,itemHeight:18,textStyle:{color:"#666"},itemGap:30,data:["打架斗殴","校园暴力","课堂违纪","早恋","其它"]},series:[{name:"违纪总次数",type:"pie",itemStyle:{normal:{borderWidth:5,borderColor:"#030d22"}},radius:["38%","50%"],hoverAnimation:!1,color:["#c487ee","#deb140","#49dff0","#034079","#6f81da"],label:{normal:{formatter:function(e,a,l){var t=0,r=0;return echartData.forEach(function(o,n,c){t+=o.value}),r=(e.value/t*100).toFixed(1),"{yellow|"+e.value+`}
{blue|`+r+"%}"},rich}},labelLine:{normal:{length:55*scale,length2:10,lineStyle:{color:"#0b5263"}}},data:echartData}]};