option={title:{text:"案件类别排名",x:"center",textStyle:{fontWeight:"normal",color:"#fff",fontSize:"14"}},tooltip:{show:!0,trigger:"item",formatter:"{c}%"},toolbox:{show:!0,feature:{mark:{show:!0}}},calculable:!0,grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{type:"solid",color:"#28316d",width:"1"}},axisLabel:{interval:0,rotate:0,show:!0,splitNumber:15,textStyle:{fontSize:12}},data:["民事","刑事","婚姻","劳动","交通","刑侦","其他"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:"",splitLine:{show:!1,lineStyle:{color:"#28316d"}}}],series:[{name:"",type:"bar",data:[2800,1700,1200,1e3,900,600,400],itemStyle:{normal:{color:function(t){var e=["#f37a00","#dd6a06","#fcb98f","#ffcdb4","#74533f","#ac2503","#743819"];return e[t.dataIndex]},label:{show:!1,position:"top",formatter:"{c}%"}}}}]};
