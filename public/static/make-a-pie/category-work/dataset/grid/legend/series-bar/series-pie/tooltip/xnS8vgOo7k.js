const seriesBar=new Array(5).fill({type:"bar",stack:"total",smooth:!0,seriesLayoutBy:"row",label:{show:!0,position:"inside"}});let lastBarDataIndex=0;setTimeout(function(){option={baseOption:{legend:{show:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(0, 0, 0, 0.08)"}},showContent:!1},dataset:{source:[["year","2017","2018","2019","2020"],["Matcha Latte",41.1,30.4,65.1,98.7],["Milk Tea",86.5,83.1,73.4,55.1],["Cheese Cocoa",24.1,86.4,65.2,82.5],["Walnut Brownie",55.2,72.4,53.9,39.1],["Walnut sdfd",55.2,67.1,86.2,48.1]]},xAxis:{type:"category"},yAxis:{gridIndex:0},series:[...seriesBar,{type:"pie",id:"pie",tooltip:{trigger:"item",showContent:!0},label:{position:"center",show:!1},labelLine:{show:!1},emphasis:{label:{show:!0,fontSize:"23",fontWeight:"bold",formatter:"{d}%"}},encode:{itemName:"year",value:"2017",tooltip:"2017"}}]},media:[{option:{legend:{right:"center",top:0,orient:"horizontal",itemWidth:25,itemHeight:14,itemGap:10},grid:{top:"15%",left:"8%",bottom:"10%",right:"50%"},series:[...seriesBar,{radius:["20%","50%"],center:["76%","50%"]}]}},{query:{maxWidth:900},option:{legend:{right:"12%",top:"62%",orient:"vertical",itemWidth:20,itemHeight:11,itemGap:6},grid:{top:"8%",left:"15%",bottom:"55%",right:"12%"},series:[...seriesBar,{radius:["25%","45%"],center:["35%","72%"],emphasis:{label:{fontSize:"18"}}}]}}]},myChart.on("mouseover",function({seriesIndex:e,dataIndex:t,seriesType:i}){i==="bar"&&(myChart.setOption({series:{id:"pie",label:{formatter:"{b}"},encode:{value:t+1,tooltip:t+1}}}),lastBarDataIndex=t,myChart.dispatchAction({type:"highlight",seriesIndex:5,dataIndex:e}))}),myChart.on("mouseout",function({seriesType:e}){e==="bar"&&myChart.dispatchAction({type:"downplay",seriesIndex:5,dataIndex:[0,1,2,3,4]})}),myChart.on("mousemove",function({seriesType:e}){e==="pie"&&myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:lastBarDataIndex})}),myChart.setOption(option)});
