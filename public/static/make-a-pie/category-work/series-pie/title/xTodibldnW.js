var data=[{name:"正常占比",value:12,percent:"58"},{name:"故障占比",value:5,percent:"58"}],titleArr=[],seriesArr=[];colors=["rgba(6, 254, 188, 1)","rgba(255, 164, 3, 1)","rgba(6, 254, 188, 0.1)","rgba(255, 164, 3, 0.1)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 1)"],data.forEach(function(e,r){let o=r;o%2===1&&(o=o+1),titleArr.push({text:"{b|正常个数}   {a|"+e.value+"}   {a|"+e.percent+"%}",left:"50%",top:(o+1)*25+"%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"16",color:colors[4],textAlign:"center",rich:{a:{color:colors[5],fontSize:"14",fontWeight:"bold"},b:{colors:colors[4],fontSize:"14",fontWeight:"bold"}}}}),seriesArr.push({name:e.name,type:"pie",clockWise:!1,radius:["25%","30%"],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colors[r+2]},{offset:1,color:colors[r]}]),shadowColor:colors[r],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:["25%",(o+1)*25+"%"],data:[{value:e.percent,label:{normal:{formatter:function(t){return t.seriesName},position:"center",show:!0,textStyle:{fontSize:"20",color:colors[4]}}}},{value:100-e.percent,name:"invisible",itemStyle:{normal:{color:"rgba(104, 104, 104, 0.3)"},emphasis:{color:"rgba(104, 104, 104, 0.3)"}}}]})}),option={backgroundColor:"#111111",title:titleArr,series:seriesArr};