var m2R2Data=[{value:335,legendname:"服务",name:"服务",itemStyle:{color:"#FFC501 "}},{value:234,legendname:"价格",name:"价格",itemStyle:{color:"#EA6E29"}},{value:310,legendname:"质量",name:"质量",itemStyle:{color:"#05C985 "}},{value:310,legendname:"卫生状况",name:"卫生状况",itemStyle:{color:"#1F8EFA "}},{value:310,legendname:"其他",name:"其他",itemStyle:{color:"#8086FB "}}];option={title:[{text:"",textStyle:{fontSize:16,color:"black"},left:"2%"}],tooltip:{trigger:"item",formatter:function(e){var t=e.seriesName+"</br>"+e.marker+e.data.legendname+"</br>数量："+e.data.value+"</br>占比："+e.percent+"%";return t}},grid:{top:"middle",left:"0%",right:"4%",bottom:"3%",height:"80%",containLabel:!0},legend:{type:"scroll",orient:"vertical",right:"10%",align:"left",icon:"circle",itemHeight:10,top:"middle",textStyle:{fontSize:12,color:"#505050"},height:250},series:[{name:"占比",type:"pie",radius:"70%",center:["35%","50%"],clockwise:!1,avoidLabelOverlap:!1,label:{normal:{show:!1,position:"outter",formatter:function(e){return e.data.legendname}}},labelLine:{normal:{length:3,length2:3,smooth:!0}},data:m2R2Data}]};
