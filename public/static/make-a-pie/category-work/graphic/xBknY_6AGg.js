function log(){console.log(...arguments)}var planePath="path://M508.862412 340.439646 336.875283 532.928658 429.459728 532.928658 429.459728 683.560354 594.540272 683.560354 594.540272 532.928658 687.123693 532.928658Z";function toThousands(t){for(var t=(t||0).toString(),A="";t.length>3;)A=","+t.slice(-3)+A,t=t.slice(0,t.length-3);return t&&(A=t+A),A}option={series:[],backgroundColor:"#5B5C6E",sum:11111,sumtime:200,graphic:[{id:"logo",type:"group",left:"center",top:"center",children:[{type:"text",z:100,left:"left",top:"20px",style:{fill:"#fff",text:0,font:"55px Microsoft YaHei"}},{type:"text",z:100,left:"left",top:"middle",style:{fill:"#9EA0AA",text:"接待游客总人次",font:"22px Microsoft YaHei"}},{type:"text",z:100,left:"left",top:90,style:{text:"整体环比:",fill:"#FFF",font:"14px Microsoft YaHei"}},{type:"image",z:100,top:72,left:60,style:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABTUlEQVRoQ+2TMU7DQBBFZyTcBBdu9hwxEluDj8ANuAFX4QbJEbhBTJ0g+QbQW0gubAosmCiISMhgkPm7gkjftf943vtjlQN/9MD3FwL8dYNsgA2ABnhCoEA4zgZgheAANgAKhONsAFYIDmAD3wnsnF+aSJnW6yUoejQerYHW+WtVuXr78svrxfHj3U0MiCgArfOXqrLYL2xmjYgWab2uQkMEBxguHxsiKEDrfC5iK1XNvjIdo4lgAD8t/wHoYfbcn2hTNSHOKQiAZXnWJUf3Y+Y/LWpSzfq+CAEBA+yWf0qSlajkk4wGgoABOucrUZlPWv79ZTMr03pT/Ca7z8AAw4+37rRU1bORn/g2rTfnyMLDLAHYAHhPPCGe0H87IXCfyfHg/8DkDcAAAUCBcJwNwArBAWwAFAjH2QCsEBzABkCBcJwNwArBAWwAFAjHtzMqhjGeG73tAAAAAElFTkSuQmCC"}},{type:"text",z:100,left:"left",top:90,left:95,style:{text:"60%",fill:"#FFF",font:"14px Microsoft YaHei"}},{type:"text",z:100,left:"left",top:110,style:{text:"整体同比:",fill:"#FFF",font:"14px Microsoft YaHei"}},{type:"image",z:100,top:93,left:60,style:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABTUlEQVRoQ+2TMU7DQBBFZyTcBBdu9hwxEluDj8ANuAFX4QbJEbhBTJ0g+QbQW0gubAosmCiISMhgkPm7gkjftf943vtjlQN/9MD3FwL8dYNsgA2ABnhCoEA4zgZgheAANgAKhONsAFYIDmAD3wnsnF+aSJnW6yUoejQerYHW+WtVuXr78svrxfHj3U0MiCgArfOXqrLYL2xmjYgWab2uQkMEBxguHxsiKEDrfC5iK1XNvjIdo4lgAD8t/wHoYfbcn2hTNSHOKQiAZXnWJUf3Y+Y/LWpSzfq+CAEBA+yWf0qSlajkk4wGgoABOucrUZlPWv79ZTMr03pT/Ca7z8AAw4+37rRU1bORn/g2rTfnyMLDLAHYAHhPPCGe0H87IXCfyfHg/8DkDcAAAUCBcJwNwArBAWwAFAjH2QCsEBzABkCBcJwNwArBAWwAFAjHtzMqhjGeG73tAAAAAElFTkSuQmCC"}},{type:"text",z:100,left:"left",top:110,left:95,style:{text:"60%",fill:"#FFF",font:"14px Microsoft YaHei"}}]}]},setTimeout(function(){start()},0);function start(){var l=myChart.getOption(),t=l.sum,A=l.sumtime,e=t-A,e=e<0?0:e,f=setInterval(function(){++e==t&&clearInterval(f),myChart.setOption({graphic:[{type:"group",children:[{style:{text:toThousands(e)}}]}]})},0)}
