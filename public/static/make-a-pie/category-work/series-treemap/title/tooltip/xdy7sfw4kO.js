var testData=[{value:9422,children:[{name:"公众聚集场所",value:40},{name:"学校、医院、养老院、疗养院、托儿所、幼儿园",value:20},{name:"国家机关",value:10},{name:"广播、电视和邮政、通信枢纽",value:10},{name:"公共图书馆、展览馆、博物馆、档案馆以及具有火灾危险性的文物保护单位",value:80},{name:"易燃易爆化学物品的生产、充装、存储、供应、销售单位",value:10},{name:"劳动密集型生产、加工企业",value:10},{name:"广播、电视和邮政、通信枢纽",value:10},{name:"重要科研单位",value:45}]}],color=["#6F3FE1","#5781FD","#4DB1CB","#3EBD7C","#F7A925","#bda29a","#ca8622","#749f83","#6e7074","#546570","#c4ccd3"],bsLine=[],bsLineV={};for(var key in testData)bsLine.push(testData[key].name),bsLineV[testData[key].name]=testData[key].value;var sbsLineV=Object.keys(bsLineV).sort(function(e,r){return-(bsLineV[e]-bsLineV[r])});function colorMappingChange(e){var r=getLevelOption(e);chart.setOption({series:[{levels:r}]})}var formatUtil=echarts.format;function getLevelOption(){return[{color,itemStyle:{normal:{borderWidth:0,borderColor:"#fff",gapWidth:2}}},{colorAlpha:[1,.5],upperLabel:{normal:{color:"#555555",show:!0,height:30}},itemStyle:{normal:{borderWidth:5,borderColor:"#EFEFEF",gapWidth:1},emphasis:{borderColor:"#ccc"}}}]}option={title:{text:"数据分布"},tooltip:{trigger:"item",formatter:"{b} : {c}"},series:[{name:"",type:"treemap",visibleMin:300,breadcrumb:{show:!1},label:{show:!0,formatter:"{b}"},itemStyle:{normal:{borderColor:"#fff"}},levels:getLevelOption(),data:testData}]},myChart.setOption(option,!0),myChart.on("click",function(e){console.log(e);debugger;var r=e.name;bsLine.indexOf(r)<0&&myChart.setOption(option,!0)});