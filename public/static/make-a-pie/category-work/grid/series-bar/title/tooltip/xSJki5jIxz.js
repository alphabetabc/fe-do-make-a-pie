app.title="坐标轴刻度与标签对齐",option={title:{text:"新浪微博评论主体分布",subtext:"",x:"center",y:"top",textStyle:{fontSize:30}},color:["#6666CC"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["人身攻击唐七","抄袭","书目","支持大风","法律"],axisTick:{alignWithLabel:!0}}],yAxis:[{axisTick:{alignWithLabel:!0}}],series:[{name:"直接访问",type:"bar",barWidth:"40%",data:[28,54,6,2,10]}],label:{normal:{show:!0,position:"top",formatter:"{c}"}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(17, 168,171, 1)"},{offset:1,color:"rgba(17, 168,171, 0.1)"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}}};