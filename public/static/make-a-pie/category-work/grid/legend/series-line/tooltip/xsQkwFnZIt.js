var icon_blue="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABHNCSVQICAgIfAhkiAAAARBJREFUKFO1k71OAlEQRs9cStZIY2Kna+zlBUy0svWntIDGXloTLWmhpxETW/ENNMEOC+wNq2+AcWl3zKxuw71LoPC2c+fMNzPfCIteojWyWQehLlBXGKOMcdUWsUzLUqWUmXwfoAwEqc3/UXSKcEK89hzKD0NNoaaJAfXlFdd/QN4/0c0N9Ggfmmf8gqM4pDgMnaS3Ag0DVq47npiscfoHps9O1Jz/IDJJ1W8PrJpcXOUKvfjuFtprY4khVUFoAXGH56Ujz57uS2P/ozRYrpjpcETlprv6TIPQ3J/ph4is63CEuxv421f9wkXby2/fKplPMx4N7C0qB3K8mk8LSu7XmfVvF7Wn8IZdlVQvF13UDzYWeoKPTRhYAAAAAElFTkSuQmCC",icon_yellow="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABHNCSVQICAgIfAhkiAAAATZJREFUKFNjZCAArh7WqP/PwODw//9/A5BSRkbGC4wMDAe0bW804tLKiEvi6lFVg///mOYzMDCCDcME/y8wMv1L1La+fQFdDquh9/crCHxl5jjPwMigsOkwH8PGQ/wMZ65zgfWaaH5j8Lf7yOBn+4mBgeH/Be4/Px0VHR98QDYYq6GXD2s0MDIw1C/dIcDQtUQcqzvLYl4yRHt8YPjPwNCoa3ujAcXQK4c1/qPrAgmAbAurlme4+ZADq6Hq8j8YVrU+BBkKVkvQUJgC/Rh1vNF4cclNrPKMNHEpNqsoDlNshoJjn4UDlFTkQTG/CRT7Nzghsa/xncHP7iM4BTAw/L/I/eenA1GxD9IMTacLGBgY9XGk04uMTP8SiE6nyIaAgoKBgcGBAZqjGEA5ivH/Bh2bmxNwxSIA4WmARtcUOH4AAAAASUVORK5CYII=";option={backgroundColor:"#002061",tooltip:{trigger:"axis",formatter:function(e){return e.length===2?e[0].axisValue+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#01def4;"></span>'+e[0].seriesName+"："+e[0].value+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#d4c328;"></span>'+e[1].seriesName+"："+e[1].value:e[0].seriesName==="行政许可"?e[0].axisValue+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#01def4;"></span>'+e[0].seriesName+"："+e[0].value:e[0].axisValue+'<br/><span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#d4c328;"></span>'+e[0].seriesName+"："+e[0].value}},grid:{top:"10%",left:"10%",right:"10%",bottom:"10%",containLabel:!0},legend:{top:"5%",right:"9%",data:[{name:"行政许可",icon:icon_blue,textStyle:{color:"#01DEF4",fontSize:11}},{name:"行政处罚",icon:icon_yellow,textStyle:{color:"#D4C328",fontSize:11}}]},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#4F6C98"}},axisLabel:{color:"rgba(255,255,255,.6)",fontSize:12},splitLine:{show:!0,lineStyle:{color:"#4F6C98"}},axisTick:{show:!1},data:["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"]}],yAxis:[{type:"value",splitLine:{show:!0,lineStyle:{color:"#4F6C98"}},axisLine:{show:!0,lineStyle:{color:"#4F6C98"}},axisLabel:{show:!0,textStyle:{color:"rgba(255,255,255,.6)",fontSize:12}},axisTick:{show:!1}}],series:[{name:"行政许可",type:"line",symbol:"circle",symbolSize:8,lineStyle:{color:"#01DEF4"},itemStyle:{color:"#041344",borderColor:"#01DEF4",borderWidth:2},smooth:!0,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0A618A"},{offset:1,color:"rgba(22,33,81,0)"}])}},data:[4,7,5,4,3,5,8]},{name:"行政处罚",type:"line",symbol:"circle",symbolSize:8,lineStyle:{color:"#D4C328"},itemStyle:{color:"#041344",borderColor:"#D4C328",borderWidth:2},smooth:!0,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(183,171,10,0.58)"},{offset:1,color:"rgba(10,21,68,0)"}])}},data:[4,5,2,6,4,5,2]}]};
