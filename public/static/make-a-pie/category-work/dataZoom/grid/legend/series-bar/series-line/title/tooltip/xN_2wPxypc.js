option={backgroundColor:"#4ba4ba",title:{text:"top5专业的需求和薪酬",x:"left",textStyle:{color:"#fff"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:[{name:"平均薪酬",textStyle:{color:"#fff"}},{name:"需求量(人数)",textStyle:{color:"#fff"}}]},grid:{y2:100},dataZoom:[{type:"inside",show:!0,start:1,end:35,minValueSpan:10},{type:"slider",show:!0,start:1,end:35,minValueSpan:10}],xAxis:[{type:"category",data:["物理学","微电子学","口腔基础医学系-牙合学","核工程与核技术","高分子材料与工程专业"],axisPointer:{type:"shadow"},axisLabel:{rotate:-35},axisLine:{lineStyle:{color:"#024"}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#024"}},scale:!0,name:"平均薪酬",max:12e3,min:0,boundaryGap:[.2,.2]},{type:"value",axisLine:{lineStyle:{color:"#024"}},scale:!0,name:"需求量(人数)",max:12e3,min:0,boundaryGap:[.2,.2]}],series:[{name:"平均薪酬",type:"bar",data:function(){for(var e=[],t=5;t--;)e.push(Math.round(Math.random()*1e4));return e}()},{name:"需求量(人数)",type:"line",data:function(){for(var e=[],t=5;t--;)e.push(Math.round(Math.random()*1e4));return e}()}]};
