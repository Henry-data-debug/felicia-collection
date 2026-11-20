
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Cm4XMvKf.js","/cdn/shopifycloud/checkout-web/assets/c1/app.MIziEoHE.js","/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.CbJmc0Bh.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.Df0JbPDF.js","/cdn/shopifycloud/checkout-web/assets/c1/3d539943.DJLM0oUr.js","/cdn/shopifycloud/checkout-web/assets/c1/bfe75f31.Bee8qG_K.js","/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.CiAFgRvq.js","/cdn/shopifycloud/checkout-web/assets/c1/204243fa.D76xq9r4.js","/cdn/shopifycloud/checkout-web/assets/c1/5c5817f3.mHvQVaig.js","/cdn/shopifycloud/checkout-web/assets/c1/091c79bb.XbXGGadc.js","/cdn/shopifycloud/checkout-web/assets/c1/f05935e5.YawyhJYq.js","/cdn/shopifycloud/checkout-web/assets/c1/d25d1b95.xai9oGSQ.js","/cdn/shopifycloud/checkout-web/assets/c1/7336bdaf.kijz0eCZ.js","/cdn/shopifycloud/checkout-web/assets/c1/54c78614.rSS8pu48.js","/cdn/shopifycloud/checkout-web/assets/c1/6f2620f5.J1ou0PZ9.js","/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.lMDncti6.js","/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.CrMzRQv3.js","/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.BfD2eJ7d.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.Cg7CprRA.js","/cdn/shopifycloud/checkout-web/assets/c1/69fae6d4.B0cVlpvy.js","/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.Djn-s7RA.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.WXTb-tsR.js","/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.DiYNnhKY.js","/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.wH83_ktl.js","/cdn/shopifycloud/checkout-web/assets/c1/39921a74.BFxFLVyI.js","/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.CkO_CI_E.js","/cdn/shopifycloud/checkout-web/assets/c1/8599b02a.CC0ZdaWl.js","/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.D5gkG8nn.js","/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e.BTS4UjgK.js","/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811.B2-kEfhA.js","/cdn/shopifycloud/checkout-web/assets/c1/1a6c2867.DIvU9A1-.js","/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.DSDSeS6D.js","/cdn/shopifycloud/checkout-web/assets/c1/22345fd4.DN3b_-nv.js","/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.B8XeIYm6.js","/cdn/shopifycloud/checkout-web/assets/c1/74835653.D4p5-BU4.js","/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda.Coq3V9ZP.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e.CoPFGtlb.js","/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.D31rWTEh.js","/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.DO6mOyLk.js","/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.BmgrLwbd.js","/cdn/shopifycloud/checkout-web/assets/c1/4b1c22b7.DtPZRHnB.js","/cdn/shopifycloud/checkout-web/assets/c1/17425706.CCH3HzfB.js","/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c.CvfJKToI.js","/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.DaHntg2M.js","/cdn/shopifycloud/checkout-web/assets/c1/06ef5503.BXgzlyq8.js","/cdn/shopifycloud/checkout-web/assets/c1/acc42fa8.BE4Njjgu.js","/cdn/shopifycloud/checkout-web/assets/c1/cccd6056.CKUesh5p.js","/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.BCgn80pN.js","/cdn/shopifycloud/checkout-web/assets/c1/79974aab.Brc5S-at.js","/cdn/shopifycloud/checkout-web/assets/c1/89e2d30a.BD1MboA0.js","/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.B8NdXI7n.js","/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8.CRWRt4Cc.js","/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd.DpjATfqm.js","/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.BBSut5TM.js","/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.D1y0zUI-.js","/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.K52-BGVn.js","/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.CQBnZv9o.js","/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.BiL28gK1.js","/cdn/shopifycloud/checkout-web/assets/c1/f58f39d8.DwdV-vV6.js","/cdn/shopifycloud/checkout-web/assets/c1/e03065ab.B0NMrdR3.js","/cdn/shopifycloud/checkout-web/assets/c1/c09515bf.aCz9uEcM.js","/cdn/shopifycloud/checkout-web/assets/c1/6bfea526.rhrIFAKf.js","/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff._7Z5jg5f.js","/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.BC7FIMfU.js","/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.DOFEKHng.js","/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.CzPdazrh.js","/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c.B1ivaRyC.js","/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.BvWdm3Fu.js","/cdn/shopifycloud/checkout-web/assets/c1/dae24aab.CekRmlUy.js","/cdn/shopifycloud/checkout-web/assets/c1/ddf59287.DZ9HfzNR.js","/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.COJVYwz0.js","/cdn/shopifycloud/checkout-web/assets/c1/58314944.Dv1dS9lp.js","/cdn/shopifycloud/checkout-web/assets/c1/9068a4ed.CHIL7j1M.js","/cdn/shopifycloud/checkout-web/assets/c1/7bc8057b.B0Eyc_7l.js","/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.qDHyKmo2.js","/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.L_GcjB7j.js","/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.ChW1ZnJY.js","/cdn/shopifycloud/checkout-web/assets/c1/d5d34b3b.DPuoYEMH.js","/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.CsFANDac.js","/cdn/shopifycloud/checkout-web/assets/c1/347b440c.BpCkwHnr.js","/cdn/shopifycloud/checkout-web/assets/c1/9ce08e25.D1d72JuB.js","/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.DtQewDJ-.js","/cdn/shopifycloud/checkout-web/assets/c1/5a347040.DvtZjLeO.js","/cdn/shopifycloud/checkout-web/assets/c1/792bb671.B3OvVnSg.js","/cdn/shopifycloud/checkout-web/assets/c1/9ca7d819.jkborthw.js","/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.Q8_2_122.js","/cdn/shopifycloud/checkout-web/assets/c1/21cc90a2.DHzOO82q.js","/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.BI2qathB.js","/cdn/shopifycloud/checkout-web/assets/c1/ca0c3e72.Bx15jAIf.js","/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.BDNFAGvU.js","/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.BCBNEe-M.js","/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.95lmLO5k.js","/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.Bb3QiqCm.js","/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.D9l7A99f.js","/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.BkPAlcHk.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.ADSVU1xC.js","/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c.BEJnF5Lv.js","/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.DqO_gQs5.js","/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.Dn5PUcc2.js","/cdn/shopifycloud/checkout-web/assets/c1/0724c71d.BRc7ylNW.js","/cdn/shopifycloud/checkout-web/assets/c1/7114e006.BLlWnaXr.js","/cdn/shopifycloud/checkout-web/assets/c1/9babe369.CGlbvXbu.js","/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a.oup8Ur0H.js","/cdn/shopifycloud/checkout-web/assets/c1/e0989459.B36BQKq0.js","/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6.ClSxYQ5E.js","/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.SP4JTOA4.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3c8263.BW2-9wkM.js","/cdn/shopifycloud/checkout-web/assets/c1/083cdde5.CvKpjIbJ.js","/cdn/shopifycloud/checkout-web/assets/c1/fe885b80.Dpj-kUvW.js","/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.jNESjREh.js","/cdn/shopifycloud/checkout-web/assets/c1/d93ca466.9QbK8Pn3.js","/cdn/shopifycloud/checkout-web/assets/c1/e129c76e.CdBSAV5s.js","/cdn/shopifycloud/checkout-web/assets/c1/051149c8.lHD9iIAq.js","/cdn/shopifycloud/checkout-web/assets/c1/d7065744.FrYxuDR9.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.CmUr6Z7y.js","/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.Mxk-dIOO.js","/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.BP5GiDmW.js","/cdn/shopifycloud/checkout-web/assets/c1/8fe56fc9.CkKz7v7L.js","/cdn/shopifycloud/checkout-web/assets/c1/2210eadb.DF0gIp_2.js","/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.BfI5xbla.js","/cdn/shopifycloud/checkout-web/assets/c1/ec391382.De3UvnUr.js","/cdn/shopifycloud/checkout-web/assets/c1/c6b02d73.lo7ldOfl.js","/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a.Bdvld-6t.js","/cdn/shopifycloud/checkout-web/assets/c1/7048f38b.D-0d0_Lq.js","/cdn/shopifycloud/checkout-web/assets/c1/c3c7c048.ClaMoV9a.js","/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a.CQlx3H_l.js","/cdn/shopifycloud/checkout-web/assets/c1/7aa3b627.BX34eESc.js","/cdn/shopifycloud/checkout-web/assets/c1/dada7e07.C-7fX1X0.js","/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.Cy8OP2Eo.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1.VD9SW77p.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DBH01810.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/uuid.DDArxpAV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hydrate.9q4Ga9zg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.C_uC3EPz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.D-gNjNDa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.DZtuG_UK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.BMdzfW_y.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useApplePayButtonStatus.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Tipping.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.DT05kVlY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethods.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.DRJckcGa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.kQR0txJ7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MissingFields.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CyQZvZOO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.1WzRSowg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-pay-button-exit.KhTiKgPS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/observe-fit-scale.DpLOWYa8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Payment.DrWvAMMF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["images/felicia-collections-logo.svg"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  