let series=[],pieDatas=[{value:100,name:"系列一"},{value:76,name:"系列二"},{value:66,name:"系列三"},{value:54,name:"系列四"},{value:43,name:"系列五"},{value:32,name:"系列六"},{value:28,name:"系列7"},{value:20,name:"系列8"},{value:16,name:"系列9"}],maxRadius=90,barWidth=5,barGap=5,sumValue=0,showValue=!0,showPercent=!0;pieDatas.map(l=>{sumValue+=l.value});let barColor=[{color1:"rgba(222, 125, 255, 1)",color2:""},{color1:"rgba(250, 118, 121, 1)",color2:""},{color1:"rgba(53, 198, 215, 1)",color2:""},{color1:"rgba(101, 223, 138, 1)",color2:""},{color1:"rgba(253, 161, 79, 1)",color2:""},{color1:"rgba(68,165,255,1)",color2:""},{color1:"rgba(68,165,24,1)",color2:""},{color1:"rgba(68,245,255,1)",color2:""},{color1:"rgba(13,165,225,1)",color2:""}];pieDatas.map((l,e)=>{series.push({type:"pie",clockWise:!1,hoverAnimation:!1,radius:[maxRadius-e*(barGap+barWidth)+"%",maxRadius-(e+1)*barWidth-e*barGap+"%"],center:["50%","50%"],label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:l.value,name:l.name,itemStyle:{color:barColor[e]&&barColor[e].color1||"rgba(68,165,255,1)"}},{value:sumValue-l.value,name:"",itemStyle:{color:"transparent"},tooltip:{show:!1},hoverAnimation:!1}]}),series.push({name:"blank",type:"pie",silent:!0,z:0,clockWise:!1,hoverAnimation:!1,radius:[maxRadius-e*(barGap+barWidth)+"%",maxRadius-(e+1)*barWidth-e*barGap+"%"],center:["50%","50%"],label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:1,itemStyle:{color:"rgba(255, 255, 255,.13)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]})}),option={grid:{left:0,right:0,top:0,bottom:0},backgroundColor:"transparent",tooltip:{show:!0,trigger:"item"},legend:{show:!1,left:"60%",top:"middle",icon:"circle",itemWidth:10,itemHeight:10,itemGap:20,textStyle:{fontSize:16,color:"#fff"},formatter:l=>{var e=pieDatas;let o=0;e.map(a=>{o+=a.value-0});let r=e.map(a=>a.name).indexOf(l);return l+"  "+(showValue?e[r].value+(option.legendValueUnit||"")+" ":"")+(showPercent?(e[r].value/o*100).toFixed(2)+"%":"")}},series};