function randomNum(e,t){var i=Math.floor(Math.random()*(e-t)+t);return i}const imgUrl="image://http://m.qpic.cn/psc?/V50xb38C1d5fOi3riCgj2Zq4eI27wM88/TmEUgtj9EK6.7V8ajmQrEOkqjNnUnVC5hMR1rgKr7BwVDziJVMQzerU5LKrB8qAVDf8aKPxqsfCzV7zPp2o4ofTcSXUOLXFUa*mjAUPs1gw!/b&bo=MgAbAAAAAAADFxs!&rf=viewer_4";let datas1=[],pieces=[];for(let e=0;e<5e3;e++)datas1.push({value:[10*e+10,randomNum(31,39)],symbol:"emptyCircle",index:e});function getDatas2(e){let t=datas;const i=datas1[e];for(let l=1;l<10;l++)t.push({value:[i.value[0]+l,i.value[1]-randomNum(0,9)/10],symbol:"circle",index:e+.1});return pieces.push([i.value[0],i.value[0]+9]),t.map(l=>(l.index===e&&(l.symbol="circle"),l)),t=t.sort((l,a)=>l.value[0]-a.value[0]),t}let datas=JSON.parse(JSON.stringify(datas1));option={title:{text:""},grid:{width:"74%",height:"50%",left:"13.5%",top:"8.2%"},tooltip:{trigger:"axis",axisPointer:{animation:!1,type:"none"}},xAxis:{type:"value",scale:!0,boundaryGap:!1,splitLine:{show:!1}},yAxis:[{type:"value",scale:!0,max:70,min:10}],graphic:[{name:"guanbiAll",type:"text",position:[20,20],style:{text:"关闭全部聚合点"}}],dataZoom:[{type:"inside",xAxisIndex:[0],show:!1}],series:[{type:"line",sampling:"lttb",animation:!1,hoverAnimation:!1,smooth:!1,clip:!1,lineStyle:{color:"#4679B4"},itemStyle:{color:"#4679B4",borderColor:"#4679B4",opacity:1},data:datas}]},myChart.on("highlight",function(e){if(e.batch.length>0&&datas[e.batch[0].dataIndex].symbol==="circle"){const t=datas[e.batch[0].dataIndex].value[0];myChart.setOption({series:[{markLine:{symbol:"none",silent:!0,lineStyle:{normal:{color:"rgba(131, 138, 157, 0.3)",type:"dashed"}},label:{show:!1},data:[{xAxis:t}]},markPoint:{symbol:imgUrl,animation:!1,data:[{name:"guan",symbolSize:[40,20],coord:[t,10],itemStyle:{opacity:1}}]}}]})}if(e.batch.length>0&&datas[e.batch[0].dataIndex].symbol==="emptyCircle"){const t=datas[e.batch[0].dataIndex].value[0];myChart.setOption({series:[{markLine:{symbol:"none",silent:!0,lineStyle:{normal:{color:"rgba(131, 138, 157, 0.3)",type:"dashed"}},label:{show:!1},data:[{xAxis:t}]},markPoint:{data:[{itemStyle:{opacity:0}}]}}]})}}),myChart.on("click",function(e){if(e.name==="guan"){const t=datas.find(a=>a.value[0]===e.data.coord[0]),i=t.index;let l=datas.filter(a=>a.index===i).length;l>1?(datas=datas.filter(a=>a.index!==i),datas=datas.map(a=>(a.index===i-.1&&(a.symbol="emptyCircle"),a))):l===1&&(datas=datas.filter(a=>a.index!==i+.1),datas=datas.map(a=>(a.index===i&&(a.symbol="emptyCircle"),a)));for(let a=pieces.length-1;a>=0;a--)pieces[a][0]<=t.value[0]&&pieces[a][1]>=t.value[0]&&pieces.splice(a,1);uptDatas()}else e.name==="guanbiAll"?(datas=datas.filter(t=>t.index===Math.round(t.index)),datas=datas.map(t=>(t.symbol="emptyCircle",t)),pieces=[],uptDatas()):e.seriesType==="line"&&e.data.symbol==="emptyCircle"&&(datas=getDatas2(datas[e.dataIndex].index),uptDatas())});function uptDatas(){let e=[];myChart.setOption({series:[{data:datas,markPoint:{data:[{itemStyle:{opacity:0}}]}}]})}myChart.on("mouseover",function(e){e.name}),myChart.on("mouseover",function(e){e.name});