var imgDatUrl="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAMACAYAAAATxEpsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzU1OTc4NS00ZmVkLTlhNGEtYjYyYS01NDQ2YTdlMzc1ZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUUyMDA3QjIxNEQxMTFFQTk1NkVDMzIxRTU3RkI0RDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUUyMDA3QjExNEQxMTFFQTk1NkVDMzIxRTU3RkI0RDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiZTU5ZWU3LWM0NDEtMzQ0Mi05ZDI3LTZjMmFmNWJhYjJhMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplYzU1OTc4NS00ZmVkLTlhNGEtYjYyYS01NDQ2YTdlMzc1ZWUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BoY66AABeP0lEQVR42uy9CZwlR33nGZmRme+u++z7VLfUCAQIgzksCcxl7PFgY2zA99o7O94dDp+DvTPG68/sjNdmUAsztsf2YntY22DPCJgZEBi6ClBhCQsk0IGOVrf6qu66q96VV0TkRryq7q673pHvVUbE/yeSV11Vr15mZHzz9//HaURRhJIuwzAQqHmFxDv53NlH/+1tJ7/33Spdlwx1t9MyoQi00Ifm5q6+8+lnv3EcigKABsntzqf4yzsJCXG5vPg3UCIANEhu/TuRtYgv5uYmX/7U0w+9CooEgAbJ6c638Ze7+FHF2IpME0eVytIfQ8kA0CAJZVvpp/jRa+HU3zFGjYMHbjv8ipe/+Q4oGXVlQRHoo6WP/+7tD/5A3wf5l3/Hj/HXfm6eQqkA0CBJFVVLOf7yL1aOWQ735/mrOL7E4Z6R7Xqud2fy60jzl2F+jPKjhx+9617z/MiuvK1n5VX82+eHeKgFIi25/txbOWb5Icrk8vWDl1HYcJl3uGsNgNZXA/z4qZVDQPE0f/kaPx7ix2P8eJJXYH+3To6fj0gHh/gxssMxvArSTcVoRCmNioxFVUoin79SxpARiSOKxFPB4P/GHD/xPWyYAnIj4s+LyORf8wdHZGKDfPGu7iLGaNqyzPPYMh7k7/smL6Oz4NCgJOrkyvGLK/8mHKrn+etz/HiWHxf5MbniVkV+lMQrr9CLdcDprLhkFz8KK0f/CrADK18PrDjsdacVP6urjYdDSnyPzgUB82kY4TBkqTBg6cBnaa9KrGVYa27du/696QxmTtr0bRu7tm2UObglTrhr4to1Rtddln+GEfpRF4vQYf71Syhh7+IhAvuvL8kQJ2Ve5X/nm6kM/ovve2Dh6wA0KKnp2ImVYztYxUt5JXTdTLk46hl3VRR4bI5DWuWwGkFAM4Ef5dwKEfBaKw+CjRdhmSjfjd1szpri4F2wHPMc/96TlmU8xuF9+HWfny+3em5ffUvvLSSM7nIr9JceeG3h/Rgbl/jnPGLb5ifFqQPQoLaIeF7+0rlKJVewFrJ5K8ddpTemP52PJcfnfsjhLHG3XeKvURhE6cCjWc+j3GkpXnHy/i1PossO8gXraiqLn+TwPsqB+gceGk/wKIIsp8ntEXflZ1eimD+9/r2vvbW3hz+Ejq18H4AGtaERiSOzOBfkxCH+bTtmlO+yypmsVeRhZ5RK4z4OQrad58DDVcZD4sXQZxX+ikgQOUFIs77LMivh8fWQfEvxvFbA6+UK9sV0Fj/Gz/mM7Rj3v+7zC9PtBLcR8XMRqchip0ebA9AaS4SuC7NBYQEFNwDiYSjK5nDopLBr2abHQ9PQtAxqmoYAyeCveCuDpTSijEYRdyaDUYT515hSns+GkQiLHc+lFv+eyIv7Vo66xCOKsNBlT6Zz+Nv8ofN5Du9/SxK8ScuTQKCbuSqNULlIbB6g86PWiNVRZTKY5nvtaZ7zPpFKm1/mUcSneEh7nj9+4OYA0KAkK5e3wlyXPZXJ4e/ysPmrjmN+9vu+sPAddJFA4QDQoJ2UuvXOpw4ce3ysWiK3Ly0E/SLk7ojr5izC4V1MZ/BFJ2N+27bNhy3b+Bx33kvgvAA0qEnlf+Bnrr7tffe9XnwtBm5QEr06DNn3Bz57BQnYQd9jQ0FAC4HHnMCnJtuhw0U0TtkpzHhYHHJ3dbnLLvKvr/LjHLaMp3n+/Sh/fZjnu7MALgANaqNe+7l5geuDK8em4tCLFu80ilAmEq9IDLesDYsU711aHgsO4TEADZIFejG+uQolIY9g+iQIBECDQCAAGgQCAdAgEAiABoEAaJCa99nzJqEUNBB0Wymu7/zWj77zv7968D3fOr+IFodSYnUNG0oFHBokob71Kz/0iSuPfPNvlxbK5kjaRM9fcq0/OmBFX3/XyddC6agpA/a2Uk/P3PuvehaefOxbixevHF6ankPVkodCGqGlEkFeyC0aI/Tylw99443/cO2VUFrtVaf5AqAV0+O//ePvmnv66T8PKpVMeXoeBW6AytUQUcLQUoUiN4iQGKPN+UYvPpol7/xOBUJwhYCGkFshffP9b/3k1KPf/kRY9TLuQhGRkKLAJ4hyeg3TqD0YM7aBbMtAjNezx85WrI/t4yH4T5x8I5QehNzg0AnR2Y/+6sDcYw89UpyeOSj+7ZdKyC1XEQ14iO2GyPNZbSWSqktRSBB3acbDbgOV/OXpVIWUie68c/DRN/7D1MugNCHkBqB3UU986D3vnnnqyT8nrlubDUV9H5UXFhGjCHlVn7szQz4HWCwhJMAWB4++EeGubXGoyytQm7yMbz+SoT/+eBV6PiDkBu2GHnn/W++/+q1vfuIGzJSiyvzSckWiZHkZzTWVa/nVsZYfkAGHOrPyNeM//PbzVfyxvTwEf+eJH4TShZAbHLpDevJ33r2veOnS18tT0/tXf780O4cYWZ6fXC0HYjFrFJAIEbLs0CLkFo1iQsKhxa0XRcsjc0RX1YN8ykB3vmzkyTd9+eqLoLQh5Aag2xli/9uf+PmZ7373PxHPS63+vru0hALXW4aVUBRUwtqu0K5Ha9s/CKBdV4TbUa2RDK2E4EKr8+kboRsv81NHMuxdj1cxlDqE3KA26Fu//LbPXH3s0T9bDzOpVpG/AnPt3wGtwUxZtD7qRnjljkfs5g9EH7VoGFstEYI//nzV/EMegk/82NGfgtKHkBscOiY9/Xu/eGDh2af+sTw9u2f9z1gQoNL8wo1/Ux5iuxWv5rACaNEghlY5tChKb+V74h83vl7+J3LDjfUh5xjoFS8bfOZNZ6ZPAjLg0KBWQuwP/eTPT3/7sWcqc4t7DGyhtQdGbqnMb+LN/yIq8mWzRmdU2ytjuTFs80fi2somfsc2N/5mhefdX3145sRfn8rAAmIJFwCd5BD7N97+2aknvvNnge+la7HyusNbXKp1S0WmUTtqGx2LFi5htfwQi+ZvcPTVjiFW/rONVT9DKGVvjr543xPnXXzfqBU9+GPH3g13B0JuCLnr1HMf+/W9i888PlGeWR4ospmCUglV5xbWlI3vBSjwbm4PU6mGN0yYmzmqVpc3iKQr/dDXy9YN1jaIbdZItiYE59C/4pWj33zTFyfvBISSFXID0AnTU//u535u/uzzHws9N7PV77DAR8Vr0yKgvvk9zl+1WLlRgcSO5p57c4fX1UAL9/ZXQSwAD9e5OeaOXwnYtvfk1KEMefeTVRgLDjk0aDN95//6mb+Zf/7cn/EgOoPTPMre5DAtC1UXlhDmr6Zl3zjEStkGz51NTm7tMPGN0FschnHzVpvr8uTrA01WK+Txt4ONbSvqE+er1mkegj/0ntvfAXcPQm5w6BWd/eMP7ll6/tmvVefmjuz0u+Wrkyj0vA3frywUec5801FFX7Tr3WzDsoTjVsIb5bm6dVvUADHGm62rC7XfI9GOLiNGm73qVfsefuMXL70KkIKQW2ugn/vYr71n/rtP/Wfiezvuy1xdmEfe/PxGNw1C5PJwe7V8L0RhuCrktkxULd/cjsZbF07XRpJtkjfvlE/fuEf8v1NHc/67Hy+nAWMAWkugn/q9X/rE0pVL7+J3fcfUJ6iUUenK5eUuqfXuvFhExF+1dxS/paXi2g0vLGyiculmg5lw4yBcC6ofRmiz2lAv1ELD3RZ65Rtv/5FX/dWj9wPOALQWQD/70V854E5Pfam6uHi8nt8Xg0eWLl0Uw7s2/ExMkSzOLa7JixkPtysVf1ugRUothoWuKWf+sHB9usU92HzQyWbK8hD8la899OAbP3f+dQA0AK000Of/4nd+YuHsc39KfT9f73uWLlxAxNt8iym3WEZB1V0LOY1QZV0IblkYlYveKnjFyDGyPm5GFTF3egugRZ5N6qwvIgR/8cmeyi2vvaP3pfeNhQA0AK0c0M/84W/8Zfnq5E/yuLbu3oXyzDUUbJI315w4DFFpZm7DMDDRH+1V1zac2ZaFiotrIa96dHMn3iK8trjzljyGGrkbQz129Oq33vH27/nzf/oMAA1AKwH0hf/yH/aXr175ore42NBY6GBpARWvTXL6N7/+oFxBbqm04fvVchWFAdkRaDegG6J40dtVdbfOlx3LREWPNnT9af4geM3rj3/xDZ9+9s0ANAAtNdAv/M3v/2jp3Ln/lwZeVyPvC30PFS+cXx6PuUVFWbo6hdaPxxazqIrzxQ2uLULu0sLasF00jHn+xuHZtYEmZGuoxaCTcp2NZDceFCIEv62/ePzVtw/oFIID0AoBfe7j//efVOZm/hd+9o3NKaaE583nassJbQk8z5tFN9Z6EUJQeWXVkvUOvTi79vuGaCgrepuE1iYqlbdmjq1UVJ80XndG+1Lse3/olW+784+++gAADUBLocn//mf7ypde+FxQrdzezPvLVy6hoLi47e8Ur11DEaWbPAsoKs0v1gW06AIrlbxNaqFYxYQtL4SwleOKgSrcpTfv6NopBDfR695y6v57PvX4jwDQ8QqGfsadL//1h3984ezTTzYLs89dNygu7BCO+5vCXHNPUn9+K+DflEf+/Mxltl8rkPHQvjvb3GImHn9YfPl/PPH2T33P0MKj770HxoKDQyfySWxcuf8/f9RbmPmXPDlt6kFJvUot1DbM7d9enZlFgVvZ/GfcncMg2BhGOw5anJzZ+Ps8dGeb5Msida+64YaFBtfLSVlooRg0XW4HRvL0zh9+7Zte+uHPnwGHBqAToasP/OUBb2nx08zzX9rs32A8by6dP4sitv0aAtQPUPnaZG1NsA35c0hQZWpaxMNbAD21qdNWSpv3cds2h3Whsv15R8uWXvWaX/sgm8Lo+37oe/7y1X/x9Z8FoCHk3l2YP/dXP+LOzny7FZhrTnn18o4wCwXV6qYwX8+JkdnYLbVTW4fWYoLHTm3Z4lTEXlkmbv6hW/Up+sJ/fehnPvuGw5NP/JsfS0GtAqB3J8T+zJ/+cXV2+u8iynpa+Vvu/BQi1XIdLk63bSxrJpBhbHt36enO7JwqcJvuzTstO9kjD78w+vW/faDyzQ+8+S1QwyDk7pjm/+kf9gULs58mnvfyVv8WrVZQdeoSqmf4VVguI39pbtu/5S5uDjxOpWqTOza6MEPeYnHLp4EphozOLtbn9rkMWphabLl8s1k7evnb3/Qf7/j9T/8qhNwAdHthfviBfxaUSx/n8XFfyzc7DHiovfmki83c2b12RdyxrZ1+ZhpRsnn/seVwoC9f3DyML1cQ8b1tPptDv1Sq65osx0bFuWIMJBjo+OvueLr/5K0vu/U3P+4C0BByxx5izzz42Xs5zPfHAbOIdd3Zqbpgrv26GGSyDcyiC4oGflOnYhe2nyfiZDP1XxY/DycdQ08Uv9bnHnz05Nkvfnnhid/96e+DGghAx6aFR8cPzHz1049Qz30fBzCWMvMXZlAU1G88QWn7vulmGsRuvBdv3+dMPB9ZmfrWLWD8QZUp5GKLqmYvTqUe/+Snxx/9tR8+DTURgG69Qj30uR/x52e+zcIgtq1Ww/ISP+rPNcV+VbXN57YzNLP5WxlFOwxGEQNN+nvrvz7+AOgZHYjtHnhV33js77/w3q/85Cueff6PfgNawSGHbirENivnn/j3HORfjfPBF9EQhfMzDb2HcPhp4G0PvVtBYXXrPBfbDvKvXdo8XOdA+wvTCG/3UBArnBRned5f/0g0M5NH3uTzsd6XwqFbZ7tf/JrvP/CeX/825NAAdF2qvPDd/YwEn+R343tjvbk8HCXFuR3ddu0DgKBwcXbLvucbrsiBjLbpgzLtFPKnLm790PAriO3QdYbTGeRePlf/udfMPeIPi6lY74+V6yJ9r3zLBw///O/8AQANQO8E8w9xmD/O70R/3H+b8DyY7eC0G9zTLSG6xWolN6FnHPrp7d1yB6ARNlAwe21HQMPZq41ddDpdew8L/XhB4Y+KvpfeNYazXW89+i9/zwegIYdeo8XvPGiVn3/8w7zifbodMDO33DDMYgKG6Fve8YGHW9/x1TB3bpkWj9XUyIEGE2APZfYcjv8hz5FeeHT8Hv4AvvLCf/n3L4MaDECvduUDVrbwtYjRX25HmYj+ZlItNf4+4u8Yai9HMK2fMqszDWjGcUhxEeUOnWrLvXOvPNc/+7X7v3H+T//Nv4aaDCE3mvzMn7wjwvZHuc11t+XcRZhaKRqowXIO/dCYXywh7NTXXRQW57ctJMOyo2BpdlvyWaXET3PnfvGpsmcYQaWxguDXz89BpB1tupkRMgcOfPWdf/ipN/D6kphKDTl0h4F+8Af6PsRffjtp11wKLfTwdF8i78cXnnyuFBBaSOCpXfgmQocghwaBQJBDg0CgZMnSvQAoibKVEknceS0EFE0XS5tufbPbWowimybwXmKE0gC05gp8OnThbDlx5zXLDPRUNZmTjK5Slg4SeF55hHoAaN0LwDafGt6XubL++xGL0pRG/ZFhoFJoIos//vO9ufm6nIKxiDS5hIfn03TFI9kUDxr6ijayLZsVCrkdB34bhHHfbHLZELGOEN4+EohohF23WusJmLw6i0LbRJlUagkZuCmzNkKCIseu63xDQjJBGKRpxUUBZchGiPCKu2H4Gf/+9LTm9RlGim2hB3+g75/zl/un7TT65CWM0nkHnfi1D9b13hOjh9GZbz/UnDM/+wyaeuTx2vK4k5UqynXn0eE3vHrH97361CvQZx9sbqnrkf4h9N2zT28PtNgA7+LySLKeBR9dyRsoM9hTW9u7Gd350u9BX/3ql+t73oQUsYCgQ4/PomdmF9EoQk89j9ApGQCDVm4QCARAg0AgABoEUkoWFMH2cnj+3m/bKJty0P6B0breM9Tdhw6P7m/q81KzC4jkcrUcumKYqLe7Gx3dt/Pkhn19I+jIoSNNfeZo9wDy6Pb7x9EwRPMru06mvDnk7+lGvfv2IMNqbmLI0QOH0XNHD9X1u6EXIOL6yOQ5NAiAbj2MMZYPbOI6f99EuMkZUGKRAdMwalMVxWu9f8viv1Pv+W34TPHenT6DsRt94qKRUnyNOczNAi3O1ayzjMTvmTHMKIOQGwQCAdAgEAiABoFAADQIBAKgQSAAGgQCAdAgEAiABoFAADQIBECDQCAAGgQCAdAgEAiABoFAADQIBECDQCAAGgQCAdAgEAiABoFAADQIBECDQCAAGgQCAdAgEAiABoEAaBAIBECDQCAAGgQCAdAgEAiABoF0EmxWt4PCKEILIUGub6LJuam63pNz0uji1JWmPm9mYRbNV6v8qwgt8Vdmm+iFKxd3fN9o9xC6cOlCU5/p88+5ePGFbX+HEYrKs3O1r7s9D81PzSAvYsiwjKY+84WeYTT9wqW6fpfy8qdeiHJQHQHoViV2gSQcanEEO2y5el2EUhSEYXMPEMorL2O17WQZZct/iwR1vC/knxk09ZniXINg+/dGHGhCyDJg/PxIGKEw8JFBzSY/M+Dvr+98WUj5A4XU7gUIQm4QCIAGgUAQciuh8rkn/8Xlz/zJG6Ye+AQqsBC9aG4R5WiGvWbkwOM7xefMc42uMCRdB49lGvlMI52Ogrlp6/xTZ3u+u1gZiniIH83Mo4ORGf7wkdt2TDZHC/2VwZN3dDdzvXnLplNdXaltQ+SlivXody4Mia8X5nl5zFvoB9/8llmrkKNOVy/xpyedRj5zTzbnv+T7Xl8rI5zJ0LBU2rIuPvPIk5nnzj6T6fJdtCeD0bGewt5Pf+AnP3XiF3/7Xzm9g1NQY1fVI1FxEn+ShtHRz3vywx+4dvkb3xiuzM7U/u1VXGQ5Nho8cnj73DkkaOnataY+c+DwIfTw5x9EVZ43VwO6/LksQhlsov70zs/d4y8+iv7pH7/b9DUv+WT7PJZXE5ctf01XHl55zEM8fmteenIv+tS3Lzf92fvTGD1epVt/9soRrbziFSf64mPjd/XecfdXE90G02G+wKG3kJNJI2f//o5/bpYDnM0kLxMS4Obw7uWFkBtCDg0CQQ4NQigzMEy69u5p+H2ivxSbzYVYXXv3or6ebNPn3DXQj/rzdtPvt43mQ8Oe/m7Uja80//6Mhbpc2ngqZjkMaisAXW91aTbhl+p0QQC08sKpbOTk8g2/j4QhSjXxvtqNyOaRk3aav5HpNEo5zSe5qaD57MtOp5DTQvLm2BZyDL/xZxi2YKwJAF1HBevpI9nh0cZDbtJ8yJ3jn9fVm2/6nHP9fainK9P0+3HUfPSa7+tFBbt5ogvZFMqb1caBNjEAvU7QKAYCAdAgEAhC7hYUEm9fp8534esPWFa+8UFXBg+5bd9r7kbku1B2eE/T5+z0DKDcnn3NX3Tebfqt6YFh1H/gYNPv7+4voEGjq/E0odA7yuvFoQ5VwWnbSleTzok0I8Xm5ie/hVA0suq7VhQxR8wDMgwziPPzojAYiihtrIXJ5MGOmCVFSXPXiC1EvOahMi0bEX/zhiUrm12eveV5KGKb3++tvl/XwyhlI89r/hbY6TQK/YAXX2N5fPfwkJjPGee9FxFrmp8HM03TW5uvm/97X8/o/Q3XJRgptrm+8U8PXFudIth2qo8XVy4MAzFPcTrOz0ojo59D3RDQLJVBhu+Kh0FzNclOIW9hvnkoOLReqbR5xT98HFW8MqKzs/z8Np/WKaZqNqtULosWl8pNv7933z5UWlhAfrnS0PsGjx5coIxV4rrvGFsZXq96Pa8ibuL6SeiLMnAi7VhuHmr97LPPfeuXLl58+utvffPPvz/Oz7v6wCfOV6+cbyiUq9z6YmR99zuITDa3yEBu/1H0nU/8RdPnvO8Vd6KnP/8Pm/7sn/3Ph9BDj4+j+fvu4+c3uenvlJaa5+KW170K/d1/G2/6/T/1x3+IPveJ/w8996WJht73508+8pquEy//eoxp3R2zc5N//9hj45d5nbo7lmivw3xBoxgIpJAAaBAIgAaBQAA0CAQCoEEgEAANAgHQIBAIgAaBQAA0CAQCoEEgEAANAgHQIBAIgAaBQAA0CAQCoEEgEAANAgHQIBAIgAaBQAA0CAQCoEEgLQVb4WymiCFGG9wNMeL/4++JKG3uI/n7Gl3Gdu37+TlvtRTvyrfFz7f6HdbCYnbivFtYBbi2xHB08zRBAHS8cqcn7eKFc42FOsduRdXLF1H1hXNNfSaNDDQ/1fxKsd3XrqGZ+c1X7qScNrH65ELRRd4Wv1OsNL+89fC1abQQNP8wCghFVX6OC7QxpFnoQ4QJITcIBA6tV8RNmMEa3AHDEDtTMB42k+Z2zmDcpWgLO0CyWsge7RAabx1y0xbiXbFIfyvhsoj2xZXD7u0AdFvkLc7g8rWpht5TCENUnplFxanZ5m5ENo+Wlrymz7k8v4gWqmTb/LjkUVTe4neWfNr0ZxcXS6jYwhOB8BxcbOJTbvBPRCSACFMhoK9hbD3LX88m4myKRWRQmsiCmnnmaUSLFUQ9P5Hnt3DhMn8gFZNwKmXDMB7nrxdkhUKarXDc0sSr+Jd/26FPtGtRdJNv3rLiFsvnXd87vMVFipYrA8mrTc/drZaWnn3mm9075itR4+XNIuYvB+xt19+/4x2nf7W5dAI2q9tKaX4c7MxHtecmsIheiNbsoLkukVRQojONX/fwLhR3nBqQpbwhBwGBIIferZBObhfj4ZcUKQ5c84aUzwCg4w/enNC/KnXFcF13dLG0qBXQlUq5cP78c1Jfw9DQ6CCE3CAQCBx6m2fPV+zU3qM8iDtVXvj6Z2UMv+cXg5FrM1e1qmCBjzKVqi/lub/izu/7j5638DH+ZQmAjlmZwmvEqAsxUPrc3JWPBqF30ZGtgpiRjculGa2ALpctNL8wL91553MFlC/0/dYP/uCHPKnqmIyVJJU99lcynndXRup+5qZUrXhSnvdtt73k6bvveq90Jy8l0Pnet/6i6fRLF3Nn7VA7oCvlinTXbGGM9uw58i4Zy1vaRrFM7uTXZDtnxzGQbWe0AnpxYVE6oE+cuH3+Da//5ccA6E4+Re3+txtmVr6wO9+tTUd0GEYoCAPpzvvw4ZO/IWuZy+vQhdfNpwsnz8t23oVcWhugGbWku9YD+w8Hb37Tv/4zAHoXZNt7fhIhLFf+n3F04RkFgXxDxI4ff9Ffy1zmUgOd7b7r66nc8SWpztmJtBnM40rW/9zX2xf19Az+AgC9i3LSh35TpvPNpQJdeEblUlmqBrGTJ+945O673ksB6N0EpOcN/8lO75eGEowNlMt1awH04mJRGqBTTgoND+//UdnLXInwL5U9JlXek8/mlV8+i4QRCok80citt75k8vX3fOASAJ0E17O6f8Fw+qRpgCnk0sq7MyXytHAb/L/9+4/9ryqUuxJAZwqvoZnsyYekceiMqfyIMT9g0gB97Ngt1Te98df/JwCdINnOwNtNSQaaZB2iPNBuRZ4W7iNHTt2nSrkrA3Sm8LqpVO7kBTmAjhDGttJAF4tytHCPDI+yH3zbv/0gAJ1El07JM9Akn++K1AZajjHct5x48ZdUKnelgM523/VgKnusKAXQ2byyQAdBhAhNfnduLpdD/X2j7wSgEywnc/hDUgCt8BDQiMnRwn3brXecff09718CoJP81O15w0fs9L4w6edZSKu72EHgJ7+FG5u1Oc/vVq3slRxXzMPuv036OWZtqizQMqxScuLEqcXvf8Ov/BMALYGw1fNzht2baJdwnAjZTlZJoJeKpcQ/rA4fPvnbKpa9kkDXBprkTib+6dulaEt3cWkp0UDv33cofMubf/M+AFoi2c7g2w0zlew8OqveYgeERIiyZA9VP378RX+nar1XFuhM4XWT6dzJy0k+x3w6hdQD2k70Q6qnpzfq7R36OQBaQlmp/T+T5EvMpoly5e+7JNFA33ryjsfuvuu9AQAtoXLdd51JZY8ldteDnENQ89tQJ1OVanJbuB3bQSMjB96htIkhxeVkD/8Jtrrem9TzO3HiIGWUYFXKO5e+5o0OH0jk/NBstvvK6+/5wDkAWmJFETlB6UJih2VVy3MRZeoswF+ulun8/FQiy5tSOqJ6fVd/wbqIJnor0AipNcAEG8mtUkHgpgBo+R26P8nnx5haqxEZppnYRjHfd00AWnqgw57kwqzeuBLTMKLkljdDZ8Y+chyAlproMLHjK1VcKTDJDr0C9S0AtMw8szCd3Mql3vwM7tCJPj9KyVEAWmIx5ie2S8gQbWKqObSVeKAPA9CSyi09OMpvYYIfNkakXoUyEw403QNAyxtv35ro6EHB4sdmspcopjTYC0DLynNEjyU7HYiUaxdL+joshJA+AFrWyoVYwvMlBUNuExvJBtrvBaClJZruS3T4FxnKObSRcI8OgiAPQEsbcpNkN4CoF3Ej00AJB9pLAdDyOnSih33SSMGxJQlvFPP9ig1Ay+vQfck+PwUrVJJnZ9RyaILGxk/3AdBSAh0WEu3QRL2Y25Bg8Btj9EUAtIxAozCT7NqvXsQdMZb4OkVpsrszAegtU2g/0fvNUIYU7LZK/ppKjKk7/FNZoN3SRIaH3ImuXJGSq3Inf4sfQsKDALR0YkeTPvdBtcUNpKkZjIwA0LL5RMROJv8cFbRoI/lzQsMwHAKg5XsOJz5PYipOiJZAhAS9ALR0Dk0OJf8c1St3Cyd/ReIwDAoAtHREJ3/eK4uY+ktAJVBB4GUBaOkcOvlrMCvYa7Xs0pYTJRxoG4CWjuhkL99bO0WmpkMnfbSYWM53bPx0GoCWK4fuTn7IjZRsFLMdJ0p+/VBz9U+FgQ5ziQeaEVVbuRMPNKX0BAAtFdBBOvnnqGa3lYVtlnygyTEAWhK5pQkrYgGWAGhFH6jJf04xRvcD0PJoiOfQElQqRR3awol3aELCfQC0NPE2laLBg1GKQLsVcqs5/FNJoCPEpNiQjEVUSYfG2JLBofsBaHkcWorpcVGk6GwrM/mt3EEQ9ADQsvAc0UPJd2c1R4nVHNrAib84QvwMAC1PhjSUfKBVzlCTn0n4fhVGiknk0MPJzwrUnTmJsRklH2gXA9DSAE2SP9/VQOp6tAS1SqwWc2bs3oNQ9FIQHRaSX6EMZYHGphzmxxi9FYCWgWcWJn6+K1N4optpGIYkQB8BoGW4UVFgJ78yKbxCoClH+wAh4TEAOuFySxP9KOHL964UfaQuz3IQTWnyV7UBh0bRaBQlf0glYep2XBkGkgTocBSATjrOkkxcN5ChMNBy5NA85B4AoBNPtBwNHUzFrWSvA23KArR6wz8VDLnlGMfNokhhh46kADoM/QIAnfiQm0oxz5USdQeWmFiORrEg8NMAdPKBHpbhPJmh8L5WUSRFvfK8qgVAJ74uESkaOiKGIOTe/RzaGBs/3QNAJ5qU5C/fu/zgUdegDSTP8sSM0ZMAdKJBSf7yvbWKFKkbckcSBR+UqjWeWz2gWZCR4zxVnhDNJHJochCATqjc0kQ2QqEpR0VSeCtZia6M0uTvUqqzQw9HjEhxolEUKQu0aRoyAT0CQCdXo0iSAVgqrylmGvJUK0LUWs5XMaCjYVnOlKocctdcWo4u3jAM+lQqd8U61o1hOyXHhgiG8TxRG2gzYiz52TR36AIAnVz1YatXihPNZfvni6XpgqpAYwtHhCQf6CBwcyqVu4I5tBxKpboCy0ojZYHGcqwr5vuuDUAnV9I0cES87Av5IWWBNgzMJAHaHP/KfRYADUC3qnQuN8grvpqLBWJTniWWVBr+qVptkqlP0TRNjHK5ASWBNkwsEdDsKACdTElDRxRFtaWGC/lhJYHGpjxLLBESgkMnTW5pwpYJ6Otlb9sZlE51KQc0jz6kmX3CQ25lNn9XqdtKttg1f+OLwhDy/GJcICHHTiHLcpCFbRHX175Xy9WjCFFGatvYcldCoThCj38v/lVSJVkncMWhyX4AGvLnluv89S+ymV6EsYMoDeq/cRzWfK6bv7eLHwWUSedRyskgm4PcRMiJ/MBFrldGVa+Eqm4JlSqLYgGA5i8Om9I4NKXhMACdPEnTwr1xHLeB8vkhtLR0eeucFFuoK9+PeroGUHehvwZwbJXAsmtHLrs29Pf8CiqW5tFicQYtleYQoWED+YRMDh32AdAAdLzxd24QFYtX0OrFQAVkfd0jqL93hEM80PEwNp3K1Y6hARGRRhzqeTS3cBXNL17j4fr27i3DlrI3gfZ7AWgIuZtWxFiFv+TWAmDz0LkPVapzNQcWEPX3jCSon9qonZc4Du8/hRaWptD03GX+OlODfbMsWpb7EQR+VhUIVOq2GpQG6C3meOYLw7Xc+Lbjr0QDvXsSO+hERAp9/GFz8uidPG/ffPiqGMstD9BeCoAGh24lh65s9v2Uk0e20x6zaNe6/kvFaeQH1c0tXRJ5nqtMpAo59K6Z9Fa5dGOXQcIAlSuLqFxeqLVSe34VBfzw+bFdd5RhYpRKZXmOnOEPkhzKZHIol+tF+XxPrdurfhgqqOoW0fDwEYRXzYHmObQ0N4MxgsbG7x295+73XwWgAegmKhBzt/pZNrP9MtGii2lhcQotLFxFi0uzHNxKk3k8RZ5bqh3r5XDQe7r6US8Pq3t6RxoCfNUjS6oFHCilt/MXABpC7ngderu8eXbuMnrquw+taW4SobQf+Mj3PBE6csB9FBKCwjBEhBLEKF3/AbXBJjbGyLJtZFs2cpwUSmfS3K3T3LXTNYefnhHHpdrfv+XYnWhk5HBjuRw2pQKaMXpYBQhUAnpQnsrDvGbeJyAVMHM3QXPzszzMLqNqtYwa2mqaAyog98URbOx6Egv8ZbI5HvrnUV9vP7I59CHxY3xkJdWhyVEAOiFySxP9SL3VV7a+Xu7E167djA6J6aCl1ACq2l3IowY6e+ECqhLu3IQhysEK2c1GdUs4ND/SFgeXl1iO57o9ToT6bIpGnBA5/OFQ4Q8KcWTSaQ50czvFmJZpSgb0PgAa8ufmKg+Lgjj+zkJmBF3J34LYqjBdhN0vLFS3fM91ry1t8fNCykJvOZhGA1G5pXMzUCRZDh0qsZyvKt1Wko3FjSce9XF2DcxxqOQT5EVO6xXLkiuHDkMyBEAD0E3m0JHSK34up+pyOTQhfjcAnRwNIlCyKpYRSVW3wjDoAqCTo1GZTpZFjKkOtGz7ggSBlwagwaGbDEfVd2jZGsWCQI3lfCGH3p38Un2iIyYZ0L4xNn46D0AD0M0AbSgPtIQ1izF6AoodQm4AerOKJWHNopTeBkAnQ1I1ikUIqQ+0gaU7Z8bk3/xdeqDd0oSYQJyRzKEx0kCmZDbNHfogAA3u3IxDm3oAbUVyAR3uAaAhf27Goi09gJYrsyCEDALQuy/p1lTmtqVFyG3ZdiQX0P4AAA1AN5ND20gLGVIBHYZhAYCGkLsp89LCobEl1RDXIPByAPTua1TCc3Z0ANow5HJoDrQDQINDNxNyawE0xlgyoF1z/Cv3mQD07krGlSa0ADqSLIdmjInhn7cA0LsrGVeaSOkAtCWZQ69AfRyABqDBoTfLoU1DOqApJeDQuyW3NCG6f6TaClSLqZPXK5dhygj0QQB69yRfgxjSR4Yp3xwUDvQoAL17kq5BjDt0oAvQMjo0IeFeABry50aA9nUB2jAN6Sya0rAXgAagAejNKpcpn0OHoQ9AQ8jdUA4dauPQEibRYRjkAOjdk3yNYkyfHNqQcF0W2ZfzBYfuuEOrv2vGjcqFDenql+9XLQAacui6xaJIn5BbwnMmhKCx8XuHAGgAuk6Ljqg2Dm0aUtYvxugpABpC7nodWpuQW8okGtUWCzwGQO+OpFsyJooQ04VnWR2aA30YgO6w3NKEaOGWrgGDRUybkJsn0YacQIcHAGhw5zotWp/h3LJtWHcTaDIMQEP+XG8OrU3IjSQFmpBwBIDuvCTtWtBnvpVhGJICHXQD0AB0fQ7NdJpAKadDh6FfAKA7r1EESrhFy5ld+L6fBaA7LykbxRhjJpCedIf2bAAaHBq0ThaWc8cf33eNsfHTWQC6s5JyYzGmyUZ1sotHUicA6M5qGKqdBC5tOZICTU4C0AD0jtJl14zVlyzjSVNKjwLQHZJbmhCrSmSgdidftuNIecncofcB0J2TtA1i3KHTOgEt6YQrMS8agO6gBmWu4zoBbZq2lJNRKA0HAWjIn+tRRiugJX18hWEwAEAD0PXE3Fo5tGVZTFKguwBoCLl35hmhnE5AyzpbNAz9HADdOck8SkyroZ8WtqV06CBwpdzyV9ZRSzI3isX25M+ERZQh5bXfi3z0qoOtpX9d2EMopqYsWR3a910TgIYcuqPq9mdrxwa1OnQlxnZpC8uZQzPG0Jmxjxx//T0feA6ABqA3ryQx7Q2dclJo7979bT/fdCaO+QmGtI2AHOrj/AWAhpB7q/izRnTLFdy2bdTf1y/FJWNsSrvkEqVEuuV8pQPaLU2IgLJPUocWCW/Tq2F0FfrQoYMv6vh593S39Pw0JAb6MAAN7rwt0628OZfrrh0yCVs4khdouke2c5axJU/aFRm5Q1eRZjKkduhgLwDdfkm7kRjSagnfFaCxvN3uhJA+ABqA3s6hPf0cOjLlBdrvBaAh5N7GoJF2Dm2aWNpzD4IgL9s5y9goNiAv0Cyo08mXf78D22CJLKC10VyRsjl0GPopALr92iMv0DuTI2C+OjtX+/rK5GOiYaa9YSUN0fT0+Xbm0NIC7Xll6ZbzlTHkltahOaxh4p7o2EbpVPsmFsmdQxM0Nn5aqoYxGR1a4hy6sbGfoyO3d+S8+geOoZmZZ1pzhi22gjax3JPLGKNiJM9XAej2aUhioBtKijvVoJTL9KElOytaddtBhNREU0qPyQS0VIXtliZEPibx4gbJHTRVyLdnvouB5V5DjTG5hn/K9vQU+bO0/SBRggeW5HIDyDDirw4RknvJJULCgwB0+yTzOG4URcl1aNO0UC4b/wwu2RdQ4w49AkC3TyNyA53s8ysU2hF2y+3QYUiGAOj2aUjmysESvuKnbWdRKhXzXueG3HuFyDb8E4DurEUn3q3ibhwzTbmD7jAMCgA0hNyb8yzBIItMphdhHN9+eqYhdz90EHhZALp9krxRLPnlbRgGyufjLWbTNGUG2gag26dRuYGWY7P3fG6oBnZ8QFvSJtJiOd+x8dNpABocWtryxtjmoXd8Q5ixhaW+aVHEboEK1h4Ny10xImnCtzgbxzDGUjd1M0YBaAB6E6AlGuWWSuWRY8fTHmQYWOqFHQghxwHomOWWJsTqEbJvli7VhPl8TANNsGnK7tD7Aej4NYrkl1TJpBgKKoaEtu7QcgNNSLgPgI5fsjeIiRxaqs3exWSNfK71Yjex3MPFKA2HAGjIn6V36FrYnW+9LmMTy+7Q/QA0AL1pFCvbCVtWCmUyPS06vdwOHQRBDwANIbfs5X1DrXZhGVh2h/YzUMHil+yjxKQ993S6mzt1uoVKJvcEDd93YaRYGzQgNdCShxaFFnJpA8vdyu37VQxAg0OvBZrJvVFdLjfY9BJFsjs0YwydGbv3IAANOfQqh46ozOcvViAV6441I2wZsgcoYnDJrQB0vJJ9HLf0W8k22zgWRaahANBHAOiY5JYmxIz7HqmBRvJvVGfbGZROdTXu0Fh6nkVf9DEAGsLt1XmYElvJ5guNN44Z8i/+KRbc3wNAx6c9CrCgxFay2SaWKDIUsGhKw1EAOj4NSE8zYz5SQkbjw0Ej+R2ah9xS1MEdp9LEuRRNCzn0iAIkREgRiQkbxeKVugfLYMtUAOjmhn/Gzc9OZS6LQw/JXiEoiwJVgBZLFGUbWaIoYtIDHYa+FMv5AtCg5ly6gcUPsCV/Dh0EfhqAjk/Sh9w8hyYqAZ1y8shx6ps8FiG5t5QV8ryqBUDHp0EESpzqHWgifwZdy6GNsfHTPQA0OPSyQ0eMqQZ0NttX1xJFMmwwUF+URU8C0JBDX487DdWAri1RVMcuG4ahRgM/pckfz514oN3ShKFCyM1knhC9jcQuGzs7NFPiYcYYOQBAx5M/Sx+yRZLvk7yVlpco2n7HVcNU41opJYcB6HiAlj/iZmoCLRT3FrQJBnoEgG5dI0oAjZCyQKfTXci2t+6mtTBW4joJSf5yvjIArcSgEp5CY6Sw8hq4dBgGfQA0AC1TWTetXHZA7GG1Ta7tSN8oyB26AJUMQu7rDm2pDLRYoii/zRJFSZjk06qCwM0B0K1rQAmgJdw1o/Gwe+tgynZs6R3a910bgG5de5QAWqK9oZtVbYmi9FZLFBkqAG2Of+U+C4BuTaqM41beoZddevPGMQtbSgx9TfrwTxmAVqX5NKUD0NlMz6ZLFBmKdNoxxo4C0AC08o1iq9DddJcNE2MlHJqQEBy6WbmliYJCzpZGmkg0jm1s1Vaj146H3PsA6OY1qlA9d3QBWkypzGb71+XQajg0pQSAbkEDCtXzFNJI68d3q5JD85B7BIDW3KEVnTm5fTji5NYsUWSayuTQfQB081JjphXSU2tcWhGLJsTvBaCblyot3KGOQIs8+voSRdhUo1EsCPwsAA1AezoCLVq6rw8HNRRx6CDwUgC07iF3hLR06OWwWwBtcKdWw6E9z4Whny1IjUYxFPm6Ai1GjYnRY6o4tFhefWz83lEAWmuHjrR1aCGxy4ZpGsqs2EIpfREArXcOrTXQYpN4E1vK7BzCGD0CQDcotzQhGh+6FQGaIM3lONmSOg5NjgLQmobbAPSyLMuhCgG9D4BuXMqM42YANMJYnenglCZ3+Cc4dEccGjHtgTaxMoskhiEZAqAb14g6QDPtgTaxpQzQhPjdAHTjGlIHaHBobKnk0EEXAK0x0EzH6VYbQm5LmRVbgsBLA9Aah9w1j4aQ21YH6OQu5wuNYp1waKY9z6KVWyGH9o2x8dN5AFpbhwbZ2FJqxRbG6AkAWtscmpnaE22YSq16Sim9DYCuU25pQpyXOuuJQcSNLEutVYwZI4cA6MbyZ2VcjWmzJvc2Fc1Ua+MQ7tAHAej6NYBA4NKJBjrcA0DXrz0qVWQdNqqrs7opk3wQQgYAaH0d2gCYhUPbCgHtDwLQ9UupLivu0GnAWeTRhjJAh2FYAKDr15BSQAPLK0BbysyJDgIvB0BrCjRXFnAWXdHqZB4caAeA1jTkBi0LY5uoA7Rrjn/lPhOArk+DKlVknkPnAWde2Qx1sg/GmBj+eQsAXZ9GFavL0MqtmEOvQH0cgNbQobnAoRUUpeQYAL2D3NKEWN4lBdVFPVm2Wg7NgT6cuDJOYDkNq3TTWQfWNrAwvnFgbNZ2ejQNU/T71ragMVZF/JH4T6yJxCIxCwxRngtSyhBhFBHCD9q+niVDsR48DvQoAK1fuB1vHsphdWybH1bt1eYQx7lvlIBdQB2EhB8h8vlBY1rj0LIspRyakHAvAL2zlGoQY4yJHSNaGlUk4M04KZRyOMBtnuAgHg7iM8SRyywPcBOAe0GAXD+oQd78w0KttkFKw14AWj+HbirMFOFzLp1GmXRq1zdLF+eSz2Rqh3Br1/dR1fNRSBozXMuyqUo3Ngx9AFrDHLrCX+pe9lU45EB3d82VkxryX4dbAD27uNSRdoJkAh0kbvinCUC33Z8bqu3GSogtg0RYTmn9W187jloOncTlfCHkbrtDM7cjzw3ukpSEKOSAkTAQ7sE/m6KIMkQRQxGLxEgtfmBkYJNHAlh0I3EoU2IjOf7qNNW4Nj3zDH9iYTQ0dKL2t3WS71ctAHpnqTVKLGpPV43rlVFxaQaVKguoXF5ElcqSGIrYwl80UD7XjfL5PlTI96Ku7gGUzdTXlhcEZVTb7WeHDen4g0Op2JzwlGNs/N6he+5+/zQArY9D+3FCPDl5Fs0vXEMe/3ozl464K1O6/FrLbVcO8bOaA68cpuifNsxav7Vwa/HtcmWxdlybWv57KSeDevtG0N7RYyibjWE7pzj715Jyfxk9JQIVAFqTHDqKcTDF4uIMmrx6dgVexl25hEqlReRWyqjqVngI6DY1aFyAn0pnUCaTQznuyrku7tS5LuQHLrp27TxKp3KxAG3b6q3ERCkVwz/HAOjNHKg0IRoZulS64YxFYdx/Mwh99MR3vsGpZuuCZh4G4hQiZrr2Sk1xWGIiMmJi5Bj//arrI4Ofkh0FKIVClI18ZPPX0PdqR3FxDqGry2Z664tewWHOxHbeBlLPoTnQiRr+mTSHVnCUWPx9OrW97zicBKfRXOEoqqYGUGDlluHdwaO/c/FR7ureyr9EzptFNg+7uxwT9fEUdzhF0LGMy4EPURTzMFDLdrB6QIcHAOitpdq0SeHQbeuqmc8f4UC3PuEnpAzNueJA6Dn+QOg60o/2kmuxn69hIAUdmiQqRUxaP7Ry63FHsKLYqhw6pVwSTUgIQOvk0FEUMUB5pbKJZnXlgA56AOitNaQe0ADydWHbUW6eexj6BQBaK6CBaJUd2vf9LAC9tUYUBBrWE7vu0NjOqHZNYejZAPTWGgCgVQZavbHevu8aY+OnswD05tqjHNAKbYvbOtBq7qrLGDsBQOvj0AD06gpnmgoCTU4C0OvkliZEPKbcSLEIRRgwXg20pVwrYZKGfybpcSncWb18M0IA9Bqg1SsO7tAHAOiNGlKxAvOQ2wKMb8qysHIDbQgh+wDojVJyg7oomVNUd02GYSoYcoeDAPRGqboetwMYr6pwWD2HDsNgAIDWxKEROPS6HNpUEeguAFqfHBr26VolbGKqHtB+DoDWBGguGzBeHXJbyjl0ELgpAFqfkDsDGN+UgQzlgPZ91wSgN0rVRjHIoVeH3Ao2ijHG0JmxjxwHoBV3aJg6uUmFM02q4nVxqAFo1XNowHmTkNu0lFzBhVJyDIBekVuaEMu4KNdfyx3aA4TXVTjDUBXowwD0TQ2reJM50CEgrH4OvQw03QNA39SgokCDQ68PuRUc+rkMdLAXgL6pUSWBRogAwmul4uQMIUJIHwCtukMzcOgNFc5U06EJ8XsAaNVzaARrcm+ocNhWEuggCAoAtOJAMxYFgPC6CmeouWZiGPopAFrxkBuBQ2+SQ1tKEu15ZRuAviklG8XasZWs7DJMNddMJISgsfHTfQD0sgZUvMkRDBbbIGzZyq6xxhh9EQCttEMz6LbakEObym48QCk9pj3QbmkizV/yUNX1kG3Zys4P58/vg+DQirZw125wxCDk3phDK+vQhISHAWiFgYbd3jdzaEfZJZm4Q48A0OoubMAdGnjeLIlW9dLCkAwB0Io2iIFBb+nQWVWvjRC/F4BW2KF5Cg0b1W2SRqvr0Ls//DMJFW4EKq8+ctRNoVEQeFkAWt3le0UODRvVaSQOtA1AKww0OPTmsixHycYFsZzv2PhpR3eglQ25oyiCRfY1UxSxk7oDrW6jWLJWVU1QHu0oOwuNMXqLtkC7pQmsNNBRBDtPaiZCyHFtgVYZ5gRFQIkTtmyq6rVxh96vc4UbUrzupgHfzWQoO+KGkHCfzkCPKF1vodtqU9mWpey0UkrDIZ2BVjrkjmDnyc392VC3N487dD84tLqCnSc3q3Smug4dhkE35NDqChx6c4eO1AXazwLQaobboK3CFoVzaN93d7UhdLdDQpVHibX9MwaLT6P+0nNr3S9iyIy27hW6TUzw22mSH1lqt0VH6gJd3dWG0N126AGkLtFt72sV8GIWrjnMKPldvNi0FO6HZujM2L27trbYbjv0HmVvbBRV+Utb5semnDR62Z13yZtDm2pnJIzRW/nLBXBotQRL+G7p0DZTHOgj2jm0W5oQmZyyY51ZG/aGHhk+hIaHDnTeUWNeBsw0DaUdmpDwmHZAI8W7rKIoIvGDZfBD/sFnlmWp7tC7tk6eCUC3DWjYebJDjp9Ah96jI9CjigNNAd0tcmhsqR5yD+gI9IDiQMPOk1vm0KahNtBBDzi0ankUOPTWDm2pPcQ9DP1dW853N0tW7ZlWEWoKaBGLLpUrta+XildEA0uy3Yg2HogYpql0Eh0EflpHoIfVBjpiTb4PlV239vW1mYuIUvXa1ixsKw2051UtABqA3qB8fjDxDn3DdRtoucaKOzTPoY2x8dM999z9vkUIudUBuuWW3O6uvYrm0Lby88T5g/gEf3m4058LjWLtAhrB1pNbVjoTKw80pfS2XSnb3fhQtzQhJv7n1H5CA89bO7Sl/AYEjJED2gCtev4M2imHxsqvV04pOQxAq/SEjiLY12rrkNvWAOgRnYAeVL7WAtBbO7T6KbQY/jmkE9Cjqt9Q2Ep2O6DVL5owDPrAodUSOPS2YbfaLs0duqAT0Mrn0LCV7E5Am0p3AwSBmwWgwaG1kWWpPYXS911HJ6CVD7m5Q6cAW30dmgNtjn/lPksXoJVvFIvAoXfKoZnq18gYPQkOrY5gG5zt8hHFFwpcBpodVR5otzQhwpABHeosYLutQyu/AAQhoRYOrYM7ixw6C9huLWwaOoTc+3QAekiTOmsCtts5NFbeoSklWgA9okmdLQC22+Qjhql8Ds1D7hEdgB6A6gzCtkU0ALpPB6D3qH4jGaxtUEfFMzRwaL9XB6DBoUFikQPlc+gg8LM6AK18Ds0YKwOyOyhS36GDwEvpALQOrdwQc+8gSwOH9jzXAqDVyKErgOxOUn/cDWMEjY3fO6o60Op3W0Xg0DvJti0ttgqilL5IdaCVHynGIlYFZHfwZ0OPkbGM0SPKAu2WJkS/HEz8ByGM9agGlJKjygKNNBn2yRjzANkdHTrSBOh9ALT0KTRoxxzacUw9gO7s8M9OF6oW47gZiwJAFp57QmFIhlQGelCTugomvZND2ylLh+ukNOhWGehRHW4id2gKyO6cRutwkUHgd4FDg5SX46RsPYD20ioDrcUmdSxiDJAFLQPt2gA0ZNDq59BOKqMH0L4xNn46DyG31EAD0ZBDr4rYGD2hKtCjmgANK37u5NCWo80iipTS25QD2i1NiBuYBaBBNXs29CkixsghFR16WJcbGMGKnzs7tO1oc63coQ8A0HI7NAANWgV0uFdFoLXpg+YODZu91yHLcrRoPSSEDKgI9Kg2NTWKAOh6Kp+pRyBDiD+oItDarPYZIQC6Poe2tBiAE4ZhQUWgtXHoKIJFHOqsflqE3EHg5SCHllsAdB3CFmaaAO2oCPQwAA1aLcMwNQHaNQFoqUPuKAW41pFDY6zFNFPGGDoz9pGTqgENITdovUNrM+idQ31cGaDd0oSo4DrtaZUGXOuofCbWZiEISskxlRxatw3qwKHrAtpkGgF9WCWgddnkHaZONiCMtXLoUZWAHtIGaOC0/hzaNLQpLkI6M54bgI7foX1Atc7KZ1gaOXTYqxLQOoXcsCZ33SG3Pq3cYRgoBfSgRkCDQ9cbchuY6QO0n1MJaH0cmt87QLXOymfp08rdqeV8IYeOG2jYBqduWSbWJuT2/aoFQEvp0BEBVOusfKY+s0wJIWhs/N4hVYDWJuRm0CjWCNBa9fIxRk+pArQ+47ijCHbNqFMYY61WR6WUHpMeaLc00S/SJY0cGkLueisf1mthFw70YemB1il/XjZoBA5dt0NbWC+gw/0AtHQOzWAr2fpzaM1CbjKiAtAjWtXSCIZz1+3QlmXpdL2EhMMqAK3V1Enu0AB0vUCb2NQL6KBHBaD3aFZPAeg6ZWFLq3njYegXVABap6WHEGOwUV29MjDWKuT2fT+rAtDDmtVTcOg6ZVuWVks1haFnA9DSOTSDjerqr35adVv5vmuMjZ/Oyg70IFRc0GZyHEe7a+YP/FtkB3pUqxsWRRagWncWrSHQ5FZpgXZLEyK8yEDFBW0lXbaUva52D/9st0OP6lZBoyhyAFPQNg59QGagtcufoYm7YYfWauw7IWSfzEAPawd0FMGuGY1UQM36BCgNBwFouQQDSxoQxrZWk1nCMBiQGWgdu6ygERAef9sB3SUz0No1ivGYGwaWNCDbsoleQPtSDyzRsVEsC5g2WmT6KAjctMxA65hDg0M3lkNr5dC+75oAtFzKAaagrcQYQ2fGPnJcVqBhHDdo+xzatkMNoZYPaLc0IaaK9Wt1o2BvaFAdopQckw5oLd0Z1uSGHLo+oA/LCPSIbjeKO3QFEG1MhobDcCile2QEekjD+gkO3bhDU/2ADtsGtAVAx+rQVf7S3VmHM5BtYbHgHj9MsZImP0xkmgYy+c/Ez9fYYFQbby5WJxXrnyHKGD8oIpTxg6KQkNrPO3b+pn7zWQgJ+2UEWruQm5PQdrcR8Dq2vXxYAuIGV/Exlv8PbxOcUQ53QEIUhAT5YViDvH3XYzP9gPZ7ZARau0Yx7tB+Oxw4xeHNpByUcpya+7Y/DDZRBqf4Z6aWr4u7uBeE/AhqR7wOrl8SHQRBQUagtXNoXs9jc2jhwLn0MlTGLrccmfwhkuXnIg4Bs4C64nnID1rvQrYsW7uQOwz9FOTQUgDNWq7hAt6h3p7GQ+kO5uziISMOynPu6cWlmoO38Pe0s2jPK7dtOV9o5Y7XoVvOB0XttiTZZhXz8wzD1nrqLNvWrZqIVUvQ2PjpPgi5k59D79ogCcYoD4FdRMJAhHRiHyVE6HKLNWNkVfhs1VxWtIZbdoqH9s7yq5Pm32u8OszOnkWURWhk+JTYTRIcuv77dRt/eVAmoAd0u0lRh/p7xMeUywtocWkaVcqLta9dv/UxLalUDhVy3ShX6EXdXYOoq9BfV/5OiLcySK5xoC3LwToCzdOVW6QB2i1NDLb5YZFUoNvabVWtLqGLl55GC4tTNQfe8NQX/cjclSkP6UTXE+OnE9GotsOtGGduii5pnmUZWPRP4+V+a9GHzZ0ZWxby+UNBHLPzkyshtY16egbRgX0nUT7flghRNLhpOd2UR00HZQq5B3S8Se126KXiPJqZvbT8hOfQVqoVVK6Ukeu6yPPcWiNV02DxfDiTTvMjg3L5PMpm87Xvz81NogKHuV1AW5at5cYEhISHZQJ6REugUWdC7ioH+bnnn+VuuzYcZtx9fSuHKHdcYtr8cBA1lm+xeMW1AII7NX+1WYAwC5FDPX64NXevVCq1Y3ZutvaeQ4eO8rC7vTugmqahq0OPyAT0kJY3qUNDJsXnCJh9K4umsgdR1e5CoZlCURNsTE1dRc/zh0PesVFfCqPhDEK3dTGUQTykb//ANx7qOykd60oYkiEAOvkW3VEtpEfQYrr1RWFEplDyw9pxoYjQcFcf2ofmO3IN3KA1Dbn93raUJ4TcsTonrCfWqENjS1OHbs/wz3ZVQD2XHoIVS5oAWsteK7H5e1YmoEe15BlFGBBt2KG1vG7f92yZgNbSoWttVaDGK6GGXdFiOd+x8dOOLEAP6wk0bPbeHNBWpGd9YScB6ITXTcCzqTxaS6AZqw3/THYFdEsTYqF5LTds4w5tA54AdL0ihBxPPNBI0waxGtDNzE4AiXHlWi6uyB16vwxA67xbRgrwbKISYlNThw73yQD0sMZ1Exy6mUpo6unQlIaDAHSyc2jYSraZp6BpUh2vmzv0gAxA6xxyQyt3UyG3paVDh2HQLUMFHNW4bsJWsk3IQIamQPtZGYAGhwY1FnJjS8uQ2/fdNOTQyc2fgcxmK6Gpp0P7fhUD0EkFGrhsAWhd+6EZOjN278GkA63nxAzGYCvZZnNow9R2107G6K2JBdotTYjZI31aAg1byTafQ1tYZ6APJdmhB7S9MctbyYKacWhkapuxEBLekmSgde6yAoduUpbeDj2aZKCH9L0xzAU0m6yEptYOvQeATmwaDWouh9Z31mncwz/jBnpE1xvDHdoDNJvNoQ2NHTroSTLQA1A9QQ3n0Lat7VpsYegXkgz0Hl1vDGVRAGg26dCGvmsrBoGfTjLQ4NCgxh1a0y1lhXy/aiUZaJ1zaAJoNu3QGofcgTE2fronqUAPQfUENSrbtrVe/pgxeiJxQLulCfGU1XbqJIsYDCxp2qFNraedUkpvS6JDi/xZ21wIds1owaEtJ63z9fNs7UASgdZ5YQMxHxoGljRdCw2tH4aUksNJBHpEa6BRBA7dvEPnNAd6JIlAa90gFjEAGtScCIlvOV8AOjaHhhy6WTmO3vsThGHQDyF38nJoWGQf1KxDF5IItN6NYrDiZ0uyLEfbRsUgcLNJBFprh0awN3RrFVHjx6Hvu04SgdY9h4aQuzWHZhoDbY5/5T4raUAPaw007A3dovRuU2SMngSgE2YyAGXzwpaeu2fcBJodTQzQbmkiz1/SmtdJB7BsyaG1HmlHaXgiMUAjvVf7hJA7BtmWRfQGmu5PEtCDUCVRCoqgBX82TM0dmuxLEtDDUCUh5G6pIppY6xyakHAEgAaHBodWB+i+JAGt+9RJILJFWRYmegPt9yYJaK0bxQDnWDxa62IMAj+bJKC1Xu2TO3QIQLYmjPXuhw4CL5UkoEc1Bxp2zWi1ImK9Hdrz3EQN/dQ8h0a7ssi+EW0c/mzwBABHpO7D5hylHHvNYe4CW6Zhab3IolgFemz83paNMa7hinqP40a7s2vGcOWF2tGq7j64/oIWOg+0aWrfFEEpfRF/ubqrDu2WJkT/a4/WQEMO3bJ03iP6pkvTI0lwaO1HiXUa6Hwuj158+x1KlaFhwOxTSknLEzTiyKFhHDc4dMvCGEPIHcPwT3DoeIDuSJfL6MhhNDJ8aBfcs/1zlU0TGwB068M/4wB6RPcbwToEdKfg2hWHtiDkDkPS8qo/cYTc2m9QF0WIIlBrQJtY+0UWKQ26AehEAA0b1bVcEbGlPdBB4HclAegRABoB0C2H3CYGoL10EoDWvlGMwXSrGEJuG4AO3JZXvYFGsbg8Ora/FKGFUrn29cLixdqQwCSLkHgGyZmmZQHQvjE2fjp/z93vK+8m0Nrn0IzFZ9DiL1W95bkes/OToqFEk5Abw5pstbpExWKB39wVoN3ShAEhd/s0NHhCmsUTuMO2BjTGsITTMtC37hrQKzBr3zrJItaWMrDtjDZlaBrg0EKtbv5uxgA0CJrEWg+5MexTsAw0PbCbQEODWM2hYSvZ1oGGIlwGOty7m0APwS2oCTZ7B5eORYSQAQB6tyPuKIIGnTieigYsckCIP7ibQEPIDYpNlmVpD3QYhoXdBHoAqmEth05DKbQuWIZIAO1ldxPoPVANQfEBbWk/Jt73W1vOFxw6HmWhCGLIoU1De4cOAtfcTaAhh16pi1AErQubtvbzyhlj6MzYR07uFtDQyo1qrdw5KIU4Qm6YhroC9fGOA+2WJkRrHDQGxfNgBCHYDue6KCXHdqMijkLR3xA4dDyZCwyiRa2N524FaGgQA8Xr0LZFoBRqQI/uBtDg0KjWBw2FEFveAg4tREi4ZzeAhplWQlAFY5Nl2eDQNYcO+3YD6GEo+tpc6BKUQkzPRng41hSGQS8AvYtMQxHE5tDQyl0D2s/tBtAQci/n0FUoBVCcamU5X2gUaz1OhEAxJtk2OLSQ71et3QAaHHrZoV0ohXhkwADamgghaGz83qFOAw05dM2hoZ07vhzagbK8bhSMnuoY0G5pQkzx6oZir7Vy+1AKoLhFKT3aMaAh3F5t0NDKHVsO7TgQdN8E+kgngYYGsRuhUQSDIeLKoWEa6iqgw/3g0Lvj0ZD3xZVD2ylYy/cG0GSkk0BDg9hNh4aulvgcGrQiQsJhAHpXcmgw6Phy6BQsh3wD6KAHQu5dCbgjaBQDk45dYegXOgk0NIpBBt0Oh4YVcFbk+362k0CDQ990aCiEmGQaMFbspkN7VieBhtU+bwINlTAmYWzDcsg3HNo1x8ZPZzsFNKz2CUC3AWgoytVijN3SdqDd0oR4D6wndh1oFMGKn7EBDY3ca4Emt3bCoQcRLFu7yqGhLGLNo00ozuuilB7uBNDgzmtDbhjdFCvQsAPlKoc+0AmgYYO6dZEiFAE4dDtECNkHDt15h7ahFOKTZcEOlDdD7nCwE0BDl9VqoMGhY5VhwB7R1xWGQX8ngIYuq7WCptk4Q26MwaFvAt0NQO9ClAhFECPQhglA3wDa78jAEgi51+bQMP44RmGMYTrqioLATXcCaBjHDQ7dxhwaQu7rEsM/waE7Lxh/HGfIbULIfV2MMXRm7CPH2w005NDrokQogjhDbgB6HdTtA9otTXTxlxQU8438GQohdoeGHHot0ORo24CGcHsd0FAE8efQEHKvESHkSDuBhgaxtQ4N2+DE7dDQKLZGlNI97QQalh5aCzSsyQ05dJuBDtsKNDg0OHR7Q24DQyazJuQO+9sJNCzfuzaHhgacuENuC0LutUD7PQB0h8QY86AU4pVlwuSM1QqCoNBOoCHkXsc0FEHMDg0LHKxRGPqpdgINjWJrHDoKoBTiBhoWOFgtz6va7QQaHHptFg0OHXfIbcHSn2tz6ACNjZ/uaRfQkEOvdegQSiFeGSaMpN1Yz+iJ2IF2SxNiKlcXFO8qf4bBYrELWzbE3BuBPho70BBub1bQDLqt4s6hDUiiN6lnB9oBNDSIbWrSoHhzaBvml68TpeHBdgANq32uf3JGDBrF4nZoaObeBGg63A6gwaHBnzvg0BZMz90ANBlqB9CQQ29waCA6bhkmBodeJ0LCvnYADV1WGwwadp6MW7blZKAUNuTQ3bEC7ZYmLO5Hx/iXRSjeVUAzALodaTQUweo2BUtMQRNri9W1uMiOLYpu8cGhMLj6BA1nechtIMvuD7HVP2uYjhgBoPX6YpEoEFCschzYt8BxUpGJHbK4sGBNXj1nPPvc03u6uronv/DF/+et/Mdf2BZow9i6TlaLX3sx8S//I6VL2etVmISzNj9qDWQYFxh2huZNM+Pzui0mYmtVwWHnybZk0VpedTqdo5QhNj11zZpfeN5Yv2dasbhkfPnL9z9AafC//cBb/88/abj0qsWvvC30Xvg0Y25d/YKG4SDLGSliq7DEAwXRgKb8AvRT8wuPEUrvAAjj1Rce+GRESKA82dlsV+h6vjF55ZJVqdaXzVrYQnfd9dY/+Oc//Lu/VjfQ1aWx/yPwz98XsWYL1US2M+yZVvecYdjC3XtVvCHX5uafpIydAgQB6HqEsY1SqWxQKhWtK1cumkHoN/d3TBN97/e+4f4ff+fv/8iOQFeWvnRv4J57X5xTfbHVR3nuzfPuFP+jhjL92Vfn5r/LGLsVEIxXZ758P3XdshLpjOOkI9O0yezcrDU1dYWH0vFx9Yo7X/PIT//Ux16xJdDlxc//j9C78La2Zkg4G9n2yIKJMxXu5AJuaYf6Tc7OPc9znaOAYLwaO3M/rVblBTqTzdMwZNH01CTPh2fb+lmnbnvppZMnX3r47rveW5tXUIPJLT3oELLwCIf59nZfbESrRkDPiY7yPmTYIjSvmLiwYBiWmPOZly2KAvzaUKiWTWUqWzFaNZXOh57rmZcvX8CuV+nYuT/51KP7Xbc0PzZ+79577n5/2eIwD4TB1OM0nOn8IvpRiEL/co5/lVvuEhsMsN3L825HtPDJMHYchilqKtt2IstOh8WlJWty8gUzJIG9W+dy7vzZLs+rzn35zIePWySYepLDnID+ZNElNu3wY7lLzOpi2B6aM810kNgusSiCmUHtgMWyxcIRieuQTqWyPAHGdHZ22pqaPsfrI0vMOU5enXQefvjMc5bljAyZVtcMI2XG6NIgY14iRupQUjT5URs/bhhpZDnDS9jKF3mAM5QUZ4w06JrTXdlsgfgBQZOTV6xS6axgI1Ej2Rwnhbq7+8NMOoMdx3Cs5RwgO2g6ondpCDFamWK0bDBaHEgK3FHk8dD8Qnfoo+6VLjHXtHp4aG6JnLtnF0/Nhirfhhwa27u2I4lpYpTm+XC5XMaTkxdNz3cTF4XZto16ugfCTCZr8i+xYRg36uGGkzVxbpgfSMzF4HBf43BjRhc53EnpF2QoDK5mUHB133Jo3k8su3/OMFNi6lOn2wHAoduizlY10bWEsRMuLCzYk1fPGzxUTdyDWgwo6ekdJNlM1uBOjLcyk22fPhzskWW4hXNXOdwli9Kl/oglp9OfkjmLH8Mr5xtZ9vCCibNVXilGUBu7xGDiZDsdyGr74oupdJZGzGTT09esufnaUEsniRD39vWTdCrPHzq1Ydo71uc6K7xxA25r2bknuXM7hC72IxYmBm5+Xje6xEQUYjkj5eUuMSy+l4s3DQCk22fQRlsKtzbU0vWNq9cuW+XyknA5nDyIMXfiPu7EXciyxEYiRkOm1ISDCbjze/ixAnf5Cj8yHO5exEhi4I5qXWKXRI6dX+4SGwqw3TNrGLXpPAMxfABBEg+KSXQObVqxLL4ohlqm05mwVCqZly9fxEHo28m8XgFxP81m8pGAGGOz6XrVYoUUcBf28oP/oZHrcGdJyOFGSdppVXSJTTn82LOcd/cwbA9c7xLb21Q0sLzzZAHwa4dBt5YPi6GW8/Nz1tVr58RQy0RCbBqmcGIOcYHxnNg2zXgWJI/RYVbB7QxHlJYnoxrcC71J2wKKkkWTHze6xOzU8BKPOBrqEuMRNyyy3y7HwnZDDp3J5GlIGJu6dtVeWDxroIT2PgiIu7p7aS7bxSE2bYyN2MN+q12njnHXXoR5HmCPMMo43KScJ2ShJ2lwiy6xwLsglnhZ7hJLjbgmFrPErMLy97by/MgH9NpUe8ztc2gx1JJDHFaqnjl55SKuLk/kwImFuKub5fI9NOVg7sSorefa/hzQ4LEE7tpXg9vhcNOSCMu7uUN2JW/zRsbz7skMQpPLXWJ2P7Fqq7OkxFN/eO2DALbBaVultCy28Xt2ZDuZcGmpaF2dvGCGxE/0GICurl7WVeimlmXa/OjYgJTONuoIuK3u/fxAtjNCeFh+ldFSDyVLhSTuzErDOYsftb5tHpJHlj00b+KsK4aiAtDtT6KXh1qadHZuxpqZOWcwxhK9PlF3V1eUy/WGjmM7loV2ZVTZ7rXSGti6DrfljAYc7Oll504m3GL0XEDL/cv1zUYe6e32/eos0Be/CoVCdn6xiObnkjfUcuO5dkWFAofYdjjEtUUjd/Whk4huF8PADrZ69vFDhOUCbjH8tI+H5bkk3kRKCXr+hSf7AuLBCpVte4ISkUcnctWSQr4gICaOYNhCKxAnY1xC4vpRDcPicPdy5+694dw87+5nZCkx6zVPL9IqhzkL1LVPd7z0xdGZM+OJATqfy0eF7r4w5di2hY3EtqQnemDECtz7BNyRE7rctWepmDRCirsGd0iMaGruKsDc7ny0J2ceOHCIXLz4wq7V0Vw2F3V1CSdOWbZt7Ho4LT3Qa+G2M9edm8NdYaS0QFlJwN3RCRKXZlyPMQa7O3RAt506jq9cvoRoB3ftzWSyUVehj2Qy6evhtFQz6qQcusjhzmG7L4dRH4c7qHK45zncg/y1rfOky55JloozAHPH4HKMk7eeDJ988sm2QpVJZ1EXD6fTqQx34kg6iKUHei3cThbb/VmM+gXcJQ71Eg/Lh8Tkkbg/6/L0PFDWYR05us8+9/w55HpurH83lUqjbg4xd2RsL3cx2SrMoVNqcgGHu8DhFgeKmL/EaKlMKXfuGOCeLSLXdUvgzp2uoDzuvf2O28k3HvpGy3V13eoeJlJwgQplZwsZZqobi8Me4HB7CxxuVyxpxFi14ZtICEJXp6dgMYNd0t49g1ZfX180Pz/fcKu3WN2jt2eApNNZY/3qHgrqt7SY/meY6V4sDnuwBjd3bY8tw13X9V9dDKuEBtCyvYt6yUtvj8a+/JW6gN5kdQ9tprlqN59XwG2Z3Gw53Iy58zwc9zncQxzuTQfM+4HBZuemAeZdVk933tx/4CC5dPGCtTnEGPX2DTS0ugcArZhMM9PHjxW4q2LlU7qy8ukNuC9Nl0OEGKy/nQCdOnWLNXn58o1uLDGTqa+/v+nVPVQF+kF+vAZpvtfxmpVPmTsd0QpZKi3lCC1mMunuAHDafWV4YPWyl90ZXLt21XGcnBFFgQ0QL+fO4v/yPXuKNYjd0oRYteMn+PFj/HgllM+yFkqlh6ueD+WRIFUqxfPjY585DCWxDHK+e7i8aO996pff9cEv3Qi5M4XXXOEvHxYHh/voCtgC8JdAmYFAyYI4V+j3Kun9T39jvvClT/z0e4Ntc2gO9/P85T+Ig8N9cgXu9/DjBJQlCLQ7EGdzvZ6f3X/2kcXuMx//2feWt8uht85ZCq95mr/8rjg43GJnynfx48f5cQTKGARqL8TpTFdA8gfOPV7q+eof/fz76pp7X3eDAof7cf4ijt/kcN+5Ardw7/1Q9iBQXBDnSJQ/+MIT5d4HP/oL759s9A801ULI4X6EvzzCwf5VtNxCLlz7HajzW9GAQNJDnEplmNF18OKzbt9Df/BzHzjXyh9rqcmfgy1Gs4turwc53O/nr3evuPY7+dEL9wr0/7N3NqFNBFEcn6SbxHx0m6Q0H8bEXj0WT+JJBSkifoLF1FTJSZC22jY1YBFEBEEQD4IXBcFLPYoXES1FSpRgopTQQ8AqJWpJY1pjSJumLr5nRqi1HsRssrt5f3g7kEN2JpkfOzvz/jOkzSE2GIyS0Lb907tyx6vrZy6ka/XFNVvDA7hxtf85BsDdD+U+Piw/AiHSf0hqdogFwSCZ7IHsh4orfrVvKCXHTWRZlAe4cUfMJxgAN2ZZdXO4D7IanzFFIikZYtxD3OIM5DJr7teXQyNJuW8oe5YNwI0b0j/CALjRfniID8kPMDqOlaRViO3b8p+ZJ3mpNxKv583rmjYHcKNL/SEGwI3D8MMc7m5GB7+RVAwxXmwO31JO702NBi++aFRFGgYRwF2A4gEGwI3HvR5l1ey0vUzhezGTSL9Attk9xUXBlxo+GZ1QQoUU8VQEuHFvn3sYADceGHccIsjINEJSIMRW0VUsmnzpl7nWp+OhfkWdCqG4YS7AnYXiDgbAvZU/tXFYTiYJUsMgtlidK8sWfzqxKE7cPz1Qwg8HFVhRRb+3AtyYKXMTA+BGh00Ph7uL+hhJbojN1rbVisU/m/zqeHY3PFBQQ6VVMxEFcL9nf5pGcClsB/U9Uq0g3mJuXZV+pl7ap26HB+fV1gBVzixvYhrp4XCTaYT0zxAbTeY1vdg5N1NyTt0Kn8+ouTGqXypaZxoZA7h3crBxWE6mEdLfITaapBaxM5NeaY/d+M/8aQJaPrgTUCQA7AiUuzjcOGPupT5MEAuCEVMv52crHfFrfUMzWmykJpM5uGkkhgFw42TkHv7OjY6wdurbzQOxXi9IZoc/N/fdHb8SGp7WeoM1n50FcOM64UbTCL5zH2NkGtEoxHpmdfjzHyV3cuxUfVMvCej6wr3eNHIWyv2sur0SmUZUDjFebE5/Pss809He0VgzNV6n0zUn0BvgRtPIYwxuGkGoMYmFTCMqAhm3rv3S4k1FgtFJNYEn2z2oT/wugNvGqnnlJ/KFb47lcnk3/SrKEW7j+/ZNzFUy+ZYmF8TA+Lnapl7WAzo59UOAAQAeom/2fkCVVQAAAABJRU5ErkJggg==",dimensions=["A","B","C"],currentMonth=[325,575,425],option={backgroundColor:"#070b1c",tooltip:{show:!0,formatter:"{b}:{c}"},xAxis:{data:dimensions,axisTick:{show:!1},axisLine:{lineStyle:{color:"#1d356f"}},axisLabel:{textStyle:{color:"#FFF"},margin:20}},yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#1d356f"}},axisLabel:{textStyle:{color:"#bcfff7"}}},series:[{name:"本月",type:"pictorialBar",label:{normal:{show:!0,position:"top",formatter:"{c}",textStyle:{color:"#fff"}}},symbol:imgDatUrl,barGap:0,barWidth:100,symbolSize:["100%","100%"],data:currentMonth}]};
