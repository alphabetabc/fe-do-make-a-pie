datasetSource=[["product","2015","2016","2017","2018"],["Matcha Latte",43.3,85.8,93.7,54.2],["Milk Tea",83.1,73.4,55.1,65.3],["Cheese Cocoa",86.4,65.2,82.5,87.1],["Walnut Brownie",72.4,53.9,39.1,33.6]];function arrFilter(source,hasColumnName,filterCondition){var iBegin=hasColumnName?1:0,res=hasColumnName?[source[0]]:[];if(typeof filterCondition=="function")for(var i=iBegin;i<source.length;i++)filterCondition(source[i])&&res.push(source[i]);else if(typeof filterCondition=="string")for(var j=iBegin;j<source.length;j++){var item=source[j];eval(filterCondition)&&res.push(source[j])}return res}option={legend:[{selectedMode:"multipe",data:function(){var e=[].concat(datasetSource[0]);return e.shift(),e}()},{y:20,data:["Matcha Latte/Milk Tea","Cheese Cocoa/Walnut Brownie"]}],tooltip:{},dataset:{source:datasetSource},xAxis:{type:"category"},yAxis:{},series:function(){for(var e=[],t=1;t<datasetSource[0].length;t++)e.push({type:"bar"});return e=e.concat([{type:"line",name:"Matcha Latte/Milk Tea",data:[]},{type:"line",name:"Cheese Cocoa/Walnut Brownie",data:[]}]),e}()},myChart.on("legendselectchanged",function(e){var t;e.selected["Cheese Cocoa/Walnut Brownie"]===!0&&e.selected["Matcha Latte/Milk Tea"]===!0?datsetSourceNew=[].concat(datasetSource):e.selected["Matcha Latte/Milk Tea"]===!1&&e.selected["Cheese Cocoa/Walnut Brownie"]===!1?datsetSourceNew=[].concat([datasetSource[0]]):e.selected["Matcha Latte/Milk Tea"]===!0&&e.selected["Cheese Cocoa/Walnut Brownie"]===!1?datsetSourceNew=arrFilter(datasetSource,!0,'item[0] === "Matcha Latte" || item[0] === "Milk Tea"'):e.selected["Cheese Cocoa/Walnut Brownie"]===!0&&e.selected["Matcha Latte/Milk Tea"]===!1&&(datsetSourceNew=arrFilter(datasetSource,!0,'item[0] === "Cheese Cocoa" || item[0] === "Walnut Brownie"')),myChart.setOption({dataset:{source:datsetSourceNew}})});
