var indicatorData=["绝缘子","电缆","异地线","开关柜箱","电缆附件","交流变压器","金具","低压屏柜箱"],indicatorDataNew=[],legendData=["60","60-119","120-179","180"],data=[[43,10,28,35,50,19,15,25],[50,14,28,31,42,21,26,36],[50,24,48,41,42,31,30,20],[50,24,48,41,42,31,30,20]],concatData=[];data.map((a,t)=>{concatData=concatData.concat(a)});var maxData=_.max(concatData);indicatorData.map((a,t)=>{var e={name:a,max:maxData};indicatorDataNew.push(e)});var seriesData=[];legendData.map((a,t)=>{var e={areaStyle:{normal:{opacity:.6}},lineStyle:{normal:{width:0}},symbolSize:0,value:data[t],name:legendData[t]};seriesData.push(e)}),option={color:["#66e7c4","#49acfd","#ae98ff","#ff9159"],tooltip:{},legend:{orient:"vertical",right:0,top:0,itemGap:0,bottom:0,data:legendData},radar:{radius:"74%",name:{textStyle:{lineHeight:0}},splitArea:{areaStyle:{color:["rgba(128, 128, 128, 0)"]}},splitLine:{},indicator:indicatorDataNew},series:[{name:"",type:"radar",data:seriesData}]};
