option={dataset:{source:[["product","nums"],["2019-12-25 09",6],["2019-12-25 10",6],["2019-12-25 14",4],["2019-12-25 13",3],["2019-12-25 08",2],["2019-12-25 11",1],["2019-12-25 16",1]]},color:["#d74e67","#0092ff","#eba954","#21b6b9","#60a900","#01949b"," #f17677"],backgroundColor:"#fff",grid:{left:"50%",top:"center",right:"4%",containLabel:!0},xAxis:[{show:!1},{show:!1}],yAxis:{type:"category",inverse:!0,show:!1},series:[{tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},type:"pie",center:["30%","50%"],radius:["30%","35%"],avoidLabelOverlap:!1,label:{normal:{formatter:`{b}
{d}%`}},labelLine:{normal:{show:!0}},encode:{itemName:"product",value:"nums"}},{show:!0,type:"bar",barGap:"-100%",barWidth:"20%",z:2,color:function(e){var t=["#d74e67","#0092ff","#eba954","#21b6b9","#60a900","#01949b"," #f17677"];return t[e.dataIndex]},label:{normal:{show:!0,textStyle:{color:"#000",fontSize:25,fontWeight:"bold"},position:"right"}},encode:{x:"nums"}},{show:!0,type:"bar",xAxisIndex:1,barGap:"-100%",barWidth:"10%",itemStyle:{normal:{barBorderRadius:200,color:"transparent"}},label:{normal:{show:!0,position:[0,"-20"],formatter:"{b}",textStyle:{fontSize:14,color:"#333"}}},encode:{y:"product"}}]};
