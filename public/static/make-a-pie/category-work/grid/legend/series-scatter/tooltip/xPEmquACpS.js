for(var getname=["SCI","SSCI","EI","ISTP","AHCI","ISSHP","其他"],getvalue=[1811,868,320,208,190,120,100],getamount=[1.8,1,.65,.52,.33,.25,.11],getorderCount=[65e3,45e3,23e3,1e4,9e3,74e3,52121],getname2=["SCI","SSCI","EI","ISTP","AHCI","ISSHP","其他"],getvalue2=[2811,1568,420,308,290,220,190],getamount2=[2.3,1.2,.95,.82,.73,.35,.18],getorderCount2=[105e3,9e4,49e3,34e3,25e3,2e4,19121],datas=[],i=0;i<getname.length;i++)datas.push({name:getname[i],value:getvalue[i],amount:getamount[i],orderCount:getorderCount[i]});for(var datas2=[],i=0;i<getname2.length;i++)datas2.push({name:getname2[i],value:getvalue2[i],amount:getamount2[i],orderCount:getorderCount2[i]});let packedDatas=packDatas(datas),packedDatas2=packDatas2(datas2);option={grid:{top:60,bottom:40,left:50,right:30},legend:{data:["2010","2020"],type:"scroll",right:"15",top:"10",itemGap:25,itemWidth:14,itemHeight:14,textStyle:{fontSize:"13",color:"#656565"}},tooltip:{extraCssText:"padding-right:8px;padding-left:8px;line-height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;",textStyle:{fontSize:"13",color:"#656565"},formatter:function(t){var e=t.value;return'<div style="padding-bottom: 0px;margin-bottom: 0px">年份：'+t.seriesName+"</div>收录期刊："+e[2]+"<br/>总被引用次数："+e[0]+"<br/>人均发表篇次："+e[1].toFixed(1)+"<br/>发表论文总数："+e[3]+"<br/>"}},xAxis:{splitLine:{show:!1},scale:!0,type:"value",name:"总被引篇次",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,30,-80]},axisLabel:{formatter:function(t){if(num=t,num&&num!="undefined"&&num!="null"){let e=num;return e=e.toString(),e=e.replace(/,/gi,""),e}else return num},color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}},yAxis:{name:"人均发表篇数",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,0,70]},axisLabel:{formatter:function(t){if(num=t,num&&num!="undefined"&&num!="null"){let e=num;return e=e.toString(),e=e.replace(/,/gi,""),e}else return num},color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(209,209,209,.25)"}}},series:[{name:"2010",symbolSize:function(t){return t[1]*50/1.2},itemStyle:{normal:{color:"#9CC8FF",borderColor:"#4B95F3",borderWidth:2}},data:packedDatas,type:"scatter"},{name:"2020",symbolSize:function(t){return t[1]*50/1.2},itemStyle:{normal:{color:"#FFD291",borderColor:"#F3B14B",borderWidth:2}},data:packedDatas2,type:"scatter"}]};function packDatas(t){return t.map(r=>{let a=r.name,n=r.orderCount,o=r.amount,l=r.value;return[n,o,a,l]})}function packDatas2(t){return t.map(r=>{let a=r.name,n=r.orderCount,o=r.amount,l=r.value;return[n,o,a,l]})}