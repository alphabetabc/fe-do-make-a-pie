option={backgroundColor:"#080b30",title:{text:"多仪表盘+不同刻度",textStyle:{align:"center",color:"#fff",fontSize:20},top:"5%",left:"center"},series:[{name:"变现能力",type:"gauge",max:200,radius:"40%",splitNumber:4,axisLine:{lineStyle:{color:[[.25,"#FF6E76"],[.5,"#FDDD60"],[.75,"#58D9F9"],[1,"#7CFFB2"]],width:10}},splitLine:{distance:-5,length:10,lineStyle:{color:"#fff"}},axisTick:{distance:-5,length:7,lineStyle:{color:"#fff"}},pointer:{itemStyle:{color:"auto"}},title:{textStyle:{fontSize:10,color:"#777777"},offsetCenter:[0,"30%"]},axisLabel:{color:"auto",fontSize:10,formatter:function(e){if(e<=200&&e>=160)return"A";if(e<=160&&e>=120)return"B";if(e<=120&&e>=80)return"C";if(e<=80&&e>=40)return"D";if(e<=40&&e>=0)return"E"}},detail:{formatter:"{value}",color:"#ffd805",fontSize:20,fontWeight:"bold",fontFamily:"FZLTHJW--GB1-0",offsetCenter:[0,"75%"]},data:[{value:57,name:"变现能力"}]},{name:"城市排名",type:"gauge",max:100,center:["15%","55%"],radius:"30%",splitNumber:4,axisLine:{lineStyle:{color:[[.25,"#FF6E76"],[.5,"#FDDD60"],[.75,"#58D9F9"],[1,"#7CFFB2"]],width:10}},splitLine:{distance:-5,length:7,lineStyle:{color:"#fff"}},axisTick:{distance:-5,length:4,lineStyle:{color:"#fff"}},pointer:{itemStyle:{color:"auto"}},title:{textStyle:{fontSize:7,color:"#777777"},offsetCenter:[0,"30%"]},axisLabel:{color:"auto",distance:10,fontSize:10},detail:{formatter:"{value}%",color:"#ffd805",fontSize:10,fontWeight:"bold",fontFamily:"FZLTHJW--GB1-0",offsetCenter:[0,"75%"]},data:[{value:57,name:"城市排名"}]},{name:"区级排名",type:"gauge",max:100,center:["85%","55%"],radius:"30%",splitNumber:4,axisLine:{lineStyle:{color:[[.25,"#FF6E76"],[.5,"#FDDD60"],[.75,"#58D9F9"],[1,"#7CFFB2"]],width:10}},splitLine:{distance:-5,length:7,lineStyle:{color:"#fff"}},axisTick:{distance:-5,length:4,lineStyle:{color:"#fff"}},pointer:{itemStyle:{color:"auto"}},title:{textStyle:{fontSize:7,color:"#777777"},offsetCenter:[0,"30%"]},axisLabel:{color:"auto",distance:10,fontSize:10},detail:{formatter:"{value}%",color:"#ffd805",fontSize:10,fontWeight:"bold",fontFamily:"FZLTHJW--GB1-0",offsetCenter:[0,"75%"]},data:[{value:57,name:"区级排名"}]}]};
