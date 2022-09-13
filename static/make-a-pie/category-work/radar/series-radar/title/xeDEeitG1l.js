var indicator=[{text:`人员数量 
 0`,max:30},{text:`指挥员能力
 0       `,max:30},{text:`年出警量
 0     `,max:30},{text:`车辆配备
      0`,max:30},{text:`人员结构
      0`,max:30}],dataArr=[{value:[0,0,0,0,0,0],itemStyle:{normal:{lineStyle:{color:"#00D7FF"},shadowColor:"#00D7FF",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#00D7FF"},{offset:.5,color:"rgba(0,0,0,0)"},{offset:1,color:"#00D7FF"}],globalCoord:!1},opacity:1}}}],colorArr=["#00D7FF","#C000FF","#2B30EB"];option={backgroundColor:"#101736",title:{text:"综合战斗力评分 总分 0分",x:"4%",width:173,height:163,fontSize:22,textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},color:colorArr,radar:{name:{textStyle:{color:"#fff",fontSize:16}},indicator,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#153269"}},splitLine:{lineStyle:{color:"#113865",width:1}}},series:[{type:"radar",symbolSize:8,data:dataArr}]};
