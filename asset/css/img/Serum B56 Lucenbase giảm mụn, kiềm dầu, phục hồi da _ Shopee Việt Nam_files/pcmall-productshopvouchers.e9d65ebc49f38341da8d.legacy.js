(self.mfeModules=self.mfeModules||[]).push(["pcmall-productshopvouchers",["React","Redux","ReactRedux","PlatformApi","ReactRouter","FeatureToggles","WithInjectReducer","ReactDom","Account","Platform","NebulaCore"],function(e,t,o,r,c,a,s,n,u,i,l){return(self["mfeStartuppcmall-pcpagevoucherdetail"]||function(){})(556),["pcmall-pcpagevoucherdetail",(self.wpJsonpPcmallPcpagevoucherdetail=self.wpJsonpPcmallPcpagevoucherdetail||[]).push([[556,951],{4292:function(e,t,o){"use strict";o.d(t,{Z:function(){return L}});var r=o(3804),c=o.n(r),a=o(9877),s={productShopVoucher:"np6i06",voucher:"r1qW-I",extendBottom:"HzFiRU",voucherLeftInfo:"UOW7gw",voucherRightContainer:"_9eeNwJ",bottomBorder:"G-FUSc",btnContainer:"JOWRp2",voucherLeft:"P7Rbnu",logo:"XvDcO4",header:"R0ezFk",expiry:"VucaDJ",specificProduct:"VKPtwt",voucherClaimFieldSolid:"BEmIeO",officialHeader:"qmRMfz",preferredHeader:"xS1e3E",sMartHeader:"_3IeCxN",useLaterBtn:"Pz1C0z",applyBtn:"QLgdQ9"},n=o(893),u=o.n(n),i=o(7122),l=o(7561),p=o(4742),h=o(429),m=o(6775),d=o(6704),f=o(5529),v=o(5377),_=o(5325),g=o(7691),E=o(119),S=o(6866),N=o(5606),C=o(6781),x={progress:E.Z.INIT},L=(0,C.Z)((0,d.withI18nCollections)([a.L])((function(e){var t=e.voucher,o=e.voucherLocation,r=e.className,a=e.isShopeeMart,n=t.is_shop_official,C=t.shop_id,L=t.promotionid,P=t.voucher_code,R=t.percentage_used,T=(0,m.useHistory)(),w=(0,_.useSelector)((function(e){return(0,f.Au)(e.featureToggles,v.v_0)})),y=(0,S.oW)(),O=function(){var e=(0,g.D)(t,{useVLP:w,enableEncodeUrl:y});(0,N.np)(t)&&(e=(0,N.Xz)(t,e)),e&&T.push(e)},b=(0,_.useSelector)((function(e){return t&&t.voucher_code&&e.voucher.claimProgress[t.voucher_code]||x})),D=t.is_claimed_before||b.progress===E.Z.OK,I=D?(0,N.np)(t)?2:1:0,Z={location:o,shopid:C,promotion_id:L,status:I,voucher_code:P,usage_progress:R},B=(0,p.Z)("ShopVoucherSmall.ProductPageSellerVoucherBody",Z,[I]),M=c().useMemo((function(){return D?t.remaining_usage_limit||0:t.usage_limit_per_user||0}),[D,t]);return c().createElement(h.ZP,{targetType:"ShopVoucherSmall",targetData:{voucher:t,voucherLocation:o}},c().createElement("div",{ref:B,className:u()(s.productShopVoucher,r)},M>1&&c().createElement("div",{className:s.bottomBorder}),M>1&&c().createElement("div",{className:s.rightCorner},c().createElement(i.ZD,{num:D?t.remaining_usage_limit||0:t.usage_limit_per_user||0})),c().createElement(i.rO,{className:u()(s.voucher,M>1&&s.extendBottom),voucher:t,type:l.wK.FLAT_WITH_SHADOW,usePreferredShopColorScheme:!0,isOfficial:n,isShopeeMart:a},c().createElement(i.Tg,{className:s.voucherLeft,sawtoothClassName:s.voucherLeftSawtooth,voucher:t,voucherLocation:o,onClick:O},c().createElement("div",{className:s.voucherLeftInfo},c().createElement(i.PU,{sizeStyle:"small",className:s.header}),c().createElement(i.s_,{isOfs:n,className:s.specificProduct,voucher:t,isShopeeMart:a}),c().createElement(i.EU,{className:s.expiry,voucher:t,upcomingGrayText:!0}))),c().createElement(i.Ec,{className:s.voucherRightContainer},c().createElement(i.ve,{voucher:t,className:s.voucherClaimFieldSolid,containerClassName:s.btnContainer,applyBtnClassName:u()(s.applyBtn,(0,N.np)(t)&&s.useLaterBtn),afterClaim:O,applyText:(0,d.t)("label_voucher_seller_voucher_use"),shouldExpandButtonClickArea:!0,needAnimation:!0})),c().createElement(i.Vp,{onTop:!0}))))})))},7941:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var r=o(3804),c=o.n(r),a=o(893),s=o.n(a),n=o(6704),u=o(9877),i=o(429),l=o(4292),p=o(6781),h=(0,p.Z)((0,n.withI18nCollections)([u.L])((function(e){var t=e.vouchers,o=e.isShopeeMart,r=e.targetType,a=e.targetData;return t&&0!==t.length?c().createElement(i.ZP,{targetType:r,targetData:a},c().createElement("div",{className:s()("product-shop-vouchers",e.className)},c().createElement("div",{className:"product-shop-vouchers__header"},(0,n.t)("label_shop_voucher")),c().createElement("div",{className:"product-shop-vouchers__list",style:{maxHeight:"23.25rem"},tabIndex:-1},!!t&&t.slice(0,50).map((function(e,t){return c().createElement(l.Z,{className:"_4kqG0J",key:"product-detail-page-seller-voucher-"+t,voucher:e,voucherLocation:t,isShopeeMart:o})}))))):null})))},6686:function(e){"use strict";e.exports=u},1437:function(e){"use strict";e.exports=a},6161:function(e){"use strict";e.exports=i},6704:function(e){"use strict";e.exports=r},3804:function(t){"use strict";t.exports=e},7274:function(e){"use strict";e.exports=n},5325:function(e){"use strict";e.exports=o},6775:function(e){"use strict";e.exports=c},4857:function(e){"use strict";e.exports=t}},0,[[7941,666,845,573]]]),"Z",null]},1]),function(){if(window&&window.__DECKER_HOOK__){var e=window.__DECKER_HOOK__;function t(){e.sendToDevtools("MFE_LOAD_SLOT",{slotName:"pcmall-productshopvouchers",tag:"pc-v5.22.0",branch:"heads/pc-v5.22.0",lastCommit:"chore(release): pc-v5.22.0",lastCommitHash:"9455aee66e86d2f2ff93c075d68cee8cc4ecbfa8",updated:"2022-09-28T11:13:26.337Z"})}e.on("MFE_RETRIEVE_SLOTS",t),t()}}();
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-voucher/_/pcmall-productshopvouchers.e9d65ebc49f38341da8d.legacy.js.map