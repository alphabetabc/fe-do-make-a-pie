var uploadedDataURL1="/asset/get/s/data-1583135974468-lKpQz6tx.png",uploadedDataURL2="/asset/get/s/data-1583135969637-z2rYkihR.png",uploadedDataURL3="/asset/get/s/data-1583135966376-BSwUbj-o.png",uploadedDataURL4="/asset/get/s/data-1583135956743-UuESqFsc.png",uploadedDataURL5="/asset/get/s/data-1583135962746-rqgaeHvd.png",sportsIcon={a:uploadedDataURL1,b:uploadedDataURL2,c:uploadedDataURL3,d:uploadedDataURL4,e:uploadedDataURL5};option={legend:{data:["平均","我"],right:"5px",bottom:"5px",orient:"vertical",textStyle:{fontFamily:"PingFangSC-Regular",color:"#333",fontSize:16,lineHeight:22}},radar:[{name:{textStyle:{fontSize:"16",color:"#333333"},formatter:function(e){var a="";switch(e){case"学习度":a=`{d|}
`+e;break;case"完成度":a=`{c|}
`+e;break;case"成就度":a=`{b|}
`+e;break;case"贡献度":a=`{a|}
`+e;break;case"参与度":a=`{e|}
`+e;break}return a},lineHeight:30,rich:{a:{width:26,height:26,align:"center",backgroundColor:{image:sportsIcon.a}},b:{width:30,height:30,align:"center",backgroundColor:{image:sportsIcon.b}},c:{width:30,height:30,align:"center",backgroundColor:{image:sportsIcon.c}},d:{width:30,height:30,align:"center",backgroundColor:{image:sportsIcon.d}},e:{width:30,height:30,align:"center",backgroundColor:{image:sportsIcon.e}}}},indicator:[{text:"学习度"},{text:"完成度"},{text:"成就度"},{text:"贡献度"},{text:"参与度"}],center:["44%","55%"],radius:140,startAngle:90,splitNumber:4,splitArea:{areaStyle:{color:"#fff",shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:4}},axisLine:{lineStyle:{color:"#0091FF",width:2}},splitLine:{show:!1,lineStyle:{color:"#0091FF",width:2}}}],series:[{name:"雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},data:[{value:[3300,1e4,28e3,35e3,5e4,19e3],name:"平均",itemStyle:{normal:{color:"#FF6666"}},areaStyle:{normal:{color:"#FF6666"}}},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"我",itemStyle:{normal:{color:"#39A5FE"}},areaStyle:{normal:{color:"#39A5FE"}}}]}]};