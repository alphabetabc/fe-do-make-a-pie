var option={backgroundColor:"#F8F8F8",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(36,37,41,0.8);",formatter:function(t){return t[0].name+t[0].seriesName+"："+t[0].value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+"元"}},grid:{left:"0",right:"4%",bottom:"0",containLabel:!0},xAxis:{data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],splitLine:{show:!1},axisLine:{lineStyle:{color:"#d9d9d9",width:1}},axisLabel:{color:"rgba(0,0,0,0.65)"}},yAxis:{splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{color:"rgba(0,0,0,0.65)",formatter:function(e){var e;return e>=1e3?e=e/1e3+"K":e<1e3&&(e=e),e}},axisTick:{show:!1},axisLine:{show:!1}},series:[{name:"报销费用",type:"bar",data:[59699,20777,36666,10666,10666,20778,20957,30785,45689,60345,39678,38986],markLine:{itemStyle:{normal:{borderWidth:1,lineStyle:{type:"dash",color:"#22B77D ",width:2},label:{formatter:`同事平均报销
{c}元`,position:"middle",textStyle:{fontSize:12}}}},data:[{yAxis:50907}]},itemStyle:{normal:{color:"#4285F4"}}}]};