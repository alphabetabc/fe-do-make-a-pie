var Name=["错题率","正确率"],color=["#f18438","#de3f0d","#16B8FB","#0958D2"],data={信息技术应用:[60,40],审计相关知识:[20,80],心理健康问卷调查:[90,10],法律法规:[95,5],通信网络:[50,50]},xAxisData=[],data1=[],data2=[];for(var i in data)xAxisData.push(i),data1.push(data[i][0]),data2.push(data[i][1]);for(var series=[],j=0;j<2;j++){let e=[],t=[];if(j==0){e=["-85%","-150%"],t=[color[0],color[1]];var dataArr=data2,dataArr1=data1,color1=color[2]}else if(j==1){e=["85%","-150%"],t=[color[2],color[3]];var dataArr=data1,dataArr1=data2,color1=color[0]}series.push({name:Name[j],type:"bar",stack:j,xAxisIndex:0,data:dataArr,barWidth:8,barGap:1.1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:t[0]},{offset:1,color:t[1]}])}},z:3},{name:Name[j],z:2,type:"pictorialBar",symbolPosition:"end",data:dataArr1,symbol:"rect",symbolOffset:e,symbolSize:[8*1.2,8*.5],itemStyle:{normal:{borderWidth:0,color:color1}}},{name:Name[j],type:"bar",xAxisIndex:1,data:[100,100,100,100,100,100,100,100],barWidth:12,itemStyle:{normal:{color:"rgba(3,40,94,.4)"}},z:1})}option={backgroundColor:"blurScope",title:{text:"错题率/正确率",x:"36",y:"10",textStyle:{fontWeight:"normal",fontSize:12,color:"#fff"}},grid:{left:"40",right:"10",bottom:"10",top:"20%",containLabel:!0},tooltip:{show:"true",trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(112,112,112,0)"}},formatter:function(e){var t=e[0].name.substring(e[0].name.indexOf("(")+1,e[0].name.indexOf(")"));return e[0].name+" ：<br />"+e[0].seriesName+" ："+e[0].data+t+"<br />"+e[2].seriesName+" ："+e[2].data+t},backgroundColor:"#005ED8",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);"},legend:{show:!0,top:20,right:0,textStyle:{color:"#fff"},data:Name},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#393952"}},axisLabel:{inside:!1,textStyle:{color:"#fff",fontWeight:"normal",fontSize:"12"},formatter:function(e){let t="";return e.length>4?t=e.substring(0,4)+"...":t=e,t}},data:xAxisData},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:xAxisData}],yAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#393952"}},splitLine:{show:!1},axisLabel:{textStyle:{color:"#909090",fontWeight:"normal",fontSize:"12"},formatter:function(e){return e+"%"}}},series};