var xAxis=["机器A","机器B","机器C","机器D"],minHour=0,maxHour=24,hourData=[[[3,10]],[[6,8],[11,13],[20,24]],[[10,15]],[[5,10]]],maxColumn=0;for(var i in hourData){var array=hourData[i],addCount=0;for(var j in array)if(j==0&&array[j][0]>minHour)array.unshift([0,array[j][0]-minHour,-1]),addCount++;else if(j>0){var newJ=parseInt(j)+addCount,currentStart=array[newJ][0],currentEnd=array[newJ][1],beforeEnd=array[newJ-1][1];beforeEnd!=currentStart&&(array.splice(newJ,0,[beforeEnd,currentStart,-1]),addCount++)}maxColumn<array.length&&(maxColumn=array.length)}for(var seriesArray=[],seriesBlank=[],i=0;i<maxColumn;i++){var arrayTemp=[],arrayBlankTemp=[];for(var j in hourData){var array=hourData[j][i];if(array){var s=hourData[j][i][0],e=hourData[j][i][1];arrayTemp.push(e-s),!!hourData[j][i][2]&&hourData[j][i][2]==-1?arrayBlankTemp.push("透明"):arrayBlankTemp.push("非透明")}else arrayTemp.push(0),arrayBlankTemp.push("透明")}seriesArray.push(arrayTemp),seriesBlank.push(arrayBlankTemp)}var series=[];for(var i in seriesArray)series.push({name:"DownTime",type:"bar",stack:"DownTime",data:seriesArray[i],barWidth:5,color:function(t){var r=seriesBlank[t.seriesIndex][t.dataIndex];return!!r&&r=="透明"?"rgba(128, 128, 128, 0)":"#EB4742"}});option={title:{text:"DownTime",textStyle:{color:"#707070",fontSize:"12",fontWeight:"normal"}},grid:{top:"30",left:"0",right:"0",bottom:"0",containLabel:!0},xAxis:[{type:"category",data:xAxis}],yAxis:[{type:"value",min:minHour,max:maxHour}],series};
