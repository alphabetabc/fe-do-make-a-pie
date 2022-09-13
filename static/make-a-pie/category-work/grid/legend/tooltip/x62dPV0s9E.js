function setColor(r){var a=["#FF9983","#038DFF","#72DC93","#8B87FF","#00D3FF","#C6CAD3"],t=a.length,e=r;function o(){e>=t&&(e=e-t,o())}return o(),a[e]}function setData(r,a){var t=[];t[a]=r.count;for(var e=0;e<a;e++)t[e]=0;return t}var orgResourceBySubject=[{percentage:"0%",count:0,subjectName:"生物"},{percentage:"0%",count:0,subjectName:"艺术"},{percentage:"0%",count:0,subjectName:"历史"},{percentage:"83.33%",count:15,subjectName:"语文"}],chartData=[],chartNames=[],max=0;function getChartData(){if(!(orgResourceBySubject.length<=0)){var r=[...orgResourceBySubject];chartData=[];var a=[],t=[];r.forEach((e,o)=>{chartData.push({name:e.subjectName,type:"bar",barGap:"-100%",z:3,itemStyle:{normal:{color:setColor(o)}},data:setData(e,o),label:{normal:{formatter:function(n){return r[n.dataIndex].percentage+" "+n.value+"个"},position:"left",offset:[250,0],show:!0,color:"#666"}}}),a.push(e.count),chartNames.push(e.subjectName),max=max+e.count}),a.forEach(e=>{t.push(max-e)}),chartData.push({type:"bar",stack:"chart",silent:!0,itemStyle:{normal:{color:"#eee"}},data:t})}}option={tooltip:{},color:["#FF9983","#038DFF","#72DC93","#8B87FF","#00D3FF","#C6CAD3"],legend:{formatter:"{name}",icon:"circle",itemWidth:8,itemHeight:8,borderRadius:8,textStyle:{color:"#999999",borderRadius:8}},grid:[{top:0,width:"100%",bottom:20,left:0,right:0,containLabel:!0}],xAxis:[{show:!1,type:"value",max,splitLine:{show:!1}}],yAxis:[{type:"category",data:chartNames,axisLabel:{margin:16,interval:0,color:"#333333",fontFamily:"PingFang SC",fontSize:12},inverse:!0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],series:this.chartData};