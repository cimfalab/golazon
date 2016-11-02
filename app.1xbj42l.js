!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var i={},e={},n={},M={}.hasOwnProperty,a=/^\.\.?(\/|$)/,o=function(t,i){for(var e,n=[],M=(a.test(i)?t+"/"+i:i).split("/"),o=0,r=M.length;o<r;o++)e=M[o],".."===e?n.pop():"."!==e&&""!==e&&n.push(e);return n.join("/")},r=function(t){return t.split("/").slice(0,-1).join("/")},u=function(i){return function(e){var n=o(r(i),e);return t.require(n,i)}},c=function(t,i){var n=null;n=d&&d.createHot(t);var M={id:t,exports:{},hot:n};return e[t]=M,i(M.exports,u(t),M),M.exports},g=function(t){return n[t]?g(n[t]):t},s=function(t,i){return g(o(r(t),i))},N=function(t,n){null==n&&(n="/");var a=g(t);if(M.call(e,a))return e[a].exports;if(M.call(i,a))return c(a,i[a]);throw new Error("Cannot find module '"+t+"' from '"+n+"'")};N.alias=function(t,i){n[i]=t};var j=/\.[^.\/]+$/,l=/\/index(\.[^\/]+)?$/,L=function(t){if(j.test(t)){var i=t.replace(j,"");M.call(n,i)&&n[i].replace(j,"")!==i+"/index"||(n[i]=t)}if(l.test(t)){var e=t.replace(l,"");M.call(n,e)||(n[e]=t)}};N.register=N.define=function(t,n){if("object"==typeof t)for(var a in t)M.call(t,a)&&N.register(a,t[a]);else i[t]=n,delete e[t],L(t)},N.list=function(){var t=[];for(var e in i)M.call(i,e)&&t.push(e);return t};var d=t._hmr&&new t._hmr(s,N,i,e);N._cache=e,N.hmr=d&&d.wrap,N.brunch=!0,t.require=N}}(),function(){var t;window;t=this,t.riot=require("riot"),riot.tag2("app",'<div class="app__container"> <app-header></app-header> <div class="app__content block"> <div id="main"></div> </div> </div> <app-footer></app-footer>','.app__container { min-height: 100%; margin-bottom: -44px; } .app__container:after { content: ""; display: block; height: 44px; } .app__content { padding-top: 10px; padding-bottom: 10px; }',"",function(t){riot.route.base("#!"),riot.route("/",function(){return riot.mount("#main","home")}),riot.route("/c/*",function(t){return riot.mount("#main","competition",{competition_id:t})}),riot.route("/wtf",function(){return riot.mount("#main","wtf")}),riot.route(function(){return riot.mount("#main","error404"),console.log("not found")}),riot.route.start(!0)}),riot.tag2("app-footer",'<div class="footer__wrapper"> <footer class="footer__container block sloppy hpadding"> <ul class="footer__nav"> <li><a href onclick="{scrollTop}">Search</a></li> <li><a href="/">Popular</a></li> <li><a href="/#!/wtf">WTF?</a></li> </ul> </footer> </div>',".footer__wrapper { border-top: 1px solid #ddd; height: 44px; background-color: #f5f5f5; } .footer__nav li { font-size: 12px; display: inline; margin-right: 10px; line-height: 44px; font-weight: 500; text-transform: uppercase; }","",function(t){this.scrollTop=function(t){return scroll(0,0),document.querySelector(".header__search__input").focus()}}),riot.tag2("app-header",'<div class="header__wrapper"> <header class="header__container block sticky hpadding"> <div class="header__search"> <input type="text" role="search" class="header__search__input" accesskey="s" name="q" placeholder="Search Golazon" onkeyup="{search}" onfocus="{search}"> <button class="header__search__clear-button" onclick="{search_clear_click}" if="{clear_button_visible}"> </button> </div> <div class="header__extras-container"> <p class="header__hint" if="{results.length == 0 && (hint || loading)}"> <span if="{loading}">loading...</span> {hint} </p> <ul class="header__search-results" if="{results.length > 0}"> <li each="{results}" if="{results.length > 0}"> <a href="/#!/c/{id}" class="{active: active}" onclick="{search_result_click}" onmouseover="{search_result_mouseover}"> {name} ({area_name}) <span if="{teamtype != \'default\'}">{teamtype}</span> </a> </li> </ul> </div> </header> </div>','.header__wrapper { background-color: #f5f5f5; border-bottom: 1px solid #ddd; } .header__container { padding-top: 10px; padding-bottom: 10px; } .header__search { display: flex; } .header__search__input { border: 1px solid #ddd; border-radius: 0; color: #666; padding: 6px 8px; width: 100%; max-width: 620px; background: #fff url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzcuMzkzIiBoZWlnaHQ9IjEzNy4zOTQiIHZpZXdCb3g9IjAgMCAxMzcuMzkyOTMgMTM3LjM5Mzk5Ij48ZGVmcz48Y2xpcFBhdGg+PHBhdGggZD0iTTAgODQxLjg5aDU5NS4yOFYwSDB2ODQxLjg5eiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnPjxwYXRoIGQ9Ik02OC42OSAxMTYuODczYy0yNi41NiAwLTQ4LjE3LTIxLjYxLTQ4LjE3LTQ4LjE3IDAtMjYuNTY1IDIxLjYxLTQ4LjE3NiA0OC4xNy00OC4xNzYgMjYuNTY4IDAgNDguMTc1IDIxLjYxIDQ4LjE3NSA0OC4xNzUgMCAyNi41Ni0yMS42MDcgNDguMTctNDguMTc1IDQ4LjE3IiBmaWxsPSIjZjQwZTFiIi8+PC9nPjxnPjxwYXRoIGQ9Ik02OC42OSAxMjguMDczYy0xLjcxMyAwLTMuMTA4LTEuNC0zLjEwOC0zLjExIDAtMS43MTcgMS4zOTQtMy4xMTQgMy4xMDctMy4xMTQgMjkuMyAwIDUzLjEzMy0yMy44MzUgNTMuMTMzLTUzLjEzMyAwLTI5LjI5NC0yMy44MzQtNTMuMTI0LTUzLjEzMy01My4xMjQtMjkuMjk0IDAtNTMuMTMgMjMuODMtNTMuMTMgNTMuMTI0IDAgMTMuNjIgNS4xNyAyNi41ODcgMTQuNTU1IDM2LjQ5OCAxLjE4IDEuMjQ2IDEuMTI1IDMuMjE1LS4xMjIgNC4zOTctMS4yNDggMS4xODYtMy4yMTMgMS4xMi00LjM5OC0uMTJDMTUuMTE1IDk4LjQyIDkuMzQgODMuOTM2IDkuMzQgNjguNzE3IDkuMzQgMzUuOTk0IDM1Ljk2NiA5LjM3IDY4LjY5IDkuMzdjMzIuNzMgMCA1OS4zNTQgMjYuNjI1IDU5LjM1NCA1OS4zNDcgMCAzMi43My0yNi42MjIgNTkuMzU1LTU5LjM1MyA1OS4zNTUiIGZpbGw9IiNmYWJlNDkiLz48L2c+PGc+PHBhdGggZD0iTTY4LjY5IDEzNy4zOTRDMzAuODE0IDEzNy4zOTQgMCAxMDYuNTc4IDAgNjguNzAyYzAtMS43MTcgMS4zOS0zLjExMiAzLjEwOC0zLjExMiAxLjcxOCAwIDMuMTEgMS4zOTUgMy4xMSAzLjExIDAgMzQuNDUgMjguMDI3IDYyLjQ3NSA2Mi40NzIgNjIuNDc1IDM0LjQ1NCAwIDYyLjQ4LTI4LjAyNiA2Mi40OC02Mi40NzQgMC0zNC40NS0yOC4wMjYtNjIuNDc2LTYyLjQ4LTYyLjQ3Ni0xLjcxMiAwLTMuMTA3LTEuMzktMy4xMDctMy4xMTRDNjUuNTgzIDEuNCA2Ni45NzggMCA2OC42OSAwYzM3Ljg4MyAwIDY4LjcwMyAzMC44MjUgNjguNzAzIDY4LjcgMCAzNy44NzgtMzAuODIgNjguNjk0LTY4LjcwMyA2OC42OTQiIGZpbGw9IiNmNDBlMWIiLz48L2c+PGc+PHBhdGggZD0iTTYxLjUxNiA1Ny4yMTJzLTMuMzc0IDUuMzItNC40MjIgMTMuNjE2YzMuNjEgMy41MTggNS44MTIgNS41NzMgMTEuNTgzIDguNCA2Ljc1Ny0zLjA3IDEwLjk0LTcuOTUzIDExLjU3LTguNC0xLjI0NC03LjcxLTQuMjM1LTEzLjA0NS00LjQyMi0xMy42MTYtNy43NzgtMS45ODYtMTQuMzA3IDAtMTQuMzA3IDAiIGZpbGw9IiNmNDBlMWIiLz48L2c+PGc+PHBhdGggZD0iTTU4LjAyOCA1MC44ODZjMi4xMS01LjIxIDQuNzktNi4zMTYgNy4xNDYtOC4zMTMtMi43NzQtMi4wMDctNS4zNy0yLjMxNi02Ljk4My0yLjMzMi00LjYyNSAxLjc2My04LjY5IDQuNjUzLTExLjg2MyA4LjM0LjAzIDEuMDU3LjIwMyAyLjkxLjg3NCA1LjE4NiAzLjU4LTEuNjAyIDYuMDUtMi4yMzIgMTAuODMtMi44OCIgZmlsbD0iI2Y0MGUxYiIvPjwvZz48Zz48cGF0aCBkPSJNNjguNjc2IDg3LjUxNWMtMy44MzIgMi41Mi03LjM2NCAzLjQ2NS0xMC4zNjYgMy43MDMuOTMgMi44NDYgMS40MTQgNC4wNzYgMS44MzIgNC43NjcgMi43LjgyIDUuNTY0IDEuMjYyIDguNTMzIDEuMjYyIDIuOTc4IDAgNS44Ni0uNDQ2IDguNTc1LTEuMjc3LjQtLjY3Ni44NTMtMS45MSAxLjc4Mi00Ljc1My0zLjAwMi0uMjM3LTYuNTM2LTEuMTgtMTAuMzU3LTMuNzAyIiBmaWxsPSIjZjQwZTFiIi8+PC9nPjxnPjxwYXRoIGQ9Ik03OS4zNDMgNTAuODg2YzQuNzg1LjY0NyA3LjI1OCAxLjI3OCAxMC44MzIgMi44OC42Ni0yLjI1My44MzYtNC4wODYuODc2LTUuMTQ2LTMuMjMtMy43NjQtNy4zOC02LjcwMy0xMi4xMS04LjQ2NC0xLjYxLjA1Mi00LjA2LjQ3NS02LjczNiAyLjQxNyAyLjM1NSAxLjk5NyA1LjAzIDMuMTAzIDcuMTQgOC4zMTMiIGZpbGw9IiNmNDBlMWIiLz48L2c+PGc+PHBhdGggZD0iTTUwLjM1MyA3NS4zNmMtMy41NTUtMy4yNi00LjgzNS01LjE4Ny02Ljg1NS04LjU0NC0yLjA3NyAxLjY3My0zLjM4NyAzLjk5Mi0zLjk4OCA1LjIxOC42ODcgNC43MTUgMi40ODUgOS4wNjUgNS4xMiAxMi43NzYuODg4LjY0NiAyLjMwNyAxLjMxNCA0Ljg1MyAxLjY5NS0uNDAyLTIuOTktLjUzNi02LjIzLjg3LTExLjE0NiIgZmlsbD0iI2Y0MGUxYiIvPjwvZz48Zz48cGF0aCBkPSJNOTQuMDggNjYuODE3Yy0yLjAyIDMuMzU2LTMuMyA1LjI4Mi02Ljg1NyA4LjU0MyAxLjQwNyA0LjkxNiAxLjI3IDguMTU0Ljg2MyAxMS4xNDYgMi4xNjQtLjMzNCAzLjUxNy0uODUzIDQuNDEzLTEuNDAzIDIuODIzLTMuODcgNC43MTYtOC40NTQgNS4zNzUtMTMuNDMtLjY2Ny0xLjI5LTEuOTItMy4zNC0zLjc5Ni00Ljg1NiIgZmlsbD0iI2Y0MGUxYiIvPjwvZz48Zz48cGF0aCBkPSJNNjguNjkgMTE2Ljg3M2MtMjYuNTYgMC00OC4xNy0yMS42MS00OC4xNy00OC4xNyAwLTI2LjU2NSAyMS42MS00OC4xNzYgNDguMTctNDguMTc2IDI2LjU2OCAwIDQ4LjE3NSAyMS42MSA0OC4xNzUgNDguMTc1IDAgMjYuNTYtMjEuNjA3IDQ4LjE3LTQ4LjE3NSA0OC4xNyIgZmlsbD0iI2Y0MGUxYiIvPjwvZz48Zz48cGF0aCBkPSJNNjguNjkgMTI4LjA3M2MtMS43MTMgMC0zLjEwOC0xLjQtMy4xMDgtMy4xMSAwLTEuNzE3IDEuMzk0LTMuMTE0IDMuMTA3LTMuMTE0IDI5LjMgMCA1My4xMzMtMjMuODM1IDUzLjEzMy01My4xMzMgMC0yOS4yOTQtMjMuODM0LTUzLjEyNC01My4xMzMtNTMuMTI0LTI5LjI5NCAwLTUzLjEzIDIzLjgzLTUzLjEzIDUzLjEyNCAwIDEzLjYyIDUuMTcgMjYuNTg3IDE0LjU1NSAzNi40OTggMS4xOCAxLjI0NiAxLjEyNSAzLjIxNS0uMTIyIDQuMzk3LTEuMjQ4IDEuMTg2LTMuMjEzIDEuMTItNC4zOTgtLjEyQzE1LjExNSA5OC40MiA5LjM0IDgzLjkzNiA5LjM0IDY4LjcxNyA5LjM0IDM1Ljk5NCAzNS45NjYgOS4zNyA2OC42OSA5LjM3YzMyLjczIDAgNTkuMzU0IDI2LjYyNSA1OS4zNTQgNTkuMzQ3IDAgMzIuNzMtMjYuNjIyIDU5LjM1NS01OS4zNTMgNTkuMzU1IiBmaWxsPSIjZmFiZTQ5Ii8+PC9nPjxnPjxwYXRoIGQ9Ik02OC42OSAxMzcuMzk0QzMwLjgxNCAxMzcuMzk0IDAgMTA2LjU3OCAwIDY4LjcwMmMwLTEuNzE3IDEuMzktMy4xMTIgMy4xMDgtMy4xMTIgMS43MTggMCAzLjExIDEuMzk1IDMuMTEgMy4xMSAwIDM0LjQ1IDI4LjAyNyA2Mi40NzUgNjIuNDcyIDYyLjQ3NSAzNC40NTQgMCA2Mi40OC0yOC4wMjYgNjIuNDgtNjIuNDc0IDAtMzQuNDUtMjguMDI2LTYyLjQ3Ni02Mi40OC02Mi40NzYtMS43MTIgMC0zLjEwNy0xLjM5LTMuMTA3LTMuMTE0QzY1LjU4MyAxLjQgNjYuOTc4IDAgNjguNjkgMGMzNy44ODMgMCA2OC43MDMgMzAuODI1IDY4LjcwMyA2OC43IDAgMzcuODc4LTMwLjgyIDY4LjY5NC02OC43MDMgNjguNjk0IiBmaWxsPSIjZjQwZTFiIi8+PC9nPjxnPjxwYXRoIGQ9Ik0xMDIuNDMzIDY4LjcwMmMwIDE4LjYzMy0xNS4xMDQgMzMuNzM1LTMzLjc0MyAzMy43MzUtMTguNjMgMC0zMy43MzYtMTUuMTAzLTMzLjczNi0zMy43MzUgMC0xOC42MzMgMTUuMTA2LTMzLjc0IDMzLjczNy0zMy43NCAxOC42NCAwIDMzLjc0NSAxNS4xMDggMzMuNzQ1IDMzLjc0IiBmaWxsPSIjZmZmIi8+PC9nPjxnPjxwYXRoIGQ9Ik02MS41MTYgNTcuMjEycy0zLjM3NCA1LjMyLTQuNDIyIDEzLjYxNmMzLjYxIDMuNTE4IDUuODEyIDUuNTczIDExLjU4MyA4LjQgNi43NTctMy4wNyAxMC45NC03Ljk1MyAxMS41Ny04LjQtMS4yNDQtNy43MS00LjIzNS0xMy4wNDUtNC40MjItMTMuNjE2LTcuNzc4LTEuOTg2LTE0LjMwNyAwLTE0LjMwNyAwIiBmaWxsPSIjZjQwZTFiIi8+PC9nPjxnPjxwYXRoIGQ9Ik01OC4wMjggNTAuODg2YzIuMTEtNS4yMSA0Ljc5LTYuMzE2IDcuMTQ2LTguMzEzLTIuNzc0LTIuMDA3LTUuMzctMi4zMTYtNi45ODMtMi4zMzItNC42MjUgMS43NjMtOC42OSA0LjY1My0xMS44NjMgOC4zNC4wMyAxLjA1Ny4yMDMgMi45MS44NzQgNS4xODYgMy41OC0xLjYwMiA2LjA1LTIuMjMyIDEwLjgzLTIuODgiIGZpbGw9IiNmNDBlMWIiLz48L2c+PGc+PHBhdGggZD0iTTY4LjY3NiA4Ny41MTVjLTMuODMyIDIuNTItNy4zNjQgMy40NjUtMTAuMzY2IDMuNzAzLjkzIDIuODQ2IDEuNDE0IDQuMDc2IDEuODMyIDQuNzY3IDIuNy44MiA1LjU2NCAxLjI2MiA4LjUzMyAxLjI2MiAyLjk3OCAwIDUuODYtLjQ0NiA4LjU3NS0xLjI3Ny40LS42NzYuODUzLTEuOTEgMS43ODItNC43NTMtMy4wMDItLjIzNy02LjUzNi0xLjE4LTEwLjM1Ny0zLjcwMiIgZmlsbD0iI2Y0MGUxYiIvPjwvZz48Zz48cGF0aCBkPSJNNzkuMzQzIDUwLjg4NmM0Ljc4NS42NDcgNy4yNTggMS4yNzggMTAuODMyIDIuODguNjYtMi4yNTMuODM2LTQuMDg2Ljg3Ni01LjE0Ni0zLjIzLTMuNzY0LTcuMzgtNi43MDMtMTIuMTEtOC40NjQtMS42MS4wNTItNC4wNi40NzUtNi43MzYgMi40MTcgMi4zNTUgMS45OTcgNS4wMyAzLjEwMyA3LjE0IDguMzEzIiBmaWxsPSIjZjQwZTFiIi8+PC9nPjxnPjxwYXRoIGQ9Ik01MC4zNTMgNzUuMzZjLTMuNTU1LTMuMjYtNC44MzUtNS4xODctNi44NTUtOC41NDQtMi4wNzcgMS42NzMtMy4zODcgMy45OTItMy45ODggNS4yMTguNjg3IDQuNzE1IDIuNDg1IDkuMDY1IDUuMTIgMTIuNzc2Ljg4OC42NDYgMi4zMDcgMS4zMTQgNC44NTMgMS42OTUtLjQwMi0yLjk5LS41MzYtNi4yMy44Ny0xMS4xNDYiIGZpbGw9IiNmNDBlMWIiLz48L2c+PGc+PHBhdGggZD0iTTk0LjA4IDY2LjgxN2MtMi4wMiAzLjM1Ni0zLjMgNS4yODItNi44NTcgOC41NDMgMS40MDcgNC45MTYgMS4yNyA4LjE1NC44NjMgMTEuMTQ2IDIuMTY0LS4zMzQgMy41MTctLjg1MyA0LjQxMy0xLjQwMyAyLjgyMy0zLjg3IDQuNzE2LTguNDU0IDUuMzc1LTEzLjQzLS42NjctMS4yOS0xLjkyLTMuMzQtMy43OTYtNC44NTYiIGZpbGw9IiNmNDBlMWIiLz48L2c+PC9zdmc+") no-repeat 5px center; background-size: 24px; padding-left: 35px; } .header__search__input:focus { outline: none; border-color: #ddd; } @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 480px) { .header__search__input { font-size: 16px; -webkit-appearance: none; } } .header__search__clear-button { margin-left: -30px; width: 30px; border: 0; padding: 0; background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTIgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PC9kZWZzPjxnIGlkPSJPY3RpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IngiIGZpbGw9IiMwMDAwMDAiPjxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI3LjQ4IDggMTEuMjMgMTEuNzUgOS43NSAxMy4yMyA2IDkuNDggMi4yNSAxMy4yMyAwLjc3IDExLjc1IDQuNTIgOCAwLjc3IDQuMjUgMi4yNSAyLjc3IDYgNi41MiA5Ljc1IDIuNzcgMTEuMjMgNC4yNSI+PC9wb2x5Z29uPjwvZz48L2c+PC9zdmc+") center 10px no-repeat; outline: none; } .header__extras-container { position: relative; } .header__hint { padding-top: 3px; padding-left: 38px; margin-bottom: -4px; font-size: 11px; } .header__search-results { position: absolute; top: 0; left: 7px; right: 7px; border: 1px solid #ddd; border-width: 0 1px; background: #fff; min-width: 306px; max-width: 620px; } .header__search-results li { border-bottom: 1px solid #ddd; } .header__search-results a { display: block; padding: 7px 8px; } .header__search-results a.active { background: #f6f6f6; } .header__search-results a:hover { text-decoration: none; } @media screen and (min-width: 974px) { .header__search-results { left: 0; right: 0; } }',"",function(t){var i,e,n,M,a,o,r,u;u=require("util"),e=-1,o=n=a=null,this.results=[],this.clear_button_visible=!1,i=function(t){return function(i){return i>=t.results.length&&(i=0),i<0&&(i=t.results.length-1),e>=0&&(t.results[e].active=!1),t.results[i].active=!0,e=i,t.update()}}(this),r=function(t){return function(){return e=-1,t.results=[],t.loading=!1,t.update()}}(this),M=function(t){return function(){return r(),t.hint=!1,t.update()}}(this),this.search=function(t){return function(c){var g,s;return s=c.target.value,t.hint=!1,t.clear_button_visible=null!=(g=s.length>0)?g:{"true":!1},40===c.keyCode?i(e+1):38===c.keyCode?i(e-1):27===c.keyCode?M():13===c.keyCode?(e>=0&&riot.route("/c/"+t.results[e].id),M()):(n&&u.clear_delay(n),o&&o.abort(),s!==a?(a=s,s.length<4?(t.hint="min 4 letters",void r()):(t.loading=!0,t.update(),n=u.delay(.2,function(){return o=u.request(t,"/search?q="+s,function(i){return t.results=i,0===i.length&&(t.hint="no results found"),t.update()})}))):void 0)}}(this),this.search_result_mouseover=function(t){return function(e){var n;return i(function(){var t,i,e,M;for(e=this.results,M=[],t=0,i=e.length;t<i;t++)n=e[t],M.push(n.id);return M}.call(t).indexOf(e.item.id))}}(this),this.search_result_click=function(t){return function(t){return M(),!0}}(this),this.search_clear_click=function(t){return function(i){return M(),document.querySelector(".header__search__input").value="",t.clear_button_visible=!1,t.update()}}(this)}),riot.tag2("competition",'<loading></loading> <h1 class="competition__title sloppy hpadding">{full_name}</h1> <div class="competition__container"> <competition-standings if="{competition}"></competition-standings> </div>',".competition__container { overflow: auto; font-size: 13px; }",'class="competition"',function(t){var i;i=require("util"),this.on("mount",function(e){return function(){return e.update(),i.request(e,"/competition/"+t.competition_id,function(t){return e.competition=t,e.full_name=t.name+" "+t.season.name+" ("+t.area_name+")",e.update(),i.title(e.full_name)})}}(this))}),riot.tag2("competition-standings-table",'<table class="standings-table"> <thead> <tr> <th>&nbsp;</th> <th class="team">Team</th> <th><acronym title="Matches Played">MP</acronym></th> <th><acronym title="Goals For / Goals Against">GF&#8209;GA</acronym></th> <th><acronym title="Points">Pts</acronym></th> </tr> </thead> <tbody> <tr each="{standings}"> <td class="rank {zone_class(zone)}"><span>{rank}</span></td> <td class="team" title="{team_name}">{team_name}</td> <td>{matches}</td> <td>{goals_for}&nbsp;-&nbsp;{goals_against}</td> <td class="pts">{points}</td> </tr> </tbody> </table>',".standings table { margin: 10px 0; width: 100%; background: #f9f9f9; } .standings tbody tr { border-top: 1px solid #ddd; } .standings th, .standings td { text-align: center; padding: 10px 7px; } .standings th { text-align: center; color: #888; font-weight: normal; } .standings .rank { color: #888; } .standings .team { text-align: left; font-weight: 500; } .standings .pts { font-weight: 700; min-width: 25px; } .standings .zone span { display: inline-block; width: 24px; height: 24px; line-height: 24px; border-radius: 12px; color: #fff; } .standings .zone-1 span { background-color: #00796B; } .standings .zone-2 span { background-color: #388E3C; } .standings .zone-3 span { background-color: #689F38; } .standings .zone-4 span { background-color: #AFB42B; } .standings .zone-11 span { background-color: #FFA000; } .standings .zone-12 span { background-color: #F57C00; } .standings .zone-13 span { background-color: #E64A19; }","",function(t){this.zone_class=function(t){return function(t){return t?"zone zone-"+t:""}}(this)}),riot.tag2("competition-standings",'<div class="standings__container column"> <loading></loading> <div each="{rounds}" class="standings"> <h2 class="sloppy hpadding">{name}</h2> <section if="{!groups}"> <competition-standings-table></competition-standings-table> </section> <section each="{groups}" if="{groups}"> <h3 class="sloppy hpadding">{name}</h3> <competition-standings-table if="{standings}"></competition-standings-table> </section> </div> </div>',"","",function(t){var i;i=require("util"),this.on("mount",function(t){return function(){var e;return e=t.parent.competition.season.season_id,i.request(t,"/season/"+e+"/standings",function(i){return t.rounds=i,t.update()})}}(this))}),riot.tag2("error404",'<p class="hpadding">Not found. Go <a href="/">home</a>.</p>',"","",function(t){}),riot.tag2("home",'<ul class="home-list sloppy hpadding"> <li><a href="/#!/c/04">Premier League</a></li> <li><a href="/#!/c/80">La Liga</a></li> <li><a href="/#!/c/rw">Serie A</a></li> <li><a href="/#!/c/1y">Bundesliga</a></li> <li><a href="/#!/c/97m">Primera División</a></li> <li><a href="/#!/c/2e0">Ekstraklasa</a></li> <li><a href="/#!/c/5d">Champions League</a></li> </ul>',".home-list li a { display: inline-block; padding: 5px 0; }","",function(t){var i;i=require("util"),this.on("mount",function(t){return function(){return i.title("Golazon")}}(this))}),riot.tag2("loading",'<div class="loading__container sloppy hpadding"> <p class="loading__loader" if="{parent.loading}">loading</p> <p class="loading__error" if="{parent.error}">LOADING ERROR: {parent.error} (<a href="" onclick="{reload_page}">reload</a>)</p> </div>','.loading__container { font-size: 13px; } .loading__loader { font-style: italic; } .loading__loader:after { overflow: hidden; display: inline-block; vertical-align: bottom; animation: ellipsis steps(4, end) 900ms infinite; content: "\\2026"; width: 0px; } .loading__error { display: inline-block; color: #c33; font-weight: 400; } @keyframes ellipsis { to { width: 1.25em; } }',"",function(t){this.reload_page=function(){return location.reload()}}),riot.tag2("wtf",'<div class="wtf__container sloppy hpadding"> <h1>WTF?</h1> <p> Football data <a href="https://gist.github.com/sobstel/bb52784b857697b71f60ed2f040e9757">mnmlist</a> way. </p> <p> <a href="https://github.com/sobstel/golazon">Open source</a> prototype built as a proof of concept. </p> <p> Drop me a line if you feel like helping or funding this project to grow ;-) </p> <p> przemek@<a href="http://www.sobstel.org/">sobstel.org</a> </p> </div>',".wtf__container { font-size: 13px; }","",function(t){var i;i=require("util"),this.on("mount",function(t){return function(){return i.title("WTF")}}(this))}),require.register("util",function(t,i,e){var n,M;return n="http://toller.xyz",M=i("superagent"),t.title=function(t){if(document.title=t+" - Golazon","Golazon"===t)return document.title="Golazon"},t.request=function(t,i,e){return t.loading=!0,t.update(),M.get(n+i).timeout(5e3).end(function(i,n){return t.loading=!1,t.update(),i?(t.error=i.message,t.update()):e(n.body)})},t.delay=function(t,i){return setTimeout(i,1e3*t)},t.clear_delay=function(t){return clearTimeout(t)}}),require.register("___globals___",function(t,i,e){})}(),require("___globals___");