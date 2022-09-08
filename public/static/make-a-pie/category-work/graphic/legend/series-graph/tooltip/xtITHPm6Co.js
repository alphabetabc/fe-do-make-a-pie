const symbol1="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABGFJREFUeF7tmkuojVEUgL8dGWBk4lUeRcoduVfKq0h5RilEGBiICQNKmGCChAETMlGIUIripjzK5ZY8RkSUR3lNlAED0da6Z/869/ef+++1/30e7jm77uSevdbe69tr773+vZahyZtpcvtpAWh5QJMTaG2BJneA1iFYty1gYTgw2nngBwNf6uGNNQFgYQKwAljmjBbDB6QM/g18cH9XgcsGXlcbStUAWBjpjF4MLAw0pBO47mB8CtTRp1h0AM7wTcBGYFSkSX8ETgEnDUQFEQ2AhcHAjsiGp/klIA4Z+BEDbhQAFqYAJ4BpMSbloeMhsNnAU4++1d0CFlYD54tOJFB+jYELgbI9YoU8wMJeYE+RCUSQ3WdK8whqwQAsTAceBI0aX2iGge4QtUEALIwD3oQMWEWZ8QbeavWrAVgYBFwD5msHq3L/m8BSAz8144QAaIR9X8lG9XmgAuCCnEcRAxzNYvn0lThhqiZY0gJo5NVPAKm8wBvAf7D6CQCVF2gAbAOO+Phhqs8q4BtwFGjzlH8GyHhyoEmcMcdTLum23ZTGy20aAPeAWbkae3eYa+Cu/MvCJOAc0JGj4zGw1sBLJyfG31GO22Vgto+MFwALkwFZFW1bYECup57m4oezwMwKiu4D68rvc1sCJgevtrUZeJ4n5Asg9PATaKvKJ+LOkjPAvNTkbgHr0ye4hYvAyjxDMn73Ogx9AUjIK6FvSMuCMAwQCPJYIk0ePcT4r+UDFDBe1HQbmJE3YV8A74Axecr6+D0LwhAHQcTE+O8RjRdV7w2MzZuzL4BfGW94ebrTv2dBGCidDIj+v63gyid6fhvo0d9XywXgXm8/5yny/P0fCGm5SMYnakfkvTb7AGgH5GqK1SpCiGy8zLfDwJOiHtD0ACSB0bxbQNzHlg6pdCJDuyUyXd/CwIY+BB2A6Neg0ytBjpzUDX8NRg2EyoxPIrwbLgRu2EBoJ3BA6/Pu+6FXKJxhfKL2toPQK/NT4GbYZeBg3pxzr0E3YUluvspTlvH7BgOnFUGOeJp8Cf593LSlT2Ht16AMOdEnueoFwEEQN9UmOWX1LyUAPFdT7m2B8MKNG/I12Glgkc+CaQBsAY75KE31mQsMlVQWsMRTXm6Mw5Q8IeRBZKuB4z5jaQBIuruRH0QTe6vzJObcMfRdwGcxYvXxegdIBvP2AAeg0b1AtfpikwrAf+AFqtUPBSCFEHIt1aoWwHdrSM2APMKqCifUHuC8QAoi+vzM9J11xH7tIQUTQQAchHoWRqS5BRdKBANooPNAve/L6RUC4CDUs1AiuDAi6BqstF9dwuNkDWsGJNmyKaQgIm1DYQ8oi/OlcGJ3jcrk9msLISotXjQAZSAkWGq+Qsk0YZcCWwMsD0iqJuq6gCtShqcpetBcrdE9IGtwl1yVNLnUFUmhdF6xtOzxiz7JTY2xWX1rAqAClOYply+6StWUr5sHVNMoje4WAA2t/ti35QH9cVU1NrU8QEOrP/b9AypRG1BNp5A8AAAAAElFTkSuQmCC",symbol2="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA+hJREFUeF7tWj1MFEEU/gatLDQY1GggGlutvEXjX+UPFloZMaImorKXaKOFUhmOUhptNLkFzBmMKCYWaIgUJsZg0LBrYvwp5ZATjHAabC7R6Jhd3eNYT2Zm7y0c2b3minnve+99897Mm9lhCPmPhTx+RAREGRByBqISCHkCRItgVAJzVgIv4ltRwevAeDVQUQ3Y/6j5a38UYBngVwacZcDQC814ORe+BZsBpt4A8D0A2w3ADljllwZYHxieIpa8q6KoIhsMAVZcB4cO8JiKM/+XZRYYDMSSBg3eNAotAeSBe8OlJ4KOgCH9MhguUs9QUTyGG4gZpyhs0RBg6V3gOEbhkDwGfwatfYe8fHHJ0gmw9DQ41pbqiE/9SWjGCp+6jlppBJj6BICqUhwoWZdhBDFjnV8c/wSYTQMA2+7XMKkewy3EjON+MP0RYOmd4Djpx2BgOhxtqDWaVfHVCXC2Op5UNTQn8ozFVXsFdQLMuEnX4FDTwixoSU0FVY2Acp59N2rFLFAjoKxnP8+AUhbIE2DFD4PzOyrpNY+yR6EZt2XsyxNgxq8B/IwMKLXMkeWbUbloCfqmXiP9PSsBz1PQ2hslBBUaIVMfBuC74ZBxpphMYs0BtKze7wylsoNoTKdkoDLQDPeuYVZ5uQww9U0ALBnLlDKFwdu4reMPkRh7IGfiJ9uGLclBkbAcAUN6AgwtIjDKcW/w975aqH+vcB3A0YpaIyHySY4As6kDYNLHT7tmX+VG8S43LrJfdLzk4B1U3gmt/bTIAUkC4o8AXicCs8ev1NTj3MpdjmjDcAe6vwzJqOVlaIK34Vg/tOQ+kXFJAvQ3ADaIwOzxC6v2oq36YF70RDqFm1lhKTrydME7cG+hGRtFPssSMAVgqQjMHe9Zr+NQ5fR1YNNIFzomB2ZVJw7etvUNmrFM5HMgBNhGvSSc/dCN6xNPAqz5f6BJCZAugUI3vCScH+3B1c+PZ3gawMy7+JQlIL8IeufBS0Lzx/to+9QfRM17TJMugmrboIiES2O9WMwq8h2eLa+8z4uKm3QbJGiEvJlQ6D998HYbQNoI0bTCxUgIJHibXdJW2AYkOgwVkhBY8ADxYcghgO44rFftRI7/QFf2ubCS/QkEcRwO/YXInywo4wtRN1fULkblOkEXO/SXomWfBWqzb4ejlgG2RjlngeKVuD8CHBLC/GnMXQ9C/XE0T0KYP4/nd4YwP5CYJiHET2RcEkL9SGpGo0T5PtB7EijnZ3KFvpK/F6QPPN84+zttSWqF9qlsMX5C+VhaMlHmU0z9LDCf3gZgOyIgAFIXFGSUAQtqugJwNsqAAEhdUJChz4Df9pWPUAdijpgAAAAASUVORK5CYII=";var data=[{name:"1",value:{serviceId:"crux-gateway",type:0,category:0,url:"/crux-appmodule/api/appmodule"},x:0,y:100,draggable:!0,fixed:!0,symbol:symbol2},{name:"2",value:{serviceId:"crux-gateway1",type:1,category:1,url:"/crux-appmodule/api/appmodule"},x:100,y:100,category:1,draggable:!0,fixed:!0,symbol:symbol1},{name:"3",value:{serviceId:"crux-gateway2",type:1,category:1,url:"/crux-appmodule/api/appmodule/2"},x:200,y:100,category:1,draggable:!0,fixed:!0,symbol:symbol1},{name:"4",value:{serviceId:"crux-gateway",type:0,category:0,url:"/crux-appmodule/api/appmodule"},x:300,y:0,draggable:!0,fixed:!0,symbol:symbol2},{name:"5",value:{serviceId:"crux-gateway1",type:1,category:1,url:"/crux-appmodule/api/appmodule"},x:300,y:100,category:1,draggable:!0,fixed:!0,symbol:symbol1},{name:"6",value:{serviceId:"crux-gateway2",type:1,category:1,url:"/crux-appmodule/api/appmodule/2"},x:300,y:200,category:1,draggable:!0,fixed:!0,symbol:symbol1}];const positions={};var zoomStart=!1,zoomInfo={zoom:1,dx:0,dy:0};const tooltip={trigger:"item",textStyle:{fontSize:"100%"},formatter:e=>`
                <div>
                    <div>serviceId：${e.value.serviceId}</div>
                    <div>url：${e.value.url}</div>
                </div>
            `},legend={show:!0,itemWidth:20,itemHeight:20,data:[{name:"成功",icon:symbol2},{name:"失败",icon:symbol1}]},series={type:"graph",roam:!0,nodeScaleRatio:0,scaleLimit:{min:.5,max:3},symbolSize:40,categories:[{name:"成功"},{name:"失败"}],label:{show:!0,position:[-20,40],align:"center",textStyle:{fontSize:12,color:"#fff"},borderRadius:[0,0,5,5],curveness:!0,formatter:e=>`{label${e.value.type}|serviceId：}{value|${e.value.serviceId}}
{label${e.value.type}|url：}{value|${e.value.url}}`,rich:{label0:{backgroundColor:"#00cc66",color:"#fff",width:60,height:30,padding:[0,5,0,10],align:"left"},label1:{backgroundColor:"#ff0000",color:"#fff",width:60,height:30,padding:[0,5,0,10],align:"left"},value:{color:"#888",align:"center",lineHeight:17,height:30,borderColor:"#eee",borderWidth:1,padding:[0,5,0,5]}}},labelLayout:function(e){return positions[e.dataIndex]=e.rect,{moveOverlap:!0,hideOverlap:!0}},edgeSymbol:["none","arrow"],edgeSymbolSize:[4,8],data,links:[{source:0,target:1,value:"",ignoreForceLayout:!0},{source:1,target:2,value:""},{source:2,target:3,value:""},{source:2,target:4,value:""},{source:2,target:5,value:""}],lineStyle:{opacity:.9,width:2,color:"#333"}};option={tooltip,series,legend};function getGraphicInfo(e){return Object.keys(e).map(function(t){var o=e[t],a=myChart.getModel().getSeriesByIndex(0).coordinateSystem,i=a.getZoom(),r=myChart.convertToPixel("series",[data[t].x,data[t].y]);return{type:"rect",position:[-20,40],shape:{height:o.height,width:o.width},x:r[0]-40/2,y:r[1]-40/2,scaleX:zoomInfo.zoom,scaleY:zoomInfo.zoom,invisible:!0,draggable:!0,ondrag:function(A,l){onPointDragging(t,[this.x+20,this.y+20])},onmousemove:function(){showTooltip(t)},onmouseout:function(){hideTooltip(t)},z:100}})}setTimeout(function(){myChart.setOption({graphic:getGraphicInfo(positions)})},10),window.addEventListener("resize",updatePosition),myChart.on("graphRoam",e=>{var t=e.hasOwnProperty("zoom");t?(zoomInfo.zoom=e.zoom,zoomInfo.originX=e.originX,zoomInfo.originY=e.originY):(zoomInfo.dy=e.dy,zoomInfo.dx=e.dx),zoomStart=!0}),myChart.on("finished",()=>{zoomStart&&(zoomStart=!1,updatePosition(!0))});function updatePosition(e){setTimeout(function(){myChart.setOption({graphic:getGraphicInfo(positions)})},10)}function showTooltip(e){myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e})}function hideTooltip(e){myChart.dispatchAction({type:"hideTip"})}function onPointDragging(e,t){var o=myChart.convertFromPixel({seriesIndex:0},t);option.series.data[e].x=o[0],option.series.data[e].y=o[1],myChart.setOption(option),updatePosition()}
