var seriesData=[{name:"支付",value:"120000",unit:"人"},{name:"融资",value:"240000",unit:"人"},{name:"理财",value:"453000",unit:"人"}],legendData=seriesData.map(e=>e.name),colorList=["#8D3EFA","#2EE6A8","#2E3DE6","#3385FF"];option={backgroundColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#0f2c70"},{offset:1,color:"#020917"}],globalCoord:!1},tooltip:{trigger:"item",borderColor:"rgba(255,255,255,.3)",backgroundColor:"rgba(13,5,30,.6)",borderWidth:1,padding:5,formatter:function(e){var t=e.marker+""+e.data.name+"</br>数量："+e.data.value+e.data.unit+"</br>占比："+e.percent+"%";return t}},legend:{type:"scroll",orient:"horizontal",icon:"circle",top:"80%",left:"center",align:"auto",itemGap:30,textStyle:{color:"#fff"},data:legendData},series:[{type:"pie",center:["50%","45%"],radius:["25%","55%"],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:15,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{show:!0,position:"outside",formatter:`{a|{b}:{d}%}
{hr|}`,rich:{a:{padding:[3,3,3,3],fontSizeL:12,color:"#aaaaaa"}}},labelLine:{show:!1,normal:{length:0,length2:0,lineStyle:{width:0}}},data:seriesData}]};
