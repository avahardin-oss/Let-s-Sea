"use strict";/*! DO NOT EDIT: This file is auto-generated and will be overwritten. [build-fingerprint:assets] */(self.webpackChunkshopify_theme=self.webpackChunkshopify_theme||[]).push([["1301"],{9456:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});let isHandleKeydownEventSet=false,__WEBPACK_DEFAULT_EXPORT__=(container,lastFocused)=>{if(!container)return;let elements='button, [href], input, select, tex\
tarea, [tabindex]:not([tabindex="-1"])',focusableContent=container.querySelectorAll(elements),firstFocusableElement=focusableContent[0];firstFocusableElement?.focus();let lastFocusableElement=focusableContent[focusableContent.length-1];lastFocused?
lastFocused.focus():(isHandleKeydownEventSet||(document.addEventListener("keydown",e=>{firstFocusableElement=(focusableContent=container.querySelectorAll(elements))[0],lastFocusableElement=focusableContent[focusableContent.length-1],"Tab"===
e.key&&(e.shiftKey?document.activeElement===firstFocusableElement&&(lastFocusableElement?.focus(),e.preventDefault()):document.activeElement===lastFocusableElement&&(firstFocusableElement?.focus(),e.preventDefault()))}),isHandleKeydownEventSet=
true),firstFocusableElement?.focus())}},8071:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{getAjaxSection:()=>getAjaxSection});var _errors_app_error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(
123),_typescript_is_plain_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4764);let getAjaxSection=async(url,options)=>{let constructedURL=new URL(url);Object.keys(options).forEach(key=>{let value=options[key];value&&constructedURL.
searchParams.append(key,value)});let res=await fetch(constructedURL.toString()),__data=await res.json(),_data=(0,_typescript_is_plain_object__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(__data)?__data:null;if(null==_data)throw new _errors_app_error__WEBPACK_IMPORTED_MODULE_0__.
AppError("Section data response is not an object",{_data,options,url});return Object.entries(_data).reduce((acc,[key,value])=>("string"!=typeof value||(acc[key]=value),acc),{})}},7696:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{isHTMLButtonElement:()=>isHTMLButtonElement,isHTMLCanvasElement:()=>isHTMLCanvasElement,isHTMLElement:()=>isHTMLElement,isHTMLFormElement:()=>isHTMLFormElement,isHTMLInputElement:()=>isHTMLInputElement});
let isHTMLElement=t=>t instanceof HTMLElement,isHTMLCanvasElement=t=>t instanceof HTMLCanvasElement,isHTMLInputElement=t=>t instanceof HTMLInputElement,isHTMLButtonElement=t=>t instanceof HTMLButtonElement,isHTMLFormElement=t=>t instanceof HTMLFormElement},
3280:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{productCustomizerOpenRequestEventType:()=>productCustomizerOpenRequestEventType});var superstruct__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(
7884);let productCustomizerOpenRequestEventType="theme:product_customizer_open_request";(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(productCustomizerOpenRequestEventType)},5264:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{productSwatchesLoadedRequestEventType:()=>productSwatchesLoadedRequestEventType});var superstruct__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7884);let productSwatchesLoadedRequestEventType="t\
heme:product_Swatches_loaded_request";(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(productSwatchesLoadedRequestEventType)},9570:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,
{formatMoney:()=>formatMoney});let MONEY_FORMAT="${{amount}}",format=(t=0,e=2,o=",",i=".")=>{if(isNaN(t))return"0";let r2=(t/100).toFixed(e).split(".");return(r2[0]||"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r2[1]?i+r2[1]:"")},r=/\{\{\s*(\w+)\s*\}\}/,
formatMoney=(t,e=MONEY_FORMAT)=>{let a=e||MONEY_FORMAT,foundMatches=r.exec(a);if(!foundMatches)throw Error("Money template has no `{{amount}}` placeholder");let formatName=foundMatches[1],i="amount"===formatName?format(t,2):"amount_no_decim\
als"===formatName?format(t,0):"amount_with_comma_separator"===formatName?format(t,2,".",","):"amount_with_space_separator"===formatName?format(t,2," ",","):"amount_with_period_and_space_separator"===formatName?format(t,2," ","."):"amount_no\
_decimals_with_comma_separator"===formatName?format(t,0,".",","):"amount_no_decimals_with_space_separator"===formatName?format(t,0," "):"amount_with_apostrophe_separator"===formatName?format(t,2,"'","."):t.toString(10);return a.replace(r,i)}},
4764:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{isPlainObject:()=>isPlainObject});let isPlainObject=payload=>{if("Object"!==Object.prototype.toString.call(payload).slice(
8,-1))return false;let prototype=Object.getPrototypeOf(payload);return"object"==typeof prototype&&null!=prototype&&prototype.constructor===Object&&prototype===Object.prototype}},3606:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{genUid:()=>genUid});let customNanoId=(0,__webpack_require__(2434).customAlphabet)("abcdefghijklmnopqrstuvwxyz0123456789",35),genUid=()=>"z"+customNanoId()},488:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{ProductDetailsIO:()=>ProductDetailsIO});var superstruct__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7884);let ProductDetailsIO=(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.type)({currencyCode:(0,
superstruct__WEBPACK_IMPORTED_MODULE_0__.size)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(),3,3),moneyFormat:(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)()})},8988:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){
__webpack_require__.d(__webpack_exports__,{init:()=>init,renderSwatches:()=>renderSwatches});var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(726),jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__),
zod__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(891),_core_dom_traversal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5925),_core_jquery_filter_sections__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8895),_core_notifications_modules_fire_custom_document_event__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(
7275),_core_notifications_product_swatches_loaded_request__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5264),_api_fetch_product_by_handle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2951);let SizesSchema=zod__WEBPACK_IMPORTED_MODULE_3__.
object({current_size_name:zod__WEBPACK_IMPORTED_MODULE_3__.string(),current_size:zod__WEBPACK_IMPORTED_MODULE_3__.string()}),MaterialSchema=zod__WEBPACK_IMPORTED_MODULE_3__.object({material_title:zod__WEBPACK_IMPORTED_MODULE_3__.string().nullable()}),
renderSwatches=async()=>{let grouped,queryContainer=document.querySelector(".js-product-smp-container"),smpContainer=document.querySelector("#js-product-smp");if(!queryContainer||!smpContainer)return console.error(Error("Product Handle elem\
ent is missing")),null;let dataHandle=queryContainer.getAttribute("data-handle"),dataB2b=queryContainer.getAttribute("data-catalog"),sizesMarkup="",materialsMarkup="",productByHandle=await(0,_api_fetch_product_by_handle__WEBPACK_IMPORTED_MODULE_2__.
getProductsByHandle)(dataHandle||"",dataB2b||"retail"),productColors=productByHandle?.data.relatedProductsByColor||{},productSizes=productByHandle?.data.relatedProductsBySize||{},productMaterials=productByHandle?.data.relatedProductsByMaterial||
{},productData=productByHandle.data.product,currentSizeTag=productData?.tags.find(tag=>tag.startsWith("size_"))||"",currentMaterialTag=productData?.tags.find(tag=>tag.startsWith("material_"))||"",currentTemplate=productData?.templateSuffix||
"",currentColorTag=productData?.tags.find(tag=>tag.startsWith("color_")&&!tag.startsWith("color_name")&&!tag.includes(":"))||"",currentColorName=productData?.tags.find(tag=>tag.startsWith("color_name:"))||"";if(""===currentColorName)return null;
let smpSchemaRaw=document.querySelector("#js-size-json")?.innerHTML,smpSchema=smpSchemaRaw?SizesSchema.parse(JSON.parse(smpSchemaRaw)):null,materialSchemaRaw=document.querySelector("#js-material-json")?.innerHTML,materialSchema=materialSchemaRaw?
MaterialSchema.parse(JSON.parse(materialSchemaRaw)):null,materialTitle=materialSchema?.material_title||"Material",hasPrimaryMaterials=Object.keys(productMaterials).some(key=>key.startsWith("primary_material_")),validateMaterial=((obj,prefix1,prefix2)=>{
for(let key in obj)if(key.startsWith(prefix1)||key.startsWith(prefix2))return true;return false})(productMaterials,"primary_material_","fallback_material_")&&hasPrimaryMaterials,groupedColors=(grouped={},Object.entries(productColors).forEach(
([_,value])=>{let categoryTag=value.tags?.find(tag=>tag.startsWith("swatchcategory-")),category=categoryTag?categoryTag.replace("swatchcategory-",""):"uncategorized";grouped[category]||(grouped[category]=[]),grouped[category].push(value)}),
grouped),categoryOrder=Object.keys(groupedColors);if(categoryOrder.includes("uncategorized")){let idx=categoryOrder.indexOf("uncategorized");categoryOrder.splice(idx,1),categoryOrder.push("uncategorized")}let swatchesMarkup="";for(let category of categoryOrder){
let swatches=groupedColors[category];if(!swatches||0===swatches.length)continue;let categoryTitle=category.charAt(0).toUpperCase()+category.slice(1),hasActiveColor=swatches.some(value=>value.tags?.find(t=>t.startsWith("color_")&&!t.startsWith(
"color_name")&&!t.includes(":"))===currentColorTag);swatchesMarkup+=`
      <div class="ProductForm-itemColor-category">
        <h3 class="ProductRadioButtons-groupTitle">
          ${categoryTitle}${hasActiveColor?`: <span class="ProductRadioButtons-groupTitle-variant">${null!==currentColorName?currentColorName.split(":")[1]:""}</span>`:""}
        </h3>
        <div class="ProductForm-itemColors">
          ${swatches.map(value=>{if(!value.swatch)return"";let swatchClass=value.swatch?"":"fallback",currenSwatch=value.swatch?value.swatch.image.url:value.imageUrl,currenSwatchTemplate=value.templateSuffix?value.templateSuffix:null,currenTitle=value.
swatch?value.swatch.name:value.handle,colorTag=value.tags?.find(t=>t.startsWith("color_")&&!t.startsWith("color_name")&&!t.includes(":"))||"",isActive=colorTag===currentColorTag;return`
                <button
                  type="button"
                  class="${currentTemplate!==currenSwatchTemplate?"js-smp-swatch-reload":"js-smp-swatch"} ProductForm-itemColor event-pdpColor ${isActive?"active":""}"
                  data-color="${colorTag}"
                  data-icon="${currenSwatch}"
                  title="${currenTitle}"
                  data-smp-product-handle="${value.handle}"
                >
                  <img
                    src="${currenSwatch.replace("_120x","").split("?").at(0)}"
                    alt="${"Select "+currenTitle}"
                    class="ProductForm-itemColor__swatch ${swatchClass}"
                    aria-describedby="a11y-tooltip-${colorTag}"
                  />
                  <span
                    role="tooltip"
                    id="a11y-tooltip-${colorTag}"
                    class="js-smp-swatch-tooltip"
                  >
                    ${currenTitle}
                  </span>
                </button>`}).join("")}
        </div>
      </div>
    `}if(validateMaterial){let materialDescription="";materialsMarkup=`
      <h3 class="ProductRadioButtons-groupTitle">
        ${materialTitle}
      </h3>
      <div class="ProductForm-itemMaterials">
        <div class="ProductForm-itemMaterials-options">
          ${Object.entries(productMaterials).map(([key,value])=>{if(!("Product"===value.__typename&&(!productMaterials[key.replace("fallback_","primary_")]||key.includes("primary_")&&!key.includes("meta_"))))return null;{let isActive=key.replace(
"primary_","").replace("fallback_","")===currentMaterialTag,currenSwatchTemplate=value?.templateSuffix?value.templateSuffix:null,metaMaterial=productMaterials[key.replace("primary_material_","meta_material_").replace("fallback_material_","m\
eta_material_")];return metaMaterial&&"Material"===metaMaterial.__typename?(isActive&&(materialDescription=metaMaterial.description||""),`
                  <div
                    key="${key}"
                    class="${currentTemplate!==currenSwatchTemplate?"js-smp-swatch-reload":"js-smp-swatch"} ProductForm-itemMaterial event-pdpColor ${isActive?"active":""}"
                    data-size="${key}"
                    data-smp-product-handle="${value?.handle}"
                  >
                    <span>${metaMaterial.name}</span>
                  </div>
                `):null}}).filter(Boolean).join("")}
        </div>

        ${materialDescription?`<div class="ProductForm-itemMaterial-description">
                ${materialDescription}
              </div>`:""}
      </div>`}Object.keys(productSizes).length>0&&(sizesMarkup=`<h3 class="ProductRadioButtons-groupTitle">
      Select Size: <span class="ProductRadioButtons-groupTitle-variant">
      ${smpSchema?.current_size_name}
    </span>
    </h3>
    <div class="ProductForm-itemSizes">
    ${Object.entries(productSizes).map(([key,value])=>{if(!(!productSizes[key.replace("fallback_","primary_")]||key.includes("primary_")&&!key.includes("meta_")))return"";{let isActive=key.replace("primary_","").replace("fallback_","")===currentSizeTag,
currenSwatchTemplate=value?.templateSuffix?value.templateSuffix:null,smpMetaKey=key.replace("primary_size_","meta_size_").replace("fallback_size_","meta_size_"),currenSwatch=productSizes[smpMetaKey]?productSizes[smpMetaKey]?.handle:"https:/\
/placehold.co/16x32",currenTitle=productSizes[smpMetaKey]?productSizes[smpMetaKey]?.id:key;return`
            <button
              key="${key}"
              type="button"
              class="${currentTemplate!==currenSwatchTemplate?"js-smp-swatch-reload":"js-smp-swatch"} ProductForm-itemSize event-pdpColor ${isActive?"active":""}"
              data-size="${key}"
              data-smp-product-handle="${value?.handle}"
              aria-current="${isActive?"true":"false"}"
            >
              <img src="${currenSwatch}" alt="${currenTitle}" />
              <span>${currenTitle}</span>
            </button>
          `}}).join("")}
    </div>`);let tempSMPContainer=(0,_core_dom_traversal__WEBPACK_IMPORTED_MODULE_4__.findOneElement)(document,"#js-product-smp-temp");tempSMPContainer&&(tempSMPContainer.style.display="none");let swatchesMarkupWithWrapper="";""!==swatchesMarkup&&
(swatchesMarkupWithWrapper=`<div class="ProductForm-itemColor-wrapper">${swatchesMarkup}</div>`),smpContainer.innerHTML="",smpContainer.insertAdjacentHTML("beforeend",materialsMarkup+swatchesMarkupWithWrapper+sizesMarkup);let productBarColor=document.
querySelector("#js-sticky-color"),productBarSize=document.querySelector("#js-sticky-size");if(productBarColor&&productBarSize){let barColorText=currentColorName.split(":")[1]||"",barSizeText=smpSchema?.current_size_name||"";productBarColor.
innerHTML=barColorText,productBarSize.innerHTML=barSizeText}else console.warn(Error("Sticky Info elements for product Size or Color are missing"));smpContainer.classList.remove("disabled"),(0,_core_notifications_modules_fire_custom_document_event__WEBPACK_IMPORTED_MODULE_5__.
fireCustomEvent)(_core_notifications_product_swatches_loaded_request__WEBPACK_IMPORTED_MODULE_1__.productSwatchesLoadedRequestEventType,null)},init=async()=>{let load=shopifyEvent=>{let containers=jquery__WEBPACK_IMPORTED_MODULE_0___default()(
".js-product-main").filter((0,_core_jquery_filter_sections__WEBPACK_IMPORTED_MODULE_6__.filterSections)(shopifyEvent)).find(".js-product-smp-container");0!==containers.length&&containers.each(()=>{let renderTarget=document.querySelector("#j\
s-product-smp");if(null==renderTarget)throw Error("SMP render target not found");renderSwatches().catch(err=>{console.error("Error rendering SMP swatches",{err,renderTarget})})})};jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("\
shopify:section:load",load),jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("shopify:section:unload",shopifyEvent=>{let containers=jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-product-main").filter((0,_core_jquery_filter_sections__WEBPACK_IMPORTED_MODULE_6__.
filterSections)(shopifyEvent)).find(".js-product-smp-container");0!==containers.length&&containers.off(".product_smp_6035fe20aca44b75918bd03f0fe491e7")}),load()}}}]);
