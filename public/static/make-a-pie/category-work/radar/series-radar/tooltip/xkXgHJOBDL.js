for(var dataname=["海外毕业教师","海外进修教师","外教教师"],datamax=[30,30,30],datavaule=[24,28,24],indicator=[],i=0;i<dataname.length;i++)indicator.push({name:dataname[i],max:datamax[i]});function contains(r,e){for(var a=r.length;a--;)if(r[a]===e)return a;return!1}option={backgroundColor:"#0A0933",tooltip:{show:!1,trigger:"item"},radar:{center:["50%","50%"],radius:"65%",splitNumber:5,splitArea:{areaStyle:{color:["rgba(0,96,208, 0.1)","rgba(0,96,208, 0.2)","rgba(0,96,208, 0.3)","rgba(0,96,208, 0.4)","rgba(0,96,208, 0.5)","rgba(0,96,208, 0.6)"].reverse()}},axisLabel:{show:!1},axisLine:{show:!0,lineStyle:{color:"transparent"}},splitLine:{show:!0,lineStyle:{color:"transparent"}},name:{formatter:function(r){var e=contains(dataname,r),a=datavaule[e],t="",n=6,o=r.length,g=Math.ceil(o/n);if(g>1){var l="",c=0,s=n;return l=r.substring(c,s)+`
`+r.substring(s,o),t+=l,"{a|"+a+`}
{b|`+t+"}"}else return"{a|"+a+`}
{b|`+r+"}"},textStyle:{rich:{a:{color:"#FFFFFF",fontSize:12,padding:[0,0,10,0],lineHeight:30},b:{color:"#CAEEFF",fontSize:12,padding:[0,0,10,0],lineHeight:0}}}},indicator},series:[{type:"radar",symbol:"circle",symbolSize:7,areaStyle:{normal:{color:"rgba(0,96,208, 0.6)"}},itemStyle:{color:"#84E1FF",borderColor:"#00A7FE",borderWidth:1},lineStyle:{normal:{color:"#00A7FE",width:2}},data:[datavaule]}]};