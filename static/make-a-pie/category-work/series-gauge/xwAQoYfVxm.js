var pointData=88;option={backgroundColor:"#000",series:[{type:"gauge",radius:"30%",z:1,startAngle:225,endAngle:-45,splitNumber:10,splitLine:{show:!1},detail:{show:!0,offsetCenter:[0,10],fontSize:18,formatter:o=>[`{a|${pointData}}`,"{b|分}"].join(""),rich:{a:{fontSize:42,lineHeight:50,fontFamily:"Microsoft YaHei",fontWeight:"bold",color:"#4BEA01"},b:{fontSize:12,padding:[-15,0,0,0],fontFamily:"Microsoft YaHei",fontweight:"400",lineHeight:16,color:"#FFFFFF"}}},axisLine:{show:!0,lineStyle:{width:20,opacity:1,color:[[pointData/100,{x:0,y:0,x1:0,y1:0,colorStops:[{offset:0,color:"rgba(255, 0, 0, 0.8)"},{offset:.65,color:"rgba(255, 252, 0, 1)"},{offset:1,color:"rgba(5, 254, 17, 0.9)"}]}],[1,"rgba(57, 70, 30, 1)"]]}},axisLabel:{show:!0,distance:-45,formatter:o=>{const t=Math.floor(o);return t%20===0?t:""},textStyle:{color:"#ffffff",fontSize:"10",fontFamily:"Microsoft YaHei",fontWeight:400}},axisTick:{show:!0,lineStyle:{color:"rgba(7, 24, 40, 1)",width:2},length:20}}]};
