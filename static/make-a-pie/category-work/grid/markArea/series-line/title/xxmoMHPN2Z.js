for(var now=new Date,data=[],mark={sj:[{name:"暑假",xAxis:"",itemStyle:{borderWidth:0}},{xAxis:""}],wy:[{name:"五一",xAxis:""},{xAxis:""}]},markArea=[],i=0;i<12;i++){var year=now.getFullYear(),month=now.getMonth()+1-i,time=new Date(year,month,0),text=[time.getFullYear(),time.getMonth()+1,time.getDate()];text[1]==7&&(mark.sj[0].xAxis=text.join("/")),text[1]==9&&(mark.sj[1].xAxis=text.join("/")),text[1]==5&&(mark.wy[0].xAxis=text.join("/"),mark.wy[1].xAxis=text.join("/"));var val=Math.random()*500;data.push([text.join("/"),val])}Object.keys(mark).map(function(t){markArea.push(mark[t])});var subData={暑假:{dates:[]},五一:{dates:[]}},s=mark.sj[0].xAxis,e=mark.sj[0].xAxis,date=new Date(s),endDate=new Date(e);date.setDate(1);var dateDiff=endDate.getTime()-date.getTime();dayDiff=Math.floor(dateDiff/(24*3600*1e3));for(var dates=subData.暑假.dates,y=date.getFullYear(),m=date.getMonth()+1,day=date.getDate(),i=0;i<dayDiff;i++){var time=new Date(y,m,day+i),text=[time.getFullYear(),time.getMonth()+1,time.getDate()];dates.push(text.join("/"))}var _data=[];dates.map(function(t){_data.push([t,Math.random()*100])}),subData.暑假.data=_data,option={grid:[{top:"10%"},{bottom:"60%"}],title:{text:"指标下钻"},xAxis:[{gridIndex:0,type:"time",axisLabel:{formatter:function(t,n){var a=new Date(t),r=[a.getFullYear(),a.getMonth()+1];return r.join("-")}},boundaryGap:[0,"100%"]},{gridIndex:1,type:"time",show:!1,axisLabel:{formatter:function(t,n){var a=new Date(t),r=[a.getFullYear(),a.getMonth()+1],r=[a.getFullYear(),a.getMonth()+1,a.getDate()];return r.join("-")}},boundaryGap:[0,"100%"]}],yAxis:[{gridIndex:0},{gridIndex:1,show:!1}],series:[{gridIndex:0,type:"line",data,markArea:{itemStyle:{borderWidth:2},data:markArea}},{type:"line",xAxisIndex:1,yAxisIndex:1,data:[]}]},myChart.on("click",function(t){var n=t.componentType=="markArea";if(n){var a=markArea[0][0].selected;typeof markArea[0][0].selected>"u"?a=!1:a=markArea[0][0].selected,a=!a,markArea[0][0].selected=a,a?(option.grid[0].top="55%",option.xAxis[1].show=!0,option.yAxis[1].show=!0,option.series[1].data=subData.暑假.data):(option.grid[0].top="10%",option.xAxis[1].show=!1,option.yAxis[1].show=!1,option.series[1].data=[]),myChart.setOption(option)}});