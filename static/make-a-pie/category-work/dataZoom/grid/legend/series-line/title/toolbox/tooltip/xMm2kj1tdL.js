option={title:{text:"echarts不同长度的折线图"},legend:{data:["在线数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},dataZoom:{type:"inside"},tooltip:{show:!0},xAxis:{type:"value",boundaryGap:!1,min:0,max:80,axisLabel:{formatter:function(){return"20:58"}}},yAxis:{type:"value",min:0,max:100},series:[{name:"在线数",type:"line",data:[[10,20],[20,60],[40,60],[50,20],[75,70],[80,90]]}]};let x=[],y=[],l=[];for(let e=0;e<x.length;e++){let t=[];t[0]=x[e],t[1]=y[e],l.push(t)}