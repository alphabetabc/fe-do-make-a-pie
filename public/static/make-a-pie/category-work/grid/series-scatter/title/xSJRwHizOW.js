var uploadedDataURL="/asset/get/s/data-1503306613861-ByR_mXudZ.png";xDotCnt=32,yDotCnt=32,option={grid:{width:400,height:400,left:200},xAxis:{min:0,max:xDotCnt-1,type:"value",show:!1},yAxis:{min:0,max:yDotCnt-1,type:"value",inverse:!0,show:!1},series:[],title:{text:"散点图像素画"},animationDuration:function(i){return(i*2+Math.random()*100+3)*5},animationDelay:function(i){return Math.random()*1e3*5}},getPixels(uploadedDataURL,setOption);var btn=document.createElement("button");btn.style.position="absolute",btn.style.top="50px",btn.style.marginLeft="10px",btn.innerHTML="上传图片",btn.setAttribute("onclick","upload()"),document.body.appendChild(btn);var file=document.createElement("input");file.style.display="none",file.setAttribute("type","file"),file.setAttribute("onchange","imageSelected(this.files)"),window.upload=function(){file.click()},window.imageSelected=function(i){if(i&&i.length>0){var o=new FileReader;o.onload=function(n){getPixels(n.target.result,setOption)},o.readAsDataURL(i[0])}};function setOption(i){for(var o={type:"scatter",symbol:"circle",symbolSize:[12,12],data:[]},n=0,e=0,h=0,t=i.length;n<t;++n)i[n]&&i[n]!=="-"&&o.data.push({value:[h,e],itemStyle:{normal:{color:i[n]}}}),++e,e===xDotCnt&&(++h,e=0);option.series=o,myChart.setOption(option,!0)}function getPixels(i,o){var n=1,e=document.createElement("canvas");e.width=xDotCnt*n,e.height=yDotCnt*n;var h=e.getContext("2d"),t=new Image;t.onload=function(){var r=0,a=0,s=e.width,d=e.height;t.width>t.height?(a=(t.width-t.height)/2/t.width*e.width,d=t.height/t.width*e.width):t.width<t.height&&(r=(t.height-t.width)/2/t.height*e.height,s=t.width/t.height*e.height),h.drawImage(t,r,a,s,d);for(var u=[],r=0;r<xDotCnt;++r)for(var a=0;a<yDotCnt;++a){var l=h.getImageData(r*n,a*n,1,1).data;u.push(getHex(l[0],l[1],l[2],l[3]))}typeof o=="function"&&o(u)},t.src=i}function getHex(i,o,n,e){if(e===0)return"-";for(var h=[i,o,n],t="#",r=0;r<h.length;++r){var a=h[r].toString(16);a.length<2&&(a="0"+a),t+=a}return t}