option={legend:{data:["餐饮","生鲜","家政","快递"],right:"0%"},tooltip:{trigger:"axis",formatter:function(s){return`
              <div class="tooltip-box">
                <div class="inner">
                  <div class="hd">
                    <h3 class="title">${s[0].name}</h3>
                  </div>
                  <div class="bd">
                    <p><strong class="name">${s[0].seriesName}:</strong><span class="number">${s[0].value}</span><span class="unit">人</span></p>
                    <p><strong class="name">${s[1].seriesName}:</strong><span class="number">${s[1].value}</span><span class="unit">个</span></p>
                    <p><strong class="name">${s[2].seriesName}:</strong><span class="number">${s[2].value}</span><span class="unit">个</span></p>
                  </div>
                </div>
              </div>`}},color:["#1d95ee","#3cfefe","#ff666b","#2070e8"],yAxis:{axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!0,color:"#ffffff",fontSize:"14"},axisTick:{show:!1}},xAxis:{axisLine:{show:!0,lineStyle:{color:"#999999"},fontSize:"14"},splitLine:{show:!1},axisLabel:{show:!0,color:"#ffffff"},axisTick:{show:!1},data:["7月","8月","9月","10月","11月","12月"]},series:[{name:"餐饮",type:"line",symbol:"none",smooth:!0,data:[25,25,68,48,74,45]},{name:"生鲜",type:"line",symbol:"none",smooth:!0,data:[32,25,56,45,87,54]},{name:"家政",type:"line",symbol:"none",smooth:!0,data:[20,30,50,60,70,56]},{name:"快递",type:"line",symbol:"none",smooth:!0,data:[10,20,30,50,80,60]}]};
