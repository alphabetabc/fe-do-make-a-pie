for(var dataname=["疑似在辖数","疑似聚集数","疑似浸出重点地区数","疑似有高风险行为数","新增来辖数"],datamax=[600,600,600,60,600],datavaule=[50,50,584,45,584],indicator=[],i=0;i<dataname.length;i++)indicator.push({name:dataname[i],max:datamax[i]});function contains(r,e){for(var a=r.length;a--;)if(r[a]===e)return a;return!1}option={tooltip:{show:!0,trigger:"item"},radar:{center:["50%","50%"],radius:"65%",splitNumber:5,splitArea:{areaStyle:{color:["rgba(201, 223, 255, 0.15)","rgba(201, 223, 255, 0.95)"].reverse()}},axisLabel:{show:!1},axisLine:{lineStyle:{color:"rgba(148, 166, 195, 1)",width:2}},splitLine:{lineStyle:{color:"rgba(113, 130, 177, 1)",width:1}},name:{formatter:function(r){var e=contains(dataname,r),a=datavaule[e],t="",o=6,n=r.length,c=Math.ceil(n/o);if(c>1){var l="",d=0,s=o;return l=r.substring(d,s)+`
`+r.substring(s,n),t+=l,"{a|"+a+`}
{b|`+t+"}"}else return"{a|"+a+`}
{b|`+r+"}"},textStyle:{rich:{a:{color:"#3663C7",fontSize:28,padding:[0,0,0,0]},b:{color:"#000",fontSize:15,padding:[0,0,0,0]}}}},indicator},series:[{type:"radar",symbol:"circle",symbolSize:6,itemStyle:{borderColor:"rgba(255, 95, 66, 1)",color:"#fff",borderWidth:1},lineStyle:{normal:{color:"rgba(255, 95, 66, 1)"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 149, 0, 0.6)"},{offset:1,color:"rgba(255, 149, 0, 0.65)"}],!1),shadowBlur:12,shadowColor:"rgba(255, 149, 0, 0.5)",shadowOffsetX:6,shadowOffsetY:6}},data:[datavaule]}]};