var num=[100,200,300,400,600,200,300,400,500];big_num=0,$.each(num,function(a,e){big_num<e&&(big_num=e)}),max_num=new Array,max_num_f=new Array,zero=new Array,city=["天辰北斗","江苏北斗","黑龙江北斗","世纪赢联","河北信翔"];var white=new Array;$.each(num,function(a,e){max_num[a]=big_num+100,max_num_f[a]=big_num+99,zero[a]=0,white[a]=19999}),option={backgroundColor:"#000",grid:{left:"5%",top:"10%",right:"0%",bottom:"0%",containLabel:!0},xAxis:[{show:!1}],yAxis:[{axisTick:"none",axisLine:"none",offset:"100",axisLabel:{textStyle:{color:"#ffffff",fontSize:"14",fontFamily:"SourceHanSansSC-Regular",align:"left"}},data:["规模以上企业","江苏北斗","黑龙江北斗","世纪赢联","河北信翔","江苏北斗","黑龙江北斗","世纪赢联","河北信翔"]},{axisTick:"none",axisLine:"none",data:max_num_f},{nameGap:"50",nameTextStyle:{color:"#fff",fontSize:"16"},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},data:[]},{type:"category",inverse:!0,boundaryGap:[0,0],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,inside:!1,verticalAlign:"left",padding:[-7,0,2,10],textStyle:{fontFamily:"SourceHanSansCN-Regular",fontSize:14,lineHeight:17,letterSpacing:0,color:"#00EEFE"}},z:4,data:["10%","20%","30%","40%","50%","60%","70%","80%","90%"]}],series:[{name:"白框",type:"bar",yAxisIndex:1,barGap:"10",data:num,barWidth:8,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(3,89,120,0.8)"},{offset:1,color:"rgba(1,194,202,1)"}]),barBorderRadius:10}},z:1},{name:"外框",type:"bar",yAxisIndex:2,barGap:"-100%",data:max_num,barWidth:8,itemStyle:{normal:{color:"rgba(5,82,108,0.5)",barBorderRadius:10}},z:0}]};