let dataIPSxAxis=["2020 07.24  ","2020 07.25","2020 07.26","2020 07.27","2020 07.28","2020 07.29","2020 07.30","2020 07.31","2020 08.01"],dataIPS=[3e4,5e4,35e3,6e4,45e3,61e3,55e3,45e3,43e3];option={backgroundColor:"#021228",title:{text:"流量 （M）",textStyle:{fontSize:12,fontWeight:"normal",color:"#99c8e7"},left:"0%"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"5px",top:"25px",right:"20px",bottom:"0px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:dataIPSxAxis,axisLabel:{show:!0,textStyle:{color:"#6ba1bb",fontSize:12},formatter:function(e){let l="",t=5,n=e.length,r=Math.ceil(n/t);if(r>1){for(let o=0;o<r;o++){let a="",i=o*t,s=i+t;a=e.substring(i,s)+`
`,l+=a}return l}else return e}},axisLine:{lineStyle:{color:"#033e59",width:.5}}}],yAxis:[{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#033e59",width:1}},axisLabel:{show:!0,textStyle:{color:"#6ba1bb"}},splitLine:{show:!0,lineStyle:{color:"#105b8a",width:1,type:"solid"}}}],series:[{name:"流量 （M）",type:"line",smooth:!0,symbol:"none",stack:100,itemStyle:{color:"#1cccff",emphasis:{color:"#1cccff"}},markLine:{silent:!0,symbol:["none","triangle"],symbolSize:5,lineStyle:{color:"#208de8"},label:{show:!1},data:[{yAxis:1e4},{yAxis:2e4},{yAxis:3e4},{yAxis:4e4}]},lineStyle:{width:1,type:"solid",color:"#1cccff"},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(28,204,255,0.5)"},{offset:.5,color:"rgba(28,204,255,0.3)"},{offset:1,color:"transparent"}])}},data:dataIPS}]};