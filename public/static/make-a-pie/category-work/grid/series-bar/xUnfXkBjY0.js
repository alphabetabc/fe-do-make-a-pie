const rich={value:{fontSize:18,fontFamily:"DINAlternate-Bold, DINAlternate",fontWeight:"bold",color:"#FFFFFFFF"},unit:{fontSize:14,fontFamily:"PingFangSC-Medium,PingFang SC",fontWeight:"500",color:"rgba(255, 255, 255, .6)"}},data2=[{name:"<10",value:16},{name:"10-30",value:50}],names=[],values=[],datas=[];data2.forEach(a=>{names.push(a.name),values.push(a.value)});const max=Math.max(...values);data2.forEach(a=>{datas.push({value:max,name:a.name,num:a.value})}),option={backgroundColor:"#000920",grid:{top:"4%",left:"15%",right:"20%",bottom:20},xAxis:{type:"value",axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},yAxis:[{data:["<10","10-30"],type:"category",axisLine:{show:!1},splitLine:{show:!1},axisLabel:{fontSize:14,fontFamily:"PingFangSC-Semibold, PingFang SC",fontWeight:"600",color:"#B6EEF9"}}],series:[{name:"今年",type:"bar",barWidth:"10px",itemStyle:{normal:{color:"#2CFAA6"}},data:data2},{name:"今年",type:"bar",barWidth:"13px",barGap:"-113%",itemStyle:{normal:{color:"transparent",borderColor:"#2CFAA6",opacity:.2,borderWidth:1}},label:{normal:{show:!1}},data:datas},{name:"今年",type:"bar",barWidth:"13px",barGap:"-113%",itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!0,formatter:a=>`{value|${a.data.num}}`,rich,position:"right"}},data:datas}]};