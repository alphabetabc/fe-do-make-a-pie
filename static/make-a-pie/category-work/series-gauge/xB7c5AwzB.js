var colorFormatOnChart=(e,t)=>{if(e/t<.1)return[[.1,"#17D5F7"],[1,"#464646"]];if(e/t<.2)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[1,"#464646"]];if(e/t<.3)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[1,"#464646"]];if(e/t<.4)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[1,"#464646"]];if(e/t<.5)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[.5,"#DBF743"],[1,"#464646"]];if(e/t<.6)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[.5,"#DBF743"],[.6,"#F4DE48"],[1,"#464646"]];if(e/t<.7)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[.5,"#DBF743"],[.6,"#F4DE48"],[.7,"#F3B92F"],[1,"#464646"]];if(e/t<.8)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[.5,"#DBF743"],[.6,"#F4DE48"],[.7,"#F3B92F"],[.8,"#F5841F"],[1,"#464646"]];if(e/t>.9)return[[.1,"#17D5F7"],[.2,"#1BF0AC"],[.3,"#3ED25E"],[.4,"#A2DA2A"],[.5,"#DBF743"],[.6,"#F4DE48"],[.7,"#F3B92F"],[.8,"#F5841F"],[.9,"#F15041"],[1,"#F12C2C"]]};option={backgroundColor:"#0e202d",series:[{name:"统计",type:"gauge",splitNumber:8,min:0,max:200,radius:"80%",center:["50%","80%"],startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:colorFormatOnChart(100,200)}},axisTick:{show:!0,lineStyle:{color:"auto",width:4},length:22,splitNumber:2},splitLine:{show:!1,length:22,lineStyle:{color:"auto"}},axisLabel:{show:!1},pointer:{show:0,length:"70%",width:2},title:{show:!0,offsetCenter:[0,"5%"],textStyle:{color:"#ddd",fontSize:12}},detail:{borderColor:"#fff",shadowColor:"#fff",shadowBlur:2,offsetCenter:[0,"-15%"],textStyle:{color:"#fff",fontSize:62,fontWeight:"bold"},formatter:"{value}"},data:[{name:"今日报警",value:100}]},{name:"内部白色刻度",type:"gauge",splitNumber:8,min:0,max:100,radius:"70%",center:["50%","80%"],startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:0,shadowBlur:0,color:[[.2,"#fff"],[1,"#fff"]]}},axisTick:{show:!0,lineStyle:{color:"auto",width:1},length:5,splitNumber:2},splitLine:{show:!0,lineStyle:{color:"auto",width:1},length:8,splitNumber:10},axisLabel:{show:!1},pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{name:"",value:0}]}]};