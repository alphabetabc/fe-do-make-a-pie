var dataIPSxAxis=["1日  ","2日","3日","4日 ","5日 ","6日","7日 ","8日","9日","10日 ","11日 ","12日","13日  ","14日","15日","16日 ","17日 ","18日","19日  ","20日","21日","22日 ","23日 ","24日","25日  ","26日","27日","28日 ","29日 ","30日","31日"],dataIPS2=[5620,6270,6035,7480,7866,8655,9433,9026,8846,8068,7987,9064,8557,7980,8606,8767,7868,8523,9345,9028,8687,8564,9245,9067,9321,9033,8889,8014,8070,9099,8099];option={title:{text:"月销水量分析",subtext:"纯属虚构",textStyle:{color:"#fff"}},backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},color:["#0080ff","#4cd5ce"],toolbox:{},grid:{left:"5%",right:"5%",top:"10%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:dataIPSxAxis,axisLabel:{show:!0,textStyle:{color:"#333",fontSize:16},formatter:function(t){var r="",e=5,n=t.length,a=Math.ceil(n/e);if(a>1){for(var o=0;o<a;o++){var l="",i=o*e,s=i+e;l=t.substring(i,s)+`
`,r+=l}return r}else return t}},axisLine:{lineStyle:{color:"#0a2b52",width:.5}}}],yAxis:[{type:"value",name:"m³",axisLine:{onZero:!1,lineStyle:{color:"#8398DE",width:1}},axisLabel:{formatter:function(t){return t+""},show:!0,textStyle:{color:"#333",fontSize:18}},splitLine:{show:!0,lineStyle:{type:"dashed"}}}],series:[{name:"最低水量",type:"line",smooth:!0,stack:100,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#64CAFA"},{offset:.5,color:"#64CAFA"},{offset:1,color:"#0078D7"}]),lineStyle:{width:.5,type:"solid",color:"#0078D7"}},emphasis:{color:"#02675f",lineStyle:{width:.5,type:"dotted",color:"#02675f"}}},symbolSize:5,areaStyle:{normal:{}},data:dataIPS2}]};
