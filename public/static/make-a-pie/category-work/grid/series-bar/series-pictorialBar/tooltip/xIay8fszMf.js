var xData2=["A","B","C","D","E"],data1=[100,100,100,100,100],data2=[46,32,65,75,53],data3=[.01,.01,.01,.01,.01],data4=[20,20,20,20,20];option={backgroundColor:"#fff",tooltip:{trigger:"item"},grid:{left:100,bottom:100},xAxis:{show:!1,axisLabel:{interval:0,textStyle:{color:"rgba(65, 49,28, .9)",fontSize:30,fontFamily:"FZYaoti",fontWeight:100},margin:20},splitLine:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(255, 255,255, .8)",width:4}},splitArea:{show:!1},axisTick:{show:!1},data:["A","B","C","D","E"]},yAxis:{show:!1,axisLine:{lineStyle:{color:"rgba(255, 255,255, .9)",width:4}},axisLabel:{interval:0,textStyle:{color:"#42321c",fontSize:20,fontFamily:"FZYaoti"},margin:20},splitLine:{show:!1,lineStyle:{color:"rgba(255, 255,255, .8)",width:2}},axisTick:{show:!1}},series:[{name:"",type:"pictorialBar",symbolSize:[70,20],symbolOffset:[0,-10],z:1,itemStyle:{opacity:1,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#bdbdbd"},{offset:.2,color:"#f8f8f8"},{offset:.5,color:"#fff"},{offset:.8,color:"#f8f8f8"},{offset:1,color:"#bdbdbd"}],global:!1},borderColor:"rgba(0,0,0,.3)",borderWidth:2,shadowBlur:0,shadowColor:"rgba(0, 0, 0, .1)",shadowOffsetY:1,shadowOffsetX:0},symbolPosition:"end",data:data1},{name:"",type:"bar",barWidth:70,barGap:"-100%",z:0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#eeeeee"},{offset:.15,color:"#fafafa"},{offset:.3,color:"#fff"},{offset:.5,color:"#fff"},{offset:.7,color:"#fff"},{offset:.85,color:"#fafafa"},{offset:1,color:"#eeeeee"}],global:!1}},data:data1},{name:"",type:"pictorialBar",symbolSize:[70,20],symbolOffset:[0,-10],z:12,itemStyle:{opacity:1,color:function(o){var f=[new echarts.graphic.RadialGradient(.5,.4,.9,[{offset:0,color:"#ea8126"},{offset:1,color:"#fff"}]),new echarts.graphic.RadialGradient(.5,.4,.9,[{offset:0,color:"#05e8b5"},{offset:1,color:"#fff"}]),new echarts.graphic.RadialGradient(.5,.4,.9,[{offset:0,color:"#51c4fb"},{offset:1,color:"#fff"}]),new echarts.graphic.RadialGradient(.5,.4,.9,[{offset:0,color:"#ff58ae"},{offset:1,color:"#fff"}]),new echarts.graphic.RadialGradient(.5,.4,.9,[{offset:0,color:"#c937e4"},{offset:1,color:"#fff"}])];return f[o.dataIndex]}},symbolPosition:"end",data:data2},{name:"",type:"bar",barWidth:70,barGap:"-100%",z:10,label:{show:!0,formatter:"{c}%",position:"bottom",distance:20,color:"#333",fontSize:18},itemStyle:{color:function(o){var f=[new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ffc664"},{offset:.3,color:"#ff831f"},{offset:.5,color:"#ff831f"},{offset:.7,color:"#ff831f"},{offset:1,color:"#ffc664"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0fae8b"},{offset:.3,color:"#01c49a"},{offset:.5,color:"#01c49a"},{offset:.7,color:"#01c49a"},{offset:1,color:"#0efbc7"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#229adf"},{offset:.3,color:"#2eb0ee"},{offset:.5,color:"#2eb0ee"},{offset:.7,color:"#2eb0ee"},{offset:1,color:"#6ad1fc"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#fa1181"},{offset:.3,color:"#fd359c"},{offset:.5,color:"#fd359c"},{offset:.7,color:"#fd359c"},{offset:1,color:"#fe7bc7"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#932792"},{offset:.3,color:"#aa2cbd"},{offset:.5,color:"#aa2cbd"},{offset:.7,color:"#aa2cbd"},{offset:1,color:"#c382de"}])];return f[o.dataIndex]}},data:data2},{name:"",type:"pictorialBar",symbolSize:[70,25],symbolOffset:[0,10],z:3,itemStyle:{opacity:1,color:function(o){var f=[new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ffc664"},{offset:.3,color:"#ff831f"},{offset:.5,color:"#ff831f"},{offset:.7,color:"#ff831f"},{offset:1,color:"#ffc664"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0fae8b"},{offset:.3,color:"#01c49a"},{offset:.5,color:"#01c49a"},{offset:.7,color:"#01c49a"},{offset:1,color:"#0efbc7"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#229adf"},{offset:.3,color:"#2eb0ee"},{offset:.5,color:"#2eb0ee"},{offset:.7,color:"#2eb0ee"},{offset:1,color:"#6ad1fc"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#fa1181"},{offset:.3,color:"#fd359c"},{offset:.5,color:"#fd359c"},{offset:.7,color:"#fd359c"},{offset:1,color:"#fe7bc7"}]),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#932792"},{offset:.3,color:"#aa2cbd"},{offset:.5,color:"#aa2cbd"},{offset:.7,color:"#aa2cbd"},{offset:1,color:"#c382de"}])];return f[o.dataIndex]}},data:[1,1,1,1,1]},{name:"",type:"pictorialBar",symbol:"rect",symbolSize:[70,40],symbolOffset:[0,40],z:-1,label:{show:!0,formatter:"{c}%",position:"top",distance:-20,color:"#fff",fontFamily:"FZYaoti",fontWeight:100,fontSize:20},itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#bbbbbb"},{offset:.5,color:"#e9e9e9"},{offset:.6,color:"#fff"},{offset:1,color:"#e5e6e8"}],global:!1}},data:data4},{name:"",type:"pictorialBar",symbolSize:[70,20],symbolOffset:[0,30],z:-2,itemStyle:{opacity:1,shadowBlur:5,shadowColor:"rgba(90, 96, 108, .3)",shadowOffsetY:2,shadowOffsetX:15,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#bbbbbb"},{offset:.5,color:"#e9e9e9"},{offset:.6,color:"#fff"},{offset:1,color:"#e5e6e8"}],global:!1}},symbolPosition:"end",data:data3}]};