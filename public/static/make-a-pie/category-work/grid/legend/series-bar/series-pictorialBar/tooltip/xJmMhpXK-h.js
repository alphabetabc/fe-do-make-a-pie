option={backgroundColor:"#0f375f",grid:{top:"30%",left:"1%",right:"1%",bottom:"5%",containLabel:!0},tooltip:{trigger:"item",axisPointer:{type:"shadow"},formatter:e=>`<div style="color: #333;">
                <span style="color: #333;font-size: 0.14rem; font-weight: 600;">${e.name}</span>
                <br/>
                <span style="color: #333;margin-right:0.2rem">总人数:</span>
                <span style="color: #5396b9;float: right;">${e.data.value1}</span>
                <br/>
                <span style="color: #333;margin-right:0.2rem">完成数:</span>
                <span style="color: #5396b9;float: right;">${e.data.value2}</span>
                <br/>
                <span style="color: #333;margin-right:0.2rem">覆盖率:</span>
                <span style="color: #5396b9;float: right;">${(e.data.value1/e.data.value2*100).toFixed(2)}%</span>
            </div>
            `},legend:{data:["三级教育","准入培训"],textStyle:{color:"#ccc"},formatter:e=>e},xAxis:{data:["三级教育","准入培训"],axisLabel:{color:"#fff"},axisLine:{lineStyle:{color:"#081635"}},axisTick:{show:!1}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"三级教育",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:[{value:42,value1:42,value2:55},{value:8,value1:8,value2:10}]},{name:"准入培训",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:[{value:55,value1:42,value2:55},{value:10,value1:8,value2:10}]},{name:"准入培训",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:[{value:55,value1:42,value2:55},{value:10,value1:8,value2:10}]}]};
