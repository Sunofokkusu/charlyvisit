/**
 * @license
 * Copyright (c) Speedernet <contact@speedernet.fr>
 * ALL RIGHTS RESERVED
 * This file is part of SpeedernetSphere project
 * SpeedernetSphere can not be copied and/or distributed without the express permission of Speedernet
 */
(function(){"use strict";let e="speedernet-sphere-experience";let s=null;importScripts("./static/js/libs/cache/workbox-sw.js");let t=workbox;t.setConfig({debug:false,modulePathPrefix:"./static/js/libs/cache/"});t.routing.registerRoute(new RegExp("/"),new t.strategies.CacheFirst({cacheName:e,plugins:[new t.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new t.rangeRequests.RangeRequestsPlugin]}));t.core.skipWaiting();t.core.clientsClaim();const a=(e,s,t)=>{e.add(t[s]).then((()=>{i(e,s,t)})).catch((a=>{i(e,s,t)}))};const i=(e,t,i)=>{let n={message:"synch",index:t,len:i.length,name:i[t]};s.postMessage(JSON.stringify(n));t++;if(t>=i.length){let e={message:"synched"};s.postMessage(JSON.stringify(e))}else{a(e,t,i)}};const n=e=>{try{caches.open(e).then((e=>{let t={message:"startsynch"};s.postMessage(JSON.stringify(t));a(e,0,self.filesToCache)}))}catch(e){console.log("Error during caching",e)}};self.addEventListener("message",(t=>{s=t.source;if(t.data.message=="start"){n(e)}if(t.data.message=="fileexist"){c(t.data.uri,e)}}));const c=(e,t)=>caches.open(t).then((t=>t.match(e).then((t=>{let a=t&&t.status==200;s.postMessage(JSON.stringify({message:"fileexist",uri:e,value:a}))}),(t=>{s.postMessage(JSON.stringify({message:"fileexist",uri:e,value:false}))}))))})();

filesToCache = [
"./api/api-wrapper.js",
"./cache.js",
"./data/hd/panoramas/R0010076.jpg",
"./data/hd/panoramas/R0010077.jpg",
"./data/hd/panoramas/R0010078.jpg",
"./data/hd/panoramas/R0010079.jpg",
"./data/hd/panoramas/R0010080.jpg",
"./data/logo.png",
"./data/pano.jpg",
"./data/pano_pwa.jpg",
"./data/pano_pwa_icon.jpg",
"./data/simulation.sphere",
"./data/std/panoramas/R0010076.jpg",
"./data/std/panoramas/R0010077.jpg",
"./data/std/panoramas/R0010078.jpg",
"./data/std/panoramas/R0010079.jpg",
"./data/std/panoramas/R0010080.jpg",
"./data/uhd/panoramas/R0010076.jpg",
"./data/uhd/panoramas/R0010077.jpg",
"./data/uhd/panoramas/R0010078.jpg",
"./data/uhd/panoramas/R0010079.jpg",
"./data/uhd/panoramas/R0010080.jpg",
"./data/uhd/sprites/fleche.png",
"./data/videos360/R0010081_st.MP4",
"./data/videos360/R0010082_st.MP4",
"./imsmanifest.xml",
"./index.html",
"./static/assets/effects/particules/smokeparticle.png",
"./static/assets/effects/particules/spark.png",
"./static/assets/effects/waternormals.jpg",
"./static/assets/effects/Water_1_M_Normal.jpg",
"./static/assets/effects/Water_2_M_Normal.jpg",
"./static/assets/gradients/bt.jpg",
"./static/assets/gradients/circular.jpg",
"./static/assets/gradients/lr.jpg",
"./static/assets/gradients/radial.jpg",
"./static/assets/gradients/tb.jpg",
"./static/assets/gradients/wave.jpg",
"./static/assets/help/cardboard-navigation-en.png",
"./static/assets/help/cardboard-navigation-fr.png",
"./static/assets/help/desktop_navigation-en.png",
"./static/assets/help/desktop_navigation-fr.png",
"./static/assets/help/info.png",
"./static/assets/help/launch.png",
"./static/assets/help/plus.png",
"./static/assets/help/shortcut.png",
"./static/assets/help/touchscreen-navigation-en.png",
"./static/assets/help/touchscreen-navigation-fr.png",
"./static/assets/help/up.png",
"./static/assets/help/vrheadset-navigation-en.png",
"./static/assets/help/vrheadset-navigation-fr.png",
"./static/assets/help/warning.png",
"./static/assets/hud/arrow-blue.twd",
"./static/assets/hud/black.png",
"./static/assets/hud/circle-red.twd",
"./static/assets/hud/map-background.png",
"./static/assets/hud/map-goto-known.png",
"./static/assets/hud/map-goto-unknown.png",
"./static/assets/hud/map-interestpoint-known.png",
"./static/assets/hud/map-interestpoint-unknown.png",
"./static/assets/hud/map-north.png",
"./static/assets/icons/icon-128x128.png",
"./static/assets/icons/icon-144x144.png",
"./static/assets/icons/icon-152x152.png",
"./static/assets/icons/icon-192x192.png",
"./static/assets/icons/icon-256x256.png",
"./static/assets/icons/icon-32x32.png",
"./static/assets/icons/icon-512x512.png",
"./static/assets/loader/gradient.jpg",
"./static/assets/loader/loader-end.png",
"./static/assets/loader/loader-start.png",
"./static/assets/manifest.json",
"./static/assets/SPHERE-favicon.png",
"./static/assets/target/target.glb",
"./static/assets/target/target.JPEG",
"./static/assets/target/target.sph3d",
"./static/assets/tex_loader.png",
"./static/assets/tex_tracker.png",
"./static/assets/viewer/ar-in.png",
"./static/assets/viewer/cardboards-in.png",
"./static/assets/viewer/close.png",
"./static/assets/viewer/compass.png",
"./static/assets/viewer/fullscreen.png",
"./static/assets/viewer/pause.png",
"./static/assets/viewer/play.png",
"./static/assets/viewer/quest-in.png",
"./static/assets/viewer/screens-in.png",
"./static/assets/viewer/vive-in.png",
"./static/assets/vrcontroller/hand/hand_occulus2_albedo_1024.jpg",
"./static/assets/vrcontroller/hand/main.bin",
"./static/assets/vrcontroller/hand/main.gltf",
"./static/assets/vrcontroller/hand/main_manette_test.bin",
"./static/assets/vrcontroller/hand/main_manette_test.gltf",
"./static/assets/vrcontroller/hand/manette.bin",
"./static/assets/vrcontroller/hand/manette.gltf",
"./static/assets/vrcontroller/hand/sphere_controller_color.jpg",
"./static/assets/vrcontroller/single/Controller_VR.bin",
"./static/assets/vrcontroller/single/Controller_VR.gltf",
"./static/assets/vrcontroller/single/Controller_VR_color.jpg",
"./static/assets/vrcontroller/target.png",
"./static/css/viewer.css",
"./static/js/libs/basis/basis_transcoder.js",
"./static/js/libs/basis/basis_transcoder.wasm",
"./static/js/libs/cache/workbox-background-sync.prod.js",
"./static/js/libs/cache/workbox-broadcast-update.prod.js",
"./static/js/libs/cache/workbox-cacheable-response.prod.js",
"./static/js/libs/cache/workbox-core.prod.js",
"./static/js/libs/cache/workbox-expiration.prod.js",
"./static/js/libs/cache/workbox-navigation-preload.prod.js",
"./static/js/libs/cache/workbox-offline-ga.prod.js",
"./static/js/libs/cache/workbox-precaching.prod.js",
"./static/js/libs/cache/workbox-range-requests.prod.js",
"./static/js/libs/cache/workbox-recipes.prod.js",
"./static/js/libs/cache/workbox-routing.prod.js",
"./static/js/libs/cache/workbox-strategies.prod.js",
"./static/js/libs/cache/workbox-streams.prod.js",
"./static/js/libs/cache/workbox-sw.js",
"./static/js/libs/cache/workbox-window.dev.es5.mjs.map",
"./static/js/libs/cache/workbox-window.dev.mjs.map",
"./static/js/libs/cache/workbox-window.prod.es5.mjs",
"./static/js/libs/cache/workbox-window.prod.es5.mjs.map",
"./static/js/libs/cache/workbox-window.prod.mjs",
"./static/js/libs/cache/workbox-window.prod.mjs.map",
"./static/js/libs/cache/workbox-window.prod.umd.js",
"./static/js/libs/draco/draco_decoder.js",
"./static/js/libs/draco/draco_decoder.wasm",
"./static/js/libs/draco/draco_wasm_wrapper.js",
"./static/js/libs/hls.js",
"./static/js/libs/omnitone.js",
"./static/js/libs/pako_inflate.js",
"./static/js/libs/physics/ammo.wasm.js",
"./static/js/libs/three.js",
"./static/js/libs/tween.umd.js",
"./static/js/main-viewer.js",
"./static/js/physics/physic-worker.js",
]