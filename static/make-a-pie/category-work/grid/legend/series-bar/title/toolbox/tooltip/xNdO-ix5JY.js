option={title:{text:"教师活跃度分析",top:10,left:10},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},toolbox:{show:!0,top:10,right:10,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:60,right:70,bottom:30,left:60},legend:{top:32,left:"center",data:["授课次数","登录时长"]},calculable:!0,xAxis:[{type:"category",data:["一日","二日","三日","四日","五日"]}],yAxis:[{type:"value",name:`授
课
次
数`,nameLocation:"center",nameGap:35,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}},{type:"value",name:`登
录
时
长`,nameLocation:"center",nameGap:50,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:500,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}}],series:[{name:"授课次数",type:"bar",yAxisIndex:0,data:[28,25,36,21,30]},{name:"登录时长",type:"bar",yAxisIndex:1,data:[120,250,270,340,210,330]}]};
