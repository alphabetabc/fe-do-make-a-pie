var data=[{name:"新一代天气雷达",value:5240},{name:"风廓线雷达",value:4856},{name:"地面气象观测",value:5374},{name:"高空气象观测",value:8721},{name:"自动土壤水分",value:4713},{name:"雷电监测",value:2546},{name:"GNSS/MET",value:2546},{name:"大气成分",value:2546}],sums=0,seed=1e3,seed2=100,nameset=[],datause=[];function randomSeed(e,a){return parseInt(Math.random()*e)+a}data.forEach(e=>{var a=randomSeed(seed,seed2);datause.push({name:e.name,value:e.value}),datause.push({value:a,itemStyle:{normal:{opacity:0,color:"rgba(0,0,0,0)"}}}),nameset.push(e.name),sums+=a,sums+=e.value}),datause.push({value:sums,itemStyle:{normal:{opacity:0,color:"rgba(0,0,0,0)"}}}),option={grid:{top:"10%"},legend:{data:nameset,padding:[0,40,0,40],bottom:20,icon:"circle"},tooltip:{trigger:"item"},series:[{type:"pie",selectedMode:!1,hoverAnimation:!1,radius:[0,"90%"],z:99,startAngle:180,itemStyle:{normal:{opacity:.9,borderWidth:1,borderColor:"rgba(0,0,0,0.2)"}},label:{normal:{show:!1,position:"inner",formatter:"{d}%",textStyle:{color:"#fff",fontWeight:"normal"}}},labelLine:{normal:{show:!1}},data:datause},{type:"pie",startAngle:180,selectedMode:!1,hoverAnimation:!1,radius:["90%"-1,"90%"],data:[{value:5,itemStyle:{normal:{color:"transparent",borderColor:"rgba(6,187,192,1)"}}},{value:5,itemStyle:{normal:{color:"transparent"}}}],labelLine:{normal:{show:!1}}},{type:"pie",startAngle:180,selectedMode:!1,hoverAnimation:!1,radius:["75%"-1,"75%"],labelLine:{normal:{show:!1}},data:[{value:5,itemStyle:{normal:{color:"transparent",borderColor:"rgba(6,187,192,.7)"}}},{value:5,itemStyle:{normal:{color:"transparent"}}}]},{type:"pie",startAngle:180,selectedMode:!1,hoverAnimation:!1,radius:["50%"-1,"50%"],data:[{value:5,itemStyle:{normal:{color:"transparent",borderColor:"rgba(6,187,192,.5)"}}},{value:5,itemStyle:{normal:{color:"transparent"}}}],labelLine:{normal:{show:!1}}},{type:"pie",startAngle:180,selectedMode:!1,hoverAnimation:!1,radius:["30%"-1,"30%"],data:[{value:5,itemStyle:{normal:{color:"transparent",borderColor:"rgba(6,187,192,.3)"}}},{value:5,itemStyle:{normal:{color:"transparent"}}}],labelLine:{normal:{color:"black"}}}]};