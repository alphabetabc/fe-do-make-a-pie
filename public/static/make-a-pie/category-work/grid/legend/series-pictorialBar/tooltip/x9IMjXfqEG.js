function formatNum(t){if(t.length<=3||!/^(\+|-)?(\d+)(\.\d+)?$/.test(t))return t;var a=RegExp.$1,e=RegExp.$2,l=RegExp.$3,o=new RegExp;for(o.compile("(\\d)(\\d{3})(,|$)");o.test(e);)e=e.replace(o,"$1,$2$3");return a+""+e+l}for(var data=[{month:"应付款项",value:"76281.68"},{month:"应收款项",value:"37402.21"}],xAxisMonth=[],barData=[],i=0;i<data.length;i++)xAxisMonth.push(data[i].month),barData.push({name:xAxisMonth[i],value:data[i].value});option={grid:{containLabel:!0},tooltip:{trigger:"axis",formatter:"{b}: {c0}万元"},legend:{left:"25",top:"top",textStyle:{color:"#4c647c",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12},data:xAxisMonth},xAxis:[{type:"category",show:!0,axisLabel:{textStyle:{color:"#4c647c"}},axisLine:{lineStyle:{color:"#4c647c",opacity:.2}}},{type:"category",position:"bottom",data:xAxisMonth,boundaryGap:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#4c647c",opacity:.2}},axisLabel:{textStyle:{color:"#4c647c",fontSize:16}}}],yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"#4c647c"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#000"],opacity:.06}}}],series:[{name:xAxisMonth,type:"pictorialBar",xAxisIndex:1,barCategoryGap:"50%",symbol:'path://d="M150 50 L130 130 L170 130  Z"',itemStyle:{normal:{color:function(t){return["#FAC45C","#4996E2"][t.dataIndex]},label:{formatter:function(t){return formatNum(t.value)},show:!0,position:"top",textStyle:{color:"black",fontSize:14}}},emphasis:{opacity:1}},data:barData}]};
