function initNum(t){return{type:"group",left:t*60,top:0,width:50,height:100,bounding:"raw",children:[{type:"rect",left:"center",top:0,style:{fill:"#165894"},shape:{width:50,height:50}},{type:"rect",left:"center",top:50,style:{fill:"#124a7b"},shape:{width:50,height:50}},{id:"num-"+t,type:"text",left:"center",top:"middle",style:{fill:"#fff",text:0,font:"70px Microsoft YaHei"}}]}}function initGraphic(t){for(var n=t+"",e={type:"group",left:"center",top:"middle",width:n.length*60,children:[]},r=0;r<n.length;r++)e.children.push(initNum(r));return e.children.push({type:"text",left:"center",top:120,style:{fill:"#fff",text:"总数",font:"16px Microsoft YaHei"}}),e}var num=88435;option={backgroundColor:"#5B5C6E",graphic:initGraphic(num)},setTimeout(function(){start()},0);function start(){var t=num-200;t=t<0?0:t;var n=setInterval(function(){++t==num&&clearInterval(n);for(var e={type:"group",children:[]},r=t+"",i=0;i<r.length;i++)e.children.push({id:"num-"+i,type:"text",style:{text:r[i]}});myChart.setOption({graphic:e})},10)}