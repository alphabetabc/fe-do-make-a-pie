function calc(o=6e3,r=60300,s=.14,i=.6,e=18e4){let l=30*o,a=l>e?(e-e)*s:0,t=l*i,f=t-a-r;return{yingyee:l,lirun:t,choucheng:a,jinglirun:f}}xdata=[1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4,11e3,12e3,13e3,14e3,15e3],ydata=xdata.map(o=>calc(o).jinglirun),zdata=xdata.map(o=>(4e5/calc(o).jinglirun).toFixed(2)),option={backgroundColor:"#080b30",title:{text:"",textStyle:{align:"center",color:"#fff",fontSize:20},left:"center"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},xAxis:[{type:"category",axisLine:{show:!0},axisLabel:{color:"#fff"},splitLine:{show:!1},data:xdata}],yAxis:[{type:"value",splitNumber:4,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}},{type:"value",splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!1,margin:20,textStyle:{color:"#238273"}},axisTick:{show:!1}}],series:[{name:"注册总量",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:25,lineStyle:{normal:{color:"#6c50f3",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!0,position:"top",textStyle:{color:"#6c50f3"}},itemStyle:{color:"#6c50f3",borderColor:"#fff",borderWidth:3,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!1},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(108,80,243,0.3)"},{offset:1,color:"rgba(108,80,243,0)"}],!1),shadowColor:"rgba(108,80,243, 0.9)",shadowBlur:20}},data:ydata},{name:"注册总量",type:"line",showAllSymbol:!0,symbol:"circle",yAxisIndex:1,symbolSize:25,lineStyle:{normal:{color:"#00ca95",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:5,shadowOffsetX:5}},label:{show:!0,position:"top",textStyle:{color:"#00ca95"}},itemStyle:{color:"#00ca95",borderColor:"#fff",borderWidth:3,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},tooltip:{show:!1},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,202,149,0.3)"},{offset:1,color:"rgba(0,202,149,0)"}],!1),shadowColor:"rgba(0,202,149, 0.9)",shadowBlur:20}},data:zdata}]};
