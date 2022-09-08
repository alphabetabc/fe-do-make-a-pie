let geoCoordMap={郑州:[113.631557,34.75261],开封:[114.341447,34.797049],洛阳:[112.434468,34.663041],平顶山:[113.300848978,33.7453014565],安阳:[114.351806508,36.1102667222],鹤壁:[114.297769838,35.7554258742],新乡:[113.912690161,35.3072575577],焦作:[113.211835885,35.234607555],濮阳:[115.026627441,35.7532978882],漯河:[114.0460614,33.5762786885],三门峡:[111.181262093,34.7833199411],南阳:[112.542841901,33.0114195691],商丘:[115.641885688,34.4385886402],信阳:[114.085490993,32.1285823075],周口:[114.654101942,33.6237408181],许昌:[113.83531246,34.0267395887],驻马店:[114.049153547,32.9831581541],济源:[112.608898,35.074838],省直:[113.759766,34.773383]};var yn=[{name:"省直",value:200},{name:"郑州",value:400},{name:"洛阳",value:200},{name:"开封",value:20},{name:"信阳",value:30},{name:"驻马店",value:212},{name:"南阳",value:456},{name:"周口",value:125},{name:"许昌",value:2085},{name:"平顶山",value:322},{name:"新乡",value:303},{name:"漯河",value:5},{name:"商丘",value:304},{name:"三门峡",value:35},{name:"济源",value:350},{name:"焦作",value:23},{name:"安阳",value:45},{name:"鹤壁",value:35},{name:"濮阳",value:50},{name:"开封",value:24}],gd=[{name:"省直",value:300},{name:"郑州",value:490},{name:"洛阳",value:210},{name:"开封",value:120},{name:"信阳",value:300},{name:"驻马店",value:212},{name:"南阳",value:230},{name:"周口",value:125},{name:"许昌",value:25},{name:"平顶山",value:22},{name:"新乡",value:303},{name:"漯河",value:5},{name:"商丘",value:304},{name:"三门峡",value:35},{name:"济源",value:350},{name:"焦作",value:23},{name:"安阳",value:45},{name:"鹤壁",value:35},{name:"濮阳",value:50},{name:"开封",value:24}],convertData=function(e){for(var l=[],a=0;a<e.length;a++){var n=geoCoordMap[e[a].name];n&&l.push({name:e[a].name,value:n.concat(e[a].value)})}return l};option={title:{text:"测试bar3D、scatter3D、geo3D",x:"left",top:"10",textStyle:{color:"#000",fontSize:14}},legend:{show:!0,data:["系列1","系列2"]},tooltip:{show:!0,formatter:e=>{let l=e.name+"<br/>"+e.seriesName+"："+e.value[2];debugger;return l}},geo3D:{map:"henan",roam:!0,boxHeight:16,boxDepth:95,regionHeight:4,itemStyle:{areaColor:"#1d5e98",opacity:1,borderWidth:.6,borderColor:"yellow"},label:{show:!0,textStyle:{color:"#00ffff",fontSize:14,opacity:1,backgroundColor:"rgba(0,23,11,0.6)"}},emphasis:{label:{show:!1,textStyle:{color:"#FFF",fontSize:14,backgroundColor:"rgba(0,23,11,0)"}}},light:{main:{color:"#00ffff",intensity:1.2,shadow:!1,alpha:55,beta:10},ambient:{intensity:.5}},viewControl:{damping:.8,distance:110,alpha:55,beta:0,center:[0,0,0],animation:!0}},series:[{name:"系列1",type:"bar3D",coordinateSystem:"geo3D",minHeight:3,stack:"one",barSize:2,opacity:1,bevelSize:.3,itemStyle:{color:"blue"},label:{show:!1,formatter:"{b}"},emphasis:{label:{show:!1}},data:convertData(yn)},{name:"系列2",type:"bar3D",coordinateSystem:"geo3D",minHeight:3,stack:"one",barSize:2,opacity:1,bevelSize:.3,itemStyle:{color:"red"},label:{show:!1,formatter:"{c}"},emphasis:{label:{show:!1}},data:convertData(gd)}]};