function formatNum(e){if(e.length<=3||!/^(\+|-)?(\d+)(\.\d+)?$/.test(e))return e;var i=RegExp.$1,a=RegExp.$2,r=RegExp.$3,t=new RegExp;for(t.compile("(\\d)(\\d{3})(,|$)");t.test(a);)a=a.replace(t,"$1,$2$3");return i+""+a+r}function formatNum2(e){if(e.length<=2||!/^(\+|-)?(\d+)(\.\d+)?$/.test(e))return e;var i=RegExp.$1,a=RegExp.$2,r=RegExp.$3,t=new RegExp;for(t.compile("(\\d)(\\d{2})(,|$)");t.test(a);)a=a.replace(t,"$1,$2$3");return i+""+a+r}var max=4e3,colors=["#FD5959","#5AD8A6","rgba(93, 112, 146, 0.45)"];option={color:colors,tooltip:{trigger:"axis"},legend:{data:["确诊","死亡","治愈"]},grid:{top:70,bottom:50},xAxis:{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:"#999"}},data:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"]},yAxis:[{name:"确诊",type:"value",axisTick:{alignWithLabel:!0,show:!1},axisLine:{show:!1},min:0,max,scale:!0,boundaryGap:[.2,.2],axisLabel:{formatter:function(e){return formatNum(e*10)}}},{name:"死亡/治愈",type:"value",axisTick:{alignWithLabel:!0,show:!1},min:0,max,axisLine:{show:!1},axisLabel:{formatter:function(e){return formatNum2(e)}}}],series:[{name:"确诊",data:[10,30,500,1e3,1290,2e3,3500],type:"line",smooth:!0},{name:"死亡",type:"line",smooth:!0,data:[10,15,20,25,30,200,400]},{name:"治愈",type:"line",smooth:!0,data:[20,50,80,100,150,200,300]}]};