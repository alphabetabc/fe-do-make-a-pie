var colorList=["#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac"];let unit="万吨",datas={power:1e3,per:9},arrow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAYAAACX8hZLAAAAAXNSR0IArs4c6QAAARdJREFUOBGtj71KA1EQhbOCsbESCwuLQMDnsEqdztJeEAwmGPWJkibxB59ECwUloFY+Q1i/A/fIZHPdNDvwMXdmzszZbbUaiLIsD+ADqvFJo7vVgIdO7ENHj0ocUh83YlIUxTPHutCDN4hR1Jrwq0dRveH9xfwMvLO0PmvC8TbcI3olz2DbC7mc5lNm/TS/JS/Sez2xIIMHiDGnyBqpD/oQx42uUrykxumKC82qwZM3yXewYqQa9AGOax+kcQIT2HNPzjJ4BMdQQ4qxG2QZtVP/X4O/o/GhRVgzsIbZFThktAvKjrG12YxqB6LBZU6IJhr9+Dq53kDHEI3CQtbApuiikdY2GySTHuJ3OPexuozuAr5hUKeLs19NkHscz9kT1QAAAABJRU5ErkJggg==";option={backgroundColor:"#fff",tooltip:{formatter:function(f){return f.data.type==null?f.data.name+":"+f.value+"个":f.data.type+":"+f.value+"个"}},series:[{name:"",type:"pie",radius:[0,"30%"],tooltip:{show:!1},label:{position:"inner",formatter:function(f){return`{a|中间的字
自行替换}
{b|${datas.power}}
{c|这是单位}
{icon|}{d|${datas.per}%}
{box|}`},rich:{a:{fontSize:14,color:"#fff",lineHeight:20,padding:[0,0,-40,0]},b:{fontSize:24,color:"#fff",fontWeight:500,lineHeight:50},c:{fontSize:16,color:"#fff"},d:{fontSize:24,color:"#fff",fontWeight:500,lineHeight:50,padding:[0,0,0,10]},icon:{backgroundColor:{image:arrow}},box:{height:50}}},itemStyle:{normal:{color:"rgba(1, 114, 228,1)"}},data:[{value:100}]},{name:"",type:"pie",radius:["32%","55%"],itemStyle:{normal:{borderColor:"#fff",borderWidth:6,color:"rgba(145, 198, 252,0.8)"}},label:{normal:{show:!0,position:"inner",formatter:function(f){return f.value!=0?`{a|${f.data.name}} 
{b|${f.value}} 
{c|${unit}}`:""},lineHeight:25,rich:{a:{fontSize:18,color:"#fff"},b:{fontSize:22,color:"#003A76",fontWeight:600},c:{fontSize:18,color:"#003A76"}}}},labelLine:{show:!1},data:[{value:135,name:"A"},{value:200,name:"B"},{value:200,name:"C"},{value:150,name:"D"},{value:300,name:"E"}]}]};