var xData=["基础知识","积累与运用","阅读理解","语文与生活","写作"],errorNo=["5,6","7,10","19,22,23,25","15","30"],sDate=[82,71,56,95,77],colors=["#2dba86","#ed2176"];option={animation:!1,grid:{bottom:100},xAxis:{type:"category",data:xData,name:`{a|失分}
{b|题号}`,nameLocation:"start",nameGap:45,nameTextStyle:{position:[50,50],rich:{a:{color:"#717071",padding:[-120,-30,0,0],fontSize:12,fontFamily:"SourceHanSansCN",fontWeight:"normal"},b:{color:"#717071",padding:[-150,-30,0,0],fontSize:12,fontFamily:"SourceHanSansCN",fontWeight:"normal"}}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#cdcdcd"}},splitLine:{show:!0,lineStyle:{color:"#cdcdcd"}},splitArea:{show:!0},axisLabel:{show:!0,margin:24,formatter:function(o,a){return"{a|"+o+`}
{n| }
{b|`+errorNo[a]+"}"},rich:{a:{color:"#3e3a3a",fontSize:16,fontFamily:"SourceHanSansCN",fontWeight:"bold"},b:{color:"#717071",backgroundColor:"#efefef",fontSize:12,fontFamily:"SourceHanSansCN",fontWeight:"normal",width:120,height:16,borderRadius:16},n:{width:1,height:18}}}},yAxis:{name:"{a|得分率(%)}",nameLocation:"center",nameGap:45,nameTextStyle:{position:[50,50],rich:{a:{color:"#717071",padding:[0,0,0,-150],fontSize:12,fontFamily:"SourceHanSansCN",fontWeight:"normal"}}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#cdcdcd"}},splitLine:{show:!0,lineStyle:{color:"#cdcdcd"}},axisLabel:{show:!0,color:"#717071",margin:18,fontSize:14,fontFamily:"SourceHanSansCN",fontWeight:"normal"}},series:[{type:"bar",data:sDate,barWidth:20,label:{show:!0,position:"top",formatter:"{c}%",fontSize:14,fontFamily:"SourceHanSansCN",fontWeight:"normal"},itemStyle:{normal:{color:function(o){return o.dataIndex%2===0?colors[0]:colors[1]},shadowColor:"rgba(0,0,0,0.35)",shadowBlur:15,shadowOffsetX:10,shadowOffsetY:10}}}]};