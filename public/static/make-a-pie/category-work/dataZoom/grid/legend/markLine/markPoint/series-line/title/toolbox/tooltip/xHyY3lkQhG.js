option={title:{text:"动态数据",subtext:"纯属虚构"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["最新成交价","预购队列"]},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},dataZoom:{show:!1,start:0,end:100},xAxis:[{type:"category",boundaryGap:!0,data:timesDate()}],yAxis:[{type:"value",scale:!0,name:"价格",max:30,min:0,boundaryGap:[.2,.2]}],series:[{name:"最新成交价",type:"line",smooth:!0,symbolSize:5,symbol:"circle",showSymbol:!1,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 187, 237, 0.5)"},{offset:.8,color:"rgba(0, 189, 237, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},markPoint:{symbolSize:10,symbol:"circle",data:[{coord:[9,2]}],label:{normal:{show:!0,position:"top",formatter:function(a){if(a.dataIndex===8)return"{b}"}}}},markLine:{data:[{yAxis:8,name:"实时"}]},data:rwD()}]};var r=[];r=rwD(),setInterval(function(){axisData=new Date().toLocaleTimeString().replace(/^\D*/,"");var a=option.series[0].data;a.shift(),a.push((Math.random()*10+5).toFixed(1)-0),option.xAxis[0].data.shift(),option.xAxis[0].data.push(axisData);var e=a[a.length-1];option.series[0].markPoint.data[0].coord[1]=e,option.series[0].markLine.data[0].yAxis=e,myChart.setOption(option)},2100);function rwD(){for(var a=[],e=0;e<10;)a.push((Math.random()*10+5).toFixed(1)-0),e++;return a}function timesDate(){for(var a=new Date,e=[],t=10;t--;)e.unshift(a.toLocaleTimeString().replace(/^\D*/,"")),a=new Date(a-2e3);return e}