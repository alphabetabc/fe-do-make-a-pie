yName=["大米","玉米","蔬菜","鸡蛋","坚果"],data=[13,23,34,45,15],option={grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+":"+e[0].value}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"rgba(111, 132, 189, 1)"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:yName}],series:[{name:"",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:[0,30,30,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(101, 105, 255, 1)"},{offset:1,color:"rgba(0, 192, 240, 1)"}])}},barWidth:20,data,label:{normal:{show:!0,position:"right",color:"rgba(111, 132, 189, 1)"}}}]};