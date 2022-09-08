var color="#189cbb",scale=1,attackFlaw=[{text:`172.16.6.15
2038`,max:1e4},{text:`219.16.50.195
2844`,max:1e4},{text:`172.16.50.1
3045`,max:1e4},{text:`219.130.221.163
8080`,max:2e4},{text:`219.130.221.107
16143`,max:2e4}],weekDatas=[{text:`信息攻击
734`,max:22e3},{text:`目录攻击
1345`,max:2e4},{text:`WEBSHELL
2266`,max:1e4},{text:`web漏洞
1295`,max:1e4},{text:`web系统
542`,max:1e4}],student=[2038,2844,3045,8080,16143],flaw=[20734,13145,2266,1295,542];option={backgroundColor:"#013954",radar:[{indicator:attackFlaw,center:["25%","55%"],radius:"32%",nameGap:5,name:{formatter:function(e,a){let t=e.substring(0,e.indexOf(`
`)),r=e.substring(e.indexOf(`
`)+1,e.length);return"{yellow|"+t+`
}{white| `+r+"}"},rich:{yellow:{color:"#ddff8f",fontSize:16,padding:[6,0,0,0]},white:{color:"#fff",fontSize:16}}},splitLine:{lineStyle:{color:"#5b9ea5",opacity:1,width:1}},splitArea:{show:!0,areaStyle:{color:"rgb(19,98,137)",opacity:.4}},axisLine:{show:!0,lineStyle:{color:"#189cbb",type:"dashed"}}},{indicator:weekDatas,center:["75%","55%"],radius:"32%",name:{formatter:function(e,a){let t=e.substring(0,e.indexOf(`
`)),r=e.substring(e.indexOf(`
`)+1,e.length);return"{yellow|"+t+`
}{white| `+r+"}"},rich:{yellow:{color:"#23dcd7",fontSize:16,padding:[6,0,0,0]},white:{color:"#fff",fontSize:16}}},nameGap:5,splitLine:{lineStyle:{color:"#5b9ea5",opacity:1,width:1}},splitArea:{show:!0,areaStyle:{color:"rgb(19,98,137)",opacity:.4}},axisLine:{show:!0,lineStyle:{color:"#189cbb",type:"dashed"}}}],grid:{containLabel:!0,left:"2%",top:"12%"},series:[{type:"radar",data:[{value:student,name:"考生数量对比"}],symbolSize:3,itemStyle:{normal:{borderColor:"rgb(221,255,143)",opacity:.5,borderWidth:2}},lineStyle:{normal:{color:"#ffde00",width:1}},areaStyle:{normal:{color:"#b2ff00",opacity:.9}}},{type:"radar",data:[{value:flaw}],radarIndex:1,symbolSize:3,itemStyle:{normal:{borderColor:"#23dcd7",borderWidth:2}},lineStyle:{normal:{color:"#23dcd7",width:2}},areaStyle:{normal:{color:"#00fff8",opacity:.9}}}]};
