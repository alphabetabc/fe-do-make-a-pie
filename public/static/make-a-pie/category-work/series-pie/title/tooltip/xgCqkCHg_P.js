var _this=this,isSet=!0,charPie3currentIndex=0;let myChart=echarts.init(document.getElementById("chart-panel")),value=45,title="上市公司（授信企业）",companyName="YYYY公司模型预警（ZZHJ）";var scaleData=[{count:92,typeName:"上市公司（授信企业）股价连续三天跌停",prevId:"3052",brNo:null,brNm:null,prevFlag:null,custName:null,prevDate:null,prevRsn:null},{count:334,typeName:"疑似授信客户未纳入现有集团管理",prevId:"3060",brNo:null,brNm:null,prevFlag:null,custName:null,prevDate:null,prevRsn:null},{count:92,typeName:"上市公司（授信企业）股价连续三天跌停",prevId:"3052",brNo:null,brNm:null,prevFlag:null,custName:null,prevDate:null,prevRsn:null},{count:334,typeName:"疑似授信客户未纳入现有集团管理",prevId:"3060",brNo:null,brNm:null,prevFlag:null,custName:null,prevDate:null,prevRsn:null}];const chartPieColors=[[{offset:0,color:"#59B5FF"},{offset:1,color:"#2263BD"}],[{offset:0,color:"#FF9793"},{offset:1,color:"#E7504C"}],[{offset:0,color:"#AE60FA"},{offset:1,color:"#6D32C1"}],[{offset:0,color:"#A05447"},{offset:1,color:"#E8684A"}],[{offset:0,color:"#574DFF"},{offset:1,color:"#564DFE"}],[{offset:0,color:"#00A5A3"},{offset:1,color:"#00A9A7"}],[{offset:0,color:"#004BC5"},{offset:1,color:"#0583F0"}],[{offset:0,color:"#00D887"},{offset:1,color:"#00E7AB"}],[{offset:0,color:"#7FACA7"},{offset:1,color:"#BDEFDB"}],[{offset:0,color:"#AE60FA"},{offset:1,color:"#6D32C1"}],[{offset:0,color:"#EFCE49"},{offset:1,color:"#D79C12"}],[{offset:0,color:"#FFB058"},{offset:1,color:"#C56625"}],[{offset:0,color:"#4ACC88"},{offset:1,color:"#27A657"}],[{offset:0,color:"#2C989E"},{offset:1,color:"#27BCC9"}],[{offset:0,color:"#8A98FF"},{offset:1,color:"#2B36A8"}]];for(var data=[],data1=[],i=0;i<scaleData.length;i++)data.push({value:scaleData[i].count,name:scaleData[i].typeName,prevId:scaleData[i].prevId,itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:chartPieColors[i],global:!1},opacity:1}}}),data1.push({value:scaleData[i].count,name:scaleData[i].typeName,prevId:scaleData[i].prevId,itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:chartPieColors[i],global:!1},opacity:.5}}});option={backgroundColor:"#0a1a2a",title:[{x:"center",y:"center",textStyle:{color:"#8c949a",fontSize:20,fontWeight:"normal"}}],tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,0)",position:["40%","45%"],textStyle:{fontSize:17,align:"center"},formatter:function(e){let t=e.data.name,o,l;return t.length>10&&(l=t.slice(0,10),o=t.slice(10,t.length)),`${l}<br/>${o}    ${e.data.prevId} <br/>${e.data.value}`}},series:[{name:"",type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["50%","60%"],center:["50%","50%"],label:{show:!1},labelLine:{normal:{show:!1}},tooltip:{show:!1},data:data1},{name:"title",type:"pie",radius:["54%","60%"],center:["50%","50%"],label:{show:!1},labelLine:{normal:{smooth:!0,length:10,lineStyle:{width:1.5}}},itemStyle:{normal:{shadowBlur:15,shadowColor:"rgba(0, 0, 0, 0.5)"}},data}]},myChart.on("mouseover",function(e){isSet=!1,clearInterval(_this.startCharts),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:charPie3currentIndex}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.dataIndex})});var chartHover=function(){var e=option.series[0].data.length;myChart.dispatchAction({type:"downplay",seriesIndex:1,dataIndex:charPie3currentIndex}),charPie3currentIndex=(charPie3currentIndex+1)%e,myChart.dispatchAction({type:"highlight",seriesIndex:1,dataIndex:charPie3currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:1,dataIndex:charPie3currentIndex})};_this.startCharts=setInterval(chartHover,5e3),myChart.on("mouseout",function(e){isSet||(_this.startCharts=setInterval(chartHover,5e3),isSet=!0,myChart.dispatchAction({type:"downplay",seriesIndex:1,dataIndex:e.dataIndex}))});