var TmpData=function(){var t=[];Date.prototype.getHM=function(o){return this.getHours()+":"+this.getMinutes()};for(var a=new Date,r=1;r<21;r++){var e={};a.setMinutes(a.getMinutes()+1),e.time=a.getHM(),e.client=Math.floor(Math.random()*20)+30,e.fair=Math.floor(e.client*(Math.random()/10)),e.good=Math.floor((e.client-e.fair)*(Math.random()/3)),e.best=e.client-e.good-e.fair,t.push(e)}return t}(),xData=function(){for(var t=[],a=1;a<TmpData.length;a++)t.push(TmpData[a].time);return t}(),clientData=function(){for(var t=[],a=1;a<TmpData.length;a++)t.push(TmpData[a].client);return t}(),bestData=function(){for(var t=[],a=1;a<TmpData.length;a++)t.push(TmpData[a].best);return t}(),goodData=function(){for(var t=[],a=1;a<TmpData.length;a++)t.push(TmpData[a].good);return t}(),fairData=function(){for(var t=[],a=1;a<TmpData.length;a++)t.push(TmpData[a].fair);return t}();option={title:{text:"终端数量",x:"4%",textStyle:{color:"#446699",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},grid:{borderWidth:0,top:"25%",bottom:"15%",textStyle:{color:"#fff"}},legend:{x:"30%",textStyle:{color:"#90979c"},data:["Best","Good","Fair","总数"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:xData}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],series:[{name:"Best",type:"bar",stack:"总数",barMaxWidth:25,barGap:"20%",itemStyle:{normal:{color:"#1F77B4",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:bestData},{name:"Good",type:"bar",stack:"总数",itemStyle:{normal:{color:"#FF7F0E",barBorderRadius:0,label:{show:!0,position:"inside",formatter:function(t){return t.value>0?t.value:""}}}},data:goodData},{name:"Fair",type:"bar",stack:"总数",itemStyle:{normal:{color:"#2CA02C",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:fairData},{name:"总数",type:"line",stack:"总数",symbolSize:8,symbol:"circle",itemStyle:{normal:{color:"#6ca7e2",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:clientData}]};
