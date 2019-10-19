(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-tv-search-tv-module"],{

/***/ "./src/app/search-tv/search-tv.module.ts":
/*!***********************************************!*\
  !*** ./src/app/search-tv/search-tv.module.ts ***!
  \***********************************************/
/*! exports provided: SearchTvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTvPageModule", function() { return SearchTvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-tv.page */ "./src/app/search-tv/search-tv.page.ts");







var routes = [
    {
        path: '',
        component: _search_tv_page__WEBPACK_IMPORTED_MODULE_6__["SearchTvPage"]
    }
];
var SearchTvPageModule = /** @class */ (function () {
    function SearchTvPageModule() {
    }
    SearchTvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_tv_page__WEBPACK_IMPORTED_MODULE_6__["SearchTvPage"]]
        })
    ], SearchTvPageModule);
    return SearchTvPageModule;
}());



/***/ }),

/***/ "./src/app/search-tv/search-tv.page.html":
/*!***********************************************!*\
  !*** ./src/app/search-tv/search-tv.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n      <ion-title style=\"text-align: center;\">电视搜索</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content>\n  \n    <!-- 搜索 -->\n    <div>\n      <table style=\"width: 100%;\">\n        <tr>\n          <td>\n            <ion-searchbar (ionInput)=\"searchTvs($event)\" placeholder=\"请输入电视名称\"></ion-searchbar>\n          </td>\n          <td>\n            <ion-button color=\"danger\" (click)=\"doSearch()\">搜索</ion-button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  \n    <!-- 搜索时显示的结果 -->\n    <ion-list *ngIf=\"!search\">\n      <ion-item *ngFor=\"let tv of tvList\" (click)=\"goTvDetail(tv._id)\">\n          <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"tv.src\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\"></ion-img>\n            </ion-thumbnail>\n        <p>{{tv.name}}</p>\n      </ion-item>\n    </ion-list>\n    <!-- 搜索后显示的结果 -->\n      <ion-grid *ngIf=\"search\">\n        <ion-row *ngFor=\"let tv of tvList\">\n          <ion-col *ngFor=\"let tv2 of tv\" (click)=\"goTvDetail((tv2._id))\">\n                <div>\n                    <img src=\"{{tv2.src}}\" onerror=\"onerror=null;src='https://gxtstatic.com/xl/statics/img/nopic.gif'\"class=\"movie_img\">\n                  </div>\n                  <p class=\"movie-detail\" style=\"margin: 0px;\">{{tv2.name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <!-- 上拉加载更多 -->\n    <ion-infinite-scroll (ionInfinite)=\"doLoadMore($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"正在加载\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <!-- 上拉加载更多 -->\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/search-tv/search-tv.page.scss":
/*!***********************************************!*\
  !*** ./src/app/search-tv/search-tv.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC10di9zZWFyY2gtdHYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-tv/search-tv.page.ts":
/*!*********************************************!*\
  !*** ./src/app/search-tv/search-tv.page.ts ***!
  \*********************************************/
/*! exports provided: SearchTvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTvPage", function() { return SearchTvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.service */ "./src/app/tools.service.ts");





var SearchTvPage = /** @class */ (function () {
    function SearchTvPage(storage, tools, activeRoute, router) {
        var _this = this;
        this.storage = storage;
        this.tools = tools;
        this.activeRoute = activeRoute;
        this.router = router;
        // 电视列表
        this.tvList = [];
        this.tvListTemp = [];
        this.tvListTemp2 = [];
        // 每行电视的数量
        this.col_size = 4;
        // 电视选中二级类型列表
        this.selectTypeList = null;
        // 当前页码
        this.pageIndex = 1;
        // 每页大小
        this.pageSize = 8;
        // 排序方式 0：发布日期 1:评分
        this.sortType = 1;
        // 判断是否搜索
        this.search = false;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.type = params['type'];
        });
    }
    SearchTvPage.prototype.ngOnInit = function () {
    };
    /**
     * 获取电视列表
     */
    SearchTvPage.prototype.getTvList = function () {
        var _this = this;
        // 搜索关键词不为空时进行查询
        if (this.keyWord != '') {
            this.tools.getTvListApi(this.type, this.selectTypeList, this.pageIndex, this.pageSize, this.keyWord).then(function (data) {
                _this.tvList = _this.tvList.concat(data.data);
            });
        }
    };
    /**
     * 搜索电视
     * @param event 事件对象
     */
    SearchTvPage.prototype.searchTvs = function (event) {
        // 修改为未搜索
        this.search = false;
        // 清空电视列表数据
        this.tvList = [];
        // 关键词
        this.keyWord = event.target.value;
        // 获取电视列表
        this.getTvList();
    };
    /**
     * 跳转到电视详情页
     * @param _id 电视_id
     */
    SearchTvPage.prototype.goTvDetail = function (_id) {
        var result = this.tools.checkUser();
        if (result) {
            this.router.navigate(['/tv-detail'], {
                queryParams: {
                    _id: _id
                }
            });
        }
    };
    /**
     * 搜索
     */
    SearchTvPage.prototype.doSearch = function () {
        var _this = this;
        // 修改为已搜索
        this.search = true;
        // 截取电视名称的长度
        var name_length = 5;
        this.tvListTemp = this.tvList;
        // 清空电视列表数据
        this.tvList = [];
        // 修改当前页码为1
        this.pageIndex = 1;
        this.tvListTemp.forEach(function (data) {
            var movie_name = data.name;
            if (movie_name.length > name_length) {
                movie_name = movie_name.slice(0, name_length) + "...";
            }
            data.name = movie_name;
            _this.tvListTemp2.push(data);
        });
        for (var i = 0; i < this.tvListTemp2.length;) {
            this.tvList.push(this.tvListTemp2.splice(i, this.col_size));
        }
    };
    /**
     * 上拉加载更多
     * @param event 事件对象
     */
    SearchTvPage.prototype.doLoadMore = function (event) {
        // 将当前页码加1
        this.pageIndex = this.pageIndex + 1;
        // 获取电视列表
        this.getTvList();
        if (event) {
            //告诉ionic 刷新数据完成
            event.target.complete();
        }
    };
    SearchTvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-tv',
            template: __webpack_require__(/*! ./search-tv.page.html */ "./src/app/search-tv/search-tv.page.html"),
            styles: [__webpack_require__(/*! ./search-tv.page.scss */ "./src/app/search-tv/search-tv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _tools_service__WEBPACK_IMPORTED_MODULE_4__["ToolsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchTvPage);
    return SearchTvPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-tv-search-tv-module.js.map