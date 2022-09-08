const _legendList=["启动会","题目一","题目二","题目三","题目四","答辩准备"],_map={"2020-07-09":[1.5,_legendList[0]],"2020-07-11":[1,_legendList[0]],"2020-07-20":[1,_legendList[1]],"2020-07-23":[1,_legendList[1]],"2020-07-26":[1,_legendList[4]],"2020-07-27":[1.5,_legendList[4]],"2020-07-29":[2,_legendList[4]],"2020-08-16":[2,_legendList[1]],"2020-09-01":[1.5,_legendList[2]],"2020-09-05":[2,_legendList[2]],"2020-09-09":[1,_legendList[3]],"2020-09-12":[1,_legendList[5]],"2020-09-13":[1.5,_legendList[5]]},_legend=[{text:_legendList[0],color:"#2cdfff"},{text:_legendList[1],color:"#f4e925"},{text:_legendList[2],color:"#aa4fff"},{text:_legendList[3],color:"#00ffea"},{text:_legendList[4],color:"#719df4"},{text:_legendList[5],color:"#ff680e"}];function getVirtulData(e){e=e||"2020";for(var t=+echarts.number.parseDate(e+"-07-01"),r=+echarts.number.parseDate(+e+"-10-01"),f=3600*24*1e3,l=[],o=t;o<r;o+=f){const a=echarts.format.formatTime("yyyy-MM-dd",o);l.push([echarts.format.formatTime("yyyy-MM-dd",o),_map[a]?_map[a][0]*600:0,_map[a]?_map[a][1]:""])}return l}var data=getVirtulData(2020).sort(function(e,t){return t[1]-e[1]}).slice(0,13);console.log(data);const cellSize=50;function getSeries(){const e=[];return _legend.forEach(t=>{e.push({name:t.text,type:"effectScatter",coordinateSystem:"calendar",label:{normal:{show:!0,formatter:function(r){return echarts.format.formatTime("dd",r.value[0])},offset:[-10,-15],textStyle:{color:"#fff",fontSize:14}}},data,symbolSize:function(r){if(r[2]===t.text)return r[1]/50},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{color:t.color,shadowBlur:10,shadowColor:"#333"},zlevel:1})}),e}option={backgroundColor:"#404a59",title:{top:30,text:"",subtext:"",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},legend:{top:"0",left:"100",data:_legendList,textStyle:{color:"#fff"}},calendar:[{top:100,orient:"vertical",cellSize:50,left:"center",range:["2020-07-01","2020-09-30"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{margin:400},dayLabel:{firstDay:1,nameMap:["周日","周一","周二","周三","周四","周五","周六"],color:"#fff"},monthLabel:{nameMap:"cn",margin:20,color:"#fff"},itemStyle:{color:"#323c48",borderWidth:1,borderColor:"#111"}}],series:getSeries()};