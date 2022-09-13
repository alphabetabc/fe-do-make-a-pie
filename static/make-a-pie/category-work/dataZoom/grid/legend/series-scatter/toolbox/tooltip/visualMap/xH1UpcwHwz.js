option={legend:{},tooltip:{show:!1},toolbox:{width:"auto",feature:{dataZoom:{title:{zoom:"框选放大",back:"缩放还原"}}}},xAxis:{type:"value",minInterval:10,splitLine:{show:!0},axisLabel:{formatter:"公元{value}年"},axisPointer:{show:!0,snap:!0,label:{formatter:"公元{value}年",precision:0}},axisTick:{show:!1}},yAxis:{show:!1},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],startValue:1e3,endValue:2018,minValueSpan:500},{type:"inside",show:!0,xAxisIndex:[0],startValue:1e3,endValue:2018,minValueSpan:500}],series:[{name:"军政",type:"scatter",symbol:"path://M853.333 682.667L739.556 398.222l113.777-284.444H227.556v-56.89h-56.89v853.334h-56.888v56.89h170.666v-56.89h-56.888V682.667h625.777z m-85.333-512l-91.022 227.555L768 625.778H227.556V170.667H768z",label:{normal:{show:!0,position:"bottom",formatter:function(e){return e.data[3]}}},tooltip:{show:!0,position:"right",formatter:function(e){return"<p>点击查看详情</p>军政: "+e.data[3]+"@"+e.data[0]}},data:[[1991,80,"军政","苏联解体"],[626,60,"军政","玄武门之变"],[1789,60,"军政","法国大革命"],[-27,60,"军政","罗马帝国开始"],[266,60,"军政","晋朝开始"]],dimensions:["date","size","type","name"],encode:{x:"date",y:"size",seriesName:"type",itemName:"name"}},{name:"经济",type:"scatter",symbol:"path://M875.603205 600.394213C847.240227 497.979682 786.507004 418.916998 691.563632 365.143281c-10.912537-6.179746-22.449291-11.326976-33.709753-16.962324 0.071631-0.155543 0.12382-0.50449 0.333598-0.689708 1.890047-1.76725 3.821025-3.495614 5.725398-5.248537 19.539009-18.069541 37.083593-38.97057 46.251394-63.629179 4.445242-11.952216 5.544273-17.154705 8.630564-28.249391 5.742794-35.044144-0.858554-56.347333-22.38073-74.055646-29.086455-23.937179-62.08808-26.767644-96.947006-12.716626-2.420119 0.972141-4.024663 1.682315-6.434549-0.523933-44.870953-41.062208-116.907617-41.444924-162.085562-0.902556-2.108011 1.89414-3.634784 2.372024-6.373151 1.154289-18.329461-8.163937-37.492916-9.910721-57.161884-5.978155-37.275975 7.454786-68.106144 38.140669-62.634526 80.049151 4.747117 36.358069 19.308765 67.820642 44.412512 94.941326 5.15337 5.569856 10.630105 10.858302 16.175401 16.489556-1.38044 0.649799-2.749624 1.324158-4.14439 1.944282C232.980215 407.514297 146.351206 530.820648 136.209218 671.074995c-2.805906 38.785352-0.458441 77.18901 9.604752 115.219161 15.847943 59.908438 70.303182 104.786555 135.686309 104.641245 154.079214-0.342808 308.162522 0.034792 462.242759-0.192382 49.498344-0.074701 87.602174-21.575388 115.251907-60.72299 14.051017-19.899212 20.621667-42.496883 24.447808-66.169025C892.346541 708.786898 890.497427 654.202723 875.603205 600.394213L875.603205 600.394213zM843.965647 737.334071c-3.310396 21.561062-6.898107 44.175105-19.065218 62.299905-23.947412 35.664268-69.818135 55.245232-112.684432 55.31584-133.442198 0.206708-266.889513-0.137123-400.332734 0.174985-56.627718 0.130983-110.036116-31.335682-123.764791-85.904509-8.714476-34.647101-7.773034-77.984119-5.340635-113.314789 8.78713-127.758756 124.523061-248.238734 235.59067-299.933093 1.207501-0.559748-32.005948-29.644157-36.473703-34.716686-21.745257-24.703635-35.323507-44.713364-39.431058-77.832669-5.050016-40.659025 25.39539-52.655244 43.820018-56.533574 17.039072-3.585665 53.200666 14.56574 55.028291 12.837376 39.128159-36.931121 101.519138-36.579103 140.377144 0.821715 2.088568 2.009773 3.478218 1.36509 5.570879 0.477884 30.194696-12.802584 55.725162-20.690228 80.917938 1.112334 18.642592 16.132422 19.074428 28.113291 14.503319 53.447283-2.775206 10.510378-20.016893 38.613436-26.597775 47.326888-24.327058 32.180933-48.1353 52.720735-49.779753 54.326303-0.177032 0.171915 51.997258 24.628934 60.717873 31.266098 80.538291 61.278645 134.832871 108.670002 159.39529 201.960735C839.316767 639.482463 851.675236 687.176718 843.965647 737.334071L843.965647 737.334071zM511.880273 516.371564l-45.636387-48.928363c-6.336312-6.794753-10.776438-11.891841-13.311167-15.290241-5.065366-4.755304-11.724019-8.66331-19.965727-11.719926-8.235568-3.056616-15.20633-1.189082-20.912285 5.604648-5.071506 7.474228-6.336312 14.781658-3.806699 21.918195 2.535753 7.132444 5.38873 12.742209 8.558933 16.817014l14.258749 14.274098c6.971785 8.153704 14.57802 16.986883 22.819728 26.500561 9.505491 10.873652 19.964704 22.427802 31.371498 34.660404l-0.947582 21.405519-64.649416 0c-5.705955 0-10.615779 2.376117-14.738679 7.136537-4.117784 4.753257-6.178723 9.850345-6.178723 15.290241 0 5.434779 1.904373 10.193153 5.705955 14.268982 3.799536 4.079922 8.871041 6.119371 15.21247 6.119371l64.649416 0 0 35.677571-64.649416 0c-5.705955 0-10.615779 1.868557-14.738679 5.604648-4.117784 3.738138-6.178723 8.668427-6.178723 14.781658-0.630357 5.439896 1.11438 10.023284 5.231141 13.759375 4.117784 3.741207 9.350972 5.610788 15.686261 5.610788l64.649416 0 0 20.386306c0.63445 9.513678 3.487428 16.137539 8.558933 19.87363 5.064342 3.738138 11.405771 5.610788 19.012006 5.610788 7.606235 0.674359 13.785981-1.873674 18.538215-7.646144 4.754281-5.776563 7.132444-11.725042 7.132444-17.839297l0-20.391423 66.549695 0c6.334265 0 11.567453-1.531889 15.685237-4.588505 4.123924-3.056616 5.861498-7.981788 5.232165-14.781658 0-14.267958-8.876158-21.404496-26.624381-21.404496l-60.842717 0 0.947582-34.660404 61.801555-1.017166c8.871041 0.679475 15.21247-1.189082 19.013029-5.605671 3.804652-4.417613 5.705955-9.685593 5.705955-15.799848 0-5.439896-2.061962-10.365068-6.179746-14.781658-4.123924-4.415566-10.615779-6.626931-19.491936-6.626931l-61.795415 0 0-19.36607c10.776438-10.872628 20.600177-21.409612 29.471219-31.603789 7.606235-8.153704 15.21247-16.479323 22.817682-24.970718 7.606235-8.496511 13.308097-14.443967 17.11275-17.839297 14.57802-13.5936 17.748223-25.483394 9.506515-35.677571-4.435009-6.119371-10.140964-9.175987-17.11275-9.175987-6.970762 0-13.30605 2.720971-19.013029 8.154727-3.169179 2.718925-8.55791 7.644097-16.164145 14.780635-7.606235 7.137561-15.21247 14.439874-22.819728 21.918195C532.475334 495.647567 522.651594 505.498936 511.880273 516.371564L511.880273 516.371564 511.880273 516.371564zM511.880273 516.371564",label:{normal:{show:!0,position:"bottom",formatter:function(e){return e.data[3]}}},tooltip:{show:!0,position:"right",formatter:function(e){return"<p>点击查看详情</p>经济: "+e.data[3]+"@"+e.data[0]}},data:[[1992,40,"经济","邓小平南巡"],[1492,20,"经济","哥伦布发现新大陆"]],dimensions:["date","size","type","name"],encode:{x:"date",y:"size",seriesName:"type",itemName:"name"}}],visualMap:{show:!1,dimension:1,min:0,max:100,inRange:{symbolSize:[20,70]}}};
