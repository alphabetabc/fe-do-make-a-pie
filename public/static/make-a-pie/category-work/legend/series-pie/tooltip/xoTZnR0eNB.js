const colorList=["#1183ED ","#00CF92","#F78048","#EF9D0F","#EF4359"];option={tooltip:{trigger:"item"},legend:{type:"scroll",orient:"vertical",right:"10%",top:"center",itemGap:30,selectedMode:!1,icon:"circle",data:["博士研究生","硕士研究生","大学","专科","专科以下"],textStyle:{color:"#77899c",rich:{uname:{width:100},unum:{color:"#4ed139",width:40,align:"right"}}},formatter(e){return`{uname|${e}}{unum|value}`}},color:colorList,series:[{name:"学历",type:"pie",radius:[60,90],center:["40%","50%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderWidth:0,borderColor:"#fff"},data:[{name:"博士研究生",value:40},{name:"硕士研究生",value:25},{name:"大学",value:18},{name:"专科",value:12},{name:"专科以下",value:5}]}]};