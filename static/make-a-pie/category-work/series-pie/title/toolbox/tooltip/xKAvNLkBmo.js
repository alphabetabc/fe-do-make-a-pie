for(var trafficWay=[{name:"标题1",value:20},{name:"标题2",value:40},{name:"标题3",value:40},{name:"标题4",value:30},{name:"标题5",value:10}],data=[],color=["#cf4747","#fdc240","#fbedd3","#6cad35","#00b0a4"],i=0;i<trafficWay.length;i++)data.push({value:trafficWay[i].value,name:trafficWay[i].name,itemStyle:{normal:{borderWidth:6,shadowBlur:0,borderColor:color[i],shadowColor:color[i]}}},{value:2,name:"",itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}});var seriesOption=[{type:"pie",clockWise:!1,radius:["55%","58%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",formatter:function(e){return e.name!==""?"{a|"+e.name+`}{b|

`+e.value+"家}":""},rich:{a:{color:"#ddd",fontFamily:"SourceHanSansCN",fontSize:16,fontWeight:"bold"},b:{color:"#23dbf7",fontFamily:"SourceHanSansCN",fontSize:14,left:"0"}}},labelLine:{show:!1,normal:{length:10,length2:0,lineStyle:{color:"transparent"}}}}},data},{type:"pie",color:"#69c1f1",clockWise:!1,radius:["37%","38%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[100]}];option={backgroundColor:"#040811",color,title:{top:"48%",textAlign:"center",left:"49%",textStyle:{color:"#fff",fontSize:14,fontWeight:"normal"}},tooltip:{show:!1},toolbox:{show:!1},series:seriesOption};