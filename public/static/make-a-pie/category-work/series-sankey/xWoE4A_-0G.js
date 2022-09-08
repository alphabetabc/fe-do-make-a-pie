const colors=["#E7DC54","#67A15D","#F47A80","#AD7152","#DB3F92","#834DA0","#58A5AA","#71BD41","#EE3420","#9DD927","#E7DC54","#67A15D","#F47A80","#AD7152","#DB3F92","#834DA0","#58A5AA","#71BD41","#EE3420","#979067"],res=[{arrearscompany:"a公司",city:"合肥",cumulativearrearsmoney:238},{arrearscompany:"b公司",city:"合肥",cumulativearrearsmoney:2318},{arrearscompany:"c公司",city:"合肥",cumulativearrearsmoney:1238},{arrearscompany:"d公司",city:"合肥",cumulativearrearsmoney:218},{arrearscompany:"e公司",city:"合肥",cumulativearrearsmoney:2381},{arrearscompany:"f公司",city:"合肥",cumulativearrearsmoney:3238},{arrearscompany:"f公司",city:"六安",cumulativearrearsmoney:1221},{arrearscompany:"六安",city:"合肥",cumulativearrearsmoney:3238}],nodesSet=new Set([...res.map(r=>r.arrearscompany),...res.map(r=>r.city)]),nodeList=Array.from(nodesSet),nodeJson={},data=[],links=[];nodeList.forEach((r,a)=>{nodeJson[r]=colors[a%colors.length],data.push({name:r,itemStyle:{color:nodeJson[r]||colors[0]}})}),res.forEach(r=>{const a=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:nodeJson[r.city]||colors[0]},{offset:1,color:nodeJson[r.cumulativearrearsmoney]||colors[colors.length-1]}]);links.push({source:r.city,target:r.arrearscompany,value:r.cumulativearrearsmoney,lineStyle:{color:a}})}),option={series:{type:"sankey",layout:"none",layble:{},focusNodeAdjacency:"allEdges",data,links,itemStyle:{borderWidth:1,borderColor:"#aaa",opacity:1},lineStyle:{color:"source",curveness:.5,opacity:.6},label:{padding:[0,0,0,20]}}};