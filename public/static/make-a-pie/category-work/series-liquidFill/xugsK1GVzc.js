const payload={id:"liquid-fill-5",color:["#F37826","#F39F26"],data:{data:"0.55"}};data=payload.data.data;const color=payload.color;option={backgroundColor:"transparent",series:[{name:"水球图",type:"liquidFill",radius:"95%",center:["50%","50%"],waveAnimation:10,amplitude:5,data:[data,data-1/10],itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:color[0]},{offset:1,color:color[1]}])},color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:1,color:color[0]},{offset:0,color:color[1]}],globalCoord:!1},outline:{show:!0,borderDistance:0,itemStyle:{borderWidth:2,borderColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:color[0]},{offset:1,color:color[1]}],globalCoord:!1}}},backgroundStyle:{color:"#58A0AD"},label:{color:"#ffffff",insideColor:"#ffffff",fontSize:14,formatter:o=>{const e=o.value*100;return""+e.toFixed(0)+"分"}}}]};