for(var left1=[{year:2018,money:4193.3,percent:10.5,percentvalue:210.5},{year:2019,money:4680,percent:11.6,percentvalue:210.5},{year:2020,money:5219.6,percent:11.5,percentvalue:210.5}],yearlist=[],value1list=[],value2list=[],value3list=[],color=["#f6ff00","#0096ff","#ff4747"],i=0;i<left1.length;i++)yearlist.push(left1[i].year+"年"),value1list.push(left1[i].money),value2list.push(left1[i].percent),value3list.push(left1[i].percentvalue);option={backgroundColor:"#231842",tooltip:{show:!1,trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:"15%",bottom:"10%",right:"40%",textStyle:{color:"#fff"}},legend:{show:!1,x:"4%",top:"8%",textStyle:{color:"#90979c"},data:["内资","外资"]},calculable:!0,xAxis:[{type:"value",show:!1,axisLine:{show:!1,lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0}}],yAxis:[{type:"category",splitLine:{show:!1},axisLine:{show:!1,lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1},data:yearlist}],series:[{name:"省内",type:"bar",barMaxWidth:10,stack:"总量",barGap:"10%",itemStyle:{normal:{color:function(e){if(e.dataIndex==0)return color[0];if(e.dataIndex==1)return color[1];if(e.dataIndex==2)return color[2]},label:{show:!1}}},data:value1list},{name:"省外",type:"bar",stack:"总量",itemStyle:{normal:{color:"#fff",barBorderRadius:0,label:{show:!0,position:"right",formatter:function(e){if(e.dataIndex==0)return"{a|"+value1list[e.dataIndex]+"}亿元 同比增长{a|"+value2list[e.dataIndex]+"%}";if(e.dataIndex==1)return"{b|"+value1list[e.dataIndex]+"}亿元 同比增长{b|"+value2list[e.dataIndex]+"%}";if(e.dataIndex==2)return"{c|"+value1list[e.dataIndex]+"}亿元 同比增长{c|"+value2list[e.dataIndex]+"%}"},rich:{a:{color:"#f6ff00",fontFamily:"Microsoft YaHei",fontSize:13},b:{color:"#0096ff",fontFamily:"Microsoft YaHei",fontSize:13},c:{color:"#ff4747",fontFamily:"Microsoft YaHei",fontSize:13}}}}},data:value3list}]};
