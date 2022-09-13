var uploadedDataURL="/asset/get/s/data-1611736969745-XwYPMOSjT.png",min=1,max=8,upArray=["2015.5.4","2016.5.10","2016.5.18","2016.6.8","2016.6.22","2016.7.10","2016.8.4","2017.5.10"],scatterArray=[[0,.6],[1,.7],[2,.8],[3,.9],[4,1],[5,1.1],[6,1.2],[7,1.3],[8,1.4]],upInfo=[[1,`2015.5.4

会员入驻`],[3,`2016.5.18

第一笔销售成交`],[5,`2016.6.22

完成法人信用认证`],[7,`2016.8.4

销售金额突破千万`]],downInfo=[[2,`2016.5.10

第一批产品上线`],[4,`2016.6.8

第一笔采购成交`],[6,`2016.7.10

完成产品质量评价`],[8,`2017.5.10

采购金额突破千万`]],option={backgroundColor:{color:{image:uploadedDataURL,repeat:"no-repeat"}},tooltip:{position:"top"},singleAxis:[{type:"value",top:"50",height:"20",splitLine:{show:!1},interval:1,axisLabel:{show:!1},axisTick:{show:!1},axisLine:{},min,max},{type:"category",boundaryGap:!1,top:"50",height:"20",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:upArray},{type:"value",top:"50",height:"20",splitLine:{show:!1},interval:1,axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1},min,max}],series:[{singleAxisIndex:0,coordinateSystem:"singleAxis",type:"scatter",symbol:"rect",symbolSize:[100,60],symbolOffset:[0,-40],itemStyle:{color:"transparent"},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value[1]},color:"white",borderRadius:3,padding:[2,2,2,2]}},emphasis:{label:{color:"#FFFD8E"}},data:upInfo},{singleAxisIndex:1,coordinateSystem:"singleAxis",type:"scatter",symbolSize:function(e){return e[1]>10?e[1]/1e3:e[1]*10},symbolOffset:[0,9],itemStyle:{normal:{opacity:1,color:"#fff"}},data:scatterArray},{singleAxisIndex:2,coordinateSystem:"singleAxis",type:"scatter",symbol:"rect",symbolSize:[100,60],symbolOffset:[0,75],itemStyle:{color:"transparent"},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value[1]},color:"white",borderRadius:3,padding:[2,2,2,2]}},emphasis:{label:{color:"#FFFD8E"}},data:downInfo}]};
