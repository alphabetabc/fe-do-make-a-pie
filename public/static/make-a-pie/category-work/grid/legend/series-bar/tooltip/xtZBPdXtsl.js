var xData=["1月","2月","3月","4月","5月","6月"],yData1=[104,56,136,86,98,86],yData2=[100,206,236,106,80,160],yData3=[90,106,236,96,180,100],legend=["1","2","3"],colorArr=["#008ECE","#51FFD8","#fff"],normalColor="rgba(255,255,255,0.5)";let seriesData=[],total=[];yData1.forEach((t,o)=>{let e=yData2[o],a=yData3[o];total.push(t+e+a)}),[yData1,yData2,yData3].forEach((t,o)=>{var e={name:legend[o],type:"bar",stack:"1",data:t,barWidth:"40%",itemStyle:{normal:{color:colorArr[o]}},label:{show:!0,formatter:function(a,r){return total[a.dataIndex]},position:"top"}};seriesData.push(e)}),console.log(seriesData),option={backgroundColor:"#000",grid:{left:"3%",top:"16%",right:"3%",bottom:0,containLabel:!0},legend:{show:!0,icon:"rect",itemWidth:20,itemHeight:3,right:"15%",top:"0%",textStyle:{color:"#fff"},data:legend},tooltip:{trigger:"axis",formatter:function(t){for(var o="",e=0;e<t.length;e++)t[e].seriesName!==""&&(o+=t[e].name+":"+t[e].seriesName+t[e].value+"<br/>");return o}},xAxis:[{type:"category",data:xData,axisPointer:{type:"shadow"},axisLabel:{textStyle:{color:normalColor,fontSize:12}},axisLine:{lineStyle:{color:normalColor}},axisTick:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"value",name:"",nameTextStyle:{color:normalColor,fontSize:12},axisLabel:{formatter:"{value}",textStyle:{color:normalColor,fontSize:12}},axisLine:{lineStyle:{color:normalColor}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:normalColor}}}],series:seriesData};
