option={title:{text:"广州市天河区近一年平板使用率情况分析",top:10,left:10},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},toolbox:{show:!0,top:10,right:10,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:60,right:70,bottom:30,left:60},legend:{top:32,left:"center",data:["使用频率","平板派发总量"]},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",name:`使
用
频
率
`,nameLocation:"center",nameGap:35,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}},{type:"value",name:`平
板
派
发
总
量
︵
台
︶`,nameLocation:"center",nameGap:50,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:1500,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}}],dataZoom:[{show:!0,height:12,xAxisIndex:[0],bottom:"0%",start:10,end:90,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"使用频率",type:"bar",yAxisIndex:0,data:[12,25,27,34,41,45,50,52,58,63,72,86]},{name:"平板派发总量",type:"bar",yAxisIndex:1,data:[500,680,750,820,930,981,1020,1030,1072,1145,1351,1421]}]};
