var getValue=[219,241,174,44,435,617],getName=["总培训","标准规范培训","行业管理办法培训","继续教育培训","专业培训","其他培训"],max=Math.max.apply(null,getValue),getMax=[];for(i=0;i<getName.length;i++)getMax.push(max);option={backgroundColor:"#030A41",grid:{left:"8%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+" : "+e[0].value}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,offset:100,axisLabel:{show:!0,align:"left",textStyle:{color:"#66cc00"},formatter:function(e,t){return str="{title|"+e+"}",str},rich:{title:{color:"#64BDFF",fontSize:12}}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:getName},{type:"category",inverse:!0,offset:-50,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"},formatter:function(e,t){return str="{title|"+e+"次}",str},rich:{title:{color:"#fff",fontSize:12}}},data:getValue}],series:[{name:"值",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:30,color:e=>{var t=["#0080FF","#ffcb48","#12c9fe","#1DB9FF"],a=["#FFD4FF","#ff900e","#0599de","#B3F3FF"],r=e.dataIndex<1?e.dataIndex:3,o=t[r],l=a[r];return new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:o},{offset:1,color:l}])}}},barWidth:20,data:getValue},{name:"背景",type:"bar",barWidth:20,barGap:"-100%",data:getMax,itemStyle:{normal:{color:"#334F78",barBorderRadius:30}}}]};
