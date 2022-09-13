const dataArr={xdata:["12:05","12:06","12:07","12:08","12:09","12:10","12:11","12:12","12:13","12:14","12:15","12:16","12:17","12:18","12:19","12:20"],vaccination:[1e3,1300,1200,700,600,700,900,1e3,1300,1200,700,600,700,900,1e3,1300],unvaccinated:[700,800,900,800,700,400,500,700,400,500,700,800,900,800,700,400],unvaccinatedTwo:[400,300,500,200,200,300,300,400,300,500,200,200,300,300,200],rateDataOne:[300,200,400,100,400,200,200,300,200,400,100,400,200,200,300,200],rateDataTwo:[88,86,87,82,84,85,95,88,86,87,82,84,85,95,88]},tooltip={trigger:"axis",textStyle:{fontSize:"100%"},formatter:o=>{let t=o.map(e=>`<div>${e.seriesName}: ${e.value}</div>`).join("");return`
            <div>${o[0].axisValue}</div>
            ${t}
        `}},legend={data:["模型NAME1","模型NAME2","模型NAME3","模型NAME4","完成第二次接种率"],textStyle:{fontSize:14,color:"#000"},itemWidth:25,itemHeight:15,itemGap:15,bottom:"5%"},grid={top:"18%",left:"10%",right:"6%",bottom:"25%"},xAxis={axisTick:{show:!1},axisLine:{lineStyle:{color:"#C7DEFF"}},splitLine:{lineStyle:{color:"#C7DEFF"}},axisLabel:{textStyle:{fontSize:12,color:"#2B6BD1"}},data:dataArr.xdata},yAxis=[{axisTick:{show:!1},axisLine:{lineStyle:{color:"#fff"}},splitLine:{lineStyle:{color:"#C7DEFF"}},axisLabel:{textStyle:{fontSize:16,color:"#2B6BD1"}}},{show:!0,max:100,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:16,color:"#000"},formatter:o=>`${o}%`}}],series=[{name:"模型NAME1",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#98DFE8",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:3,shadowOffsetX:3}},label:{show:!0,position:"top",textStyle:{color:"#98DFE8"}},itemStyle:{color:"#98DFE8",borderColor:"#fff",borderWidth:1,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},data:dataArr.vaccination},{name:"模型NAME2",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#FEEEB2",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:3,shadowOffsetX:3}},label:{show:!0,position:"top",textStyle:{color:"#FEEEB2"}},itemStyle:{color:"#FEEEB2",borderColor:"#fff",borderWidth:1,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},data:dataArr.unvaccinated},{name:"模型NAME3",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#CBC0FF",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:3,shadowOffsetX:3}},label:{show:!0,position:"top",textStyle:{color:"#CBC0FF"}},itemStyle:{color:"#CBC0FF",borderColor:"#fff",borderWidth:1,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},data:dataArr.unvaccinatedTwo},{name:"模型NAME4",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#B5D5FF",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:3,shadowOffsetX:3}},label:{show:!0,position:"top",textStyle:{color:"#B5D5FF"}},itemStyle:{color:"#B5D5FF",borderColor:"#fff",borderWidth:1,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:2,shadowOffsetX:2},data:dataArr.rateDataOne}];option={tooltip,xAxis,yAxis,series,grid,legend,backgroundColor:"#fff"};
