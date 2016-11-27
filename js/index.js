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

  // 点击跳转
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

  //快速跳转
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

  //top
  function topAd(){
    var oTopAd=document.getElementById('in-top-ad-bg');
    var oTopBtnWr=getByClass(oTopAd,'top-btn-wr')[0];
    var oInTopAdMain=getByClass(oTopAd,'in-top-ad-main')[0];
    var aTopBtnA=oTopBtnWr.getElementsByTagName('a');

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

  //强档推荐
  function strong(){
    var oNavStrongWrap=document.getElementById('nav-strong-wrap');
    var oTitleBtn=getByClass(oNavStrongWrap,'title-btn')[0];
    var aTitleBtnA=oTitleBtn.getElementsByTagName('a');
    var oStrongInList=getByClass(oNavStrongWrap,'in-list')[0];
    var oStrongNext=getByClass(oNavStrongWrap,'box-next')[0];

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

    var oVipStrong=document.getElementById('vip-strong')

    //强推作品-全部作品
    function strongAll(){
      var oStrongDirecton1=getByClass(oVipStrong,'strong-directon')[0];
      var oBtnPrev1=getByClass(oStrongDirecton1,'btn-prev')[0];
      var oBtnNext1=getByClass(oStrongDirecton1,'btn-next')[0];
      var oVipList1=getByClass(oVipStrong,'vip-list')[0];
      var aInList1=oVipList1.getElementsByTagName('ul');
      var aH5=oStrongDirecton1.getElementsByTagName('h5')[0];

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

      var oStrongDirecton2=getByClass(oVipStrong,'strong-directon')[1];
      var oBtnPrev2=getByClass(oStrongDirecton2,'btn-prev')[0];
      var oBtnNext2=getByClass(oStrongDirecton2,'btn-next')[0];
      var oVipList2=getByClass(oVipStrong,'vip-list')[1];
      var aInList2=oVipList2.getElementsByTagName('ul');
      var aH52=oStrongDirecton2.getElementsByTagName('h5')[0];

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
    strongAll();
  }



  // 上升最快
  function upFast(){
    var oUpLeft=document.getElementById('up-left');
    var oPageBox=getByClass(oUpLeft,'page-box')[0];
    var aPageBoxA=oPageBox.getElementsByTagName('a');
    var oUpBox=getByClass(oUpLeft,'up-box')[0];
    var aUpBoxUl=oUpBox.getElementsByTagName('ul');
    var oUpPrev=getByClass(oUpLeft,'prev')[0];
    var oUpNext=getByClass(oUpLeft,'next')[0];

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

  // 热门排行-左
  function summaryLeft(){
    var oSummaryLeft=document.getElementById('nav-summary-left');
    var oSummaryPrev=getByClass(oSummaryLeft,'prev')[0];
    var oSummaryNext=getByClass(oSummaryLeft,'next')[0];

    var oSummaryLeftList=getByClass(oSummaryLeft,'summary-left-list')[0];
    var aListLi=oSummaryLeftList.getElementsByTagName('li');

    var oSummaryLeftPage=getByClass(oSummaryLeft,'summary-left-page')[0];
    var aPageA=oSummaryLeftPage.getElementsByTagName('a');

    var SuNow=0;
    //渐变换页
    function change(btn,oDiv){
      for (var i = 0; i < btn.length; i++) {
        btn[i].index=i;
        btn[i].onclick=function(){
          for (var i = 0; i < oDiv.length; i++) {
            if (this.index!==i) {
              oDiv[i].style.zIndex = 1;
              oDiv[i].style.opacity = 0;
              oDiv[this.index].style.zIndex = 50;
              oDiv[this.index].style.opacity = 1;
            }
          }
          SuNow=this.index;
        };
      };
    }

    change(aPageA,aListLi);

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
    var oContentBottom=document.getElementById('content-bottom');
    var oContentBottomPrev=getByClass(oContentBottom,'prev')[0];
    var oContentBottomNext=getByClass(oContentBottom,'next')[0];
    var oContentBottomUl=oContentBottom.getElementsByTagName('ul')[0];

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

    var aContentBottomLi=oContentBottomUl.getElementsByTagName('li');   //独家动画移入切换
    var oSoleMain=document.getElementById('sole-main');
    var oSoleMainLeft=getByClass(oSoleMain,'sole-main-left')[0];
    var aSoleMainLeftA=oSoleMainLeft.getElementsByTagName('a');
    var aContentTop=getByClass(oSoleMain,'content-top');

    slowJump(aContentBottomLi,aSoleMainLeftA,aContentTop);
  };

  //最近更新
  function lotUpdata(){
     var oLotUpdata=document.getElementById('lot-updata');
     var oTitlePage=getByClass(oLotUpdata,'title-page')[0];
     var oPageMain=getByClass(oTitlePage,'page-main')[0];
     var aPageMainA=oPageMain.getElementsByTagName('a');
     var oUpdataMain=getByClass(oLotUpdata,'updata-main')[0];
     var aUpdataMainUl=oUpdataMain.getElementsByTagName('ul');
     var oUpdataPrev=getByClass(oLotUpdata,'prev')[0];
     var oUpdataNext=getByClass(oLotUpdata,'next')[0];
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
    var oSectionWeek=document.getElementById('section-week');
    var oWeekTopRight=getByClass(oSectionWeek,'week-top-right')[0];
    var aWeekTopRightA=oWeekTopRight.getElementsByTagName('a');
    var oWeekMainLeft=getByClass(oSectionWeek,'week-main-left')[0];
    var aWeekMainLeftA=oWeekMainLeft.getElementsByTagName('a');
    var aWeekMainSort=getByClass(oSectionWeek,'week-main-sort');
    var oWeekMainSort0=getByClass(oSectionWeek,'week-main-sort')[0];
    var oWeekMainSort1=getByClass(oSectionWeek,'week-main-sort')[1];
    var oWeekMainSort2=getByClass(oSectionWeek,'week-main-sort')[2];
    var aWeekMainUl0=getByClass(oWeekMainSort0,'week-main-ul');
    var aWeekMainUl1=getByClass(oWeekMainSort1,'week-main-ul');
    var aWeekMainUl2=getByClass(oWeekMainSort2,'week-main-ul');
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

window.onload=function(){

// var oHtml=document.getElementById('html');
// var oFixedLeftWr=document.getElementById('fixed-left-wr');
//   var oFixedLeftWrLi=oFixedLeftWr.getElementsByTagName('li')[0];
//
// oFixedLeftWrLi.onclick="scroller(window, 300)";

topAd();   //top

// 热门排行
var oRankTopUl=document.getElementById('rank-top-ul');
  var oRankList=document.getElementById('rank-list');
  var aRankTopLi=oRankTopUl.getElementsByTagName('li');
  var aRankListDiv=oRankList.getElementsByTagName('div');

  jump(aRankTopLi,aRankListDiv);

  strong();   //强档推荐

  var oVipStrong=document.getElementById('vip-strong');    //强推作品
    var oStrongBtn=getByClass(oVipStrong,'strong-btn')[0];
    var oVipList=getByClass(oVipStrong,'vip-list');
    var aStrongA=oStrongBtn.getElementsByTagName('a');
    var oStrongDirecton=getByClass(oVipStrong,'strong-directon');

    jump(aStrongA,oVipList,oStrongDirecton);


//strongAll();    //强推作品-全部作品


var oVipSerial=document.getElementById('vip-serial')      // 连载表
  var oSerialDay=getByClass(oVipSerial,'serial-day')[0];
  var aSerialDayA=oSerialDay.getElementsByTagName('a');
  var oSerialBox=getByClass(oVipSerial,'serial-box')[0];
  var aSerialBoxUl=oSerialBox.getElementsByTagName('ul');

  jump(aSerialDayA,aSerialBoxUl);

  upFast();  // 上升最快

var oUpChartRank=document.getElementById('up-chart-rank');  //月票排行
  var oRankTitleBtn=getByClass(oUpChartRank,'rank-title-btn')[0];
  var aRankTitleBtnA=oRankTitleBtn.getElementsByTagName('a');
  var aChartListMain=getByClass(oUpChartRank,'chart-list-main');

  jump(aRankTitleBtnA,aChartListMain);

var oLotBlood=document.getElementById('lot-blood');   //热血冒险
  var oTopTag=getByClass(oLotBlood,'top-tag')[0];
  var aTopTagA=oTopTag.getElementsByTagName('a');
  var aLotBloodUl=oLotBlood.getElementsByTagName('ul');

  jump(aTopTagA,aLotBloodUl);

  summaryLeft();    // 热门排行-左

var oSectionSign=document.getElementById('section-sign');     //签约作品
  var oSectionSignUl=oSectionSign.getElementsByTagName('ul')[0];
  var aSectionSignLi=oSectionSignUl.getElementsByTagName('li');
  var oMainRightSummary=getByClass(oSectionSign,'main-right-summary')[0];
  var aSummaryContent=getByClass(oMainRightSummary,'summary-content');
  var oSignMainLeft=getByClass(oSectionSign,'sign-main-left')[0];
  var aSignMainLeftA=oSignMainLeft.getElementsByTagName('a');
  jump(aSectionSignLi,aSummaryContent,aSignMainLeftA)

var oSectionSign2=document.getElementById('section-sign2');    //轻小说
  var oSectionSignUl2=oSectionSign2.getElementsByTagName('ul')[0];
  var aSectionSignLi2=oSectionSignUl2.getElementsByTagName('li');
  var oMainRightSummary2=getByClass(oSectionSign2,'main-right-summary')[0];
  var aSummaryContent2=getByClass(oMainRightSummary2,'summary-content');
  var oSignMainLeft2=getByClass(oSectionSign2,'sign-main-left')[0];
  var aSignMainLeftA2=oSignMainLeft2.getElementsByTagName('a');
  jump(aSectionSignLi2,aSummaryContent2,aSignMainLeftA2)

  contentBottom();//独家动画移动



 lotUpdata();   //最近更新

  sectionWeek();    //周总排行榜

}
