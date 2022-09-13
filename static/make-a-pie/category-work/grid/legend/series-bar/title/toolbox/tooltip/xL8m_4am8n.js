option={title:{text:"六科实力系数排名",top:10,left:10},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},toolbox:{show:!0,top:10,right:10,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:60,right:70,bottom:30,left:60},legend:{top:32,left:"center",data:["实力系数","近5次考试总排名"]},calculable:!0,xAxis:[{type:"category",data:["物理","历史","生物","化学","政治","地理"]}],yAxis:[{type:"value",name:`实
力
系
数`,nameLocation:"center",nameGap:35,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:100,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}},{type:"value",name:`排
名`,nameLocation:"center",nameGap:50,nameRotate:0,nameTextStyle:{fontSize:16},min:0,max:150,axisLabel:{show:!0,showMinLabel:!0,showMaxLabel:!0,formatter:function(e){return e}}}],series:[{name:"实力系数",type:"bar",yAxisIndex:0,data:[89,73,79,68,92,78]},{name:"近5次考试总排名",type:"bar",yAxisIndex:1,data:[68,123,56,87,90,56]}]};
