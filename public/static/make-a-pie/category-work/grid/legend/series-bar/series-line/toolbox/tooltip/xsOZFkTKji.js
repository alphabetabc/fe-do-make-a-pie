var category=["01","02","03","04","05","06","07","08","09","10","11","12"],barData1=[0,0,0,0,0,0,0,1,18,20,43,0],barData2=[0,0,0,0,0,0,0,0,1,18,20,43],lineData1=[0,0,0,0,0,0,0,100,1700,11.11,115,-100],lineData2=[0,0,0,0,0,0,0,100,100,-90.15,-89.17,0];option={backgroundColor:"transparent",tooltip:{trigger:"axis",textStyle:{color:"#CFE3FC"},borderWidth:0,formatter:e=>{let o="";return o=`<div class="ring_ratio_popup">
                 <div>
                   <p style="font-size: 14px;">时间同比数据量${e[2].data}</p>
                   <p style="font-size: 14px;">时间环比数据量${e[3].data}</p>
                   <p style="font-size: 14px;">时间同比${e[1].data}%</p>
                     <p style="font-size: 14px;">时间环比${e[0].data}%</p>
                 </div>
                 </div>`,o}},toolbox:{show:!0,top:-5,itemSize:12,feature:{magicType:{show:!0,type:["line"]},restore:{show:!0},saveAsImage:{show:!0}},iconStyle:{normal:{fontSize:12}}},legend:{data:["时间同比数据量","时间环比数据量","时间环比","时间同比"],textStyle:{color:"#000"},right:"20%",top:"15%"},grid:{x:"8%",y:"30%",y2:"8%"},xAxis:{data:category,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{name:"(数据量)",nameTextStyle:{color:"#666",padding:[0,60,0,-10]},splitLine:{show:!0},axisLine:{symbol:["none","arrow"],symbolSize:[5,12],symbolOffset:[0,10],lineStyle:{color:"#22BF65"}},axisLabel:{formatter:"{value}",textStyle:{color:"#666"}},axisTick:{show:!1}},{name:"(百分比)",nameTextStyle:{color:"#666"},splitLine:{show:!1},axisLine:{symbol:["none","arrow"],symbolSize:[5,12],symbolOffset:[0,10],lineStyle:{color:"#22BF65"}},axisLabel:{formatter:"{value}%",textStyle:{color:"#666"}},axisTick:{show:!1}}],series:[{name:"时间环比",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:6,yAxisIndex:1,itemStyle:{normal:{color:"#E08044"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:" rgba(224, 128, 68, .6)"},{offset:.8,color:"rgba(255,255,255,0)"}],!1)}},barWidth:18,itemStyle:{normal:{barBorderRadius:[50,50,0,0],color:"#E08044"}},data:lineData1},{name:"时间同比",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:6,yAxisIndex:1,itemStyle:{normal:{color:"#2679FB"}},data:lineData2,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(38, 121, 251, .6)"},{offset:.8,color:"rgba(255,255,255,0)"}],!1)}},barWidth:20,itemStyle:{normal:{barBorderRadius:[50,50,0,0],color:"#2679FB"}}},{name:"时间同比数据量",type:"bar",barWidth:20,itemStyle:{normal:{barBorderRadius:[50,50,0,0],color:"#22BF66"}},data:barData1},{name:"时间环比数据量",type:"bar",barWidth:20,itemStyle:{normal:{barBorderRadius:[50,50,0,0],color:"#667add"}},data:barData2}]};