var data=[[{value:310,name:"直接访问"},{value:310,name:"邮件营销"}],[{name:"name1",stack:"one1",data:[100]},{name:"name2",stack:"one1",data:[100]},{name:"name3",stack:"one1",data:[100]},{name:"name4",stack:"one1",data:[100]},{name:"name5",stack:"one1",data:[100]},{name:"name6",stack:"one1",data:[100]},{name:"name7",stack:"one1",data:[100]},{name:"name8",stack:"one1",data:[100]},{name:"name9",stack:"one2",data:[100]},{name:"name10",stack:"one2",data:[100]},{name:"name11",stack:"one2",data:[100]},{name:"name12",stack:"one2",data:[100]},{name:"name13",stack:"one2",data:[100]},{name:"name14",stack:"one2",data:[100]},{name:"name15",stack:"one2",data:[100]},{name:"name16",stack:"one2",data:[100]}]],yAxis=["Test1"];option={tooltip:{trigger:"axis",axisPointer:{type:"line"}},legend:{show:!1,data:["name1"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"category",data:yAxis},xAxis:{type:"value"},series:function(){for(var e=[{type:"pie",radius:"10%",startAngle:0,labelLine:{show:!1},label:{show:!1},center:["50%","20%"],data:data[0],color:["red","blue"]}],a=0;a<data[1].length;a++){var n={name:data[1][a].name,type:"bar",barMaxWidth:120,barGap:0,stack:data[1][a].stack,label:{normal:{show:!0,position:"insideRight"}},data:data[1][a].data};e.push(n)}return e}()};
