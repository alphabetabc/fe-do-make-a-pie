var getname=["数据学院","测试学院","联奕学院","BI学院","旺旺学院"],getvalue=[20,96,55,65,36],getvalue1=[27,56,95,57,38],getvalue2=[73,56,33,70,60],getvalue3=[57,76,55,57,88],getvalue4=[37,56,35,77,68];function multi_bubbleSort(a){let i=a.data0,t=new Array(i.length).fill(0),d=a.data0.length;for(let l=0;l<d;l++)for(let e=0;e<a.data1.length;e++)t[l]=Number(t[l])+Number(a.data1[e][l]);for(let l=0;l<d;l++)for(let e=0;e<d-1-l;e++)if(Number(t[e])<Number(t[e+1])){let r=t[e+1];t[e+1]=t[e],t[e]=r;let s=a.data0[e+1];a.data0[e+1]=a.data0[e],a.data0[e]=s;for(let o=0;o<a.data2.length;o++){let h=a.data2[o][e+1];a.data2[o][e+1]=a.data2[o][e],a.data2[o][e]=h}}return a}let obj={data0:getname,data1:[getvalue,getvalue1,getvalue2,getvalue3,getvalue4],data2:[getvalue,getvalue1,getvalue2,getvalue3,getvalue4]},multi_obj=multi_bubbleSort(obj);option={backgroundColor:"#000",grid:{top:"15",right:"60",left:"100",bottom:"15"},tooltip:{trigger:"axis",axisPointer:{type:"none"}},legend:{type:"scroll",icon:"circle",right:"10",top:"0",data:["科研项目","专利成果","获奖成果","论文成果","著作成果"],itemGap:20,itemWidth:11,itemHeight:11,textStyle:{fontSize:"13",color:"#A9C1E5"}},yAxis:[{show:!0,inverse:!0,data:multi_obj.data0,axisLabel:{color:"#C5DCFF",textStyle:{fontSize:14}},axisLine:{show:!1},axisTick:{show:!1}}],xAxis:[{axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],series:[{type:"bar",name:"科研项目",data:multi_obj.data2[0],barWidth:"10px",stack:"科研分析",label:{show:!1,position:"right",color:"#FFFFFF",fontSize:15,offset:[5,0]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#065ADA"},{offset:1,color:"#22CFF5"}],!1),barBorderRadius:5}},z:50},{type:"bar",name:"专利成果",data:multi_obj.data2[1],barWidth:"10px",stack:"科研分析",label:{show:!1,position:"right",color:"#FFFFFF",fontSize:15,offset:[5,0]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#2CFFBA"},{offset:1,color:"#1B856D"}],!1),barBorderRadius:5,shadowBlur:[0,0,0,5],shadowColor:"#2CFFBA",shadowOffsetX:-5}},z:40},{type:"bar",name:"获奖成果",data:multi_obj.data2[2],barWidth:"10px",stack:"科研分析",label:{show:!1,position:"right",color:"#FFFFFF",fontSize:15,offset:[5,0]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#FF7E7C"},{offset:1,color:"#FF6061"}],!1),barBorderRadius:5,shadowBlur:[0,0,0,5],shadowColor:"#FF7E7C",shadowOffsetX:-5}},z:30},{type:"bar",name:"论文成果",data:multi_obj.data2[3],barWidth:"10px",stack:"科研分析",label:{show:!1,position:"right",color:"#FFFFFF",fontSize:15,offset:[5,0]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#27F8F6"},{offset:1,color:"#209ECD"}],!1),barBorderRadius:5,shadowBlur:[0,0,0,5],shadowColor:"#27F8F6",shadowOffsetX:-5}},z:20},{type:"bar",name:"著作成果",data:multi_obj.data2[4],barWidth:"10px",stack:"科研分析",label:{show:!1,position:"right",color:"#FFFFFF",fontSize:15,offset:[5,0]},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#9F9BFF"},{offset:1,color:"#826CFF"}],!1),barBorderRadius:5,shadowBlur:[0,0,0,5],shadowColor:"#9F9BFF",shadowOffsetX:-5}},z:10}]};var series=option.series,fun=function(a){for(var i=0,t=0;t<series.length;t++)i+=series[t].data[a.dataIndex];return i};series[series.length-1]&&(series[series.length-1].label.show=!0,series[series.length-1].label.formatter=fun),myChart.on("legendselectchanged",function(a){let i=a.selected.科研项目,t=a.selected.专利成果,d=a.selected.获奖成果,l=a.selected.论文成果,e=a.selected.著作成果,r=this.getOption();r.yAxis[0].data=[],r.series[0].data=[],r.series[1].data=[],r.series[2].data=[],r.series[3].data=[],r.series[4].data=[];let s={data0:getname,data1:[],data2:[getvalue,getvalue1,getvalue2,getvalue3,getvalue4]};i&&s.data1.push(getvalue),t&&s.data1.push(getvalue1),d&&s.data1.push(getvalue2),l&&s.data1.push(getvalue3),e&&s.data1.push(getvalue4);let o=multi_bubbleSort(s);r.yAxis[0].data=o.data0,r.series[0].data=o.data2[0],r.series[1].data=o.data2[1],r.series[2].data=o.data2[2],r.series[3].data=o.data2[3],r.series[4].data=o.data2[4];var h=a.selected,f=[];for(var p in h)if(h[p])for(var F=0;F<series.length;F++){var w=series[F].name;w==p&&f.push(F)}for(var v=function(b){for(var m=0,g=0;g<f.length;g++)for(var c=0;c<series.length;c++)f[g]==c&&(m+=series[c].data[b.dataIndex]);return m},u=0;u<series.length;u++)series[u].label.show=!1;var n=series[f[f.length-1]];n!=null&&n!=""&&n!=null&&(n.label.show=!0,n.label.formatter=v),myChart.setOption(option)});