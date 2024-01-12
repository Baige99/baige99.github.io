/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/project/2024/01/11/kswapd0挖矿病毒应急响应/index.html","f1fe07af7b33cc4057aa755ba3d0aff3"],["/project/404.html","a1c5ef9f13d09333f7de5a09372a7a7f"],["/project/archives.html","b0f76ab9ff0d60f4e55b6c5c0290904e"],["/project/archives/2024/01/index.html","968b0936eb6921369fe6efe42347585e"],["/project/archives/2024/index.html","86bfdd4c270a59e22b7c743cfb178576"],["/project/archives/index.html","e732221b517bd684026354de05865e07"],["/project/categories/index.html","168ce3ed351d2e742882c3f86ad1c766"],["/project/categories/网络安全/index.html","cd7a8d112ba6e112d7fd48585baee305"],["/project/css/highlight/light.min.css","3cb5e1bc5e181ee5b34beb5c1fdee579"],["/project/css/highlight/night-blue.min.css","c5da9aff4f1652d79ddb7177c2cdb774"],["/project/css/highlight/night-bright.min.css","d47330759f79a5724d16f099ff70772b"],["/project/css/highlight/night-eighties.min.css","b75706f25bb134bded77156393b9637a"],["/project/css/highlight/night.min.css","cea2fde8288023ef0180aa3f4733d43b"],["/project/css/kr-color-dark.min.css","b1d9f16ab24d8c5b0509b6d27e00cab8"],["/project/css/kratosr.min.css","3ab6e0855354be21279bad739c40515f"],["/project/css/prismjs.min.css","26f4f144c70afae8b6952b0a40b9709b"],["/project/index.html","039a34b8b1067926b6a850afa82bc58d"],["/project/js/candy.min.js","c82baf42e2b68dceca698d0d109fbae5"],["/project/js/kr-dark.min.js","ac18ffceb82ead974019a819d237af2f"],["/project/js/kratosr.min.js","545b264a0bf40c28d9ef37f7c2b879d0"],["/project/js/local-search.min.js","95d9971220edf1c7b516a41ddf743a09"],["/project/js/pjax.min.js","e13aeaece3db4d0e60014f6fc6104d14"],["/project/js/snow.min.js","8c3d2f6f0febfdc077a081742ad1b31b"],["/project/search/index.html","29b755794b17801f33551eada26c04c9"],["/project/sw-register.js","fed31afc59dde266259f787a4f71896b"],["/project/tags/index.html","d099eafb7f1ee04b9f7b78d7e638c561"],["/project/tags/kswapd0/index.html","e51632a9107c3277ce3f33407b1cf474"],["/project/tags/应急响应/index.html","c1a1c391de66b4e5a17a8948232850b4"],["/project/tags/挖矿/index.html","50c484e19d76b092fed525b5b3f16c89"],["/project/vendors/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/project/vendors/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/project/vendors/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/project/vendors/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/project/vendors/@waline/client@2.14.1/dist/comment.js","046844426b0aebc2ad14de7cd7121fd1"],["/project/vendors/@waline/client@2.14.1/dist/legacy.umd.js","376fa131e6c135fcb8cf518d309186a3"],["/project/vendors/@waline/client@2.14.1/dist/pageview.js","1919cabe344451e183a6e9fb082123bf"],["/project/vendors/@waline/client@2.14.1/dist/waline-meta.css","7d73d061b57d2767421ece078f4dd548"],["/project/vendors/@waline/client@2.14.1/dist/waline.css","50d1cd91123c6809aaa3f6d8530d80c2"],["/project/vendors/@waline/client@2.14.1/dist/waline.js","af3e3cea86220be0e861fd677a427423"],["/project/vendors/aplayer@1.10.1/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/project/vendors/aplayer@1.10.1/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/project/vendors/bootstrap@3.3.4/dist/css/bootstrap-theme.css","657abdbdf9f097a761efe7fda1e44884"],["/project/vendors/bootstrap@3.3.4/dist/css/bootstrap-theme.min.css","89b29714ad4aaaa3953ef3b51cf9c43a"],["/project/vendors/bootstrap@3.3.4/dist/css/bootstrap.css","2183d05f5a0a9a3b2e8cb0509ca363e3"],["/project/vendors/bootstrap@3.3.4/dist/css/bootstrap.min.css","eedf9ee80c2faa4e1b9ab9017cdfcb88"],["/project/vendors/bootstrap@3.3.4/dist/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/project/vendors/bootstrap@3.3.4/dist/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/project/vendors/bootstrap@3.3.4/dist/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/project/vendors/bootstrap@3.3.4/dist/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/project/vendors/bootstrap@3.3.4/dist/js/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/project/vendors/bootstrap@3.3.4/dist/js/bootstrap.min.js","b6d6c550cb657155feb06fdcd34b73cb"],["/project/vendors/bootstrap@3.3.4/dist/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/project/vendors/disqusjs@1.3.0/dist/disqus.js","7f616e00de01cd15313420339a07949a"],["/project/vendors/disqusjs@1.3.0/dist/disqusjs.css","1cd165e260c51ddd3f8529706ea523f2"],["/project/vendors/font-awesome@4.7.0/README.html","874d48a054b31503d4cd7ea97201fe53"],["/project/vendors/font-awesome@4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/project/vendors/font-awesome@4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/project/vendors/font-awesome@4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/project/vendors/font-awesome@4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/project/vendors/font-awesome@4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/project/vendors/font-awesome@4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/project/vendors/gitalk@1.7.2/dist/gitalk-component.js","8e963e8b2add064657b54ca1df58d2b9"],["/project/vendors/gitalk@1.7.2/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/project/vendors/gitalk@1.7.2/dist/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/project/vendors/gitment@0.0.3/dist/constants.js","093edca76b5767e54e228fc1d142a763"],["/project/vendors/gitment@0.0.3/dist/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["/project/vendors/gitment@0.0.3/dist/gitment.js","5e9d7cbd2a8f8042d2938f32cce212ba"],["/project/vendors/gitment@0.0.3/dist/icons.js","be0f797fae0ccf25f61cb1a6de071a71"],["/project/vendors/gitment@0.0.3/dist/theme/default.js","34edca6c7f5f409304c5982f9af360ad"],["/project/vendors/gitment@0.0.3/dist/utils.js","1542dfdef91e01f27ee98db1c5c00b36"],["/project/vendors/jquery@3.6.0/dist/jquery.js","2849239b95f5a9a2aea3f6ed9420bb88"],["/project/vendors/jquery@3.6.0/dist/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/project/vendors/jquery@3.6.0/dist/jquery.slim.js","e845d4f2ad63ab9af362c4f50f730fc0"],["/project/vendors/jquery@3.6.0/dist/jquery.slim.min.js","1276065911521c5c22037a31365d179d"],["/project/vendors/layui-src@2.5.5/dist/css/layui.css","0b8dfd3fc9b82b73f9ffb2cc6fa29a6e"],["/project/vendors/layui-src@2.5.5/dist/css/layui.mobile.css","c9a1460b219fedbf1d26ec5d92afe92f"],["/project/vendors/layui-src@2.5.5/dist/css/modules/code.css","eb41fb72cf46ee0f786ce194055acfda"],["/project/vendors/layui-src@2.5.5/dist/css/modules/laydate/default/laydate.css","5dc3eb5e80e81012b4cebea9fb52c150"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/layer.css","020bc66b2be098e2d22b291139b5f08e"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layer/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/html/chatlog.html","65ff7991080837008f72812bb059a407"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/html/find.html","2855468d6ba68f41b4b38f575694b005"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/html/msgbox.html","78d6a32c5ca999eec15a4ff09bbfcb97"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/layim.css","6450718ed4310a9b65fe7bae12289a35"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/mobile/layim.css","30a88f41789f7f4a3cd7d0345fbefae8"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/1.jpg","b5552549870f731e6063d865740927d2"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/2.jpg","6d96e8dc0044665c89512fe3f36705d6"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/3.jpg","d43bd212fcb13f538bef2d7eecf6e1b4"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/4.jpg","b5e9642dd106c8c69e105d05c9236598"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/5.jpg","19f0f360428f4364d0bd516223bc2089"],["/project/vendors/layui-src@2.5.5/dist/css/modules/layim/skin/logo.jpg","021c71afa707d4fcb4c1e11a782e5fb8"],["/project/vendors/layui-src@2.5.5/dist/font/iconfont.eot","16a9a2babf772c15df2506162d48be8c"],["/project/vendors/layui-src@2.5.5/dist/font/iconfont.svg","e1a599b12d9ac7ddc127c908620d918c"],["/project/vendors/layui-src@2.5.5/dist/font/iconfont.ttf","7c864ff719f95f49b174da4fae2a8d98"],["/project/vendors/layui-src@2.5.5/dist/font/iconfont.woff","96b672621418a0f8fe229b7ad4e06f43"],["/project/vendors/layui-src@2.5.5/dist/images/face/0.gif","a06a2e3ed6da3796fbb731367d039a0a"],["/project/vendors/layui-src@2.5.5/dist/images/face/1.gif","913e2f3dd1962d2a80b4ae66ddddceb3"],["/project/vendors/layui-src@2.5.5/dist/images/face/10.gif","611117291370fea2ceac62c29e3895bd"],["/project/vendors/layui-src@2.5.5/dist/images/face/11.gif","199be3fbe9ed7e5191c8635e05bcc0e9"],["/project/vendors/layui-src@2.5.5/dist/images/face/12.gif","7621ac2727678687a5318762f580142e"],["/project/vendors/layui-src@2.5.5/dist/images/face/13.gif","8621f66098b5c352706832525ca98430"],["/project/vendors/layui-src@2.5.5/dist/images/face/14.gif","c30514bf7d87214840be9409e0543aa9"],["/project/vendors/layui-src@2.5.5/dist/images/face/15.gif","485a20018f6fd278510c2953697ba65c"],["/project/vendors/layui-src@2.5.5/dist/images/face/16.gif","3d4ee858ebba0e46a7850e13185b7c9b"],["/project/vendors/layui-src@2.5.5/dist/images/face/17.gif","1e345b472299bbc72d854fea14377b19"],["/project/vendors/layui-src@2.5.5/dist/images/face/18.gif","f81ed31a2829c0609354f25e1da62006"],["/project/vendors/layui-src@2.5.5/dist/images/face/19.gif","fa7da45a4cf11818476a64b11972beba"],["/project/vendors/layui-src@2.5.5/dist/images/face/2.gif","aec972de4da971327e4452c5b4b5fda1"],["/project/vendors/layui-src@2.5.5/dist/images/face/20.gif","435dbb7f69e76dbe51c64d0208478bd5"],["/project/vendors/layui-src@2.5.5/dist/images/face/21.gif","21ed3c01c99c75162cc7d5c09e557468"],["/project/vendors/layui-src@2.5.5/dist/images/face/22.gif","7873504cf41c6bf81dc385e7a63e06c2"],["/project/vendors/layui-src@2.5.5/dist/images/face/23.gif","84b3bd065735379c7ebf902bd356eb24"],["/project/vendors/layui-src@2.5.5/dist/images/face/24.gif","9044159f1635cce276f79f2750e44bab"],["/project/vendors/layui-src@2.5.5/dist/images/face/25.gif","55ff58341b23eb412186f8e89963f3ed"],["/project/vendors/layui-src@2.5.5/dist/images/face/26.gif","7e64a36433e1f756dafc74093e71c678"],["/project/vendors/layui-src@2.5.5/dist/images/face/27.gif","4e10558193648444470bb9a1dd7007da"],["/project/vendors/layui-src@2.5.5/dist/images/face/28.gif","ed40b41d05a3020271be545a607d6d78"],["/project/vendors/layui-src@2.5.5/dist/images/face/29.gif","4fb6439d891b34c4936ae34a79725b59"],["/project/vendors/layui-src@2.5.5/dist/images/face/3.gif","bf97be0b15ace15dedf22f266a5c429c"],["/project/vendors/layui-src@2.5.5/dist/images/face/30.gif","0b7ff8f1bbb91be880ef190767774c78"],["/project/vendors/layui-src@2.5.5/dist/images/face/31.gif","dcc636d88b53e73852db566a4d9d2f20"],["/project/vendors/layui-src@2.5.5/dist/images/face/32.gif","8d9e9cc9b52ca46e854480fa4900158e"],["/project/vendors/layui-src@2.5.5/dist/images/face/33.gif","2f9e45312f49e02f32ce853db930295f"],["/project/vendors/layui-src@2.5.5/dist/images/face/34.gif","f81a7f4f93f254d58c0e943a07d2cc0b"],["/project/vendors/layui-src@2.5.5/dist/images/face/35.gif","cc8ff0383ce624c0721682aaa500b672"],["/project/vendors/layui-src@2.5.5/dist/images/face/36.gif","645be9a08ae4d8aac61e6b5fb47215e5"],["/project/vendors/layui-src@2.5.5/dist/images/face/37.gif","4c9e106e702751cb61861778269e2b26"],["/project/vendors/layui-src@2.5.5/dist/images/face/38.gif","15bd343617ec5ea02eedfdfe575c656c"],["/project/vendors/layui-src@2.5.5/dist/images/face/39.gif","edfe69e1b1f20cfa8110d9e9d2536c68"],["/project/vendors/layui-src@2.5.5/dist/images/face/4.gif","4d2933c0445dc04bdaaad41f2b557137"],["/project/vendors/layui-src@2.5.5/dist/images/face/40.gif","c94db1a006caf85ccb8a194335ce5621"],["/project/vendors/layui-src@2.5.5/dist/images/face/41.gif","55565f0156566feef1e329177f6d83f1"],["/project/vendors/layui-src@2.5.5/dist/images/face/42.gif","f24d53dee3bd1050b26d6d7cd5bca68d"],["/project/vendors/layui-src@2.5.5/dist/images/face/43.gif","599c45d8a2832cc01617fb42091993df"],["/project/vendors/layui-src@2.5.5/dist/images/face/44.gif","b0f285b595f10a1277774bf6844da76b"],["/project/vendors/layui-src@2.5.5/dist/images/face/45.gif","d17783318c1587204b6155c2fa9986fe"],["/project/vendors/layui-src@2.5.5/dist/images/face/46.gif","b72ecabbadc13888d4775ec53c9150f8"],["/project/vendors/layui-src@2.5.5/dist/images/face/47.gif","8ede6bd1d173ddeb6f3f4b241c8f3513"],["/project/vendors/layui-src@2.5.5/dist/images/face/48.gif","2a4c6936a09b0219d1c74f0167577b30"],["/project/vendors/layui-src@2.5.5/dist/images/face/49.gif","21069e4a6b8a4f6a0af40c87a168f321"],["/project/vendors/layui-src@2.5.5/dist/images/face/5.gif","8ae6b6ec8d2941a6adaee9555839e81c"],["/project/vendors/layui-src@2.5.5/dist/images/face/50.gif","96664d71d30c946747bcc651d085ed7a"],["/project/vendors/layui-src@2.5.5/dist/images/face/51.gif","c6c1e6c64c16d3747e251200e014f219"],["/project/vendors/layui-src@2.5.5/dist/images/face/52.gif","ff4d93b3615d5d975f0b6786670b702f"],["/project/vendors/layui-src@2.5.5/dist/images/face/53.gif","bc06dab3c63c4e2300c5cd4524819370"],["/project/vendors/layui-src@2.5.5/dist/images/face/54.gif","aff05197849e8c8f55b2d5fe56bb56f7"],["/project/vendors/layui-src@2.5.5/dist/images/face/55.gif","d7bdca562fd0b53f816eedb23148e158"],["/project/vendors/layui-src@2.5.5/dist/images/face/56.gif","8c6f0b4cdd0fa9d68205bab3d8df29e4"],["/project/vendors/layui-src@2.5.5/dist/images/face/57.gif","e37c81739515617cf5bc51232ad873b7"],["/project/vendors/layui-src@2.5.5/dist/images/face/58.gif","89d291439d6eae4b2db6746e589f6134"],["/project/vendors/layui-src@2.5.5/dist/images/face/59.gif","1cb4f698dd69602dd6f6eff121663a17"],["/project/vendors/layui-src@2.5.5/dist/images/face/6.gif","9946d6232e406ba2c10b60221c5b698b"],["/project/vendors/layui-src@2.5.5/dist/images/face/60.gif","71712fa565d89315b6ef2a45b3d581b5"],["/project/vendors/layui-src@2.5.5/dist/images/face/61.gif","4bde9630ca80c61063813274729af4ba"],["/project/vendors/layui-src@2.5.5/dist/images/face/62.gif","c0ed0920ba0d752ad77aca762050b12d"],["/project/vendors/layui-src@2.5.5/dist/images/face/63.gif","907b3e81d16afb9df5ef023ede0eddf1"],["/project/vendors/layui-src@2.5.5/dist/images/face/64.gif","959bacfef9ac0d3bb275504623c62375"],["/project/vendors/layui-src@2.5.5/dist/images/face/65.gif","a27ed9871926a8e37c522f6c1542df9a"],["/project/vendors/layui-src@2.5.5/dist/images/face/66.gif","02709c83458b72b0c73585297cc291f3"],["/project/vendors/layui-src@2.5.5/dist/images/face/67.gif","ab1c7c7a43aa6f43963c7b0afc9ec787"],["/project/vendors/layui-src@2.5.5/dist/images/face/68.gif","a1c8f21f98fc6eff21cb3e4d08baee2b"],["/project/vendors/layui-src@2.5.5/dist/images/face/69.gif","877ff95213ae5c45721761c540810053"],["/project/vendors/layui-src@2.5.5/dist/images/face/7.gif","3880bad4694b3ef38e2e58be68b875ef"],["/project/vendors/layui-src@2.5.5/dist/images/face/70.gif","b7f69e6df691b1c885f541ec604c59df"],["/project/vendors/layui-src@2.5.5/dist/images/face/71.gif","55a42691f8560bf2fbfed7c19389e4cf"],["/project/vendors/layui-src@2.5.5/dist/images/face/8.gif","8bfcb8fe88a3b666b5460743fb2cdc49"],["/project/vendors/layui-src@2.5.5/dist/images/face/9.gif","92bf7127158347196c4f9aef0d0ab301"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/carousel.js","2a6caa3eaea045f81bf7a0ef39246c12"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/code.js","9f37dfaec45ad00602a87448f2400b0c"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/colorpicker.js","0b38ffc03041ecfe8460c35878c7a187"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/element.js","df4f6f1cdfa2693735a32e87d43d1a71"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/flow.js","25ab339f3cfbf9a198297fb665cba94d"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/form.js","e754011805a731a705d2d441152bffcf"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/jquery.js","cb2def920947c8ba5703b070905554c2"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/laydate.js","f5cca83f34b5b56a99c9218341d5a728"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/layedit.js","13979c86d24bf9b49155d0ce4ff4096e"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/layer.js","6294f5dbc08611b55542ee8ffe47dbed"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/layim.js","c8a7343fde895350e4df21ddbec0a9f9"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/laypage.js","d274209e6ed192c3bc53bdb5edbc83a2"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/laytpl.js","e351fb5122cfdc72e62b0539bc9109c4"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/mobile.js","9a3c1d2eac851926b2e01d6c19bd912c"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/rate.js","a475e6e5d2b29858cec06ec9203be550"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/slider.js","c195205605c472eb03e0d43c174398c3"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/table.js","302df7833bd9e7216e602923ec2da552"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/transfer.js","df2bf92369819d2beba1ba64c5caf305"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/tree.js","e05ae637bb3a4f705fd2336eda59a8cb"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/upload.js","19e2609ca87f7424b54b4713ab3300ca"],["/project/vendors/layui-src@2.5.5/dist/lay/modules/util.js","53d49c7c2496bfdbc12ed10bbd39a922"],["/project/vendors/layui-src@2.5.5/dist/layui.all.js","43c3263dd2ad262c35dde403b980ee07"],["/project/vendors/layui-src@2.5.5/dist/layui.js","e40241ab3c80340d0587b0277e352f63"],["/project/vendors/mermaid@9.1.1/dist/mermaid.core.js","9f508bd6e439f919a701b6f0e17a0760"],["/project/vendors/mermaid@9.1.1/dist/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/project/vendors/meting@2.0.1/dist/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/project/vendors/nprogress@0.2.0/History.html","05ab58b529f5cc59b208ecf4cb0fac7e"],["/project/vendors/nprogress@0.2.0/License.html","4080a6866e285fc64b53114c485b3472"],["/project/vendors/nprogress@0.2.0/Notes.html","2a1951b38a1ba2e944f63ba13ada0e14"],["/project/vendors/nprogress@0.2.0/Readme.html","10d714fcca73556b597300c3839ece30"],["/project/vendors/nprogress@0.2.0/nprogress.css","9dc52b7dd289312c1437a3e66ca7662c"],["/project/vendors/nprogress@0.2.0/nprogress.js","5fc208df77427b19a1558ee3c2e2d344"],["/project/vendors/nprogress@0.2.0/test/component.html","678cc45c2c7f2ed0884aa4be94f67119"],["/project/vendors/nprogress@0.2.0/test/test.js","5161a309781b277d7a3eaddb42b0e656"],["/project/vendors/qrcode_js@1.0.0/README.html","519da845d8d2fb34124c09055f26658a"],["/project/vendors/qrcode_js@1.0.0/index-svg.html","51637712760b2c4859f3e08bfb2457db"],["/project/vendors/qrcode_js@1.0.0/index.html","b2cadfee2066c533aaef2ada69459f6a"],["/project/vendors/qrcode_js@1.0.0/index.svg","3501a330ffe62f20bb7eab1f1486ad94"],["/project/vendors/qrcode_js@1.0.0/jquery.min.js","04169da38e42b7f704e72fce3a957e33"],["/project/vendors/qrcode_js@1.0.0/qrcode.js","6e99fb0e900a3c7a4929aa4e8b953f5e"],["/project/vendors/qrcode_js@1.0.0/qrcode.min.js","517b55d3688ce9ef1085a3d9632bcb97"],["/project/vendors/twikoo@1.5.11/dist/twikoo.all.min.js","989fd42c4706ea6fccf87078e5fadd67"],["/project/vendors/twikoo@1.5.11/dist/twikoo.min.js","ebb805f30c2080bc1a2d5d733459f29e"],["/project/vendors/valine@1.4.18/dist/Valine.Pure.min.js","048836116a01f9ebd48670edf4563e30"],["/project/vendors/valine@1.4.18/dist/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/project/vendors/valine@1.4.18/dist/Valine.min.umd.js","b226a41e3a1d4ee6839f5448aa9eedd0"],["/project/vendors/valine@1.4.18/dist/detect.min.js","6bcdeecda5f8062e4ce829a11954a8dd"],["/project/vendors/valine@1.4.18/dist/escape.min.js","aa11bd3cdb86d3736e6ce51847e1a3ad"],["/project/vendors/valine@1.4.18/dist/plugins/emojis/index.js","cff43ab5436f54d7ca3889105b44625e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
