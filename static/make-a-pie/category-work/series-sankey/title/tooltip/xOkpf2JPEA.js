var population=[{source:"原煤",target:"农林牧渔业",value:712359.3},{source:"原煤",target:"建筑业",value:12500.2},{source:"原煤",target:"工业合计",value:50241.4},{source:"原煤",target:"交通运输储运业和邮政业",value:42212.9},{source:"原煤",target:"批发零售业和住宿餐饮业 ",value:180555.06},{source:"原煤",target:"其他行业",value:8560.2},{source:"原煤",target:"城乡居民生活",value:14031.95},{source:"煤制品",target:"农林牧渔业",value:618180.6},{source:"煤制品",target:"建筑业",value:436696.23},{source:"煤制品",target:"工业合计",value:213535},{source:"煤制品",target:"批发零售业和住宿餐饮业 ",value:18562274e-1},{source:"焦炭",target:"农林牧渔业",value:8950},{source:"焦炭",target:"建筑业",value:177577.6},{source:"焦炭",target:"批发零售业和住宿餐饮业 ",value:523499},{source:"焦炭",target:"其他行业",value:110113},{source:"焦炉煤气",target:"农林牧渔业",value:145857},{source:"焦炉煤气",target:"建筑业",value:413287.5},{source:"焦炉煤气",target:"住宅用地",value:73910.8},{source:"焦炉煤气",target:"批发零售业和住宿餐饮业 ",value:442695},{source:"焦炉煤气",target:"其他行业",value:2764.4},{source:"原油",target:"农林牧渔业",value:134172},{source:"原油",target:"建筑业",value:294527},{source:"原油",target:"住宅用地",value:6851},{source:"原油",target:"工业合计",value:121422},{source:"原油",target:"批发零售业和住宿餐饮业 ",value:989856.58},{source:"原油",target:"其他行业",value:9134},{source:"汽油",target:"农林牧渔业",value:33732.97},{source:"汽油",target:"建筑业",value:65556.41},{source:"汽油",target:"住宅用地",value:295348.5},{source:"汽油",target:"商业用地",value:7391.31},{source:"汽油",target:"批发零售业和住宿餐饮业 ",value:549721.16},{source:"液化实燃油",target:"农林牧渔业",value:146022.81},{source:"液化实燃油",target:"住宅用地",value:146422.47},{source:"液化实燃油",target:"商业用地",value:49587.21},{source:"液化实燃油",target:"交通运输储运业和邮政业",value:36218.96},{source:"液化实燃油",target:"批发零售业和住宿餐饮业 ",value:267393.02},{source:"液化实燃油",target:"其他行业",value:4131.95},{source:"天然气",target:"农林牧渔业",value:146022.81},{source:"天然气",target:"住宅用地",value:146422.47},{source:"天然气",target:"商业用地",value:49587.21},{source:"天然气",target:"交通运输储运业和邮政业",value:36218.96},{source:"天然气",target:"批发零售业和住宿餐饮业 ",value:267393.02},{source:"天然气",target:"其他行业",value:4131.95},{source:"天然气",target:"城乡居民生活",value:54031.95}],city={原煤:"#e9bae8",煤制品:"#3dc5e7",焦炭:"#2aa12d",焦炉煤气:"#e88886",原油:"#feda66",汽油:"#c92123",液化实燃油:"#8bc77b",天然气:"#61d3ff",农林牧渔业:"#fb7f10",建筑业:"#e492d0",住宅用地:"#2aa12d",商业用地:"#fb7f10",工业合计:"#98c0fd",交通运输储运业和邮政业:"#4393c3","批发零售业和住宿餐饮业 ":"#2166ac",其他行业:"#f97494",城乡居民生活:"#8ca4ff"},citylist=[];for(var key in city)citylist.push({name:key,itemStyle:{normal:{color:city[key]}}});console.log(citylist);for(var data=[],i=0;i<population.length;i++){var color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:city[population[i].source]},{offset:1,color:city[population[i].target]}]);data.push({source:population[i].source,target:population[i].target,value:population[i].value,lineStyle:{normal:{color}}})}var option={tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"sankey",data:citylist,links:data,focusNodeAdjacency:"allEdges",itemStyle:{borderWidth:0,borderColor:"#fff"},lineStyle:{color:"source",curveness:.5}}]};
