var indicator=[{text:"年龄 95",max:100},{text:"学历 95",max:100},{text:"专业 90",max:100},{text:"从事指挥岗位年限 84",max:100},{text:"身体情况 75",max:100},{text:"专业特长 91",max:100},{text:"培训 88",max:100},{text:"比武竞赛 93",max:100}],dataArr=[{value:[95,95,90,84,75,91,88,93],itemStyle:{normal:{lineStyle:{color:"#BBE265"},shadowColor:"#BBE265",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#BBE265"}],globalCoord:!1},opacity:1}}}],colorArr=["#BBE265"];option={backgroundColor:"#101736",title:{text:"指挥员能力 综合80分",x:"4%",width:173,height:163,fontSize:22,textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},color:colorArr,radar:{name:{textStyle:{color:"#fff",fontSize:16}},indicator,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#153269"}},splitLine:{lineStyle:{color:"#113865",width:1}}},series:[{type:"radar",symbolSize:5,data:dataArr}]};