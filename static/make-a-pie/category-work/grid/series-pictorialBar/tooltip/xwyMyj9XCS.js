var xdata=["陆家所","花桥所","千灯所","锦溪所","兵希所","淀山湖所","城西所","科教所","同心所","巴城所"],data=[192,187,150,140,134,125,110,108,98,90],maxArr=[100,100,100],colorList=[new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFA800"},{offset:1,color:"rgba(255, 168, 0, 0)"}],!1),new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(0, 251, 226, 0.94)"},{offset:1,color:" rgba(35, 201, 255, 0)"}],!1)];option={backgroundColor:"rgba(5,39,58,1)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){let e='<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';return a[0].name+"<br>数量 ："+a[0].value}},grid:{left:"4%",right:"4%",bottom:"3%",top:"15%",containLabel:!0},xAxis:{data:xdata,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,rotate:0,interval:0,textStyle:{padding:[14,0,0,0],fontSize:15,color:"#00F6FF"}}},yAxis:{triggerEvent:!0,minInterval:50,splitLine:{show:!0,lineStyle:{color:"rgba(77, 188, 224, 0.35)"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#CCCCCC",fontSize:16}}},series:[{name:"数量",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbol:"path://M10 0 L0 10 L20 10 Z",data:data.map((a,e)=>(itemStyle={color:e>0?colorList[1]:colorList[e]},{value:a,itemStyle})),label:{normal:{show:!0,position:"top",align:"center",textStyle:{color:"#fff",fontSize:20},rich:{a1:{width:20,height:20,borderRadius:"100% 100%",padding:[0,0,0,0],backgroundColor:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVQ4jZXTv0tXYRTH8VcXFyWixbG+DfbjC/0B0g9pEGuJMqOlf6ChNoPANaQhWlx0d4rKmipxUZvEzUH7MWT9A4GkDVFx8Fx8uBe+2IEHznM+933uc5/7OUf+LgxqRIURjOFkSt+wiBX8KR+vGvAFrOMZdvE2127WQrtYAn1FfhdPcR8vm8fCY0ykNon5ssHlhK/gYws9iIA3sIxtrPblZ8ziQQ1vbu+dxhOMJrqER91O/2d8wj3M4Xx9Yb/wIuGzWMMtHMsV+VpqEW/wM9gqb3uhOOY0jrcOv1+bLvavcS0anIoXF8JoCz2IsSLfwlDzN/53RIOv6BbgUo8mi0V+Dl+qLN4shCn8aKH7talifwPvqrTnAG5Htdvpj28bxivs5Ip8OLUaPhpsPQthpOeHMFLEmTTSnTBSfYmrac8QrveAQ4sTP0xGcxovYQa/0xth14gOxtP64dgPNdBrnK/iRNa+431rnPEPh9JZj7qud/EAAAAASUVORK5CYII="}},a2:{width:20,height:20,borderRadius:"100% 100%",padding:[0,0,0,0],backgroundColor:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVQ4jZXTMUtXYRQG8F8XJ4n0C6QNpvUNxEoaQl3C1GjpCzjolpNrOEWLi+1NkVZTJi5mg4hODpo0WH2BRJIGCTl4/vhyL/ypBw6873POczjvvc+50rW7pYYKwxhBT6Z+YA2f8bcsr2riIezgJU7xMeM0ucjdKQUdxfkpXmAGy/Wx8BxTmXuG12WDeym+j68N6SVCvIcNfMdmlc9YwmwhvpnFxxnLyQUOMY1XoW19sD94mwUD2MYkrmVMJjeQNR/wO7RVfu13xZgL6G4Mf8EtFPf3GIsGN7BfJB40pJcYKc4H6Kv/xv9GNDjC7UK43qbJWnG+hW9Vko+KxDx+NaQX3HxxH8dqlfbsxOPibYNYwUnGSnIHhfhqaFu7EEZ68w9GCvSnkZ60jBTYTHtG4mEbceRi4rnUqG/jXSziLL0Rdg30YiKtH4790hK0W+dRXE/uJz411hnnARRQbYq4LH4AAAAASUVORK5CYII="}},c:{color:"#fff",align:"top",fontSize:16,padding:[0,0,5,0]}},formatter:function(a){return a.dataIndex<1?["{c|"+a.value+`}
{a1|}`]:["{c|"+a.value+`}
{a2|}`]}}},z:10}]};