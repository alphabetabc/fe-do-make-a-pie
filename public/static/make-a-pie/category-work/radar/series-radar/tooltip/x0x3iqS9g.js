option={tooltip:{trigger:"axis"},backgroundColor:"#1F262C",radar:{indicator:[{name:"政府监管",max:100,num:60},{name:"公众监督",max:100,num:33},{name:"主体自律",max:100,num:10},{name:"产业经营数据分析",max:100,num:50},{name:"物联网智能分析",max:100,num:100}],splitNumber:4,axisLine:{lineStyle:{color:"#2c353d"}},splitLine:{lineStyle:{color:["#2c353d"],width:2}},splitArea:{areaStyle:{color:["transparent"]}},name:{color:"#fff",formatter:function(n,e){return e.num>10?"{green|"+e.num+`分}
{a|`+n+"}":"{yellow|"+e.num+`分}
{a|`+n+"}"},lineHeight:20,rich:{a:{color:"#7C8892",fontSize:14,align:"center"},yellow:{color:"#FFDC00",fontSize:14,align:"center"},green:{color:"#7FE17D",fontSize:14,align:"center"}}}},series:[{type:"radar",tooltip:{trigger:"item"},symbol:"none",itemStyle:{normal:{color:"#096e32",borderColor:"#46ff91"}},areaStyle:{color:["#096e32"],opacity:.4},data:[{value:[60,33,10,50,100]}]}]};