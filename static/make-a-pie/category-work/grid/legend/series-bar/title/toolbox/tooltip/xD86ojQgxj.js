option={title:{text:"各班级某次考试成绩情况分析",top:10,left:10},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},toolbox:{show:!0,top:10,right:10,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:60,right:70,bottom:30,left:60},legend:{top:32,left:"center",data:["高分率","低分率","及格率","总人数"]},calculable:!0,xAxis:[{type:"category",data:["一班","二班","三班","四班","五班"]}],yAxis:[{type:"value",name:`得
分
率
`,nameLocation:"center",nameGap:35,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}},{type:"value",name:`总
人
数
︵
人
︶`,nameLocation:"center",nameGap:50,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:500,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}}],series:[{name:"高分率",type:"bar",yAxisIndex:0,data:[78,65,56,81,82]},{name:"低分率",type:"bar",yAxisIndex:0,data:[12,25,27,34,21]},{name:"及格率",type:"bar",yAxisIndex:0,data:[76,82,84,91,75]},{name:"总人数",type:"bar",yAxisIndex:1,data:[460,480,450,320,430]}]};
