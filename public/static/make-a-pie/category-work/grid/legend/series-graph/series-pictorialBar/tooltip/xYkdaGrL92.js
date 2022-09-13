let dataArray={dataNum:[{name:"受理",data:[20,30,40,40,60,70]},{name:"办结",data:[30,50,40,50,20,70]},{name:"即将逾期",data:[40,60,10,50,60,70]},{name:"逾期",data:[10,30,40,20,60,70]}],name:[20,30,40,50,60,70],score:[2,3,4,5,4,6]},links=dataArray.score.map((e,t)=>({source:t,target:t+1})),color=[[{offset:0,color:"#dff7ff"},{offset:.07,color:"#4ad2ff"},{offset:1,color:"rgba(74, 210, 255, .1)"}],[{offset:0,color:"#ffffff"},{offset:.07,color:"#29ff60"},{offset:1,color:"rgba(41, 255, 96, .1)"}],[{offset:0,color:"#fffdef"},{offset:.07,color:"#ffd83e"},{offset:1,color:"rgba(255, 216, 62, .1)"}],[{offset:0,color:"#ffeaea"},{offset:.07,color:"#ff5676"},{offset:1,color:"rgba(255, 86, 118, .1)"}]],color2=["#4ad9ff","#4ad2ff","#29ff60","#ffd83e","#ff5676"],series=dataArray.dataNum.map((e,t)=>({name:e.name,type:"pictorialBar",symbol:"path://M32.000,0.000 L64.000,800.000 L0.000,800.000 L32.000,0.000 Z",symbolClip:!1,barWidth:10,barGap:"10%",data:e.data,itemStyle:{color:a=>new echarts.graphic.LinearGradient(0,0,0,1,color[t])}}));series.splice(0,0,{yAxisIndex:1,name:"满意度评分",type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:50,label:{show:!0,formatter:e=>e.value,textStyle:{align:"center",fontSize:14,color:"#fff"}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],data:dataArray.score,links,lineStyle:{color:color[0]}});let getLegend=dataArray.dataNum.map((e,t)=>({name:e.name,textStyle:{fontSize:14,color:"#fff"}})),legend=[{name:"满意度评分",data:["满意度评分"],textStyle:{fontSize:14,color:"#fff"},right:300,top:6},{data:getLegend,right:20,top:6,itemGap:15}],tooltip={trigger:"axis",textStyle:{fontSize:18},axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}},formatter:e=>{let[t,a,o,l,f]=e;return`
            <div class='u-p-2'>
                <div>满意度评分：${t.value}</div>
                <div class='u-mt-2'>受理：${a.value}</div>
                <div class='u-mt-2'>办结：${o.value}</div>
                <div class='u-mt-2'>即将逾期：${l.value}</div>
                <div class='u-mt-2'>逾期：${f.value}</div>
            </div>
        `}},grid={top:"15%",left:"10%",right:"5%",bottom:"24%"},xAxis={type:"category",boundaryGap:!0,data:dataArray.name,axisLine:{lineStyle:{color:"rgba(0,129,251,1)"}},axisLabel:{textStyle:{fontSize:16,color:"#bdcbfd"},rotate:0},axisTick:{show:!1}},yAxis=[{name:"工单量（件）",type:"value",scale:!0,min:0,nameTextStyle:{color:"#81b1ff",fontSize:12,padding:[0,0,0,80]},boundaryGap:[.2,.2],splitLine:{show:!1},axisLine:{lineStyle:{color:"rgba(0,129,251,1)"}},axisLabel:{textStyle:{fontSize:16,color:"#bdcbfd"}}},{name:"评分",show:!1}];option={tooltip,grid,xAxis,yAxis,series,legend,color:color2,backgroundColor:"rgba(0,0,0,.8)"};