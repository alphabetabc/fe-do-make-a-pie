let dataPie2=[{name:"错题数",value:50},{name:"已讲评",value:18}],dataColor2=[{os1:"#faaaaa",os2:"#f88a8a"},{os1:"#22d7bb",os2:"#3be4ca"}],legendData=[],seriesData=[],radiusValue=40,total=50;for(var i=0;i<dataPie2.length;i++)legendData.push(dataPie2[i].name),seriesData.push({type:"pie",clockWise:!0,radius:[radiusValue-4*i+"%",radiusValue-4*i+1+"%"],center:["40%","50%"],label:{normal:{show:!1}},hoverAnimation:!1,startAngle:-40*i,data:[{value:total-dataPie2[i].value,tooltip:{show:!1},itemStyle:{normal:{color:"#041e36",borderWidth:8,borderColor:"#fff",label:{show:!1}}}},{value:dataPie2[i].value,name:dataPie2[i].name,itemStyle:{normal:{borderWidth:8,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor2[i].os1},{offset:1,color:dataColor2[i].os2}]),color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor2[i].os1},{offset:1,color:dataColor2[i].os2}])}}}]});option={backgroundColor:"#fff",title:[{text:"{a|"+18+"  }{b|"+dataPie2[1].name+`}

{line|}

{x|`+50+"  }{b|"+dataPie2[0].name+"}",textAlign:"center",textStyle:{rich:{a:{fontFamily:"Arial-BoldMT",fontSize:30,color:"#00c0a2"},b:{fontFamily:"MicrosoftYaHei",fontSize:18,fontWeight:"normal",letterSpacing:"0px",color:"#788aa4"},line:{width:160,height:1,opacity:.3,borderColor:"#000",borderWidth:1,borderType:"solid"},x:{fontFamily:"Arial-BoldMT",fontSize:30,color:"#f97676"}}},x:"38%",y:"center"}],tooltip:{trigger:"item",show:!0,formatter:"{b} : <br/>{d}%",backgroundColor:"rgba(0,0,0,0.7)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);"},series:seriesData};