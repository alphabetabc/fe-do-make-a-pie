let oldData=[{clrDate:"05-01",amount:1,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-01",amount:2,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-01",amount:3,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-01",amount:4,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-02",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-02",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-02",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-02",amount:8,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-03",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-03",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-03",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-03",amount:8,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-04",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-04",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-04",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-04",amount:8,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-05",amount:1,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-05",amount:2,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-05",amount:3,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-05",amount:4,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-06",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-06",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-06",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-06",amount:8,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-07",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-07",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-07",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-07",amount:8,currencyType:"残损券",currencyCode:"残损券"},{clrDate:"05-08",amount:5,currencyType:"完整券",currencyCode:"100元流通券"},{clrDate:"05-08",amount:6,currencyType:"完整券",currencyCode:"ATM专用钞"},{clrDate:"05-08",amount:7,currencyType:"完整券",currencyCode:"硬币"},{clrDate:"05-08",amount:8,currencyType:"残损券",currencyCode:"残损券"}],dateArr=[],currentTypeArr=[],currencyCodeArr=[],seriesArr;oldData.forEach(e=>{dateArr.indexOf(e.clrDate)<0&&dateArr.push(e.clrDate),currentTypeArr.indexOf(e.currencyType)<0&&currentTypeArr.push(e.currencyType),currencyCodeArr.indexOf(e.currencyCode)<0&&currencyCodeArr.push(e.currencyCode)}),seriesArr=currencyCodeArr.map(e=>({name:e,stack:"",type:"bar",data:[]}));for(var i=0;i<seriesArr.length;i++){seriesArr[i].name=="残损券"?seriesArr[i].stack="残损券":seriesArr[i].stack="完整券";for(var j=0;j<oldData.length;j++)for(var k=0;k<dateArr.length;k++)seriesArr[i].name==oldData[j].currencyCode&&seriesArr[i].stack==oldData[j].currencyType&&dateArr[k]==oldData[j].clrDate&&(seriesArr[i].data[k]=oldData[j].amount)}option={title:{text:"后台集中清分产量统计",subtext:"单位：万元",top:"0",left:"10%",textStyle:{color:"#000",align:"center"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:currencyCodeArr,right:"5%"},bottom:"3%",grid:{left:"3%",right:"4%",containLabel:!0},xAxis:[{type:"category",data:dateArr}],yAxis:[{type:"value"}],series:seriesArr};
