for(var data={xAxis:[],series:[]},len=0;len<10;)data.series.push(Math.floor(Math.random()*10*5)),len++;function newItem(){return echarts.util.merge({type:"category",boundaryGap:!0,data:data.xAxis})}for(var now=new Date,ser=10;ser--;)data.xAxis.unshift(now.toLocaleTimeString().replace(/^\D*/,"")),now=new Date(now-2e3);option={title:{text:"动态数据",subtext:"纯属虚构"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["最新成交价","预购队列"]},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},dataZoom:{show:!0,start:30,end:70},xAxis:[newItem()],yAxis:[{type:"value",scale:!0,name:"价格",max:50,min:0,boundaryGap:[.2,.2]}],series:[{name:"最新成交价",type:"bar",data:data.series}]},app.count=11,setInterval(function(){axisData=new Date().toLocaleTimeString().replace(/^\D*/,"");var e=option.series[0].data;data.series.shift(),data.series.push(Math.floor(Math.random()*10*5)),data.xAxis.shift(),data.xAxis.push(axisData),myChart.setOption({xAxis:[{data:data.xAxis}],series:[{data:data.series}]})},2100);
