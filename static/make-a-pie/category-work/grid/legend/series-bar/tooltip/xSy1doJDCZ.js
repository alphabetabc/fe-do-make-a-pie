const DEFAULT_COLOR=["#25cdef","#4da6f8","#f88a4d","#44cb6a","#fae84c","#f84d75","#cb449a","#be7100"];var payWay=["支付宝支付","微信支付","人民币","银行卡","大众闪惠","一卡通（券）","百度外卖线上支付","美团外卖线上支付","一卡通（储值）","美团100劵"],value=["1369701.00","1326793.00","886247.00","619004.00","394629.00","104147.00","60279.00","1","14","123"];option={backgroundColor:"#fff",tooltip:{trigger:"axis",backgroundColor:"rgba(50,50,50, .5)",textStyle:{fontSize:"12"},axisPointer:{type:"line"}},legend:{show:!1},grid:{left:"3%",right:"8%",top:"8%",bottom:"45%",containLabel:!0},xAxis:{type:"category",data:payWay,axisLine:{lineStyle:{color:"#999"}},axisTick:{show:!1},axisLabel:{interval:0,rotate:60,textStyle:{fontSize:"12",color:"#999"}}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:["#eaeaea"]}},axisLabel:{textStyle:{color:"#999"}}},series:[{name:"金额",type:"bar",barWidth:"40%",barGap:"5%",barMinHeight:4,label:{normal:{show:!1,position:"top"},emphasis:{show:!0,textStyle:{fontSize:"12"}}},itemStyle:{normal:{barBorderRadius:[5,5,0,0],color:function(e){return e.dataIndex<8?DEFAULT_COLOR[e.dataIndex]:DEFAULT_COLOR[e.dataIndex%8]}}},data:value}]};