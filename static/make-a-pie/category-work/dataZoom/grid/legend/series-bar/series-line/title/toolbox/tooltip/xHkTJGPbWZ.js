option={title:{text:"ISO测试时间及BUG趋势"},tooltip:{trigger:"axis"},legend:{data:["测试天数","bug总数"]},toolbox:{show:!1,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},dataZoom:{show:!1,start:0,end:100},xAxis:{type:"category",boundaryGap:!0,data:["1.5.0.11","1.5.0.12","1.5.0.13","1.5.0.14","1.5.0.15","1.5.0.16","1.5.0.17","1.5.0.18","1.5.0.19"]},yAxis:[{type:"value",scale:!0,name:"时间(天)",axisLabel:{formatter:"{value}"},max:100,min:0,boundaryGap:[.2,.2]},{type:"value",scale:!0,name:"BUG数",max:100,min:0,boundaryGap:[.2,.2]}],series:[{name:"测试天数",type:"bar",label:{normal:{show:!0,position:"inside"}},barWidth:40,xAxisIndex:0,yAxisIndex:1,data:[32,59,29,9,18,17,16,15,20]},{name:"bug总数",type:"line",data:[0,0,0,0,0,0,0,0,0]}]};
