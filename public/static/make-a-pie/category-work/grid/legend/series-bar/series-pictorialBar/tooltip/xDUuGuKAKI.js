var dataUitName1=["2000","2005","2010","2015","2020"],departmentdata1_1=[10,20,30,40,34],departmentdata2_1=[5,10,15,20,32],departmentdata3_1=[1,1,1,1,4],departmentdata4_1=[4,9,14,19,2],departmentdata5_1=[6,19,14,19,12];option={backgroundColor:"#031245",tooltip:{trigger:"axis"},legend:{right:"5%",top:"2%",textStyle:{color:"#fff"}},grid:{top:"27%",left:"3%",right:"7%",bottom:"3%",containLabel:!0},xAxis:{type:"category",name:"(年)",nameTextStyle:{color:"#fff"},data:dataUitName1,axisLabel:{textStyle:{color:"#fff",fontSize:12,fontWeight:900}},axisTick:{show:!1},axisLine:{lineStyle:{type:"dashed",color:"#2E344B"}},splitLine:{show:!1}},yAxis:[{type:"value",name:"(人)",nameTextStyle:{color:"#fff"},axisLabel:{textStyle:{color:"#fff",fontSize:12,fontWeight:900}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#2E344B"}}}],series:[{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[-31,-4],symbolPosition:"end",z:12,label:{normal:{show:!1}},data:departmentdata1_1,color:"#CC1CAA",tooltip:{show:!1}},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[-31,4],z:12,data:departmentdata1_1,color:"#CC1CAA",tooltip:{show:!1}},{type:"bar",name:"未婚",itemStyle:{normal:{opacity:.5}},barWidth:"12",data:departmentdata1_1,color:"#CC1CAA"},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[-16,-4],symbolPosition:"end",z:12,label:{show:!1},data:departmentdata2_1,color:"#8D67FF",tooltip:{show:!1}},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[-16,4],z:12,data:departmentdata2_1,color:"#8D67FF",tooltip:{show:!1}},{type:"bar",name:"已婚",itemStyle:{normal:{opacity:.5}},barWidth:"12",data:departmentdata2_1,color:"#8D67FF"},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[0,-4],symbolPosition:"end",z:12,label:{show:!1},data:departmentdata3_1,color:"#F97B0F",tooltip:{show:!1}},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[0,4],z:12,data:departmentdata3_1,color:"#F97B0F",tooltip:{show:!1}},{type:"bar",name:"离异",itemStyle:{normal:{opacity:.5}},barWidth:"12",data:departmentdata3_1,color:"#F97B0F"},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[16,-4],symbolPosition:"end",z:12,label:{show:!1},data:departmentdata4_1,color:"#48DE13",tooltip:{show:!1}},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[16,4],z:12,data:departmentdata4_1,color:"#48DE13",tooltip:{show:!1}},{type:"bar",name:"丧偶",itemStyle:{normal:{opacity:.5}},barWidth:"12",data:departmentdata4_1,color:"#48DE13"},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[31,-4],symbolPosition:"end",z:12,label:{show:!1},data:departmentdata5_1,color:"#00FFFF",tooltip:{show:!1}},{name:"",type:"pictorialBar",symbolSize:[12,6],symbolOffset:[31,4],z:12,data:departmentdata5_1,color:"#00FFFF",tooltip:{show:!1}},{type:"bar",name:"未知",itemStyle:{normal:{opacity:.5}},barWidth:"12",data:departmentdata5_1,color:"#00FFFF"}]};