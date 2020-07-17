/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","dba09f85d61ef60e40b4334aaf2ff3e1"],["/Ambrosia-maple-pen-holders/index.html","7e14e2c0943637d0adbe15ebd1062e94"],["/Cutting-board-for-Krista/index.html","fe3f92eca5df70463bf18a6bd5c6d5b3"],["/Father's-day-pens/index.html","b22bb7f1bc753bb7b500c9fda20b8a5b"],["/Firewood-mushroom/index.html","5a34141b37391ee64c996f1d66476fcc"],["/Maple-stropping-board/index.html","64bac6c55ffb59b4c48b5bee59713161"],["/Mother's-day-cutting-boards/index.html","91d8740c28dbf884eb3e94bbb7bc6ca2"],["/Pen-and-Pencil-for-Larry/index.html","ed30d9b8d6112b10a0e138a49925faa8"],["/Poplar-picture-ledge-shelf/index.html","96ead0f33b4c5e3959006eaca6faf168"],["/Stowaway-stool/index.html","eff3d7de98bfc60b2daaf24df3bcec88"],["/about/index.html","c4657b890b0707311b5131f4290c65bc"],["/assets/css/main.css","70d90405da573939c7e358e50a653b4d"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/logo.png","294d12e8f4acde40ef2c245197e14010"],["/assets/img/posts/ambrosia-maple-pen-holders-close.jpg","0b3302530c14a0d8dd3060aef4f35d35"],["/assets/img/posts/ambrosia-maple-pen-holders-close_lg.jpg","daf91117c41c50a384dbb6a7c31b86c2"],["/assets/img/posts/ambrosia-maple-pen-holders-close_md.jpg","54eac6a1ff9c0f443b48ed8357849fc7"],["/assets/img/posts/ambrosia-maple-pen-holders-close_placehold.jpg","bdfd831f293ceca30816754150081160"],["/assets/img/posts/ambrosia-maple-pen-holders-close_sm.jpg","9bf26c1ff3cd3f427f37393b72452ed7"],["/assets/img/posts/ambrosia-maple-pen-holders-close_thumb.jpg","7ce2d985fce0c5cfbfeba9019027a21f"],["/assets/img/posts/ambrosia-maple-pen-holders-close_thumb@2x.jpg","a2c25a96e0af746a31f41fbc5d85efcc"],["/assets/img/posts/ambrosia-maple-pen-holders-close_xs.jpg","67d8a9bd8b2b69c2c4763278c405c490"],["/assets/img/posts/ambrosia-maple-pen-holders-final.jpg","67024742956b60992ba7df0236523f7e"],["/assets/img/posts/ambrosia-maple-pen-holders-final_lg.jpg","d7fabd201f3a028a1e0428489eb09fd4"],["/assets/img/posts/ambrosia-maple-pen-holders-final_md.jpg","e121ab9c32982fae6b64cc6e0a20b10a"],["/assets/img/posts/ambrosia-maple-pen-holders-final_placehold.jpg","5829bcebb688446038008455a6a90f50"],["/assets/img/posts/ambrosia-maple-pen-holders-final_sm.jpg","a92d40542e64ff6b15c5421225213b0d"],["/assets/img/posts/ambrosia-maple-pen-holders-final_thumb.jpg","54c6e64e3b45b3053abb8f903c4295a9"],["/assets/img/posts/ambrosia-maple-pen-holders-final_thumb@2x.jpg","33cfc29a76ea0828f3175c6172a547e5"],["/assets/img/posts/ambrosia-maple-pen-holders-final_xs.jpg","009c50c01c7b59ab2a8af2e51b1d6be5"],["/assets/img/posts/cocobolo-pen-hannah-final.jpg","9d469985bc09b6fe1ea6b73e937fad4b"],["/assets/img/posts/cocobolo-pen-hannah-final_lg.jpg","b6bba67310f8554126569bd569b9bc97"],["/assets/img/posts/cocobolo-pen-hannah-final_md.jpg","84e27243dab12026be398734ec7404e5"],["/assets/img/posts/cocobolo-pen-hannah-final_placehold.jpg","c5022dd9d3b70da4b13455b038406ae7"],["/assets/img/posts/cocobolo-pen-hannah-final_sm.jpg","0cefbf6bfc348f314898dbc68d197791"],["/assets/img/posts/cocobolo-pen-hannah-final_thumb.jpg","e141e0d23566e918358c00a783b956d6"],["/assets/img/posts/cocobolo-pen-hannah-final_thumb@2x.jpg","5db7b2a91fddfc2ea82634e130bd7327"],["/assets/img/posts/cocobolo-pen-hannah-final_xs.jpg","c63a79ad5d554fb66369a9490f82b93c"],["/assets/img/posts/cocobolo-pens-final.jpg","7bb462e78bc5492b69783037c020cad0"],["/assets/img/posts/cocobolo-pens-final_lg.jpg","bc39ad81745afb5b05e8b7ea9dd72dca"],["/assets/img/posts/cocobolo-pens-final_md.jpg","6f73b1e7a6ae462a2e39cd87e29aa2d4"],["/assets/img/posts/cocobolo-pens-final_placehold.jpg","46b5060629a8a74d8161e3ef7961cc92"],["/assets/img/posts/cocobolo-pens-final_sm.jpg","f23a99f1431f132f0f329d37a20b3939"],["/assets/img/posts/cocobolo-pens-final_thumb.jpg","90638a311d79c0fc3b54dff14b07083c"],["/assets/img/posts/cocobolo-pens-final_thumb@2x.jpg","cd7c2cc896c5af06085ea0e932a876b8"],["/assets/img/posts/cocobolo-pens-final_xs.jpg","be8e103f4c3a018e225789aba1b4d5d3"],["/assets/img/posts/cutting-board-for-krista.jpg","8e35b999c6afea1b745c12f5cecccfa7"],["/assets/img/posts/cutting-board-for-krista_lg.jpg","941f99b79b792be20a4f833bf7afa30c"],["/assets/img/posts/cutting-board-for-krista_md.jpg","561f2fdd48a22cb260cad596f4e9cac1"],["/assets/img/posts/cutting-board-for-krista_placehold.jpg","7fa9eb1aa8cab92fb1450fc28679ea66"],["/assets/img/posts/cutting-board-for-krista_sm.jpg","8842b8f034c627e797a667bac6ea14da"],["/assets/img/posts/cutting-board-for-krista_thumb.jpg","7bdb011e22fd89055c30b5b9aa3d2070"],["/assets/img/posts/cutting-board-for-krista_thumb@2x.jpg","2fd8f614fbddf033045c1ec80957b281"],["/assets/img/posts/cutting-board-for-krista_xs.jpg","ee75ac4d09e292c9b13a98c4a5264aea"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final.jpg","908f84dfd07c781f0904e819d3126e29"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_lg.jpg","d2ed243c2f0927c626293dec523714ba"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_md.jpg","3fbdae926f47bc654ec2225d890ed248"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_placehold.jpg","83d2d60be5eaa37210e1a8c97e997642"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_sm.jpg","9b4a0388f6e01889287e6066d8951ba2"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_thumb.jpg","87c84e5452a49d7872df3563df5415d2"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_thumb@2x.jpg","9fb7cb70c384869c26c22cc12197d34a"],["/assets/img/posts/cutting-board-spatula-seam-ripper-final_xs.jpg","3bf1fe2d84108742c4cd56bb458dd93c"],["/assets/img/posts/fathers-day-pens-final.jpg","c46e77aa9fc88f28f189adb5dfcec966"],["/assets/img/posts/fathers-day-pens-final_lg.jpg","5288325791da00f4dc5ffaf6703cdbe0"],["/assets/img/posts/fathers-day-pens-final_md.jpg","017eb50583514cf0292134767cba2c96"],["/assets/img/posts/fathers-day-pens-final_placehold.jpg","0e4792ad191b7f7a307374ab7efbf7c3"],["/assets/img/posts/fathers-day-pens-final_sm.jpg","464f03931db84e755569c99fa1b81fe1"],["/assets/img/posts/fathers-day-pens-final_thumb.jpg","b60340d1bb26d9808719c040d5dee528"],["/assets/img/posts/fathers-day-pens-final_thumb@2x.jpg","5ec88d2f9fe81259cb5e46a6560e1570"],["/assets/img/posts/fathers-day-pens-final_xs.jpg","4329b424785c0b844d279300882f263a"],["/assets/img/posts/firewood-mushroom-final_md.jpg","b61e856f2c2d51a931adbecc21e69940"],["/assets/img/posts/firewood-mushroom-final_placehold.jpg","1e3a054de742bb1049180d909d9aa130"],["/assets/img/posts/firewood-mushroom-final_sm.jpg","b7fdf2a13d50cdf90e83d82143124d3d"],["/assets/img/posts/firewood-mushroom-final_thumb.jpg","66f3d5b8ac27d731ba2b9f9bd3e884e3"],["/assets/img/posts/firewood-mushroom-final_thumb@2x.jpg","8ab7bb175e6b70c27d105855da5e05c1"],["/assets/img/posts/firewood-mushroom-final_xs.jpg","61197522a408dbe7e997ab10b7cfa2a0"],["/assets/img/posts/first-cutting-board-final.jpg","0a8c63c195de123bf7748cef6c66ebd6"],["/assets/img/posts/first-cutting-board-final_lg.jpg","98329e84797a494d6f79f2edd7387dc8"],["/assets/img/posts/first-cutting-board-final_md.jpg","8ee7e00d61a29bc449236631b4bbbd66"],["/assets/img/posts/first-cutting-board-final_placehold.jpg","c9c4ca31ebadc981de3773a83a5be983"],["/assets/img/posts/first-cutting-board-final_sm.jpg","b9378eeb8cdc2baeec1597148fc1a4b7"],["/assets/img/posts/first-cutting-board-final_thumb.jpg","1a4e1005cbfe0912f5ac4099892a183c"],["/assets/img/posts/first-cutting-board-final_thumb@2x.jpg","89321ad2c8b5f46e8d1ed5a172d345a6"],["/assets/img/posts/first-cutting-board-final_xs.jpg","05a10d98ff36da4c89d240be0173927d"],["/assets/img/posts/garden-crate-final.jpg","be1be5cb85cf037aa80365ea0fe4dd09"],["/assets/img/posts/garden-crate-final_lg.jpg","218a351682fc1866421db8a4b35e0651"],["/assets/img/posts/garden-crate-final_md.jpg","de432c5f79901f7243fc7add305c082d"],["/assets/img/posts/garden-crate-final_placehold.jpg","68b599b85914700a1b7fc0d0ac1242df"],["/assets/img/posts/garden-crate-final_sm.jpg","74d269e1ebfd5345abad7cee7cb2ba6a"],["/assets/img/posts/garden-crate-final_thumb.jpg","7306bbd648b0502d003c4c745927f198"],["/assets/img/posts/garden-crate-final_thumb@2x.jpg","255c9f3492dc896f7c6141b6ffee3178"],["/assets/img/posts/garden-crate-final_xs.jpg","2f2e483003d001680bbafdebb16a7227"],["/assets/img/posts/hickory-cutting-board-final.jpg","a7e9cbbb8d5adf2d05a049f80824d61c"],["/assets/img/posts/hickory-cutting-board-final_lg.jpg","051d7d1f806f20793d7088e557e41f48"],["/assets/img/posts/hickory-cutting-board-final_md.jpg","95eec440fd7d5ff62f87cdc2a072fbb8"],["/assets/img/posts/hickory-cutting-board-final_placehold.jpg","d74f36ffbfc073fdae2603322fc87d37"],["/assets/img/posts/hickory-cutting-board-final_sm.jpg","9ddc9cbc6fd1635065e7c909a175f3c0"],["/assets/img/posts/hickory-cutting-board-final_thumb.jpg","5e257179f88927672e1cd678873488ab"],["/assets/img/posts/hickory-cutting-board-final_thumb@2x.jpg","9eaefcca1449168a851d5d76c9298e3e"],["/assets/img/posts/hickory-cutting-board-final_xs.jpg","69ac6821342523fd5756bcb72cdbc420"],["/assets/img/posts/hickory-tablet-stand-final_placehold.jpg","6f723478cca9db04110b95d19f62a3c8"],["/assets/img/posts/hickory-tablet-stand-final_thumb.jpg","0ea371e10e965c56d2d0472f543e1d4b"],["/assets/img/posts/hickory-tablet-stand-final_xs.jpg","93fbd7f99a43bcba0c85e2248263cadf"],["/assets/img/posts/kentucky-stick-chairs-final.jpg","c530bbab7b478c4f83657d32a342abce"],["/assets/img/posts/kentucky-stick-chairs-final_lg.jpg","3fd5c241b23c101e2b4ddf53a3bf6ca9"],["/assets/img/posts/kentucky-stick-chairs-final_md.jpg","5b24f3867a0b145675c9daa35462dcaa"],["/assets/img/posts/kentucky-stick-chairs-final_placehold.jpg","f4a3bd353e9b9f6b5e6caef6d086bbff"],["/assets/img/posts/kentucky-stick-chairs-final_sm.jpg","5a2bc2639b4ff911ef6b593cecb7cb97"],["/assets/img/posts/kentucky-stick-chairs-final_thumb.jpg","aab71df06997ddeb5d4749f811c5d163"],["/assets/img/posts/kentucky-stick-chairs-final_thumb@2x.jpg","10bf6a27ddf174b531de4c53e777d1d9"],["/assets/img/posts/kentucky-stick-chairs-final_xs.jpg","ab00a6d818ba0b9f33501585ecf1b830"],["/assets/img/posts/kitty-cutting-boards-final.jpg","81aaa00bd9eb8172eaee144e2814c168"],["/assets/img/posts/kitty-cutting-boards-final_lg.jpg","55f2e1fe72b6b0bef992e24bbb01ad54"],["/assets/img/posts/kitty-cutting-boards-final_md.jpg","34edeeba13c7788dbf4e2a952c22290b"],["/assets/img/posts/kitty-cutting-boards-final_placehold.jpg","f3adcee8aba180aa81e77176906b8c43"],["/assets/img/posts/kitty-cutting-boards-final_sm.jpg","6a40f1b1996fc587f34555c3a37434bc"],["/assets/img/posts/kitty-cutting-boards-final_thumb.jpg","415c5af1f39f31fbf2042f6dc2a2a84f"],["/assets/img/posts/kitty-cutting-boards-final_thumb@2x.jpg","6f030f32013c8c965397998bfa4fffb7"],["/assets/img/posts/kitty-cutting-boards-final_xs.jpg","4d51c1c88f9d86028181a6b091c009c4"],["/assets/img/posts/maple-stropping-board-final.jpg","ac37407fba9fee1ef7a226908efc79c7"],["/assets/img/posts/maple-stropping-board-final_lg.jpg","17fa64313923d6507d581b1411cc0893"],["/assets/img/posts/maple-stropping-board-final_md.jpg","b32cb648a192eadcf8163c541a140cb3"],["/assets/img/posts/maple-stropping-board-final_placehold.jpg","b825d9bb3d3df4819390cb25e0004c6d"],["/assets/img/posts/maple-stropping-board-final_sm.jpg","d426db2b4336953b6676abed9f91abc1"],["/assets/img/posts/maple-stropping-board-final_thumb.jpg","f1a2eebb4e91656f16258eb6758ce7c8"],["/assets/img/posts/maple-stropping-board-final_thumb@2x.jpg","76a2b5299f7c17d7f653b408c2cee4ab"],["/assets/img/posts/maple-stropping-board-final_xs.jpg","7b628420295943a75cbbc9510a6e5699"],["/assets/img/posts/mothers-day-cutting-board-edge.jpg","1a8f3811e36649d5a1e11304f21c2dc0"],["/assets/img/posts/mothers-day-cutting-board-edge_lg.jpg","5e9554b1118f2e7f8cd24bdd26e43e1f"],["/assets/img/posts/mothers-day-cutting-board-edge_md.jpg","d0d4cc74f4933fc41363af3079d9677f"],["/assets/img/posts/mothers-day-cutting-board-edge_placehold.jpg","e6985424a281663f0e679c3590182374"],["/assets/img/posts/mothers-day-cutting-board-edge_sm.jpg","2e6614d3293cf34eb2462ceba051e19d"],["/assets/img/posts/mothers-day-cutting-board-edge_thumb.jpg","c9fed975629b46ab7025b06c5f73b626"],["/assets/img/posts/mothers-day-cutting-board-edge_thumb@2x.jpg","a7b49f4f4adb2f33b7f924d319e67f97"],["/assets/img/posts/mothers-day-cutting-board-edge_xs.jpg","8755f27a0719115a9a80f743cd46a5ca"],["/assets/img/posts/oak-chopping-block-final-surface.jpg","08ae292f6893bca7edb5bb6893892457"],["/assets/img/posts/oak-chopping-block-final-surface_lg.jpg","737b3ed3d4fb05eac4c541a8bacbf7de"],["/assets/img/posts/oak-chopping-block-final-surface_md.jpg","23b79967d742a0957b8007bfa6b68d3b"],["/assets/img/posts/oak-chopping-block-final-surface_placehold.jpg","33cff1963886a4101f49f458e4be701a"],["/assets/img/posts/oak-chopping-block-final-surface_sm.jpg","78e487267de4deb02a74558a54142379"],["/assets/img/posts/oak-chopping-block-final-surface_thumb.jpg","aa1293ed0d8ea323690ffeaf70ce5695"],["/assets/img/posts/oak-chopping-block-final-surface_thumb@2x.jpg","54591d646b257cca5c8cc27fbb9313d4"],["/assets/img/posts/oak-chopping-block-final-surface_xs.jpg","69365165a093e0cddb42f07128b9b26e"],["/assets/img/posts/pen-pencil-set-final.jpg","049efddeb3f9773d0d091181a4ec88dd"],["/assets/img/posts/pen-pencil-set-final_lg.jpg","4d910d5ab12ddc0202790710317fb525"],["/assets/img/posts/pen-pencil-set-final_md.jpg","8524b4d9d14e44aed25fceb2a4ffb20f"],["/assets/img/posts/pen-pencil-set-final_placehold.jpg","ea804f046d5a8db881d1a0596a212ce9"],["/assets/img/posts/pen-pencil-set-final_sm.jpg","a7b5e0de9c888660c947c6cdb63c432b"],["/assets/img/posts/pen-pencil-set-final_thumb.jpg","844838746991bb8efdd6b3919d53f11b"],["/assets/img/posts/pen-pencil-set-final_thumb@2x.jpg","88441c7f55fee1694d5ee17edd2b3600"],["/assets/img/posts/pen-pencil-set-final_xs.jpg","2c42fd2087f2df34da1d08e04ad0a526"],["/assets/img/posts/picture-ledge-shelf-final.jpg","989911013b7a627220e4390a022fae6c"],["/assets/img/posts/picture-ledge-shelf-final_lg.jpg","72c0a5a150b975fcfd78cf389a42c5b2"],["/assets/img/posts/picture-ledge-shelf-final_md.jpg","6af7b66f87b8348ffd0e14842bf83a20"],["/assets/img/posts/picture-ledge-shelf-final_placehold.jpg","903a9a2c0c82218f9d6e750bb116de07"],["/assets/img/posts/picture-ledge-shelf-final_sm.jpg","053e420be2e1eb74596e3863910c8ee2"],["/assets/img/posts/picture-ledge-shelf-final_thumb.jpg","91b83c2f0a324b47c024bdfb02b8e435"],["/assets/img/posts/picture-ledge-shelf-final_thumb@2x.jpg","0af1efa4d59f109163f681c6c7cb650c"],["/assets/img/posts/picture-ledge-shelf-final_xs.jpg","56111f7be41f2b1e8954d87e914d0160"],["/assets/img/posts/pocket-hole-cupboard-final.jpg","7ac78cea48aefb0f5dfa4a804b00fd10"],["/assets/img/posts/pocket-hole-cupboard-final_lg.jpg","23718ab2703376ec7f6e8ee3ce630dbd"],["/assets/img/posts/pocket-hole-cupboard-final_md.jpg","ec86475b2fb36ee773a7b612cb336072"],["/assets/img/posts/pocket-hole-cupboard-final_placehold.jpg","693fe652d7d49e40e2efc6e11e06a552"],["/assets/img/posts/pocket-hole-cupboard-final_sm.jpg","782f23ba582925b56c0da4edbfa9f507"],["/assets/img/posts/pocket-hole-cupboard-final_thumb.jpg","0432177634b72cd5284fc58ef15aceb4"],["/assets/img/posts/pocket-hole-cupboard-final_thumb@2x.jpg","cd6a17296b4a27473a8566022111e431"],["/assets/img/posts/pocket-hole-cupboard-final_xs.jpg","d55d7efea6f92e0fc1731a5e14a3d4ef"],["/assets/img/posts/purple-heart-and-cocobolo-final.jpg","f9e8daa1d5096b5854b17fbdbf61bfea"],["/assets/img/posts/purple-heart-and-cocobolo-final_lg.jpg","930c8ecea448f2b98efad1e500a93709"],["/assets/img/posts/purple-heart-and-cocobolo-final_md.jpg","7da3c9438ceafba81f54db3468d366cf"],["/assets/img/posts/purple-heart-and-cocobolo-final_placehold.jpg","8fadd799ea027b9fdcad9e21eb4cb710"],["/assets/img/posts/purple-heart-and-cocobolo-final_sm.jpg","d1585020e81700cfc59a5fa554fe109a"],["/assets/img/posts/purple-heart-and-cocobolo-final_thumb.jpg","1c1afc6f303dcf67d1494ae6f8869caf"],["/assets/img/posts/purple-heart-and-cocobolo-final_thumb@2x.jpg","c27b1988463d7ef811ccb04ee7f9c936"],["/assets/img/posts/purple-heart-and-cocobolo-final_xs.jpg","cc18df4aaa1e61a98703290597e5810a"],["/assets/img/posts/stowaway-stool-final.jpg","fd4ea1334497caad045cd36048dbd17f"],["/assets/img/posts/stowaway-stool-final_lg.jpg","7a63f734da0581bb30a01dcce2342257"],["/assets/img/posts/stowaway-stool-final_md.jpg","86aa7fe9daaa94a106cb494850e6ef9a"],["/assets/img/posts/stowaway-stool-final_placehold.jpg","7e27520da96506edea73d66793c5f7b6"],["/assets/img/posts/stowaway-stool-final_sm.jpg","8bd406b110cc1cab8ff709591af96036"],["/assets/img/posts/stowaway-stool-final_thumb.jpg","84a7896324c2e77b74155310541fc33b"],["/assets/img/posts/stowaway-stool-final_thumb@2x.jpg","c5c2125ca9b3d4500a846cd9d0095452"],["/assets/img/posts/stowaway-stool-final_xs.jpg","e81b2185bc6b7f7271fe4fe7c4d7601e"],["/assets/img/posts/suspended-oak-leaf.jpg","dc9fa8431eb29b321597562f3d332265"],["/assets/img/posts/suspended-oak-leaf_lg.jpg","76aa31f1dee0d22bca76bca7d8c79930"],["/assets/img/posts/suspended-oak-leaf_md.jpg","1065c742e164b2b2c80b453e202f25c1"],["/assets/img/posts/suspended-oak-leaf_placehold.jpg","65864b843f1c50371845a2ae033b5fab"],["/assets/img/posts/suspended-oak-leaf_sm.jpg","b3ba294f7dfdcb796dcbe6cc9018f5a4"],["/assets/img/posts/suspended-oak-leaf_thumb.jpg","7683708cf8b6a2060dc0b0b03af1f5d6"],["/assets/img/posts/suspended-oak-leaf_thumb@2x.jpg","65bfc4fc55bd7125665c4409608fff9f"],["/assets/img/posts/suspended-oak-leaf_xs.jpg","b1d7bb712bb5099915e900fe9b9e45ef"],["/assets/img/posts/tea-light-candle-holder-final.jpg","2eae524e8186a8dc7294b4728503b156"],["/assets/img/posts/tea-light-candle-holder-final_lg.jpg","b1c1b2f8c6e30da873a5799000848daa"],["/assets/img/posts/tea-light-candle-holder-final_md.jpg","83b2bef41343fbd2a746ee34d606033c"],["/assets/img/posts/tea-light-candle-holder-final_placehold.jpg","d69a6b942c4f4077300ae3eee60f570a"],["/assets/img/posts/tea-light-candle-holder-final_sm.jpg","86fb4249058d3ae82304884b4f85bce1"],["/assets/img/posts/tea-light-candle-holder-final_thumb.jpg","ba1000ef5a09dd6123f5859aef9d5088"],["/assets/img/posts/tea-light-candle-holder-final_thumb@2x.jpg","9f0985b290a79658617a6dd2f8cf4aa1"],["/assets/img/posts/tea-light-candle-holder-final_xs.jpg","2733ad77f241884c2c7d8106c22e9142"],["/assets/img/posts/tea-light-candle-holder-lit-final.jpg","f03e4fdbcc9c4a36e0cafa4c2cfa169c"],["/assets/img/posts/tea-light-candle-holder-lit-final_lg.jpg","a3fbba61660143855e1f19aec86ac556"],["/assets/img/posts/tea-light-candle-holder-lit-final_md.jpg","ba94bb39d595cd70bb8b8bffbe000336"],["/assets/img/posts/tea-light-candle-holder-lit-final_placehold.jpg","7e38670d2d2032e297a15421c7671664"],["/assets/img/posts/tea-light-candle-holder-lit-final_sm.jpg","9b7035f9dcaf8917f084c8f0498507a3"],["/assets/img/posts/tea-light-candle-holder-lit-final_thumb.jpg","8bbfff43989caf482b0408ed52628b6e"],["/assets/img/posts/tea-light-candle-holder-lit-final_thumb@2x.jpg","54c1c7e2f7c482add0ca988eaab2bf1c"],["/assets/img/posts/tea-light-candle-holder-lit-final_xs.jpg","e3386d141a57d298f0ef74617d645f60"],["/assets/img/posts/walnut-pen-grandma-final.jpg","4317981cbb40154b8bedd245c05521c3"],["/assets/img/posts/walnut-pen-grandma-final_lg.jpg","823f9529338da7e9302c38b4b09f8275"],["/assets/img/posts/walnut-pen-grandma-final_md.jpg","15be8a54d000de49d8da3bac30264fc9"],["/assets/img/posts/walnut-pen-grandma-final_placehold.jpg","20cd2b584785c7a052d43fc6ddd7668f"],["/assets/img/posts/walnut-pen-grandma-final_sm.jpg","22d8eb622a89ddcf25b13efbcd80ada0"],["/assets/img/posts/walnut-pen-grandma-final_thumb.jpg","7086eaa963b21353cb21a43f91519b8e"],["/assets/img/posts/walnut-pen-grandma-final_thumb@2x.jpg","16563557f77ed1736f48d0ed88aa2ef3"],["/assets/img/posts/walnut-pen-grandma-final_xs.jpg","4c66c8ce7c9ab9e0adc41deb98c28370"],["/assets/img/suspended-oak-leaf.jpg","dc9fa8431eb29b321597562f3d332265"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/categories/index.html","c70deee4ed39c17525817bd690e174d7"],["/cocobolo-pen-for-hannah/index.html","f6d1d3487e16c0feb610e7c6d1d7a8df"],["/cocobolo-pens/index.html","56a28fc09935f55d6410e1e595802a6d"],["/contact/index.html","6f8658379fe26d836e66e31e27def5a9"],["/first-cutting-board/index.html","f6509f6af22f8dccb59945d841b2d1e9"],["/garden-crate/index.html","5fcb63236d107023cb58fad5878b03e0"],["/hickory-cutting-board/index.html","16d36e5f0a9e75d35c44690d7c25752a"],["/hickory-tablet-stand/index.html","1cebf9e9b77bbbbce12011984bd9ee89"],["/index.html","2379db6a5dd482575b0c42ffbb8179c3"],["/kentucky-stick-chairs/index.html","f3661692794553ee2f10a320e127959b"],["/kitty-cutting-boards/index.html","f038e4b45148d4eaafa8507cd024acf2"],["/oak-chopping-block-refurbish/index.html","6a5bae1e8eb0fb99dce2e417d4e76794"],["/pocket-hole-cupboard/index.html","ac1cf0c0dea04e2d53203140b4586fd3"],["/purple-heart-and-cocobolo-pens/index.html","46c7541106166bb11707d05f20c04457"],["/sw.js","3a29e069aed027a9cb3bac4fe736be56"],["/tea-light-candle-holder/index.html","6339c7a27447f8a66aa25f3ce6055962"],["/utils/temp/2017-10-15-Cocobolo-pens/index.html","fe809c96bfe75bef4ddb125aca41b93b"],["/utils/temp/2017-11-26-Firewood-mushroom/index.html","c8e1726d333bfe5ec2f1d87736f6caa6"],["/utils/temp/2017-12-10-Cocobolo-pen-for-Hannah/index.html","bb6fef7401fbd5cbee06c343382f1ef3"],["/utils/temp/2018-01-09-Walnut-pen-for-Grandma/index.html","5c4b66270654652528a76e0bd8c98368"],["/utils/temp/2018-03-11-Poplar-picture-ledge-shelf/index.html","a18b2e4460d9230d1168c0ba713b9bf2"],["/utils/temp/2018-03-26-First-cutting-board/index.html","034434a917c3c86d49ccf3364f15f8f9"],["/utils/temp/2018-09-07-Maple-stropping-board/index.html","026a442111f9e3ebe0fae8a870c97b28"],["/utils/temp/2018-09-10-Ambrosia-maple-pen-holders/index.html","1cd7f43793562554c128db6e9fd0b19e"],["/walnut-pen-for-grandma/index.html","aa8d3a36ff41fb6c11ad8eb6e907715b"],["/woodworking-project-ideas/index.html","b5f61a203c48c6921afe9e81706bd4e3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







