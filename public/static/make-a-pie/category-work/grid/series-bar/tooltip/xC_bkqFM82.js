var getName=["小花","小明","小红","吓不不","刃甲","加加","鸿基","新能源","家喻户晓","老师"],getValue=[219,241,174,44,435,617,114,82,77,50],max=Math.max.apply(null,getValue),getMax=[];for(i=0;i<getName.length;i++)getMax.push(max);console.log(getMax),option={backgroundColor:"#003366",grid:{left:"4%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(o){return o[0].name+" : "+o[0].value}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,offset:100,axisLabel:{show:!0,align:"left",textStyle:{color:"#66cc00"},formatter:function(o,r){var e="",t="";return no="NO.",e=r+1,r===0?t="{no1|"+no+"} {num1|"+e+"} {title1|"+o+"}":r===1?t="{no2|"+no+"} {num2|"+e+"} {title2|"+o+"}":r===2?t="{no3|"+no+"} {num3|"+e+"} {title3|"+o+"}":t="{no|"+no+"} {num|"+e+"} {title|"+o+"}",t},rich:{no:{color:"#ffcccc",fontSize:14},no1:{color:"#ff4d4d",fontSize:14},no2:{color:"#4dd2ff",fontSize:14},no3:{color:"#ffff00",fontSize:14},num:{color:"#fff",backgroundColor:"#ffcccc",width:20,height:20,fontSize:14,align:"center",borderRadius:100},num1:{color:"#fff",backgroundColor:"#ff4d4d",width:20,height:20,fontSize:14,align:"center",borderRadius:100},num2:{color:"#fff",backgroundColor:"#4dd2ff",width:20,height:20,fontSize:14,align:"center",borderRadius:100},num3:{color:"#fff",backgroundColor:"#ffff00",width:20,height:20,fontSize:14,align:"center",borderRadius:100},title:{color:"#ffcccc"},title1:{color:"#ff4d4d"},title2:{color:"#4dd2ff"},title3:{color:"#ffff00"}}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:getName}],series:[{name:"值",type:"bar",zlevel:1,label:{show:!0,position:"right",color:"#fff",fontSize:14,offset:[5,0]},itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgb(128,204,255,1)"},{offset:1,color:"rgb(46,200,207,1)"}])}},barWidth:20,data:getValue}]};