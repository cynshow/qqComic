  /*  ----------------  共用  --------------------   */
  //getByClass
  function getByClass(oParent,sClass){
    var aEle=oParent.getElementsByTagName('*');
    var aResult=[];

    for(var i=0;i<aEle.length;i++){
      if(aEle[i].className==sClass){
        aResult.push(aEle[i]);
      }
    };
  return aResult;
  };

  // 点击瞬时跳转
  function click(list,oDiv) {
    for(var i=0; i<list.length; i++) {
      list[i].index = i;
      list[i].onclick = function() {
        for(var j=0; j<list.length; j++){
          list[j].className='';
          oDiv[j].style.display='none';
        }
        this.className='active';
        oDiv[this.index].style.display='block';
      }
    }
  }

  // 移入瞬时跳转
  function jump(list,oDiv,oDiv2) {
    for(var i=0; i<list.length; i++) {
      list[i].index = i;
      list[i].onmouseover = function() {
        for(var j=0; j<list.length; j++){
          list[j].className='';
          oDiv[j].style.display='none';
          if (oDiv2) {
            oDiv2[j].style.display='none';
          }
        }
        this.className='active';
        oDiv[this.index].style.display='block';
        if(oDiv2 != null && oDiv2 != undefined) {
          oDiv2[this.index].style.display='block';
        }
      }
    }
  }

  // 变更瞬时转换
  function changeJump(list,oDiv,oDiv2) {
    for(var i=0; i<list.length; i++) {
      list[i].index = i;
      list[i].onmouseover = function() {
        for(var j=0; j<list.length; j++){
          list[j].className='';
          oDiv[j].style.display='block';
          if (oDiv2) {
            oDiv2[j].style.display='none';
          }
        }
        this.className='active';
        oDiv[this.index].style.display='none';
        if(oDiv2 != null && oDiv2 != undefined) {
          oDiv2[this.index].style.display='block';
        }
      }
    }
  }

  // 移入缓慢跳转
  function slowJump(list,oDiv,oDiv2){
    for (var i = 0; i < list.length; i++) {
      list[i].index=i;
      list[i].onmouseover=function(){
        for (var i = 0; i < list.length; i++) {
          list[i].className='';
          oDiv[i].style.zIndex='1';
          oDiv[i].style.opacity='0';
          if(oDiv2){
            oDiv2[i].style.zIndex='1';
            oDiv2[i].style.opacity='0';
          }
        }
        this.className='active';
        oDiv[this.index].style.zIndex='50';
        oDiv[this.index].style.opacity='1';
        if (oDiv2) {
          oDiv2[this.index].style.zIndex='50';
          oDiv2[this.index].style.opacity='1';
        }
      }
    }
  }




  /* ----------------  主体  ---------------------  */
  //top
  function topAd(){
    var oTopAd=document.getElementById('in-top-ad-bg'),
        oTopBtnWr=getByClass(oTopAd,'top-btn-wr')[0],
        oInTopAdMain=getByClass(oTopAd,'in-top-ad-main')[0],
        aTopBtnA=oTopBtnWr.getElementsByTagName('a');

    for (var i = 0; i < aTopBtnA.length; i++) {
      aTopBtnA[i].index=i;
      aTopBtnA[i].onclick=function(){
        for (var i = 0; i < aTopBtnA.length; i++) {
          if (i!=this.index) {
            this.style.display='none';
            aTopBtnA[i].style.display='block';
          }
        }
        if (this.index==1) {
          oInTopAdMain.style.height='0';
        }else if(this.index==0) {
          oInTopAdMain.style.height='90px';
        }
      }
    }
  }

  //大家都在搜
  function topSearchList(){
    var oTopSearchList=document.getElementById('top-search-list'),
        oTopSearchListLi=oTopSearchList.getElementsByTagName('li'),
        oSearchListLi=getByClass(oTopSearchList,'search-list-li'),
        oSearchListText=getByClass(oTopSearchList,'search-list-text');

    changeJump(oTopSearchListLi,oSearchListLi,oSearchListText);
  };

  //强档推荐
  function strong(){
    var oNavStrongWrap=document.getElementById('nav-strong-wrap'),
        oTitleBtn=getByClass(oNavStrongWrap,'title-btn')[0],
        aTitleBtnA=oTitleBtn.getElementsByTagName('a'),
        oStrongInList=getByClass(oNavStrongWrap,'in-list')[0],
        oStrongNext=getByClass(oNavStrongWrap,'box-next')[0],
        oVipStrong=document.getElementById('vip-strong');

    var navStrongTra=0;
    var navStrongNow=0;

    for (var i = 0; i < aTitleBtnA.length; i++) {
      aTitleBtnA[i].index=i;

      aTitleBtnA[i].onclick=function(){
        for (var i = 0; i < aTitleBtnA.length; i++) {
          if (i!=this.index) {
            aTitleBtnA[i].className='';
            aTitleBtnA[this.index].className='active';
          }
        }
        if(this.index==0){
          navStrongTra=0;
          oStrongInList.style.transform='translateX('+navStrongTra+'px)';
        }else if (this.index==1) {
          navStrongTra=-1256;
          oStrongInList.style.transform='translateX('+navStrongTra+'px)';
        }else if (this.index==2) {
          navStrongTra=-2512;
          oStrongInList.style.transform='translateX('+navStrongTra+'px)';
        }

        navStrongNow=this.index;
      }
    }

    oStrongNext.onclick=function(){
      if(navStrongTra==-2512){
        navStrongTra=navStrongTra+2512;
        oStrongInList.style.transform='translateX('+navStrongTra+'px)';

      }else {
        navStrongTra=navStrongTra-628;
        oStrongInList.style.transform='translateX('+navStrongTra+'px)';
      }
      if (navStrongTra>-1256) {
        navStrongNow=0;
      }else if (navStrongTra>-2512 && navStrongTra<=1256) {
        navStrongNow=1;
      }else if(navStrongTra=-2512){
        navStrongNow=2;
      }

      for (var i = 0; i < aTitleBtnA.length; i++) {
        if (i!=navStrongNow) {
          aTitleBtnA[i].className='';
          aTitleBtnA[navStrongNow].className='active';
        }
      }
    }

    //强推作品-全部作品
    function strongAll(){
      var oStrongDirecton1=getByClass(oVipStrong,'strong-directon')[0],
          oBtnPrev1=getByClass(oStrongDirecton1,'btn-prev')[0],
          oBtnNext1=getByClass(oStrongDirecton1,'btn-next')[0],
          oVipList1=getByClass(oVipStrong,'vip-list')[0],
          aInList1=oVipList1.getElementsByTagName('ul'),
          aH5=oStrongDirecton1.getElementsByTagName('h5')[0];

      var sNow=0;

      function sTab(list){
        sNum=sNow+1;
        aH5.innerHTML =sNum+'/3';

        for (var i = 0; i < list.length; i++) {
          list[i].style.zIndex=1;
          list[i].style.opacity=0;
        }
        list[sNow].style.zIndex=50;
        list[sNow].style.opacity=1;
      };

      oBtnPrev1.onclick=function(){
        sNow--;
        if(sNow==-1){
          sNow=aInList1.length-1;
        };
        sTab(aInList1);
      };

      oBtnNext1.onclick=function(){
        sNow++;
        if(sNow==aInList1.length){
          sNow=0;
        };
        sTab(aInList1);
      };
    }
    strongAll();

    //强推作品-女生
    function strongGirl(){
      var oStrongDirecton2=getByClass(oVipStrong,'strong-directon')[1],
          oBtnPrev2=getByClass(oStrongDirecton2,'btn-prev')[0],
          oBtnNext2=getByClass(oStrongDirecton2,'btn-next')[0],
          oVipList2=getByClass(oVipStrong,'vip-list')[1],
          aInList2=oVipList2.getElementsByTagName('ul'),
          aH52=oStrongDirecton2.getElementsByTagName('h5')[0];

      var sNow2=0;

      function sTab2(list){
        sNum2=sNow2+1;
        aH52.innerHTML =sNum2+'/3';

        for (var i = 0; i < list.length; i++) {
          list[i].style.zIndex=1;
          list[i].style.opacity=0;
        }
        list[sNow2].style.zIndex=50;
        list[sNow2].style.opacity=1;
      };

      oBtnPrev2.onclick=function(){
        sNow2--;
        if(sNow2==-1){
          sNow2=aInList2.length-1;
        };
        sTab2(aInList2);
      };

      oBtnNext2.onclick=function(){
        sNow2++;
        if(sNow2==aInList2.length){
          sNow2=0;
        };
        sTab2(aInList2);
      };
    }

    strongGirl();

  }

  // 上升最快
  function upFast(){
    var oUpLeft=document.getElementById('up-left'),
        oPageBox=getByClass(oUpLeft,'page-box')[0],
        aPageBoxA=oPageBox.getElementsByTagName('a'),
        oUpBox=getByClass(oUpLeft,'up-box')[0],
        aUpBoxUl=oUpBox.getElementsByTagName('ul'),
        oUpPrev=getByClass(oUpLeft,'prev')[0],
        oUpNext=getByClass(oUpLeft,'next')[0];

    var UpNow=0;

    for (var i = 0; i < aPageBoxA.length; i++) {
      aPageBoxA[i].index=i;
      aPageBoxA[i].onclick=function(){
        for (var i = 0; i < aPageBoxA.length; i++) {
          aPageBoxA[i].className='';
          aUpBoxUl[i].style.zIndex='1';
          aUpBoxUl[i].style.opacity='0';
        }
        this.className='active';
        aUpBoxUl[this.index].style.zIndex='50';
        aUpBoxUl[this.index].style.opacity='1';
        UpNow=this.index;
      }
    }

    oUpPrev.onclick=function(){
      UpNow--;
      if(UpNow==-1){
        UpNow=aPageBoxA.length-1;
      };
      for (var i = 0; i < aPageBoxA.length; i++) {
        aPageBoxA[i].className='';
        aUpBoxUl[i].style.zIndex='1';
        aUpBoxUl[i].style.opacity='0';
      }
      aPageBoxA[UpNow].className='active';
      aUpBoxUl[UpNow].style.zIndex='50';
      aUpBoxUl[UpNow].style.opacity='1';
    }

    oUpNext.onclick=function(){
      UpNow++;
      if(UpNow==aPageBoxA.length){
        UpNow=0;
      };
      for (var i = 0; i < aPageBoxA.length; i++) {
        aPageBoxA[i].className='';
        aUpBoxUl[i].style.zIndex='1';
        aUpBoxUl[i].style.opacity='0';
      }
      aPageBoxA[UpNow].className='active';
      aUpBoxUl[UpNow].style.zIndex='50';
      aUpBoxUl[UpNow].style.opacity='1';
    }
  }

  // 热门排行-小鸟banner
  function summaryLeft(){
    var oSummaryLeft=document.getElementById('nav-summary-left'),
        oSummaryPrev=getByClass(oSummaryLeft,'prev')[0],
        oSummaryNext=getByClass(oSummaryLeft,'next')[0],

        oSummaryLeftList=getByClass(oSummaryLeft,'summary-left-list')[0],
        aListLi=oSummaryLeftList.getElementsByTagName('li'),

        oSummaryLeftPage=getByClass(oSummaryLeft,'summary-left-page')[0],
        aPageLi=oSummaryLeftPage.getElementsByTagName('li');
    var SuNow=0,
        timer=0;

    //执行相应页面
    function showPage(num) {
      showBird(num);
      showLi(num);
      SuNow = num;
    }

    //显示相应小鸟条
    function showLi(num){
      for (var i = 0; i < aListLi.length; i++) {
        if (num!==i) {
          aListLi[i].style.zIndex = 1;
          aListLi[i].style.opacity = 0;
          aListLi[num].style.zIndex = 50;
          aListLi[num].style.opacity = 1;
        }
      }
    }

    //小鸟动画生长
    function showBird(num){
      stopFly();
      var flyInner = '<div id="flyDiv" style="width:0%"><span class="bird"></span></div>';
      aPageLi[num].innerHTML = flyInner;
      var flyDiv = document.getElementById('flyDiv');
      timer = setInterval(function(){
        var flyWidth = parseFloat(flyDiv.style.width);
        if (flyWidth >=100 ) {
          stopFly();
          switch (SuNow) {
            case 0:
              showPage(1);
              break;
            case 1:
              showPage(2);
              break;
            default:
              showPage(0);
          }
          return;
        }

        if (flyWidth >= 95 || flyWidth <= 5) {
          flyDiv.style.width = (flyWidth + 0.2 + "%");
        } else if (flyWidth >= 90 && flyWidth < 95 || flyWidth <=10 && flyWidth > 5) {
          flyDiv.style.width = (flyWidth + 0.3 + "%");
        } else if (flyWidth >= 85 && flyWidth < 90 || flyWidth <=15 && flyWidth > 10) {
          flyDiv.style.width = (flyWidth + 0.4 + "%");
        } else if (flyWidth >= 80 && flyWidth < 85 || flyWidth <=20 && flyWidth > 15) {
          flyDiv.style.width = (flyWidth + 0.5 + "%");
        } else {
          flyDiv.style.width = (flyWidth + 0.6 + "%");
        }
      },30)
    }

    //停止小鸟生长动画
    function stopFly(){
      var flyDiv = document.getElementById('flyDiv');
      if(flyDiv) flyDiv.parentNode.removeChild(flyDiv);
      clearInterval(timer);
    }
    showPage(0);

    //点击小鸟条显示相应页面
    for (var i = 0; i < aPageLi.length; i++) {
      aPageLi[i].onclick = function (x) {
        showPage(x);

      }.bind(null,i)
    };

    //渐变换页
    // function changeBanner(btn,oDiv){
    //   for (var i = 0; i < btn.length; i++) {
    //     btn[i].index=i;
    //     btn[i].onclick=function(){
    //       for (var i = 0; i < oDiv.length; i++) {
    //         if (this.index!==i) {
    //           oDiv[i].style.zIndex = 1;
    //           oDiv[i].style.opacity = 0;
    //           oDiv[this.index].style.zIndex = 50;
    //           oDiv[this.index].style.opacity = 1;
    //         }
    //       }
    //       SuNow=this.index;
    //     };
    //   };
    // }
    //
    // changeBanner(aPageLi,aListLi);

    // 上下一张按钮事件绑定
    oSummaryLeft.onmouseover = oSummaryPrev.onmouseover = oSummaryNext.onmouseover =function () {
      stopFly();
    }
    oSummaryLeft.onmouseout = oSummaryPrev.onmouseout = oSummaryNext.onmouseout =function () {
      showPage(SuNow);
    }

    function suTab(list){
      for (var i = 0; i < list.length; i++) {
        list[i].style.zIndex = 1;
        list[i].style.opacity = 0;
      }

      list[SuNow].style.zIndex=50;
      list[SuNow].style.opacity = 1;
    };

    oSummaryPrev.onclick=function(){
      SuNow--;
      if(SuNow==-1){
        SuNow=aListLi.length-1;
      };
      suTab(aListLi);
    };

    oSummaryNext.onclick=function(){
      SuNow++;
      if(SuNow==aListLi.length){
        SuNow=0;
      };
      suTab(aListLi);
    }
  };

  //独家动画移动
  function contentBottom(){
    var oContentBottom=document.getElementById('content-bottom'),
        oContentBottomPrev=getByClass(oContentBottom,'prev')[0],
        oContentBottomNext=getByClass(oContentBottom,'next')[0],
        oContentBottomUl=oContentBottom.getElementsByTagName('ul')[0];

    var CBNow=0;

    oContentBottomNext.onclick= function(){
      if (CBNow>-1446) {
        CBNow = CBNow - 241;
        oContentBottomUl.style.transform='translateX('+CBNow+'px)';
        oContentBottomPrev.style.display='block';
      }else if (CBNow==-1446){
        CBNow = CBNow - 241;
        oContentBottomUl.style.transform='translateX('+CBNow+'px)';
        oContentBottomNext.style.display='none';
      }
    }

    oContentBottomPrev.onclick= function(){
      if (CBNow<-241) {
        CBNow = CBNow + 241;
        oContentBottomUl.style.transform='translateX('+CBNow+'px)';
        oContentBottomNext.style.display='block';
      }else if (CBNow==-241) {
        CBNow = CBNow + 241;
        oContentBottomUl.style.transform='translateX('+CBNow+'px)';
        oContentBottomPrev.style.display='none';
      }
    }

    var aContentBottomLi=oContentBottomUl.getElementsByTagName('li'),   //独家动画移入切换
        oSoleMain=document.getElementById('sole-main'),
        oSoleMainLeft=getByClass(oSoleMain,'sole-main-left')[0],
        aSoleMainLeftA=oSoleMainLeft.getElementsByTagName('a'),
        aContentTop=getByClass(oSoleMain,'content-top');

    slowJump(aContentBottomLi,aSoleMainLeftA,aContentTop);
  };

  //最近更新
  function lotUpdata(){
     var oLotUpdata=document.getElementById('lot-updata'),
         oTitlePage=getByClass(oLotUpdata,'title-page')[0],
         oPageMain=getByClass(oTitlePage,'page-main')[0],
         aPageMainA=oPageMain.getElementsByTagName('a'),
         oUpdataMain=getByClass(oLotUpdata,'updata-main')[0],
         aUpdataMainUl=oUpdataMain.getElementsByTagName('ul'),
         oUpdataPrev=getByClass(oLotUpdata,'prev')[0],
         oUpdataNext=getByClass(oLotUpdata,'next')[0],
         lotUpdataNow=0;

     for (var i = 0; i < aPageMainA.length; i++) {
       aPageMainA[i].index=i;
       aPageMainA[i].onclick=function(){
         for (var i = 0; i < aPageMainA.length; i++) {
           if(this.index!=i){
             aPageMainA[i].className='';
             aUpdataMainUl[i].style.zIndex='1';
             aUpdataMainUl[i].style.opacity='0';
           }
           this.className='active';
           aUpdataMainUl[this.index].style.zIndex='50';
           aUpdataMainUl[this.index].style.opacity='1';
           lotUpdataNow=this.index;
         }
       };
     };

     oUpdataPrev.onclick=function(){
       lotUpdataNow--;
       if(lotUpdataNow==-1){
         lotUpdataNow=aPageMainA.length-1;
       };
       for (var i = 0; i < aPageMainA.length; i++) {
         aPageMainA[i].className='';
         aUpdataMainUl[i].style.zIndex='1';
         aUpdataMainUl[i].style.opacity='0';
       }
       aPageMainA[lotUpdataNow].className='active';
       aUpdataMainUl[lotUpdataNow].style.zIndex='50';
       aUpdataMainUl[lotUpdataNow].style.opacity='1';
     }
     oUpdataNext.onclick=function(){
       lotUpdataNow++;
        if(lotUpdataNow==aPageMainA.length){
          lotUpdataNow=0;
        };
        for (var i = 0; i < aPageMainA.length; i++) {
          aPageMainA[i].className='';
          aUpdataMainUl[i].style.zIndex='1';
          aUpdataMainUl[i].style.opacity='0';
        }
        aPageMainA[lotUpdataNow].className='active';
        aUpdataMainUl[lotUpdataNow].style.zIndex='50';
        aUpdataMainUl[lotUpdataNow].style.opacity='1';
     }
 }

  //周总排行榜
  function sectionWeek(){
    var oSectionWeek=document.getElementById('section-week'),
        oWeekTopRight=getByClass(oSectionWeek,'week-top-right')[0],
        aWeekTopRightA=oWeekTopRight.getElementsByTagName('a'),
        oWeekMainLeft=getByClass(oSectionWeek,'week-main-left')[0],
        aWeekMainLeftA=oWeekMainLeft.getElementsByTagName('a'),
        aWeekMainSort=getByClass(oSectionWeek,'week-main-sort'),
        oWeekMainSort0=getByClass(oSectionWeek,'week-main-sort')[0],
        oWeekMainSort1=getByClass(oSectionWeek,'week-main-sort')[1],
        oWeekMainSort2=getByClass(oSectionWeek,'week-main-sort')[2],
        aWeekMainUl0=getByClass(oWeekMainSort0,'week-main-ul'),
        aWeekMainUl1=getByClass(oWeekMainSort1,'week-main-ul'),
        aWeekMainUl2=getByClass(oWeekMainSort2,'week-main-ul');

   for (var i = 0; i < aWeekTopRightA.length; i++) {
     aWeekTopRightA[i].index=i;
     aWeekTopRightA[i].onmouseover=function(){
       for (var i = 0; i < aWeekTopRightA.length; i++) {
         aWeekTopRightA[i].className='';
         aWeekMainSort[i].style.display='none';
       }
       this.className='active';
       aWeekMainSort[this.index].style.display='block';
     }
   }

   for (var i = 0; i < aWeekMainLeftA.length; i++) {
     aWeekMainLeftA[i].index=i;
     aWeekMainLeftA[i].onmouseover=function(){
       for (var i = 0; i < aWeekMainLeftA.length; i++) {
         aWeekMainLeftA[i].className='';
         aWeekMainUl0[i].style.display='none';
         aWeekMainUl1[i].style.display='none';
         aWeekMainUl2[i].style.display='none';
       }
       this.className='active';
       aWeekMainUl0[this.index].style.display='block';
       aWeekMainUl1[this.index].style.display='block';
       aWeekMainUl2[this.index].style.display='block';
     }
   }
 }

  //左侧边栏显示
function leftActive(){
 var oFixedLeftWr = document.getElementById('fixed-left-wr'),
     aFixedLeftWrLi = oFixedLeftWr.getElementsByTagName('li'),
     scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

 for (var i = 0; i < aFixedLeftWrLi.length; i++) {
  aFixedLeftWrLi[i].index=i;
  aFixedLeftWrLi[i].className="";

    if ( scrollTop >= 757 && scrollTop<1100) {
      aFixedLeftWrLi[0].className="active";
    } else if ( scrollTop >= 1100 && scrollTop<1500 ) {
      aFixedLeftWrLi[1].className="active";
    } else if ( scrollTop >= 1500 && scrollTop<2060 ) {
      aFixedLeftWrLi[2].className="active";
    } else if ( scrollTop >= 2060 && scrollTop<2816 ) {
      aFixedLeftWrLi[3].className="active";
    } else if ( scrollTop >= 2816 && scrollTop<3216 ) {
      aFixedLeftWrLi[4].className="active";
    } else if ( scrollTop >= 3216 && scrollTop<3816 ) {
      aFixedLeftWrLi[5].className="active";
    } else if ( scrollTop >= 3816 && scrollTop<5863 ) {
      aFixedLeftWrLi[6].className="active";
    } else if ( scrollTop >= 5863 && scrollTop<6358 ) {
      aFixedLeftWrLi[7].className="active";
    } else if ( scrollTop >= 6358 ) {
      aFixedLeftWrLi[8].className="active";
    }
 }
}

  //左侧边栏滚动
function leftScroll(){
  var oFixedLeftWr = document.getElementById('fixed-left-wr'),
      aFixedLeftWrLi = oFixedLeftWr.getElementsByTagName('li'),
      oItemTop = document.getElementById('item-top'),
      oFixedLeftLast = getByClass(oFixedLeftWr,'fixed-left-last')[0],
      scrollTimer = 0;          //timer记得分开定义

  window.onscroll = function(){
    var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(scrollTop);

    if (scrollTop > 1200) {
      oItemTop.style.display='block';
    } else {
      oItemTop.style.display='none';
    }

    leftActive();
  }

  function upTop(){
    //window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop = 0;  //直接跳到顶部

    clearInterval(scrollTimer);

    scrollTimer = setInterval(function(){
       var sclTopNow = document.body.scrollTop;
       if( sclTopNow <= 50) {
         clearInterval(scrollTimer);
         document.documentElement.scrollTop,document.body.scrollTop = 0;
       } else if ( sclTopNow > 50 && sclTopNow <= 500 ) {
          document.documentElement.scrollTop,document.body.scrollTop -= 50;
       } else if ( sclTopNow > 500 && sclTopNow <= 1000 ) {
          document.documentElement.scrollTop,document.body.scrollTop -= 100;
       } else if ( sclTopNow > 1000 && sclTopNow <= 2000 ) {
          document.documentElement.scrollTop,document.body.scrollTop -= 200;
       } else if ( sclTopNow > 2000 && sclTopNow <= 3000 ) {
          document.documentElement.scrollTop,document.body.scrollTop -= 300;
       } else if ( sclTopNow > 3000 && sclTopNow <= 4000 ) {
          document.documentElement.scrollTop,document.body.scrollTop -= 400;
       } else {
         document.documentElement.scrollTop,document.body.scrollTop -= 500;
       }
     },5)
  }

  //点击跳转到top
  oFixedLeftLast.onclick = function(){
    upTop();
  }

  if (oItemTop.style.display="block") {
    oItemTop.onclick=function(){
      upTop();
    }
  }

  for (var i = 0; i < aFixedLeftWrLi.length; i++) {
    aFixedLeftWrLi[i].index=i;
    aFixedLeftWrLi[i].onclick=function(){

      clearInterval(scrollTimer);
      for (var i = 0; i < aFixedLeftWrLi.length; i++) {
        aFixedLeftWrLi[i].className="";
      }
      var scrollNum=this.getAttribute("data-scroll");
      //window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop = scrollNum;  //无动画
      this.className="active";

      if ( document.documentElement.scrollTop,document.body.scrollTop > scrollNum) {
        scrollTimer = setInterval(function(){
          var diffNum = Math.abs(document.body.scrollTop - scrollNum);
          var sclTopNow = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (diffNum <= 50 ) {
             clearInterval(scrollTimer);
             document.documentElement.scrollTop,document.body.scrollTop = scrollNum;
          } else if ( diffNum > 50 && diffNum <= 500 ) {
             document.documentElement.scrollTop,document.body.scrollTop -= 50;
          } else if ( diffNum > 500 && diffNum <= 1000 ) {
             document.documentElement.scrollTop,document.body.scrollTop -= 100;
          } else if ( diffNum > 1000 && diffNum <= 2000 ) {
             document.documentElement.scrollTop,document.body.scrollTop -= 200;
          } else if ( diffNum > 2000 && diffNum <= 3000 ) {
             document.documentElement.scrollTop,document.body.scrollTop -= 300;
          } else if ( diffNum > 3000 && diffNum <= 4000 ) {
             document.documentElement.scrollTop,document.body.scrollTop -= 400;
          } else {
            document.documentElement.scrollTop,document.body.scrollTop -= 500;
          }
        },5)
      } else {
        scrollTimer = setInterval(function(){
           var diffNum = Math.abs(document.body.scrollTop - scrollNum);
           var sclTopNow = document.body.scrollTop + document.documentElement.scrollTop;
           if ( diffNum <= 50 ) {
              clearInterval(scrollTimer);
              document.documentElement.scrollTop,document.body.scrollTop = scrollNum;
           } else if ( diffNum > 50 && diffNum <= 500 ) {
              document.documentElement.scrollTop,document.body.scrollTop += 50;
           } else if ( diffNum > 500 && diffNum <= 1000 ) {
              document.documentElement.scrollTop,document.body.scrollTop += 100;
           } else if ( diffNum > 1000 && diffNum <= 2000 ) {
              document.documentElement.scrollTop,document.body.scrollTop += 200;
           } else if ( diffNum > 2000 && diffNum <= 3000 ) {
              document.documentElement.scrollTop,document.body.scrollTop += 300;
           } else if ( diffNum > 3000 && diffNum <= 4000 ) {
              document.documentElement.scrollTop,document.body.scrollTop += 400;
           } else {
             document.documentElement.scrollTop,document.body.scrollTop += 500;
           }
        },5);
      }
    }
  }
}


window.onload=function(){

// var oHtml=document.getElementById('html');
// var oFixedLeftWr=document.getElementById('fixed-left-wr');
//   var oFixedLeftWrLi=oFixedLeftWr.getElementsByTagName('li')[0];
//
// oFixedLeftWrLi.onclick="scroller(window, 300)";

topSearchList();    //大家都在搜

topAd();   //top

// 热门排行
var oRankTopUl=document.getElementById('rank-top-ul'),
    oRankList=document.getElementById('rank-list'),
    aRankTopLi=oRankTopUl.getElementsByTagName('li'),
    aRankListDiv=oRankList.getElementsByTagName('div');

  jump(aRankTopLi,aRankListDiv);

strong();   //强档推荐

var oVipStrong=document.getElementById('vip-strong'),    //强推作品
    oStrongBtn=getByClass(oVipStrong,'strong-btn')[0],
    oVipList=getByClass(oVipStrong,'vip-list'),
    aStrongA=oStrongBtn.getElementsByTagName('a'),
    oStrongDirecton=getByClass(oVipStrong,'strong-directon');

  jump(aStrongA,oVipList,oStrongDirecton);

var oVipSerial=document.getElementById('vip-serial'),      // 连载表
    oSerialDay=getByClass(oVipSerial,'serial-day')[0],
    aSerialDayA=oSerialDay.getElementsByTagName('a'),
    oSerialBox=getByClass(oVipSerial,'serial-box')[0],
    aSerialBoxUl=oSerialBox.getElementsByTagName('ul');

  jump(aSerialDayA,aSerialBoxUl);

upFast();  // 上升最快

var oUpChartRank=document.getElementById('up-chart-rank'),  //月票排行
    oRankTitleBtn=getByClass(oUpChartRank,'rank-title-btn')[0],
    aRankTitleBtnA=oRankTitleBtn.getElementsByTagName('a'),
    aChartListMain=getByClass(oUpChartRank,'chart-list-main');

  jump(aRankTitleBtnA,aChartListMain);

var oLotBlood=document.getElementById('lot-blood'),   //热血冒险
    oTopTag=getByClass(oLotBlood,'top-tag')[0],
    aTopTagA=oTopTag.getElementsByTagName('a'),
    aLotBloodUl=oLotBlood.getElementsByTagName('ul');

  jump(aTopTagA,aLotBloodUl);

summaryLeft();    // 热门排行-小鸟banner

var oSectionSign=document.getElementById('section-sign'),     //签约作品
    oSectionSignUl=oSectionSign.getElementsByTagName('ul')[0],
    aSectionSignLi=oSectionSignUl.getElementsByTagName('li'),
    oMainRightSummary=getByClass(oSectionSign,'main-right-summary')[0],
    aSummaryContent=getByClass(oMainRightSummary,'summary-content'),
    oSignMainLeft=getByClass(oSectionSign,'sign-main-left')[0],
    aSignMainLeftA=oSignMainLeft.getElementsByTagName('a');

  jump(aSectionSignLi,aSummaryContent,aSignMainLeftA)

var oSectionSign2=document.getElementById('section-sign2'),    //轻小说
    oSectionSignUl2=oSectionSign2.getElementsByTagName('ul')[0],
    aSectionSignLi2=oSectionSignUl2.getElementsByTagName('li'),
    oMainRightSummary2=getByClass(oSectionSign2,'main-right-summary')[0],
    aSummaryContent2=getByClass(oMainRightSummary2,'summary-content'),
    oSignMainLeft2=getByClass(oSectionSign2,'sign-main-left')[0],
    aSignMainLeftA2=oSignMainLeft2.getElementsByTagName('a');

  jump(aSectionSignLi2,aSummaryContent2,aSignMainLeftA2)

contentBottom();//独家动画移动

lotUpdata();   //最近更新

sectionWeek();    //周总排行榜

leftActive();    //左侧边栏显示

leftScroll();   //左侧边栏滚动

}
