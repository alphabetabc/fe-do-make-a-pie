var numbers={max_achievement:150,this_achievement:118,promote_achievement:135};option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{min:0,max:numbers.max_achievement,name:"业务指标",type:"gauge",axisLabel:{fontSize:16,color:"#333"},detail:{formatter:"得分",color:"#333",fontSize:14,offsetCenter:[0,"60%"]},axisLine:{lineStyle:{color:[[numbers.this_achievement/numbers.max_achievement,"#45ae3d"],[numbers.promote_achievement/numbers.max_achievement,"#e75544"],[1,"#bbb"]],width:0}},axisTick:{length:15,lineStyle:{color:"auto",width:4}},splitLine:{length:30,lineStyle:{color:"auto",width:7}},title:{show:!1},tooltip:{backgroundColor:"white",borderColor:"#333",borderWidth:1,textStyle:{color:"auto"}},data:[{value:numbers.this_achievement,name:"本次成绩",itemStyle:{color:"#45ae3d",shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10}},{value:numbers.promote_achievement,name:"提升后成绩",itemStyle:{color:"#e75544",shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10}}]}]};