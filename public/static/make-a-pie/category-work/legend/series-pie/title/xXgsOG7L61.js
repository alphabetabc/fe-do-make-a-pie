let data=[{name:"测试",value:123},{name:"test11",value:14123},{name:"测试测试",value:353453},{name:"iiii",value:45454},{name:"MMMM",value:15}];data=setNameEqualLength(data);const legendData=data.map(t=>t.name);option={title:{text:"不定长度的字符串占用相同的长度"},legend:{type:"scroll",orient:"vertical",right:"2%",top:"center",data:legendData,textStyle:{fontFamily:"monospace"},formatter(t){const n=data.find(e=>e.name===t);return t+"   "+n.value}},series:[{type:"pie",label:{show:!1},data}]};function setNameEqualLength(t){const n=t.reduce((e,l)=>{const a=getCharLength(l.name);return e=a>e?a:e,e},0);return t.map(e=>{const l=getCharLength(e.name);return e.name+=Array.from({length:n-l}).fill(" ").join(""),e})}function getCharLength(t){let n=0,e=0,l=0;if(t==null||t=="")return 0;const a=t.length;for(n=0;n<a;n++)l=t.charCodeAt(n),l<127?e+=1:e+=2;return e}