var person="/asset/get/s/data-1561621393298-zQTG-TuDS.png",car="/asset/get/s/data-1561621386236-0IGCc48l6.png",phone="/asset/get/s/data-1561621379686-rZHoryrBV.png",size=50,listdata=[],links=[],legendes=["手机IMSI","故障等级","车牌号码","故障等级"],texts=[],branch={蓄电池:"蓄电池",空压机:"空压机",制动:"制动",烟雾探测:"烟雾探测",列车方向:"列车方向",司机室:"司机室",紧急对讲:"紧急对讲",速度:"速度",受电弓:"受电弓"},phoneIMSI=[],carNum={};const relationShipCar=[];var mainRelationShip={故障等级:""};function setDataPerson(t,o){var e=0;for(var a in t)listdata.push({x:50,y:100,name:a,showName:t[a],symbol:"image:///asset/get/s/data-1561621393298-zQTG-TuDS.png",symbolSize:70,category:o,formatter:function(r){return r.data.showName},label:{position:"bottom"}}),e++}function setDataPhone(t,o){var e=0;for(var a in t)listdata.push({x:e*50,y:size+e*10,name:a,showName:t[a],symbolSize:size,category:o,formatter:function(r){return r.data.showName},label:{position:"bottom"}}),e++}function setLinkData(t,o,e){if(o!==""){var a=0;for(var r in t)links.push({source:r,target:e,value:o[a],lineStyle:{normal:{color:"source"}}}),a++}else for(var n in t)links.push({source:n,target:e,value:"",lineStyle:{normal:{color:"source"}}})}for(var i=0;i<legendes.length;i++)texts.push({name:legendes[i]});setDataPhone(branch,0),setDataPerson(mainRelationShip,3),setLinkData(branch,phoneIMSI,legendes[3]),setLinkData(carNum,relationShipCar,legendes[3]),option={title:{text:"关系图绑定点击事件",top:"top",left:"left",textStyle:{color:"#000000"}},tooltip:{formatter:"{b}"},backgroundColor:"#f7f7f7",legend:{data:legendes,textStyle:{color:"#000000"},icon:"circle",type:"scroll",orient:"vertical",left:10,top:20,bottom:20,itemWidth:10,itemHeight:10},animationDuration:1e3,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"force",force:{repulsion:80,gravity:0,edgeLength:150,layoutAnimation:!0},data:listdata,links,categories:texts,roam:!1,nodeScaleRatio:0,focusNodeAdjacency:!1,lineStyle:{normal:{opacity:.5,width:1.5,curveness:0}},label:{normal:{show:!0,position:"inside",textStyle:{color:"#000000",fontWeight:"normal",fontSize:"12"},formatter:function(t){return t.data.showName},fontSize:18,fontStyle:"600"}},edgeLabel:{normal:{show:!0,textStyle:{fontSize:12},formatter:"{c}"}}}],color:["#e8b842","#41b1ef","#667aed","#347fbb","#772cdc","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0"]};const clickFun=t=>{console.log(t.name)};myChart.on("click",clickFun);
