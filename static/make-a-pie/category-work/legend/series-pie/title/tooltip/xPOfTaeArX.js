var data1=[{value:1089,name:"非建构筑物"},{value:1033,name:"建构筑物"},{value:255,name:"垃圾废弃物回收厂"},{value:106,name:"交通工具"}],colorList=["#02F2F3","#68B5FB","#D45A49","#F3E58D"];option={backgroundColor:"#101736",title:{text:"火灾扑救",x:"4%",width:173,height:163,fontSize:22,textStyle:{color:"#05F0EE",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",bottom:"35%",right:"5%",textStyle:{fontSize:14,color:"#fff"}},series:[{name:"访问来源",type:"pie",center:["50%","50%"],radius:["24%","45%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},emphasis:{label:{show:!0,position:"outside",fontSize:"20",formatter:function(e){for(var o=0,a=0,t=0;t<data1.length;t++)a+=data1[t].value;return o=(e.value/a*100).toFixed(0),e.name!==""?e.name+`
`+e.value+`次
占百分比：`+o+"%":""}}},labelLine:{show:!1},data:data1}]};
