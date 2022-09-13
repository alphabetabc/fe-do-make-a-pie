option={title:{text:"覆盖班级数量",top:10,left:10},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},toolbox:{show:!0,top:10,right:10,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:60,right:70,bottom:30,left:60},legend:{top:32,left:"center",data:["班级数","使用率"]},calculable:!0,xAxis:[{type:"category",data:["高一","高二","高三"]}],yAxis:[{type:"value",name:`班
级
数`,nameLocation:"center",nameGap:35,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}},{type:"value",name:`使
用
率
`,nameLocation:"center",nameGap:50,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}}],series:[{name:"班级数",type:"bar",yAxisIndex:0,data:[28,25,36,21,30]},{name:"使用率",type:"bar",yAxisIndex:1,data:[89,92,87]}]};
