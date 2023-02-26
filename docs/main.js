"use strict";
(self["webpackChunkprojectx_client"] = self["webpackChunkprojectx_client"] || []).push([["main"],{

/***/ 1911:
/*!********************************!*\
  !*** ./src/app/api/jiraApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JiraApi": () => (/* binding */ JiraApi)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4957);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService.service */ 9828);







class JiraApi {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.jiraCallback = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraCallback;
    this.jiraClientSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraClientSecret;
    this.jiraClientId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraClientId;
    this.jiraOauthTokenUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraOauthTokenUrl;
    this.jiraCloudIdUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraCloudIdUrl;
    this.apiPath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraApiEndpoint;
    this.authPath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraApiAuth;
    this.apiAgilePath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jiraApiAgile; // pas appeler
  }

  postCodeToGetAccessToken(code) {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = yield _this.authService.getSotrageUser();
      const headerDict = {
        Accept: 'application/json'
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      let body = {
        grant_type: 'authorization_code',
        client_id: _this.jiraClientId,
        client_secret: _this.jiraClientSecret,
        code: code,
        redirect_uri: _this.jiraCallback
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this.http.post(_this.jiraOauthTokenUrl, body, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getCloudId(code) {
    const headerDict = {
      Accept: 'application/json',
      Authorization: `Bearer ${code}`
    };
    const requestOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(this.http.get(this.jiraCloudIdUrl, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched cloudId')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
  }

  getMySelf() {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this2.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this2.http.get(_this2.apiPath + 'myself', requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched myself')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getSprints() {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this3.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this3.http.get(_this3.apiAgilePath + 'board/133/sprint?state=active,future', requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched sprint')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getProject(projectKey) {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this4.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this4.http.get(_this4.apiPath + 'project/' + projectKey, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched project')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getProjects() {
    var _this5 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this5.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this5.http.get(_this5.apiPath + 'project/', requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched projects')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getComponent(id) {
    var _this6 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this6.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this6.http.get(_this6.apiPath + 'component/' + id, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched component')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getMaj(projectId) {
    var _this7 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this7.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return _this7.http.get(_this7.apiPath + 'project/' + projectId, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => console.log('fetched project')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data));
    })();
  }

  searchJQL(query) {
    var _this8 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jql = query;
      let token = yield _this8.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      let issues = [];
      let fetchMoreResult = true;
      let currentIndex = 0;

      while (fetchMoreResult) {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this8.http.get(_this8.apiPath + 'search?jql=' + jql + '&startAt=' + currentIndex, requestOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
        issues.push(...res.issues);
        currentIndex += res.issues.length;
        fetchMoreResult = res.total > currentIndex;
      }

      return issues;
    })();
  }

  postIssue(issue) {
    var _this9 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this9.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this9.http.post(_this9.apiPath + 'issue', issue, requestOptions).pipe( // tap(_ => console.log('posted maj')),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  putIssue(issueKey, body) {
    var _this10 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this10.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      }; // {
      //   fields: {
      //     duedate :  duedate : endOfDay(this.dateSelected),
      //   }
      // }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this10.http.put(_this10.apiPath + 'issue/' + issueKey, body, requestOptions).pipe( // tap(_ => console.log('posted maj')),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  postIssueTransition(issueKey, transitionId) {
    var _this11 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this11.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this11.http.post(_this11.apiPath + 'issue/' + issueKey + '/transitions', {
        transition: {
          id: transitionId
        }
      }, requestOptions).pipe( // tap(_ => console.log('posted maj')),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getIssue(issueIdOrKey) {
    var _this12 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this12.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this12.http.get(_this12.apiPath + 'issue/' + issueIdOrKey, requestOptions).pipe( // tap(_ => console.log('posted maj')),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }

  getIssueTransition(issueIdOrKey) {
    var _this13 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = yield _this13.authService.getToken();
      const headerDict = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      };
      const requestOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headerDict)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this13.http.get(_this13.apiPath + 'issue/' + issueIdOrKey + '/transitions', requestOptions).pipe( // tap(_ => console.log('posted maj')),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => data)));
    })();
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption

      console.log(`${operation} failed: ${error.message}`); // Let the app keep running by returning an empty result.

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(result);
    };
  }

}

JiraApi.ɵfac = function JiraApi_Factory(t) {
  return new (t || JiraApi)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_authService_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

JiraApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: JiraApi,
  factory: JiraApi.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9139:
/*!************************************!*\
  !*** ./src/app/api/projectxApi.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectxApi": () => (/* binding */ ProjectxApi)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4957);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService.service */ 9828);






class ProjectxApi {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
    this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.projectxApiEndpoint;
    this.setSecret();
  }

  setSecret() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = yield _this.auth.getSotrageUser();
      _this.secret = user.secret;
    })();
  }

  getProjects(onlyWithInstances) {
    return this.http.get(this.path + 'projects', {
      params: {
        onlyWithInstances: onlyWithInstances
      },
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched projects')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data));
  }

  getProjectsInstances() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.get(this.path + 'servers/instances', {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched servers')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }

  getServers() {
    return this.http.get(this.path + 'servers', {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched servers')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data));
  }

  postServer(server) {
    return this.http.post(this.path + 'servers', server, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('post server')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data));
  }

  postInstance(instance) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.post(this.path + 'instances', instance, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('post instance')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }

  patchInstance(instance) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.patch(this.path + 'instances/' + instance.id, instance, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('patch instance')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }

  patchInstanceEmails(instance, mails) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.patch(this.path + 'instances/' + instance.id + '/mails', mails, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('patch mail instance')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }

  deleteInstance(instance) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.delete(this.path + 'instances/' + instance.id, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('delete instance')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }

  patchUpdate(update, body) {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this2.http.patch(_this2.path + 'updates/' + update.id, body, {
        headers: {
          secret: _this2.secret
        }
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('patch updates')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
    })();
  }

  postUpdate(update) {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this3.http.post(_this3.path + 'updates', update, {
        headers: {
          secret: _this3.secret
        }
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('post updates')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
    })();
  }

  deleteUpdate(update) {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this4.http.delete(_this4.path + 'updates/' + update.id, {
        headers: {
          secret: _this4.secret
        }
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('delete updates')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
    })();
  }

  getUpdates() {
    return this.http.get(this.path + 'updates', {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched updates')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data));
  }

  getNextsUpdates(instanceId) {
    // je sais pas comment passer proprement le queryparam
    // const opts = { params: new HttpParams({ fromString: `instanceId=${instanceId}` }) };
    return this.http.get(this.path + `updates/nexts?instanceId=${instanceId}`, {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched updates')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data));
  }

  getJiraProject() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.get(this.path + '/projects/utils/getJira', {
      headers: {
        secret: this.secret
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => console.log('fetched project')), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption

      console.log(`${operation} failed: ${error.message}`); // Let the app keep running by returning an empty result.

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result);
    };
  }

}

ProjectxApi.ɵfac = function ProjectxApi_Factory(t) {
  return new (t || ProjectxApi)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_authService_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

ProjectxApi.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ProjectxApi,
  factory: ProjectxApi.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 9242);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 927);
/* harmony import */ var _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/manager/manager.component */ 6701);
/* harmony import */ var _components_oauth_callback_callback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/oauth/callback/callback.component */ 4233);
/* harmony import */ var _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects-list/projects-list.component */ 1310);
/* harmony import */ var _components_sprint_board_sprint_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sprint-board/sprint-board.component */ 3584);
/* harmony import */ var _guards_isLoginGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/isLoginGuard */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);










const routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        canActivate: [_guards_isLoginGuard__WEBPACK_IMPORTED_MODULE_6__.isLoginGuard],
    },
    {
        path: 'sprints',
        component: _components_sprint_board_sprint_board_component__WEBPACK_IMPORTED_MODULE_5__.SprintBoardComponent,
        canActivate: [_guards_isLoginGuard__WEBPACK_IMPORTED_MODULE_6__.isLoginGuard],
    },
    {
        path: 'projects',
        component: _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsListComponent,
        canActivate: [_guards_isLoginGuard__WEBPACK_IMPORTED_MODULE_6__.isLoginGuard],
    },
    {
        path: 'manager',
        component: _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_2__.ManagerComponent,
        canActivate: [_guards_isLoginGuard__WEBPACK_IMPORTED_MODULE_6__.isLoginGuard],
    },
    {
        path: 'callback',
        component: _components_oauth_callback_callback_component__WEBPACK_IMPORTED_MODULE_3__.CallbackComponent,
    },
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: '**',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 7366);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




class AppComponent {
    constructor(router) {
        this.router = router;
        this.now = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), "dd MMMM yyyy - HH' h 'mm' m 'ss' s", { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_1__["default"] });
        setInterval(() => {
            this.now = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), "dd MMMM yyyy - HH' h 'mm' m 'ss' s", { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_1__["default"] });
        }, 1000);
        this.inactivityTime();
    }
    inactivityTime() {
        var time;
        window.onload = resetTimer;
        // DOM Events
        document.onmousemove = resetTimer;
        document.onkeydown = resetTimer;
        function logout() {
            alert("Session timeout (50min) - Page reloading");
            window.location.reload();
            //location.href = 'logout.html'
        }
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(logout, 3000000); // 50min
            // 1000 milliseconds = 1 second
        }
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[2, "position", "absolute", "left", "1%", "top", "1%"], [1, "mb-4", 2, "color", "white", "font-size", "20px"], [1, "fs-6"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Powered by FlorentPlomb \uD83D\uDE80");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.now, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/projects-list/projects-list.component */ 1310);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter.pipe */ 1243);
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar/calendar.component */ 2081);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar */ 603);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 9179);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/fr */ 6167);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.module */ 4282);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ 7952);
/* harmony import */ var _components_update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update/update.component */ 4178);
/* harmony import */ var _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manager/manager.component */ 6701);
/* harmony import */ var _components_new_server_new_server_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-server/new-server.component */ 654);
/* harmony import */ var _components_instance_instance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/instance/instance.component */ 1106);
/* harmony import */ var _components_sprint_board_sprint_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sprint-board/sprint-board.component */ 3584);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ 9242);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _components_projects_list_instance_item_instance_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects-list/instance-item/instance-item.component */ 9928);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9691);
/* harmony import */ var _directives_custom_virtual_scroll_strategy_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/custom-virtual-scroll-strategy.directive */ 3840);
/* harmony import */ var _components_oauth_callback_callback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/oauth/callback/callback.component */ 4233);


































(0,_angular_common__WEBPACK_IMPORTED_MODULE_17__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_18__.LOCALE_ID, useValue: 'fr-FR' },
    ], imports: [[
            angular_calendar__WEBPACK_IMPORTED_MODULE_19__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_19__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_20__.adapterFactory,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ScrollingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _components_login_login_module__WEBPACK_IMPORTED_MODULE_7__.LoginModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsListComponent,
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.InstancesFilterPipe,
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.ProjectsFilterPipe,
        _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__.CalendarComponent,
        _components_update_update_component__WEBPACK_IMPORTED_MODULE_8__.UpdateComponent,
        _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_9__.ManagerComponent,
        _components_new_server_new_server_component__WEBPACK_IMPORTED_MODULE_10__.NewServerComponent,
        _components_instance_instance_component__WEBPACK_IMPORTED_MODULE_11__.InstanceComponent,
        _components_sprint_board_sprint_board_component__WEBPACK_IMPORTED_MODULE_12__.SprintBoardComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__.HomeComponent,
        _components_projects_list_instance_item_instance_item_component__WEBPACK_IMPORTED_MODULE_14__.InstanceItemComponent,
        _directives_custom_virtual_scroll_strategy_directive__WEBPACK_IMPORTED_MODULE_15__.CustomVirtualScrollDirective,
        _components_oauth_callback_callback_component__WEBPACK_IMPORTED_MODULE_16__.CallbackComponent], imports: [angular_calendar__WEBPACK_IMPORTED_MODULE_19__.CalendarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ScrollingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _components_login_login_module__WEBPACK_IMPORTED_MODULE_7__.LoginModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetComponentScope"](_components_update_update_component__WEBPACK_IMPORTED_MODULE_8__.UpdateComponent, [_angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgSelectMultipleOption"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__.CalendarComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe]);


/***/ }),

/***/ 2081:
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 603);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ 2906);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 9735);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 5012);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 9754);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 9717);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4575);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../update/update.component */ 4178);
/* harmony import */ var _assets_sampleData_updatesSample_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/sampleData/updatesSample.json */ 7543);
/* harmony import */ var src_app_services_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/updates.service */ 6303);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8267);












function CalendarComponent_mwl_calendar_month_view_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mwl-calendar-month-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_month_view_16_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.handleEvent("goJira", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_month_view_16_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.eventTimesChanged($event); })("dayClicked", function CalendarComponent_mwl_calendar_month_view_16_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.dayClicked($event.day, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("locale", ctx_r0.locale)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
} }
const _c0 = function (a0) { return { "text-dark": a0 }; };
const colors = { red: { primary: '#ad2121', secondary: '#FAE3E3', }, blue: { primary: '#1e90ff', secondary: '#D1E8FF', }, yellow: { primary: '#e3bc08', secondary: '#FDF1BA', }, };
class CalendarComponent {
    constructor(updatesService, modalService) {
        this.updatesService = updatesService;
        this.modalService = modalService;
        this.isModal = false; // pas utiliser?
        this.eventEditable = true;
        this.updates = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.events = [];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView.Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView;
        this.days = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView.Day;
        this.viewDate = new Date();
        // Affiche le "popup" des events sous le jour
        this.activeDayIsOpen = true;
        this.locale = 'fr';
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DAYS_OF_WEEK.MONDAY;
        this.weekendDays = [angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DAYS_OF_WEEK.FRIDAY, angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DAYS_OF_WEEK.SATURDAY];
        // ce qui permet d'envoyer le valeur au composant parent du calendar, dans update-modal par exemple
        // on emit un event :this.dayClickedEvent.emit(date); et on peut le récupérer dans le parent comme ça
        this.dayClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.demo) {
            this.viewDate = new Date("2023-02-14");
            let updates = _assets_sampleData_updatesSample_json__WEBPACK_IMPORTED_MODULE_2__;
            this.createEvent(_assets_sampleData_updatesSample_json__WEBPACK_IMPORTED_MODULE_2__);
        }
        else {
            this.getUpdates();
        }
    }
    getUpdates() {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.demo) {
            this.events = [];
            this.updatesService
                .getUpdates()
                .subscribe((data) => (this.createEvent(data.updates)));
        }
    }
    createEvent(updates) {
        let actions = this.eventEditable ? [
            {
                label: '<i class="fas fa-fw fa-pencil-alt fs-5 text-info"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('editUpdate', event);
                }
            },
            {
                label: '<i class="fas fa-fw fa-trash-alt fs-5 text-danger"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    // this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.handleEvent('deleteUpdate', event);
                },
            }
        ] : [];
        for (let u of updates) {
            let event = {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(u.dueDate)),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(u.dueDate)),
                title: `${u.instance.target.toUpperCase()} - ${u.keyJira} - serveur ${u.instance.server.number.toUpperCase()}`,
                color: colors.red,
                cssClass: 'text-10',
                allDay: false,
                meta: { update: u },
                actions: actions
            };
            this.events.push(event);
        }
        this.refresh.next(CalendarComponent);
    }
    ;
    dayClicked({ date, events }, event) {
        this.dayClickedEvent.emit(date);
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date, this.viewDate)) {
            if (((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('goJira', event);
    }
    handleEvent(action, event) {
        console.log(event.meta);
        switch (action) {
            case 'goJira':
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.demo) {
                    window.open("http://www.florentplomb.ch", '_blank');
                }
                else {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.jiraUrl + 'browse/' + event.meta.update.keyJira, '_blank');
                }
                break;
            case 'editUpdate':
                const updateEditModal = this.modalService.open(_update_update_component__WEBPACK_IMPORTED_MODULE_1__.UpdateComponent, {
                    size: 'xl',
                    animation: true,
                });
                updateEditModal.componentInstance.instance = event.meta.update.instance;
                updateEditModal.componentInstance.mode = "patch";
                updateEditModal.componentInstance.update = event.meta.update;
                updateEditModal.dismissed.subscribe(() => {
                    this.getUpdates();
                });
                break;
            case 'deleteUpdate':
                const deleteUpdateModal = this.modalService.open(_update_update_component__WEBPACK_IMPORTED_MODULE_1__.UpdateComponent, {
                    size: 'xl',
                    animation: true,
                });
                deleteUpdateModal.componentInstance.instance = event.meta.update.instance;
                deleteUpdateModal.componentInstance.mode = "delete";
                deleteUpdateModal.componentInstance.update = event.meta.update;
                deleteUpdateModal.dismissed.subscribe(() => {
                    this.getUpdates();
                });
                break;
            default:
                break;
        }
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_updates_service__WEBPACK_IMPORTED_MODULE_3__.UpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["calendar-component"]], inputs: { isModal: "isModal", eventEditable: "eventEditable" }, outputs: { dayClickedEvent: "dayClickedEvent" }, decls: 17, vars: 17, consts: [[1, "row", "text-center"], [1, "col-md-6", "text-light", "pt-2", 3, "ngClass"], [1, "col-md-6"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-white", "text-light", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "locale", "events", "refresh", "activeDayIsOpen", "eventClicked", "eventTimesChanged", "dayClicked", 4, "ngSwitchCase"], [3, "viewDate", "locale", "events", "refresh", "activeDayIsOpen", "eventClicked", "eventTimesChanged", "dayClicked"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_div_viewDateChange_8_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarComponent_Template_div_viewDateChange_8_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_div_viewDateChange_10_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_div_viewDateChange_12_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarComponent_Template_div_viewDateChange_12_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CalendarComponent_mwl_calendar_month_view_16_Template, 1, 5, "mwl-calendar-month-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.isModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](5, 11, ctx.viewDate, ctx.view + "ViewTitle", "fr")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarMonthViewComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵi"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 9242:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    naviguateTo(menu) {
        this.router.navigate([menu], {});
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 0, consts: [[1, "text-center", "text-white", "mb-5", "mt-5"], [1, "col-lg-7", "mx-auto"], [1, "display-3"], [1, "main"], [1, "square", 3, "click"], [1, "content", "border"], [1, "pt-responsive", 2, "text-align", "center"], [1, "trns-text"], [1, "icon"], [1, "square"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ProjectX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_5_listener() { return ctx.naviguateTo("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mises \u00E0 jour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83D\uDCC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() { return ctx.naviguateTo("sprints"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sprint Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_19_listener() { return ctx.naviguateTo("manager"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Server Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uD83C\uDFED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uD83C\uDF20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\uD83C\uDF20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\uD83C\uDF20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Lato:400,900);\n\n.trns-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 10%;\n  padding-top: 1%;\n  max-width: 2000px;\n  min-height: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pt-responsive[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 7em;\n}\n.square[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  padding-bottom: 30%;\n  \n  margin: 1.66%;\n  overflow: hidden;\n  background-color: #fbfbfb33;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.content[_ngcontent-%COMP%]:hover {\n  background-color: #2535d1;\n}\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 90%;\n  \n  width: 90%;\n  \n  padding: 5%;\n  top: 5%;\n}\n@media screen and (max-width: 1080px) {\n  .pt-responsive[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    font-size: 3.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUVBQUE7QUFBNEQsc0RBQUE7QUFHcEU7RUFDRSxXQUFBO0FBQUY7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFBc0IsbUNBQUE7RUFDdEIsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7QUFDQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUFZLDBCQUFBO0VBQ1osVUFBQTtFQUFXLDBCQUFBO0VBQ1gsV0FBQTtFQUNBLE9BQUE7QUFHSjtBQUFBO0VBRUU7SUFDRSxjQUFBO0VBRUY7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw5MDApOyAgLyogPC0tIEp1c3QgZm9yIHRoZSBkZW1vLCBZZXMgSSBsaWtlIHByZXR0eSBmb250cy4uLiAqL1xyXG5cclxuXHJcbi50cm5zLXRleHQge1xyXG4gIGNvbG9yOiNmZmZcclxufVxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6d3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIG1heC13aWR0aDogMjAwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wdC1yZXNwb25zaXZle1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTo3ZW07XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gICAgLy8gZmxvYXQ6bGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tIDogMzAlOyAvKiA9IHdpZHRoIGZvciBhIDE6MSBhc3BlY3QgcmF0aW8gKi9cclxuICAgIG1hcmdpbjoxLjY2JTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmIzMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29udGVudDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzNWQxXHJcbn1cclxuLmNvbnRlbnQge1xyXG5cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjkwJTsgLyogPSAxMDAlIC0gMio1JSBwYWRkaW5nICovXHJcbiAgICB3aWR0aDo5MCU7IC8qID0gMTAwJSAtIDIqNSUgcGFkZGluZyAqL1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB0b3A6IDUlO31cclxuXHJcbi8vIHRvdWpvdXJzIMOgIGxhIGZpbiBsZXMgbWVkaWEgcXVlcnkgc2lub24gZWxsZXMgc29udCBvdmVycmlkZVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpXHJcbntcclxuICAucHQtcmVzcG9uc2l2ZXtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmljb257XHJcbiAgICBmb250LXNpemU6My41ZW07XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1106:
/*!***********************************************************!*\
  !*** ./src/app/components/instance/instance.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstanceComponent": () => (/* binding */ InstanceComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/projectxApi */ 9139);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projects.service */ 1065);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);










function InstanceComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstanceComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r7.deleteInstance();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete instance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function InstanceComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function InstanceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", true);
  }
}

function InstanceComponent_div_11_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", s_r11.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r11.number);
  }
}

function InstanceComponent_div_11_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r12.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r12.name);
  }
}

function InstanceComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "PROD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "DEMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Application Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "NUI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "DYNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, InstanceComponent_div_11_option_21_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, InstanceComponent_div_11_option_26_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.servers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.projects);
  }
}

function InstanceComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create instance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r4.instanceForm.valid);
  }
}

function InstanceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update instance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function InstanceComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class InstanceComponent {
  // je dois créer des interfaces pour envoyé au serveur instance et server qui ne sont pas les modèles mais juste des dto d'envoie
  // instance: any = {}
  constructor(fb, projectxApi, activeModal, projectsService) {
    this.fb = fb;
    this.projectxApi = projectxApi;
    this.activeModal = activeModal;
    this.projectsService = projectsService;
    this.mode = 'create';
    /** il faut absolument patcher les mail avec un autre endpoint ou le changement de server avec un autre endpoint */
    //  // Mode: patch, update alreadyExist
    //  public update: IUpdate;

    this.projects = [];
    this.servers = [];
    this.instanceForm = this.fb.group({
      target: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      erpProject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      serverNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      key: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      emails: []
    });
  }

  ngOnInit() {
    var _a, _b, _c;

    console.log(this.instance); // faut que je fasse un autre modal avec un autre endpoint pour juste changer les mails d'une instance
    // on a pas besoin des projets quand on change que les mails.
    // je sui un peu fatigué faudrait refactor ici a

    if (this.mode != "patch-mail") {
      this.getProjects();

      if ((_a = this.instance) === null || _a === void 0 ? void 0 : _a.id) {
        this.instanceForm.controls['key'].setValue(this.instance.project.key);
      }
    }

    if ((_b = this.instance) === null || _b === void 0 ? void 0 : _b.id) {
      this.instanceForm.controls['target'].setValue(this.instance.target);
      this.instanceForm.controls['type'].setValue(this.instance.type);
      this.instanceForm.controls['erpProject'].setValue(this.instance.erpProject);
      this.instanceForm.controls['serverNumber'].setValue(this.instance.server.number);
      this.instanceForm.controls['emails'].setValue((_c = this.instance.emails) === null || _c === void 0 ? void 0 : _c.join(";"));
    }
  }

  getProjects() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.projectsService.getProjects(false).subscribe(projects => _this.projects = projects);
    })();
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (_this2.mode) {
        case "create":
          yield _this2.createInstance();
          break;

        case "patch":
          yield _this2.patchInstance();
          break;

        case "patch-mail":
          yield _this2.patchInstanceEmails();
          break;
        // case "delete":
        //   await this.deleteUpdate();
        //   break;

        default:
          break;
      }
    })();
  }

  createInstance() {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let instance = yield _this3.projectxApi.postInstance([_this3.instanceForm.value]);

        _this3.instanceOK();
      } catch (error) {
        _this3.handleError("Create error");
      }
    })();
  }

  patchInstance() {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      let form = _this4.instanceForm.value;
      let data = {};
      data.emails = (_a = form.emails) === null || _a === void 0 ? void 0 : _a.split(/[;,]+/);
      data.id = _this4.instance.id;
      data.target = form.target;
      data.type = form.type;
      data.erpProject = form.erpProject;
      data.serverNumber = form.serverNumber;
      data.key = form.key;

      try {
        let instance = yield _this4.projectxApi.patchInstance(data);

        _this4.instanceOK();
      } catch (error) {
        _this4.handleError("Update error");
      }
    })();
  }

  patchInstanceEmails() {
    var _this5 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      let form = _this5.instanceForm.value;

      try {
        let instance = yield _this5.projectxApi.patchInstanceEmails(_this5.instance, (_a = form.emails) === null || _a === void 0 ? void 0 : _a.split(/[;,]+/));

        _this5.instanceOK();
      } catch (error) {
        _this5.handleError("Update error");
      }
    })();
  }

  deleteInstance() {
    var _this6 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (confirm(`êtes-vous sur de voulour supprimer l'instance ${_this6.instance.target}`)) {
        yield _this6.projectxApi.deleteInstance(_this6.instance);

        _this6.instanceOK();
      }
    })();
  }

  instanceOK() {
    this.activeModal.dismissAll("ok"); // refresh server list
  }

  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption

      console.log(`${operation} failed: ${error.message}`); // Let the app keep running by returning an empty result.

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
    };
  }

}

InstanceComponent.ɵfac = function InstanceComponent_Factory(t) {
  return new (t || InstanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_1__.ProjectxApi), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__.ProjectsService));
};

InstanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InstanceComponent,
  selectors: [["app-instance"]],
  inputs: {
    mode: "mode",
    instance: "instance",
    servers: "servers"
  },
  decls: 15,
  vars: 8,
  consts: [[1, "container"], [1, "row", 2, "padding", "2em 2em 2em 2em"], ["class", "flex-end", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], ["for", "emails", 1, "form-label"], ["id", "emails", "placeholder", "ex: john@doe.com;jane@doe@.com", "type", "text", "formControlName", "emails", 1, "form-control"], [4, "ngIf"], ["class", "d-grid gap-2", 4, "ngIf"], [1, "flex-end"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["for", "target", 1, "form-label"], ["id", "target", "type", "text", "formControlName", "target", 1, "form-control"], ["for", "type", 1, "form-label"], ["size", "2", "formControlName", "type", "id", "type", 1, "form-control"], ["value", "PROD"], ["value", "DEMO"], ["for", "erpProject", 1, "form-label"], ["size", "2", "formControlName", "erpProject", "id", "erpProject", 1, "form-control"], ["value", "NUI"], ["value", "DYNA"], ["for", "serverNumber", 1, "form-label"], ["size", "5", "formControlName", "serverNumber", "id", "serverNumber", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "key"], ["size", "5", "formControlName", "key", "id", "key", 1, "form-control"], [3, "value"], [1, "d-grid", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3"]],
  template: function InstanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, InstanceComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function InstanceComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, InstanceComponent_div_5_Template, 4, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, InstanceComponent_div_6_Template, 4, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Emails (use \",\" or \";\" as separator)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, InstanceComponent_div_11_Template, 27, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, InstanceComponent_div_12_Template, 3, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, InstanceComponent_div_13_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, InstanceComponent_div_14_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "patch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.instanceForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode != "patch-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "patch-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode != "patch-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "patch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "patch-mail");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 927:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7952);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);






class LoginComponent {
  constructor(fb, toastr, router) {
    this.fb = fb;
    this.toastr = toastr;
    this.router = router;
    this.jiraCallback = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jiraCallback;
    this.jiraClientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jiraClientId;
    this.jiraScope = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jiraScope;
    this.jiraState = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jiraState;
    this.loginForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }

  ngOnInit() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.demo) {
      this.router.navigate(['projects']);
    } else {
      let url = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${this.jiraClientId}&scope=${this.jiraScope}&redirect_uri=${this.jiraCallback}&state=${this.jiraState}&response_type=code&prompt=consent`;
      url = url.replace(this.jiraState, this.jiraState.split("").map(e => Math.floor(10 * Math.random())).join(""));
      window.location.replace(url);
    }
  }
  /*  async getLogin(): Promise<void> {
  
   
     // 1. call getmyself to check if the user credentials are allowed in jira
     // 2. call getsprint to set secret  for projectX auth Api
     try {
  
       let u = await this.jiraApi.getMySelf()
  
       let user: IUser = {
         name: u.name,
         key: u.key,
         displayName: u.displayName,
         emailAddress: u.emailAddress
       }
  
       // await?
       this.auth.setUser(user);
  
       let issue: Issue = await this.jiraApi.getIssue("FLOR-7");
  
       await this.auth.setUserSecret(issue.fields.created);
  
       this.router.navigate(['home'], {});
     } catch (err) {
  
       this.handleError(null);
     }
  
   }
  
  
   onSubmit() {
     this.getLogin();
   }
  */


  handleError(data) {
    this.toastr.warning('Wrong user or password or server error', 'Login failed');
    console.log('Loginfail:', data);
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 15,
  vars: 0,
  consts: [[1, "text-center", "text-white", "mb-5", "mt-4"], [1, "col-lg-7", "mx-auto"], [1, "display-3"], [1, "container"], [1, "row", "justify-content-center"], [1, "rounded-3", "col-lg-4", 2, "padding", "2em 2em 2em 2em", "background-color", "#fbfbfb33", "height", "400px"], [1, "h-100", "list-group-flush", "bg-white", "border"], [1, "login-container"], [1, "login-content", "p-4"], [1, "text-center", "display-10", "mb-3"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ProjectX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Please login with your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "JIRA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: [".login-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  display: flex;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  width: 400px;\n  display: block;\n  margin: 0 auto;\n}\n\n.login-toolbar[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLXRvb2xiYXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"]
});

/***/ }),

/***/ 4282:
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);









class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule], exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent] }); })();


/***/ }),

/***/ 6701:
/*!*********************************************************!*\
  !*** ./src/app/components/manager/manager.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerComponent": () => (/* binding */ ManagerComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _instance_instance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../instance/instance.component */ 1106);
/* harmony import */ var _new_server_new_server_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-server/new-server.component */ 654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_servers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servers.service */ 2760);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 7952);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/projectxApi */ 9139);
/* harmony import */ var src_app_services_array_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/array-utils.service */ 8316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);












const _c0 = function (a0) {
  return {
    "active": a0
  };
};

function ManagerComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_div_17_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const server_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r3.displayInstance(server_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const server_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, server_r2 === ctx_r0.selectedServer));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", server_r2.name, " - n\u00B0", server_r2.number, "");
  }
}

function ManagerComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_tr_42_Template_div_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const i_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r7.openUrl(i_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_tr_42_Template_td_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const i_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.editInstance(i_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\uD83D\uDD8D");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](index_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r5.project == null ? null : i_r5.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", i_r5.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", i_r5.erpProject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", i_r5.type, " ");
  }
}

class ManagerComponent {
  constructor(serversService, toastr, modalService, router, projectxApi, arrayUtils) {
    this.serversService = serversService;
    this.toastr = toastr;
    this.modalService = modalService;
    this.router = router;
    this.projectxApi = projectxApi;
    this.arrayUtils = arrayUtils;
    this.servers = [];
    this.instances = [];
  }

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.serversService.getServers().subscribe(servers => (_this.servers = _this.arrayUtils.sortAlpha(servers, 'number'), _this.displayInstance(_this.servers[0])));
    })();
  }

  createInstance() {
    const modalRef = this.modalService.open(_instance_instance_component__WEBPACK_IMPORTED_MODULE_1__.InstanceComponent, {
      size: 'xl',
      animation: true
    });
    modalRef.componentInstance.servers = this.servers;
    modalRef.dismissed.subscribe(() => {
      this.getServers();
    });
  }

  editInstance(instance) {
    const modalRef = this.modalService.open(_instance_instance_component__WEBPACK_IMPORTED_MODULE_1__.InstanceComponent, {
      size: 'xl',
      animation: true
    });
    modalRef.componentInstance.instance = instance;
    modalRef.componentInstance.mode = 'patch';
    modalRef.componentInstance.servers = this.servers;
    modalRef.dismissed.subscribe(reason => {
      if (reason === 'ok') {
        this.getServers();
      }
    });
  }

  createServer() {
    const modalRef = this.modalService.open(_new_server_new_server_component__WEBPACK_IMPORTED_MODULE_2__.NewServerComponent, {
      size: 'xl',
      animation: true
    });
    modalRef.dismissed.subscribe(reason => {
      if (reason === 'ok') {
        this.getServers();
      }
    });
  }

  refreshProjects() {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.projectxApi.getJiraProject();

        _this2.toastr.success('Refresh done');
      } catch (error) {
        _this2.toastr.error('Refresh error: ' + error);
      }
    })();
  }

  getServersInstance() {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let result = yield _this3.projectxApi.getProjectsInstances();
        navigator.clipboard.writeText(JSON.stringify(result)).then(() => {
          _this3.toastr.success('check you clipboard');
        }, () => {
          _this3.toastr.error('error');
        });
      } catch (error) {
        _this3.toastr.error('Refresh error: ' + error);
      }
    })();
  }

  displayInstance(server) {
    this.selectedServer = server;
    this.instances = server.instances;
  }

  openUrl(instance) {
    window.open(instance.url, '_blank');
  }

  back() {
    this.router.navigate(['home']);
  }

}

ManagerComponent.ɵfac = function ManagerComponent_Factory(t) {
  return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_servers_service__WEBPACK_IMPORTED_MODULE_3__.ServersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_4__.ProjectxApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_array_utils_service__WEBPACK_IMPORTED_MODULE_5__.ArrayUtilsService));
};

ManagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ManagerComponent,
  selectors: [["app-manager"]],
  decls: 57,
  vars: 2,
  consts: [[1, "text-center", "text-white", "mb-5", "mt-4"], [1, "col-lg-7", "mx-auto"], [1, "display-3"], [1, "fs-4", "text-white", 2, "cursor", "pointer", "position", "absolute", "top", "8%", "padding-left", "1em"], [3, "click"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "rounded-3", 2, "padding", "2em", "background-color", "#fbfbfb33", "height", "800px"], [1, "flex-sb"], [1, "text-light"], [1, "btn", "btn-primary", "btn-block", "mb-3", 3, "click"], [1, "list-group-flush", "bg-white", "border", 2, "overflow", "hidden", "overflow-y", "scroll", "height", "80%"], ["class", "list-group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "table", "table-striped"], ["scope", "col"], ["class", "table-info", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mt-2"], [1, "rounded-3", 2, "padding", "2em", "background-color", "#fbfbfb33", "height", "100px"], [1, "list-group-item", 3, "ngClass"], [1, "fs-5", 3, "click"], [1, "table-info"], ["scope", "row"], [1, "flex"], [1, "text-coral", "ms-1", 3, "click"], [1, "fas", "fa-external-link-alt"], [1, "bi", "bi-pen"]],
  template: function ManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_Template_a_click_5_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " \u25C0 Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Servers");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_Template_button_click_14_listener() {
        return ctx.createServer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "+ Create server");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManagerComponent_div_17_Template, 3, 5, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Instances");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_Template_button_click_23_listener() {
        return ctx.createInstance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "+ Create instance");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "App");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManagerComponent_tr_42_Template, 16, 5, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Projects from JIRA");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_Template_button_click_48_listener() {
        return ctx.refreshProjects();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Synchronize projects from JIRA");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Get instances (json) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerComponent_Template_button_click_55_listener() {
        return ctx.getServersInstance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Get instances update date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.servers);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.instances);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass],
  styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6Im1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcblxyXG59Il19 */"]
});

/***/ }),

/***/ 654:
/*!***************************************************************!*\
  !*** ./src/app/components/new-server/new-server.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewServerComponent": () => (/* binding */ NewServerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/projectxApi */ 9139);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);






class NewServerComponent {
    constructor(fb, projectxApi, activeModal) {
        this.fb = fb;
        this.projectxApi = projectxApi;
        this.activeModal = activeModal;
        this.serverForm = this.fb.group({
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            ip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            host: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            port: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    ngOnInit() {
    }
    createServer() {
        this.server = this.serverForm.value;
        this.projectxApi.postServer(this.server).subscribe({
            next: this.serverOK.bind(this),
            error: this.handleError.bind(this),
        });
    }
    serverOK(server) {
        this.activeModal.dismissAll("ok");
        // refresh server list
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
        };
    }
}
NewServerComponent.ɵfac = function NewServerComponent_Factory(t) { return new (t || NewServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_0__.ProjectxApi), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
NewServerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewServerComponent, selectors: [["app-new-server"]], decls: 31, vars: 2, consts: [[1, "container"], [1, "row", 2, "padding", "2em 2em 2em 2em"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "number", 1, "form-label"], ["id", "number", "type", "number", "formControlName", "number", 1, "form-control"], ["for", "ip", 1, "form-label"], ["id", "ip", "type", "text", "formControlName", "ip", 1, "form-control"], ["for", "port", 1, "form-label"], ["id", "port", "type", "number", "formControlName", "port", 1, "form-control"], ["for", "host", 1, "form-label"], ["id", "host", "type", "text", "formControlName", "host", 1, "form-control"], ["for", "User", 1, "form-label"], ["id", "user", "type", "text", "formControlName", "user", 1, "form-control"], ["for", "password", 1, "form-label"], ["id", "password", "type", "text", "formControlName", "password", 1, "form-control"], [1, "d-grid", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3", 3, "disabled"]], template: function NewServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewServerComponent_Template_form_ngSubmit_3_listener() { return ctx.createServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Port");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Create server");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.serverForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.serverForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctc2VydmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4233:
/*!*****************************************************************!*\
  !*** ./src/app/components/oauth/callback/callback.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackComponent": () => (/* binding */ CallbackComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/jiraApi */ 1911);
/* harmony import */ var src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authService.service */ 9828);





class CallbackComponent {
  constructor(route, jiraApi, auth, router) {
    this.route = route;
    this.jiraApi = jiraApi;
    this.auth = auth;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;

    this.route.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        _this.code = params['code'];
        let reqAccessToken = yield _this.jiraApi.postCodeToGetAccessToken(_this.code).catch(() => {
          // this.router.navigate(['login'], {});
          throw console.log("Access token error", reqAccessToken);
        });
        let user = {
          name: '',
          key: '',
          displayName: '',
          emailAddress: '',
          token: reqAccessToken.access_token
        };
        yield _this.auth.setUser(user); // 1. call getmyself to check if the user credentials are allowed in jira
        // 2. call getsprint to set secret  for projectX auth Api

        try {
          let u = yield _this.jiraApi.getMySelf();
          let user = {
            name: u.name,
            key: u.key,
            displayName: u.displayName,
            emailAddress: u.emailAddress,
            token: reqAccessToken.access_token
          }; // await?

          _this.auth.setUser(user);

          let issue = yield _this.jiraApi.getIssue("FLOR-7");
          yield _this.auth.setUserSecret(issue.fields.created);

          _this.router.navigate(['projects'], {});
        } catch (err) {
          //  this.router.navigate(['login'], {});
          console.log("ERROR");
        } //  console.log(reqAccessToken);

        /*   let reqCloudId = await this.jiraApi.getCloudId(reqAccessToken.access_token);
          console.log(reqCloudId) */

        /*   let u = await this.jiraApi.getMySelf(reqAccessToken.access_token)
          console.log(u) */

      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

}

CallbackComponent.ɵfac = function CallbackComponent_Factory(t) {
  return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_1__.JiraApi), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

CallbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CallbackComponent,
  selectors: [["app-callback"]],
  decls: 2,
  vars: 0,
  template: function CallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "callback works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsYmFjay5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 9928:
/*!***********************************************************************************!*\
  !*** ./src/app/components/projects-list/instance-item/instance-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstanceItemComponent": () => (/* binding */ InstanceItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../update/update.component */ 4178);
/* harmony import */ var _instance_instance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../instance/instance.component */ 1106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);






function InstanceItemComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u23F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class InstanceItemComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.refreshProjects = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.refreshCalendar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    openInstance(instance) {
        window.open(instance.url, '_blank');
    }
    getLastUpdate() {
        var _a;
        // appel 150'00 fois le console log voir pk
        let date = (_a = this.instance.lastUpdate[0]) === null || _a === void 0 ? void 0 : _a.dueDate;
        console.log(date);
        if (date) {
            return date;
            // return format(this.instance.lastUpdate[0]?.dueDate, 'dd MMM yyyy', { locale: fr })
        }
        return "";
    }
    openMAJModal(project, instance) {
        const modalRef = this.modalService.open(_update_update_component__WEBPACK_IMPORTED_MODULE_0__.UpdateComponent, {
            size: 'xl',
            animation: true,
        });
        modalRef.componentInstance.instance = instance;
        modalRef.componentInstance.project = project;
        modalRef.dismissed.subscribe(() => {
            this.refreshCalendar.emit();
        });
    }
    editEmails(instance) {
        const modalRef = this.modalService.open(_instance_instance_component__WEBPACK_IMPORTED_MODULE_1__.InstanceComponent, {
            size: 'xl',
            animation: true,
        });
        modalRef.componentInstance.instance = instance;
        modalRef.componentInstance.mode = 'patch-mail';
        modalRef.dismissed.subscribe((reason) => {
            if (reason === 'ok') {
                this.refreshProjects.emit();
            }
        });
    }
}
InstanceItemComponent.ɵfac = function InstanceItemComponent_Factory(t) { return new (t || InstanceItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
InstanceItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InstanceItemComponent, selectors: [["app-instance-item"]], inputs: { instance: "instance", project: "project" }, outputs: { refreshProjects: "refreshProjects", refreshCalendar: "refreshCalendar" }, decls: 14, vars: 3, consts: [[1, "row"], [1, "col-6", 3, "click"], [1, "col-3", "text-coral"], [1, "fs-5", 3, "click"], [3, "click"], [1, "fas", "fa-external-link-alt"], [1, "col-3", "text-end"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "text-white", 2, "background-color", "#2e4fbb", "margin-bottom", "1px", 3, "click"]], template: function InstanceItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InstanceItemComponent_Template_div_click_1_listener() { return ctx.openInstance(ctx.instance); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InstanceItemComponent_Template_span_click_4_listener() { return ctx.editEmails(ctx.instance); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\uD83D\uDCE7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InstanceItemComponent_Template_span_click_6_listener() { return ctx.openInstance(ctx.instance); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, InstanceItemComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InstanceItemComponent_Template_button_click_11_listener() { return ctx.openMAJModal(ctx.project, ctx.instance); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "M.A.J");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.instance.target, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" s", ctx.instance.server.number, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.instance.server.config == null ? null : ctx.instance.server.config.updateAfter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1310:
/*!*********************************************************************!*\
  !*** ./src/app/components/projects-list/projects-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsListComponent": () => (/* binding */ ProjectsListComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar/calendar.component */ 2081);
/* harmony import */ var _assets_sampleData_projectsSample_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/sampleData/projectsSample.json */ 8914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/projects.service */ 1065);
/* harmony import */ var src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authService.service */ 9828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_array_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/array-utils.service */ 8316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9691);
/* harmony import */ var _directives_custom_virtual_scroll_strategy_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/custom-virtual-scroll-strategy.directive */ 3840);
/* harmony import */ var _instance_item_instance_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instance-item/instance-item.component */ 9928);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/filter.pipe */ 1243);

















function ProjectsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Welcome ", ctx_r0.user.displayName, "");
  }
}

function ProjectsListComponent_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-instance-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("refreshProjects", function ProjectsListComponent_div_20_div_5_Template_app_instance_item_refreshProjects_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r5.getProjects();
    })("refreshCalendar", function ProjectsListComponent_div_20_div_5_Template_app_instance_item_refreshCalendar_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r7.childCalendarComp.getUpdates();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const instance_r4 = ctx.$implicit;
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("instance", instance_r4)("project", project_r2);
  }
}

function ProjectsListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProjectsListComponent_div_20_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const project_r2 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r9.openProject(project_r2.key);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProjectsListComponent_div_20_div_5_Template, 2, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "instancesFilterPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", project_r2.name, " - ", project_r2.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](project_r2.instances.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 4, project_r2.instances, ctx_r1.searchText));
  }
}

class ProjectsListComponent {
  constructor(projectsService, auth, router, arrayUtils) {
    this.projectsService = projectsService;
    this.auth = auth;
    this.router = router;
    this.arrayUtils = arrayUtils;
    this.projects = [];
    this.itemHeights = [];
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.demo) {
      this.projects = _assets_sampleData_projectsSample_json__WEBPACK_IMPORTED_MODULE_3__;
      this.computeHeights(), this.computeInstance();
    } else {
      this.auth.getSotrageUser().then(user => {
        this.user = user;
      });
      this.getProjects();
    }
  }

  refreshData() {
    this.getProjects();
    this.childCalendarComp.getUpdates();
  }

  openProject(projectKey) {
    let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.jiraUrl + 'projects/' + projectKey;
    window.open(url, '_blank');
  }

  getProjects() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.projectsService.getProjects(true).subscribe(projects => (_this.projects = _this.arrayUtils.sortAlpha(projects, "name"), _this.computeHeights(), _this.computeInstance()));
    })();
  }

  computeHeights() {
    let base = 55;
    this.itemHeights = this.projects.map(p => {
      p.instances.length;
      return base + p.instances.length * 32;
    });
  }

  back() {
    this.router.navigate(["home"]);
  }

  computeInstance() {
    this.instanceCounter = 0;

    for (let p of this.projects) {
      this.instanceCounter += p.instances.length;
    }
  }

}

ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) {
  return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_4__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_array_utils_service__WEBPACK_IMPORTED_MODULE_6__.ArrayUtilsService));
};

ProjectsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ProjectsListComponent,
  selectors: [["app-projects-list"]],
  viewQuery: function ProjectsListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.childCalendarComp = _t.first);
    }
  },
  decls: 26,
  vars: 8,
  consts: [["class", "p-3 text-light", "style", "text-align: right;", 4, "ngIf"], [1, "text-center", "text-white", "mb-5", "mt-4"], [1, "col-lg-7", "mx-auto"], [1, "display-3"], [1, "fs-4", "text-white", 2, "cursor", "pointer", "position", "absolute", "top", "8%", "padding-left", "1em"], [3, "click"], [1, "container"], [2, "text-align", "right"], [1, "btn", "btn-primary", "fs-5", "mb-2", 3, "click"], [1, "row"], [1, "col-xl"], [1, "rounded-3", 2, "padding", "2em", "background-color", "#fbfbfb33", "height", "800px"], [1, "text-white", "ml-1"], ["type", "search", "placeholder", "Search ERP instance", "aria-label", "Search", 1, "form-control", "fs-4", "mb-1", 3, "ngModel", "ngModelChange"], ["customVirtualScrollStrategy", "", 1, "list-group-flush", "bg-white", "border", 2, "padding", "1em", "overflow", "hidden", "overflow-y", "scroll", "height", "90%", 3, "itemHeights"], [2, "padding", "1em"], ["class", "list-group-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "h-100"], [1, "p-3", "text-light", 2, "text-align", "right"], [1, "list-group-item"], [1, "fs-4", 2, "cursor", "pointer", 3, "click"], ["class", "container", "style", "cursor:pointer;margin-left: 10px;", 4, "ngFor", "ngForOf"], [1, "container", 2, "cursor", "pointer", "margin-left", "10px"], [3, "instance", "project", "refreshProjects", "refreshCalendar"]],
  template: function ProjectsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProjectsListComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "ProjectX");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProjectsListComponent_Template_a_click_6_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " \u25C0 Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProjectsListComponent_Template_button_click_10_listener() {
        return ctx.refreshData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Refresh \uD83D\uDD04");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ProjectsListComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "cdk-virtual-scroll-viewport", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProjectsListComponent_div_20_Template, 7, 7, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "projectsFilterPipe");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "calendar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.instanceCounter, " ERP");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("itemHeights", ctx.itemHeights);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](21, 5, ctx.projects, ctx.searchText));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport, _directives_custom_virtual_scroll_strategy_directive__WEBPACK_IMPORTED_MODULE_7__.CustomVirtualScrollDirective, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualForOf, _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _instance_item_instance_item_component__WEBPACK_IMPORTED_MODULE_8__.InstanceItemComponent],
  pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.ProjectsFilterPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.InstancesFilterPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3584:
/*!*******************************************************************!*\
  !*** ./src/app/components/sprint-board/sprint-board.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SprintBoardComponent": () => (/* binding */ SprintBoardComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 8178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/jiraApi */ 1911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/date.service */ 3516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);










function SprintBoardComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", s_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](s_r9.name);
  }
}

function SprintBoardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " ~3min... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function SprintBoardComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r10.sp.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r10.tdevtot.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", r_r10.issueList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function SprintBoardComponent_textarea_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SprintBoardComponent_textarea_41_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.jqlSPbyProjectAC = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.useOwnJql)("ngModel", ctx_r3.jqlSPbyProjectAC);
  }
}

function SprintBoardComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SprintBoardComponent_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.onSprintChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function SprintBoardComponent_tr_57_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SprintBoardComponent_tr_57_span_8_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r20.openIssue(i_r19.key);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r19.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" (", i_r19.fields.customfield_10031, "sp),\u00A0 ");
  }
}

function SprintBoardComponent_tr_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(#", r_r15.issues.length, ")");
  }
}

function SprintBoardComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SprintBoardComponent_tr_57_span_8_Template, 4, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SprintBoardComponent_tr_57_span_9_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](index_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r15.sp == null ? null : r_r15.sp.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", r_r15.issues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", r_r15.issues.length > 0);
  }
}

function SprintBoardComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r23 = ctx.$implicit;
    const index_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](index_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r23.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r23.sp.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r23.devTot.toFixed(1));
  }
}

function SprintBoardComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r25 = ctx.$implicit;
    const index_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](index_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r25.sp.toFixed(1));
  }
}

function SprintBoardComponent_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r27 = ctx.$implicit;
    const index_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](index_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r27.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r27.total);
  }
}

class SprintBoardComponent {
  constructor(jiraApi, router, dateService) {
    this.jiraApi = jiraApi;
    this.router = router;
    this.dateService = dateService;
    this.spReporter = [];
    this.spPerAC = [];
    this.spProject = [];
    this.majProject = [];
    this.issuesType = [];
    this.sprints = [];
    this.useOwnJql = false;
  }

  ngOnInit() {
    this.init();
  }

  init() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.jiraApi.getSprints();

      if (data.values) {
        _this.sprints = data.values;
      }

      let index = _this.dateService.getActiveSprint(_this.sprints);

      _this.dateService.sortByDate(_this.sprints, 'startDate');

      _this.sprintSelected = _this.sprints[index];
      _this.tabs = [{
        name: 'SPbyProjectAC',
        jql: `AND project in (ACFIN, ACGEN, ACCOM, ACPROD, ACPRO, ACIT, ACSAL, ACTIM, AC, AUB, AUUI, "AC Gestion Projet") AND issuetype in (Amélioration, Bug, Estimation, "Incident ERP", "Incident IT", "Nouvelle fonction", "Nouvelle installation", Story, "Récit/Séance", Support,  Tâche, "Tâche IT", "Tâche client", Épopée) AND component not in (ScrumMaster, "Réserve globale du Sprint", Mentoring, "Séances d'estimation", "Séance Interne")`
      }];

      _this.onSprintChange();
    })();
  }

  onSprintChange() {
    this.spPerReporter(this.sprintSelected);
    this.spPerProject(this.sprintSelected);
    this.majPerProject(this.sprintSelected);
    this.issuePerType(this.sprintSelected);
    this.spPerAmeliorationContinue(this.sprintSelected);
  }

  spPerReporter(sprint) {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jql = `sprint=${sprint.id} AND component not in ("Réserve globale du Sprint") AND status != Clôturé AND status != Annulé AND issuetype not in ("Mise à jour App PROD", "Mise à jour DEMO")`;
      let issues = yield _this2.jiraApi.searchJQL(jql);
      let spPerReporter = [];

      for (let i of issues) {
        let obj = spPerReporter.find(e => e.name == i.fields.reporter.name);

        if (!obj) {
          spPerReporter.push({
            name: i.fields.reporter.name,
            sp: i.fields.customfield_10031
          });
        } else {
          obj.sp += i.fields.customfield_10031;
        }
      }

      _this2.spReporter = spPerReporter.sort((a, b) => b.sp - a.sp);
      _this2.spReporter = _this2.spReporter.filter(r => {
        return r.sp != null;
      });
    })();
  }

  spPerProject(sprint) {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jql = `sprint=${sprint.id} AND  status != Annulé`;
      let issues = yield _this3.jiraApi.searchJQL(jql);
      let spPerProject = [];
      console.log(issues);

      for (let i of issues) {
        let obj = spPerProject.find(e => e.name == i.fields.project.name);
        let tdevtot = i.fields.customfield_10084 + i.fields.customfield_10087 + i.fields.customfield_10091;

        if (!obj) {
          spPerProject.push({
            name: i.fields.project.name,
            sp: i.fields.customfield_10031,
            tdev: i.fields.customfield_10084,
            ttest: i.fields.customfield_10087,
            treview: i.fields.customfield_10091,
            tdevtot: tdevtot,
            issues: [{
              key: i.key,
              sp: i.fields.customfield_10031
            }],
            issueList: ''
          });
        } else {
          obj.sp += i.fields.customfield_10031;
          obj.tdevtot += tdevtot;
          obj.issues.push({
            key: i.key,
            sp: i.fields.customfield_10031
          });
        }
      }

      spPerProject = spPerProject.filter(e => {
        let keep = e.sp > 0;
        e.sp = Math.round(e.sp * 100) / 100;
        return keep;
      }).sort((a, b) => b.sp - a.sp);

      for (let e of spPerProject) {
        let str = '';

        for (let i of e.issues.sort((a, b) => b.sp - a.sp)) {
          str += `<a target="_blank" href="${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.jiraUrl}browse/${i.key}">${i.key}</a>  (${i.sp ? i.sp : 0}sp),   `;
        }

        str += `<span class="fw-bold">(#${e.issues.length})<span>`;
        e.issueList = str;
      }

      let total = spPerProject.reduce((agg, e) => {
        return agg + e.sp;
      }, 0);
      let totaldev = spPerProject.reduce((agg, e) => {
        return agg + e.tdevtot;
      }, 0);
      spPerProject.unshift({
        name: 'Total',
        sp: total,
        tdev: 0,
        ttest: 0,
        treview: 0,
        tdevtot: totaldev,
        issues: [],
        issueList: ''
      });
      _this3.spProject = spPerProject;
    })();
  }

  majPerProject(sprint) {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      let jql = `issuetype in ("Mise à jour App PROD", "Mise à jour DEMO") AND due > "${(_a = sprint.startDate) === null || _a === void 0 ? void 0 : _a.substring(0, sprint.startDate.indexOf('T'))}" AND due < "${(_b = sprint.endDate) === null || _b === void 0 ? void 0 : _b.substring(0, sprint.endDate.indexOf('T'))}"`;
      let issues = yield _this4.jiraApi.searchJQL(jql);
      let majPerProject = [];

      for (let i of issues) {
        let obj = majPerProject.find(e => e.project == i.fields.project.name);

        if (!obj) {
          majPerProject.push({
            project: i.fields.project.name,
            total: 1
          });
        } else {
          obj.total++;
        }
      }

      _this4.majProject = majPerProject.sort((a, b) => b.total - a.total);

      if (_this4.majProject.length > 0) {
        let sum = _this4.majProject.reduce((a, b) => ({
          project: '',
          total: a.total + b.total
        }));

        _this4.majProject.unshift({
          project: 'Total (' + (sum.total / 8).toFixed(1) + ' / jour)',
          total: sum.total
        });
      }
    })();
  }

  issuePerType(sprint) {
    var _this5 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // let jql = `sprint=${sprint.id} AND summary !~ "Déductions*" AND status != Clôturé AND status != Annulé AND issuetype not in ("Mise à jour App PROD", "Mise à jour DEMO")`
      let jql = `sprint=${sprint.id} AND  status != Annulé `; // 8 and &maxResults=1500
      //`sprint=${params.sprintId} AND ${params.more}`

      let issues = yield _this5.jiraApi.searchJQL(jql);
      let issuePerType = [];

      for (let i of issues) {
        let obj = issuePerType.find(e => e.type == i.fields.issuetype.name); // "tdev": i.fields.customfield_10084, "ttest": i.fields.customfield_10087, "treview": i.fields.customfield_10091

        if (!obj) {
          issuePerType.push({
            type: i.fields.issuetype.name,
            sp: i.fields.customfield_10031,
            devTot: i.fields.customfield_10084 + i.fields.customfield_10087 + i.fields.customfield_10091
          });
        } else {
          obj.devTot += i.fields.customfield_10084 + i.fields.customfield_10087 + i.fields.customfield_10091;
          obj.sp += i.fields.customfield_10031;
        }
      }

      _this5.issuesType = issuePerType.sort((a, b) => b.devTot - a.devTot);

      let sum = _this5.issuesType.reduce((a, b) => ({
        type: '',
        sp: a.sp + b.sp,
        devTot: a.devTot + b.devTot
      }));

      _this5.issuesType.unshift({
        type: 'Total',
        sp: sum.sp,
        devTot: sum.devTot
      });

      _this5.issuesType = _this5.issuesType.filter(r => {
        return r.sp != null;
      });
    })();
  } // AC = amélioration continue


  spPerAmeliorationContinue(sprint) {
    var _this6 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      let tab = _this6.tabs.find(e => {
        return e.name === 'SPbyProjectAC';
      });

      let jql;

      if (_this6.useOwnJql) {
        jql = `${_this6.jqlSPbyProjectAC}`;
      } else {
        _this6.jqlSPbyProjectAC = `sprint=${(_a = _this6.sprintSelected) === null || _a === void 0 ? void 0 : _a.id} ${tab.jql}`;
        jql = _this6.jqlSPbyProjectAC;
      }

      let issues = yield _this6.jiraApi.searchJQL(jql);
      let spPerAC = [];

      for (let i of issues) {
        let obj = spPerAC.find(e => e.name == i.fields.project.name);

        if (!obj) {
          spPerAC.push({
            name: i.fields.project.name,
            sp: i.fields.customfield_10031,
            issues: [i]
          });
        } else {
          obj.sp += i.fields.customfield_10031;
          obj.issues.push(i);
        }
      }

      for (let i of spPerAC) {
        i.issues.sort((a, b) => b.fields.customfield_10031 - a.fields.customfield_10031);
      }

      _this6.spPerAC = spPerAC;
      let sum;

      if (_this6.spPerAC.length >= 1) {
        sum = _this6.spPerAC.reduce((a, b) => ({
          name: '',
          sp: a.sp + b.sp,
          issues: []
        }));
      }

      _this6.spPerAC.unshift({
        name: 'Total',
        sp: sum === null || sum === void 0 ? void 0 : sum.sp,
        issues: []
      });
    })();
  }

  componentsByProject() {
    var _this7 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (confirm('Voulez-vous vraiment lancer la téléchargement, cela peut prendre environ 3min ?')) {
        _this7.loadProjects = true;
        let projects = yield _this7.jiraApi.getProjects();
        let torage = projects;
        let promise = Promise.resolve('start');
        let queue = [];
        let result = [];
        let m = {};
        let m2 = {};
        let i = 0;

        while (torage.length) {
          if (queue.length > 50) {
            let q = queue;
            promise = promise.then(() => {
              return Promise.all(q);
            });
            queue = [];
          }

          yield promise;
          let f = torage.shift();

          if (f.key) {
            queue.push(_this7.jiraApi.getProject(f.id).then(project => {
              project.components.forEach(c => {
                m[c.id] = project.id;
                m2[project.id] = {
                  project: project.name,
                  log: []
                };
                torage.push(c);
              });
              return 'P' + project.id;
            }));
          } else {
            queue.push(_this7.jiraApi.getComponent(f.id).then(composant => {
              var _a;

              let pId = m[composant.id];
              let r = m2[pId];
              let s = ' asd 123 ';
              s.trim();
              result.push(`${(_a = r.project) === null || _a === void 0 ? void 0 : _a.trim()};${composant === null || composant === void 0 ? void 0 : composant.name.trim()};${composant.archived}`);
              return 'C' + composant.id;
            }).catch(e => {
              let pId = m[f.id];
              let r = m2[pId];
              r.log.push('error ' + f.id);
            }));
          }
        }

        result.unshift('Projet;Composant;Archive');
        let csvArray = result.join('\r\n');
        var blob = new Blob([csvArray], {
          type: 'text/csv'
        });
        _this7.loadProjects = false;
        (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, 'Projets-Composants.csv');
      }
    })();
  }

  back() {
    this.router.navigate(['home']);
  }

  openIssue(key) {
    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.jiraUrl + 'browse/' + key, '_blank');
  }

}

SprintBoardComponent.ɵfac = function SprintBoardComponent_Factory(t) {
  return new (t || SprintBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_3__.JiraApi), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService));
};

SprintBoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SprintBoardComponent,
  selectors: [["app-sprint-board"]],
  decls: 107,
  vars: 11,
  consts: [[1, "text-center", "text-white", "mb-5", "mt-4"], [1, "col-lg-7", "mx-auto"], [1, "display-3"], [1, "fs-4", "text-white", 2, "cursor", "pointer", "position", "absolute", "top", "8%", "padding-left", "1em"], [3, "click"], [1, "container"], [1, "sprint"], [1, "form-label", "text-white"], ["size", "3", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mt-2"], [4, "ngIf"], [1, "row"], [1, "col-lg-6"], [1, "rounded-3", 2, "padding", "2em", "background-color", "#fbfbfb33", "height", "600px"], [1, "tableFixHead", "list-group-flush", "bg-white", "border", 2, "height", "100%"], [1, "table", "table-striped", "caption-top"], ["scope", "col"], ["scope", "col", 2, "text-align", "center"], ["class", "table-info", 4, "ngFor", "ngForOf"], [1, "text-end"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "text-start"], ["name", "", "id", "", "cols", "80", "rows", "1", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "flex-sa", "mb-2", 2, "padding", "2em", "background-color", "#fbfbfb33", "height", "600px"], [1, "tableFixHead", "list-group-flush", "bg-white", "border", 2, "height", "100%", "width", "45%"], [3, "ngValue"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-white"], [1, "table-info"], [3, "innerHTML"], ["name", "", "id", "", "cols", "80", "rows", "1", 3, "disabled", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], ["scope", "row"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "fw-bold", 4, "ngIf"], ["href", "#", "onclick", "return false;"], [1, "fw-bold"]],
  template: function SprintBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Sprint Board");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SprintBoardComponent_Template_a_click_5_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " \u25C0 Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Sprints");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SprintBoardComponent_Template_select_change_11_listener() {
        return ctx.onSprintChange();
      })("ngModelChange", function SprintBoardComponent_Template_select_ngModelChange_11_listener($event) {
        return ctx.sprintSelected = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SprintBoardComponent_option_12_Template, 2, 2, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SprintBoardComponent_div_14_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "caption");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Story points par projet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "SP");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Heures");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, SprintBoardComponent_tr_33_Template, 9, 4, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SprintBoardComponent_Template_input_change_38_listener() {
        return ctx.onSprintChange();
      })("ngModelChange", function SprintBoardComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.useOwnJql = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Custom filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, SprintBoardComponent_textarea_41_Template, 1, 2, "textarea", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, SprintBoardComponent_button_42_Template, 2, 0, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "caption");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Story Points par project AC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Story Point");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, SprintBoardComponent_tr_57_Template, 10, 5, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "caption");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Tickets par type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "SP");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Heures");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, SprintBoardComponent_tr_76_Template, 9, 4, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "caption");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Story points par reporter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Reporter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Story Point");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, SprintBoardComponent_tr_92_Template, 7, 3, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "caption");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "M.A.J par projet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, SprintBoardComponent_tr_106_Template, 7, 3, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.sprintSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sprints);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadProjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.spProject);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.useOwnJql);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.useOwnJql);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.useOwnJql);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.spPerAC);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.issuesType);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.spReporter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.majProject);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor],
  styles: [".sprint[_ngcontent-%COMP%] {\n  position: relative;\n  right: -76%;\n  top: -25px;\n  width: 292px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmludC1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0YsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0EiLCJmaWxlIjoic3ByaW50LWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwcmludHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbnJpZ2h0OiAtNzYlO1xyXG50b3A6IC0yNXB4O1xyXG53aWR0aDogMjkycHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 4178:
/*!*******************************************************!*\
  !*** ./src/app/components/update/update.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateComponent": () => (/* binding */ UpdateComponent)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 7366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 9735);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 5012);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 9717);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 8069);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 5178);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale */ 5413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 7952);
/* harmony import */ var src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/jiraApi */ 1911);
/* harmony import */ var src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/projectxApi */ 9139);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authService.service */ 9828);
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/date.service */ 3516);















function UpdateComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Jira key");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateComponent_div_4_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r11.openIssue(ctx_r11.update.keyJira);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.update.keyJira);
  }
}

function UpdateComponent_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \uD83D\uDEA8 MISE A JOUR TARDIVE (MERCREDI)\uD83D\uDEA8");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UpdateComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
  }
}

function UpdateComponent_div_27_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", c_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r14.name);
  }
}

function UpdateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Composants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UpdateComponent_div_27_option_4_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.composants);
  }
}

function UpdateComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r4.nextsUpdates == null ? null : ctx_r4.nextsUpdates.lastUpdatesInstance[0] == null ? null : ctx_r4.nextsUpdates.lastUpdatesInstance[0].dueDate), "");
  }
}

function UpdateComponent_li_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UpdateComponent_div_42_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const update_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, update_r16.dueDate));
  }
}

function UpdateComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UpdateComponent_div_42_li_1_Template, 3, 3, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.nextsUpdates == null ? null : ctx_r6.nextsUpdates.updatesInstance);
  }
}

function UpdateComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function UpdateComponent_li_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const update_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, update_r17.dueDate));
  }
}

function UpdateComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sauver");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r9.sprint || !ctx_r9.updateCreateForm.valid && ctx_r9.mode === "create");
  }
}

function UpdateComponent_button_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Annuler la m.a.j");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "text-danger": a0
  };
};

class UpdateComponent {
  constructor(fb, toastr, jiraApi, projectxApi, activeModal, auth, dateService) {
    this.fb = fb;
    this.toastr = toastr;
    this.jiraApi = jiraApi;
    this.projectxApi = projectxApi;
    this.activeModal = activeModal;
    this.auth = auth;
    this.dateService = dateService;
    this.mode = 'create'; // Mode create:

    this.project = {
      instances: [],
      jiraId: '',
      key: '',
      name: '',
      _id: ''
    };
    this.nextsUpdates = {
      lastUpdatesInstance: [],
      updatesInstance: [],
      updatesServer: []
    };
    this.sprint = {
      id: 0,
      state: '',
      name: ''
    };
    this.sprints = [];
    this.composants = [];
    this.updateCreateForm = this.fb.group({
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      instance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      composant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }

  ngOnInit() {
    var _a, _b;

    this.toastr.toastrConfig.disableTimeOut = true;
    this.dateSelected = ((_a = this.update) === null || _a === void 0 ? void 0 : _a.dueDate) ? new Date((_b = this.update) === null || _b === void 0 ? void 0 : _b.dueDate) : new Date();
    console.log(this.mode);
    this.init();
  }

  init() {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.demo) {
        _this.sprint = {
          id: 0,
          state: '',
          name: "Sprint F - February"
        };
      } else {
        yield _this.projectxApi.getNextsUpdates(_this.instance.id).subscribe(data => {
          console.log(data);

          _this.dateService.sortByDate(data.updatesInstance, 'dueDate');

          _this.dateService.sortByDate(data.updatesServer, 'dueDate');

          _this.dateService.sortByDate(data.lastUpdatesInstance, 'dueDate');

          _this.nextsUpdates.updatesInstance = data.updatesInstance;
          _this.nextsUpdates.updatesServer = data.updatesServer;
          _this.nextsUpdates.lastUpdatesInstance = data.lastUpdatesInstance.reverse();
        });
      }

      _this.updateCreateForm.controls['date'].setValue((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(_this.dateSelected), 'dd MMM yyyy', {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["default"]
      }));

      _this.updateCreateForm.controls['instance'].setValue((_a = _this.instance) === null || _a === void 0 ? void 0 : _a.target);

      _this.updateCreateForm.controls['project'].setValue(_this.project.name);

      let project;
      let sprints;

      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.demo) {
        if (_this.project.jiraId) {
          project = yield _this.jiraApi.getProject(_this.project.key);
        }

        sprints = yield _this.jiraApi.getSprints();
      }

      if (((_b = project === null || project === void 0 ? void 0 : project.components) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        _this.composants = project.components.map(function (item) {
          return {
            name: item['name'],
            id: item['id']
          };
        });
      } else {
        _this.composants.push({
          name: 'Pas de composant',
          id: 0
        });
      }

      if (sprints === null || sprints === void 0 ? void 0 : sprints.values) {
        _this.sprints = sprints.values;
        _this.sprint = _this.getSprint(_this.sprints);
      }
    })();
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (_this2.mode) {
        case 'create':
          yield _this2.createUpdate();
          break;

        case 'patch':
          yield _this2.patchUpdate();
          break;

        case 'delete':
          yield _this2.deleteUpdate();
          break;

        default:
          break;
      }
    })();
  }

  getSprint(sprints) {
    let sprintSelected;

    for (let sprint of sprints) {
      // TO DO UTILISER .aftter and .before plutot que compareAsc
      //  return 1 if the first date is after the second, -1 if the first date is before
      let dateSel = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.dateSelected);
      let spStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(sprint.startDate || ''));
      let spEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(sprint.endDate || ''));

      if (((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(dateSel, spStart) || (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(dateSel, spStart)) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(dateSel, spEnd) || (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(dateSel, spEnd)) && sprint.name.includes('Robusta')) {
        return sprintSelected = sprint;
      }
    }

    return sprintSelected;
  } // Fonction sur le composant enfant "<calendar-component>"" qui récupère la valeur emise par ce child composant.


  dayClickedEventHander(date) {
    this.dateSelected = date;

    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.demo) {
      this.sprint = this.getSprint(this.sprints);
    }

    this.updateCreateForm.controls['date'].setValue((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, 'dd MMM yyyy', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["default"]
    }));
  }

  createUpdate() {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d, _e, _f;

      let issueFields = {
        project: {
          key: (_a = _this3.project) === null || _a === void 0 ? void 0 : _a.key
        },
        summary: `M.A.J - ${(_b = _this3.instance) === null || _b === void 0 ? void 0 : _b.target} - s${(_c = _this3.instance) === null || _c === void 0 ? void 0 : _c.server.number} - ${_this3.updateCreateForm.value.date}`,
        description: `Mise à jour générée par ProjectX - URL :${_this3.instance.url}`,
        components: [{
          id: ((_e = (_d = _this3.updateCreateForm.value) === null || _d === void 0 ? void 0 : _d.composant) === null || _e === void 0 ? void 0 : _e.toString()) === 0 ? null : _this3.updateCreateForm.value.composant.toString()
        }],
        customfield_10020: _this3.sprint.id,
        duedate: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(_this3.dateSelected),
        issuetype: {
          name: ((_f = _this3.instance) === null || _f === void 0 ? void 0 : _f.type) === 'PROD' ? 'Mise à jour App PROD' : 'Mise à jour DEMO'
        },
        assignee: null
      };
      let preIssue = {
        fields: issueFields
      };
      let issue = yield _this3.jiraApi.postIssue(preIssue).catch(() => {
        throw _this3.handleError('Jira Failure ', "Vérifiez l'état de votre ticket JIRA");
      });

      _this3.openIssue(issue.key);

      let preUpdate = {
        dueDate: _this3.dateSelected,
        url: _this3.instance.url,
        instance: _this3.instance,
        keyJira: issue.key
      };
      yield _this3.projectxApi.postUpdate(preUpdate).catch(() => {
        throw _this3.handleError('Post projectX Update' + _this3.update.keyJira);
      }); // refresh le calendar

      _this3.activeModal.dismissAll();
    })();
  }

  patchUpdate() {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      yield _this4.projectxApi.patchUpdate(_this4.update, {
        dueDate: _this4.dateSelected
      }).catch(() => {
        throw _this4.handleError('ProjectX : Update failed' + _this4.update.keyJira);
      });
      yield yield _this4.jiraApi.putIssue(_this4.update.keyJira, {
        fields: {
          summary: `M.A.J - ${(_a = _this4.instance) === null || _a === void 0 ? void 0 : _a.target} - s${(_b = _this4.instance) === null || _b === void 0 ? void 0 : _b.server.number} - ${_this4.updateCreateForm.value.date}`,
          duedate: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(_this4.dateSelected),
          customfield_10020: _this4.sprint.id
        }
      }).catch(() => {
        throw _this4.handleError('Erreur ', "Vérifiez l'état de votre ticket JIRA et contactez l'administateur" + _this4.update.keyJira);
      });

      _this4.activeModal.dismissAll();
    })();
  }

  deleteUpdate() {
    var _this5 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.projectxApi.deleteUpdate(_this5.update).catch(() => {
        throw _this5.handleError('ProjectX : Update failed ' + _this5.update.keyJira);
      });
      yield yield _this5.jiraApi.putIssue(_this5.update.keyJira, {
        fields: {
          duedate: null,
          summary: 'M.A.J annulée'
        }
      }).catch(() => {
        throw _this5.handleError('Jira Failure ', "Vérifiez l'état de votre ticket JIRA:" + _this5.update.keyJira);
      });

      _this5.toastr.warning("Vérifiez l'état de votre ticket JIRA: " + _this5.update.keyJira, null, {
        timeOut: 8000
      }); // let transistion = await this.jiraApi.getIssueTransition(this.update.keyJira).catch(() => {
      //   throw this.handleError("ProjectX : Update failed")
      // });
      // transistion.transitions.find(e => e.name.includes)
      // '291' : '241' Annulé Probablement résolu
      // await await this.jiraApi.postIssueTransition(this.update.keyJira, transitionId).catch(() => {
      //   throw this.handleError("JIra: Update issue failed");
      // });;


      _this5.activeModal.dismissAll();
    })();
  }

  openIssue(key) {
    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.jiraUrl + 'browse/' + key, '_blank');
  }

  handleError(message, title = 'Failure', result) {
    this.toastr.error(title, message);
    this.activeModal.dismissAll();
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption

      console.log(`${message} failed: ${error.message}`); // Let the app keep running by returning an empty result.

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(result);
    };
  }

}

UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
  return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_jiraApi__WEBPACK_IMPORTED_MODULE_2__.JiraApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_projectxApi__WEBPACK_IMPORTED_MODULE_3__.ProjectxApi), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_authService_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService));
};

UpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UpdateComponent,
  selectors: [["updateModal"]],
  inputs: {
    mode: "mode",
    project: "project",
    instance: "instance"
  },
  decls: 56,
  vars: 26,
  consts: [[1, "container"], [1, "row", 2, "padding", "2em 2em 2em 2em"], [1, "col-6"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "mb-3", 4, "ngIf"], [1, "flex-center"], ["for", "date", "class", "form-label blink_text text-danger", 4, "ngIf"], [1, "mb-3"], ["for", "date", 1, "form-label"], ["id", "date", "type", "text", "formControlName", "date", 1, "form-control", "fw-bold", "fs-5"], [1, "form-control", 3, "ngClass"], ["for", "instance", 1, "form-label"], ["id", "instance", "type", "text", "formControlName", "instance", 1, "form-control"], ["for", "project", 1, "form-label"], [1, "form-control"], ["target", "_blank", 3, "href"], ["class", "form-group", "class", "mb-3", 4, "ngIf"], [2, "color", "crimson"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-grid", "gap-2"], ["type", "submit", "class", "btn btn-primary btn-block mb-3", 3, "disabled", 4, "ngIf"], ["type", "submit", "class", "btn btn-danger btn-block mb-3", 4, "ngIf"], [3, "eventEditable", "isModal", "dayClickedEvent"], ["for", "key", 1, "form-label"], ["target", "_blank", 3, "click"], ["for", "date", 1, "form-label", "blink_text", "text-danger"], ["id", "project", "type", "text", "formControlName", "project", 1, "form-control"], ["for", "composants"], ["multiple", "", "formControlName", "composant", "id", "composants", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-3", 3, "disabled"], ["type", "submit", 1, "btn", "btn-danger", "btn-block", "mb-3"]],
  template: function UpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UpdateComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UpdateComponent_div_4_Template, 6, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UpdateComponent_label_6_Template, 2, 0, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Sprint");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UpdateComponent_div_16_Template, 4, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "ERP Instance");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "ERP URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UpdateComponent_div_27_Template, 5, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Derni\u00E8re M.A.J de l'ERP : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, UpdateComponent_li_34_Template, 3, 3, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, UpdateComponent_li_35_Template, 2, 0, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "M.\u00E0.J pr\u00E9vue(s) de l'ERP: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, UpdateComponent_div_42_Template, 2, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, UpdateComponent_div_43_Template, 3, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "M.\u00E0.J pr\u00E9vue(s) sur le SERVEUR: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, UpdateComponent_li_50_Template, 3, 3, "li", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, UpdateComponent_button_52_Template, 2, 1, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, UpdateComponent_button_53_Template, 2, 0, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "calendar-component", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dayClickedEvent", function UpdateComponent_Template_calendar_component_dayClickedEvent_55_listener($event) {
        return ctx.dayClickedEventHander($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.updateCreateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "patch" || ctx.mode === "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.instance.server == null ? null : ctx.instance.server.config == null ? null : ctx.instance.server.config.updateAfter) && ctx.mode != "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c0, !ctx.sprint));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx.sprint == null ? null : ctx.sprint.name) || "Sprint introuvable", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx.instance.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.instance.url);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.instance.target);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nextsUpdates == null ? null : ctx.nextsUpdates.lastUpdatesInstance[0] == null ? null : ctx.nextsUpdates.lastUpdatesInstance[0].dueDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.nextsUpdates == null ? null : ctx.nextsUpdates.lastUpdatesInstance[0] == null ? null : ctx.nextsUpdates.lastUpdatesInstance[0].dueDate));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.instance.target);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.nextsUpdates == null ? null : ctx.nextsUpdates.updatesInstance.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.nextsUpdates == null ? null : ctx.nextsUpdates.updatesInstance.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.instance.server.number);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.nextsUpdates == null ? null : ctx.nextsUpdates.updatesServer);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode != "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("eventEditable", false)("isModal", true);
    }
  },
  styles: [".form-label[_ngcontent-%COMP%] {\n  font-weight: 450;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #ffff !important;\n}\n\n#month[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmICFpbXBvcnRhbnRcclxufVxyXG5cclxuI21vbnRoIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"]
});

/***/ }),

/***/ 3840:
/*!************************************************************************!*\
  !*** ./src/app/directives/custom-virtual-scroll-strategy.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomVirtualScrollStrategy": () => (/* binding */ CustomVirtualScrollStrategy),
/* harmony export */   "CustomVirtualScrollDirective": () => (/* binding */ CustomVirtualScrollDirective)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1607);





const intersects = (a, b) => ((a[0] <= b[0] && b[0] <= a[1]) ||
    (a[0] <= b[1] && b[1] <= a[1]) ||
    (b[0] < a[0] && a[1] < b[1]));
const clamp = (min, value, max) => Math.min(Math.max(min, value), max);
const isEqual = (a, b) => a === b;
const last = (value) => value[value.length - 1];
class CustomVirtualScrollStrategy {
    constructor(itemHeights) {
        this.itemHeights = itemHeights;
        this.scrolledIndexChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.scrolledIndexChange = this.scrolledIndexChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
        this._minBufferPx = 100;
        this._maxBufferPx = 100;
    }
    attach(viewport) {
        this.viewport = viewport;
        this.updateTotalContentSize();
        this.updateRenderedRange();
    }
    detach() {
        this.scrolledIndexChange$.complete();
        delete this.viewport;
    }
    updateItemHeights(itemHeights) {
        this.itemHeights = itemHeights;
        this.updateTotalContentSize();
        this.updateRenderedRange();
    }
    getItemOffset(index) {
        return this.itemHeights.slice(0, index).reduce((acc, itemHeight) => acc + itemHeight, 0);
    }
    getTotalContentSize() {
        return this.itemHeights.reduce((a, b) => a + b, 0);
    }
    getListRangeAt(scrollOffset, viewportSize) {
        var _a, _b;
        const visibleOffsetRange = [scrollOffset, scrollOffset + viewportSize];
        const itemsInRange = this.itemHeights.reduce((acc, itemHeight, index) => {
            const itemOffsetRange = [acc.currentOffset, acc.currentOffset + itemHeight];
            return {
                currentOffset: acc.currentOffset + itemHeight,
                itemIndexesInRange: intersects(itemOffsetRange, visibleOffsetRange)
                    ? [...acc.itemIndexesInRange, index]
                    : acc.itemIndexesInRange
            };
        }, { itemIndexesInRange: [], currentOffset: 0 }).itemIndexesInRange;
        const BUFFER_BEFORE = 5;
        const BUFFER_AFTER = 5;
        return {
            start: clamp(0, ((_a = itemsInRange[0]) !== null && _a !== void 0 ? _a : 0) - BUFFER_BEFORE, this.itemHeights.length - 1),
            end: clamp(0, ((_b = last(itemsInRange)) !== null && _b !== void 0 ? _b : 0) + BUFFER_AFTER, this.itemHeights.length)
        };
    }
    updateRenderedRange() {
        var _a;
        if (!this.viewport)
            return;
        const viewportSize = this.viewport.getViewportSize();
        const scrollOffset = this.viewport.measureScrollOffset();
        const newRange = this.getListRangeAt(scrollOffset, viewportSize);
        const oldRange = (_a = this.viewport) === null || _a === void 0 ? void 0 : _a.getRenderedRange();
        if (isEqual(newRange, oldRange))
            return;
        this.viewport.setRenderedRange(newRange);
        this.viewport.setRenderedContentOffset(this.getItemOffset(newRange.start));
        this.scrolledIndexChange$.next(newRange.start);
    }
    updateTotalContentSize() {
        var _a;
        const contentSize = this.getTotalContentSize();
        (_a = this.viewport) === null || _a === void 0 ? void 0 : _a.setTotalContentSize(contentSize);
    }
    onContentScrolled() {
        this.updateRenderedRange();
    }
    onDataLengthChanged() {
        this.updateTotalContentSize();
        this.updateRenderedRange();
    }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(index, behavior) {
        var _a;
        (_a = this.viewport) === null || _a === void 0 ? void 0 : _a.scrollToOffset(this.getItemOffset(index), behavior);
    }
}
function factory(dir) {
    return dir.scrollStrategy;
}
class CustomVirtualScrollDirective {
    constructor(elRef, cd) {
        this.elRef = elRef;
        this.cd = cd;
        this.itemHeights = [];
        this.scrollStrategy = new CustomVirtualScrollStrategy(this.itemHeights);
    }
    ngOnChanges(changes) {
        if ('itemHeights' in changes) {
            this.scrollStrategy.updateItemHeights(this.itemHeights);
            this.cd.detectChanges();
        }
    }
}
CustomVirtualScrollDirective.ɵfac = function CustomVirtualScrollDirective_Factory(t) { return new (t || CustomVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
CustomVirtualScrollDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: CustomVirtualScrollDirective, selectors: [["cdk-virtual-scroll-viewport", "customVirtualScrollStrategy", ""]], inputs: { itemHeights: "itemHeights" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.VIRTUAL_SCROLL_STRATEGY,
                useFactory: factory,
                deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CustomVirtualScrollDirective)]
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 833:
/*!****************************************!*\
  !*** ./src/app/guards/isLoginGuard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLoginGuard": () => (/* binding */ isLoginGuard)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService.service */ 9828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





class isLoginGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      let userToken = (yield (_a = _this.authService) === null || _a === void 0 ? void 0 : _a.getToken()) || false; // c'est moche vu que le token je le sauve pas dans le local storage, si on refresh une page forcement le token existe plus mais pas plus mal pour v1

      if (userToken || src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.demo) {
        return true;
      } else {
        _this.router.navigate(['login']);

        return false;
      }
    })();
  }

}

isLoginGuard.ɵfac = function isLoginGuard_Factory(t) {
  return new (t || isLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authService_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

isLoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: isLoginGuard,
  factory: isLoginGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1243:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsFilterPipe": () => (/* binding */ ProjectsFilterPipe),
/* harmony export */   "InstancesFilterPipe": () => (/* binding */ InstancesFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ProjectsFilterPipe {
    transform(allprojects, searchStr) {
        if (searchStr && searchStr.trim() !== '') {
            searchStr = searchStr.toLowerCase();
            allprojects = allprojects.filter((project) => {
                var _a, _b;
                for (let instance of project.instances) {
                    if (((_a = instance.target) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchStr)) || ((_b = instance.server) === null || _b === void 0 ? void 0 : _b.number.toLowerCase().includes(searchStr))) {
                        return true;
                    }
                }
                return false;
            });
        }
        return allprojects;
    }
}
ProjectsFilterPipe.ɵfac = function ProjectsFilterPipe_Factory(t) { return new (t || ProjectsFilterPipe)(); };
ProjectsFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "projectsFilterPipe", type: ProjectsFilterPipe, pure: true });
class InstancesFilterPipe {
    transform(allInstances, searchStr) {
        if (searchStr && searchStr.trim() !== '') {
            allInstances = allInstances.filter((instance) => {
                var _a, _b;
                return (((_a = instance.target) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchStr)) || ((_b = instance.server) === null || _b === void 0 ? void 0 : _b.name.toLowerCase().includes(searchStr)));
            });
        }
        return allInstances;
    }
}
InstancesFilterPipe.ɵfac = function InstancesFilterPipe_Factory(t) { return new (t || InstancesFilterPipe)(); };
InstancesFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "instancesFilterPipe", type: InstancesFilterPipe, pure: true });


/***/ }),

/***/ 8316:
/*!*************************************************!*\
  !*** ./src/app/services/array-utils.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayUtilsService": () => (/* binding */ ArrayUtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ArrayUtilsService {
    constructor() { }
    sortAlpha(array, props) {
        return array = array.sort((a, b) => {
            var _a, _b;
            let fa = (_a = a[props]) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase(), fb = (_b = b[props]) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    }
    sortNumeric(array, props) {
        return array = array.sort((a, b) => {
            let fa = parseInt(a[props]), fb = parseInt(b[props]);
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    }
}
ArrayUtilsService.ɵfac = function ArrayUtilsService_Factory(t) { return new (t || ArrayUtilsService)(); };
ArrayUtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArrayUtilsService, factory: ArrayUtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9828:
/*!*************************************************!*\
  !*** ./src/app/services/authService.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class AuthService {
  constructor() {}

  setUser(user) {
    var _this = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // pas besoin d'await?
      _this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    })();
  }

  setToken(token) {
    var _this2 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // pas besoin d'await?
      _this2.user.token = token;
    })();
  }

  getToken() {
    var _this3 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a; // pas besoin d'await?


      return ((_a = _this3.user) === null || _a === void 0 ? void 0 : _a.token) || false; // return "this.user.token"
    })();
  }

  setUserSecret(secret) {
    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield localStorage.getItem('user');
      let user = JSON.parse(data);
      user.secret = secret;
      localStorage.setItem('user', JSON.stringify(user));
    })();
  }

  getSotrageUser() {
    var _this4 = this;

    return (0,C_code_projectx_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // si on demande le mot de passe on prend le user en cache , on en sauve pas le pw dans le local storage
      var _a;

      let user = (yield localStorage.getItem('user')) || '{}';
      let userReturn = JSON.parse(user);
      userReturn.pw = (_a = _this4.user) === null || _a === void 0 ? void 0 : _a.pw;
      return userReturn;
    })();
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)();
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3516:
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateService": () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class DateService {
    constructor() { }
    sortByDate(array, fieldName) {
        array.sort((a, b) => {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a[fieldName]).valueOf() - new Date(b[fieldName]).valueOf();
        });
    }
    /**
     * Oui c'est moche Sprint | any
     */
    getActiveSprint(sprints) {
        // if((check.getTime() <= to.getTime() && check.getTime() >= from.getTime()))
        let index = 0;
        this.sortByDate(sprints, 'startDate');
        for (const [i, s] of sprints.entries()) {
            if (new Date().getTime() >= new Date(s.startDate).getTime()) {
                index = i;
                break;
            }
            // if (isBefore(new Date(), parseISO(s.startDate!)) && isAfter(new Date(), parseISO(s.endDate!))) {
            //   return i
            // }
        }
        return index;
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1065:
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _api_projectxApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/projectxApi */ 9139);


class ProjectsService {
    constructor(api) {
        this.api = api;
        this.projects = [];
    }
    addProject(project) {
        this.projects.push(project);
    }
    /** GET project from the server */
    getProjects(onlyWithInstances) {
        return this.api.getProjects(onlyWithInstances);
    }
    clearList() {
        this.projects = [];
        return this.projects;
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_projectxApi__WEBPACK_IMPORTED_MODULE_0__.ProjectxApi)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2760:
/*!*********************************************!*\
  !*** ./src/app/services/servers.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServersService": () => (/* binding */ ServersService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _api_projectxApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/projectxApi */ 9139);


class ServersService {
    constructor(api) {
        this.api = api;
    }
    /** GET heroes from the server */
    getServers() {
        return this.api.getServers();
    }
}
ServersService.ɵfac = function ServersService_Factory(t) { return new (t || ServersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_projectxApi__WEBPACK_IMPORTED_MODULE_0__.ProjectxApi)); };
ServersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServersService, factory: ServersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6303:
/*!*********************************************!*\
  !*** ./src/app/services/updates.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatesService": () => (/* binding */ UpdatesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _api_projectxApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/projectxApi */ 9139);


class UpdatesService {
    constructor(api) {
        this.api = api;
    }
    getUpdates() {
        return this.api.getUpdates();
    }
}
UpdatesService.ɵfac = function UpdatesService_Factory(t) { return new (t || UpdatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_projectxApi__WEBPACK_IMPORTED_MODULE_0__.ProjectxApi)); };
UpdatesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdatesService, factory: UpdatesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jiraUrl": () => (/* binding */ jiraUrl),
/* harmony export */   "jiraApi": () => (/* binding */ jiraApi),
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const jiraUrl = "";
const jiraApi = "";
const environment = {
    production: false,
    demo: true,
    projectxApiEndpoint: '',
    jiraApiEndpoint: jiraApi + 'rest/api/2/',
    jiraApiAuth: jiraApi + 'auth/1/session',
    jiraApiAgile: jiraApi + 'rest/agile/1.0/',
    jiraCallback: '',
    jiraClientSecret: '',
    jiraClientId: '',
    jiraOauthTokenUrl: 'https://auth.atlassian.com/oauth/token',
    jiraCloudIdUrl: 'https://api.atlassian.com/oauth/token/accessible-resources',
    jiraScope: "",
    jiraState: "",
    superUsers: []
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ 1483);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 8914:
/*!***************************************************!*\
  !*** ./src/assets/sampleData/projectsSample.json ***!
  \***************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"_id":"628a2c8f6be662987d28cd4b","name":"Flashspan","key":"FLA","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d0a3","target":"Flashspan_produdction_1","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d09d","name":2,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e8f58e384b91ea1e77012f","instance":"628a2dfd6be662987d28d0a3","dueDate":"2022-08-10T22:00:00.000Z","keyJira":"OYO-2","createdAt":"2022-08-02T09:59:42.789Z","updatedAt":"2022-08-02T09:59:42.789Z","__v":0,"id":"62e8f58e384b91ea1e77012f"}],"id":"628a2dfd6be662987d28d0a3","email":[]}],"createdAt":"2022-05-22T12:29:03.371Z","updatedAt":"2022-05-22T12:35:09.349Z","__v":1},{"_id":"628a2c8f6be662987d28cd4d","name":"Oyoyo","key":"OYO","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d84d","target":"Oyoyo_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d81f","name":3,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d84d","email":[]}],"createdAt":"2022-05-22T12:29:03.377Z","updatedAt":"2022-05-22T12:35:13.484Z","__v":1},{"_id":"628a2c8f6be662987d28cd4f","name":"Yabox","key":"YAB","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d6b1","target":"Yabox_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d67e","name":4,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d6b1","email":[]}],"createdAt":"2022-05-22T12:29:03.379Z","updatedAt":"2022-11-09T13:26:25.448Z","__v":2},{"_id":"628a2c8f6be662987d28cd51","name":"Feednation","key":"FEE","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d3ce","target":"Feednation_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d38c","name":5,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62ff2c98956dfbdbc2105b38","instance":"628a2dff6be662987d28d3ce","dueDate":"2022-08-24T22:00:00.000Z","keyJira":"VIN-5","createdAt":"2022-08-19T06:24:24.286Z","updatedAt":"2022-08-19T06:24:24.286Z","__v":0,"id":"62ff2c98956dfbdbc2105b38"}],"id":"628a2dff6be662987d28d3ce","email":[]},{"_id":"628b68c6f13e2450ea892bc2","target":"Feednation_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d458","name":6,"number":"81","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62a9d8098ae397d879513ecc","instance":"628b68c6f13e2450ea892bc2","dueDate":"2022-06-20T22:00:00.000Z","keyJira":"BRO-6","createdAt":"2022-06-15T13:00:57.737Z","updatedAt":"2022-06-15T13:00:57.737Z","__v":0,"id":"62a9d8098ae397d879513ecc"}],"id":"628b68c6f13e2450ea892bc2","email":[]}],"createdAt":"2022-05-22T12:29:03.381Z","updatedAt":"2022-05-22T12:29:03.381Z","__v":0},{"_id":"628a2c8f6be662987d28cd57","name":"Browseblab","key":"BRO","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d65e","target":"Browseblab_staging_1","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d653","name":7,"number":"47","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d65e","email":[]}],"createdAt":"2022-05-22T12:29:03.386Z","updatedAt":"2022-05-22T12:35:12.477Z","__v":1},{"_id":"628a2c8f6be662987d28cd67","name":"Brightbean","key":"BRI","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d815","target":"Brightbean_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d7c9","name":8,"number":"73","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d815","email":[]}],"createdAt":"2022-05-22T12:29:03.400Z","updatedAt":"2022-05-22T12:35:13.380Z","__v":1},{"_id":"628a2c8f6be662987d28cd6b","name":"Photobug","key":"PHO","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d154","target":"Photobug_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d14e","name":9,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6331483bc3d6a64f03417796","instance":"628a2dfd6be662987d28d154","dueDate":"2022-09-26T22:00:00.000Z","keyJira":"JAX-9","createdAt":"2022-09-26T06:35:39.756Z","updatedAt":"2022-09-26T06:35:39.756Z","__v":0,"id":"6331483bc3d6a64f03417796"}],"id":"628a2dfd6be662987d28d154","email":[]},{"_id":"628a2dfd6be662987d28d15e","target":"Photobug_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d14e","name":10,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d15e","email":[]},{"_id":"62a83883f26ec12b907b1248","target":"Photobug_staging_3","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d725","name":11,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62c40cd3d1e764f4982069b5","instance":"62a83883f26ec12b907b1248","dueDate":"2022-07-12T22:00:00.000Z","keyJira":"EAB-11","createdAt":"2022-07-05T10:05:07.450Z","updatedAt":"2022-07-05T10:05:07.450Z","__v":0,"id":"62c40cd3d1e764f4982069b5"}],"id":"62a83883f26ec12b907b1248","email":[]},{"_id":"631ef0d0c3d6a64f03416da3","target":"Photobug_produdction_4","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d3d0","name":12,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"631ef125c3d6a64f03416dd1","instance":"631ef0d0c3d6a64f03416da3","dueDate":"2022-09-21T22:00:00.000Z","keyJira":"BRA-12","createdAt":"2022-09-12T08:43:17.787Z","updatedAt":"2022-09-12T08:43:17.787Z","__v":0,"id":"631ef125c3d6a64f03416dd1"}],"id":"631ef0d0c3d6a64f03416da3","email":[]}],"createdAt":"2022-05-22T12:29:03.402Z","updatedAt":"2022-09-12T08:41:52.567Z","__v":5},{"_id":"628a2c8f6be662987d28cd6d","name":"Brainlounge","key":"BRA","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d408","target":"Brainlounge_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d3d0","name":13,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d408","email":[]},{"_id":"628a2e006be662987d28d6f5","target":"Brainlounge_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d6c7","name":14,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6329a492c3d6a64f0341751a","instance":"628a2e006be662987d28d6f5","dueDate":"2022-09-25T22:00:00.000Z","keyJira":"SNA-14","createdAt":"2022-09-20T11:31:30.988Z","updatedAt":"2022-09-20T11:31:30.988Z","__v":0,"id":"6329a492c3d6a64f0341751a"}],"id":"628a2e006be662987d28d6f5","email":[]}],"createdAt":"2022-05-22T12:29:03.404Z","updatedAt":"2022-05-22T12:35:12.795Z","__v":2},{"_id":"628a2c8f6be662987d28cd6f","name":"Snaptags","key":"SNA","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d530","target":"Snaptags_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d4ee","name":15,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d530","email":[]},{"_id":"628a2dff6be662987d28d54e","target":"Snaptags_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d4ee","name":16,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d54e","email":[]},{"_id":"628a2dff6be662987d28d53a","target":"Snaptags_staging_3","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d4ee","name":17,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d53a","email":[]}],"createdAt":"2022-05-22T12:29:03.406Z","updatedAt":"2023-01-16T08:58:33.292Z","__v":2},{"_id":"628a2c8f6be662987d28cd71","name":"Ooba","key":"OOB","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d704","target":"Ooba_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d6c7","name":18,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6294c66bf26ec12b907b0951","instance":"628a2e006be662987d28d704","dueDate":"2022-06-06T22:00:00.000Z","keyJira":"YOM-18","createdAt":"2022-05-30T13:28:11.409Z","updatedAt":"2022-05-30T13:28:11.409Z","__v":0,"id":"6294c66bf26ec12b907b0951"}],"id":"628a2e006be662987d28d704","email":[]}],"createdAt":"2022-05-22T12:29:03.407Z","updatedAt":"2022-12-09T14:08:07.273Z","__v":2},{"_id":"628a2c8f6be662987d28cd73","name":"Yombu","key":"YOM","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d79f","target":"Yombu_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d799","name":19,"number":"51","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6319c1f48a13af3421fea02b","instance":"628a2e016be662987d28d79f","dueDate":"2022-09-12T22:00:00.000Z","keyJira":"JAT-19","createdAt":"2022-09-08T10:20:36.755Z","updatedAt":"2022-09-08T10:20:36.755Z","__v":0,"id":"6319c1f48a13af3421fea02b"}],"id":"628a2e016be662987d28d79f","email":[]},{"_id":"628a2e016be662987d28d7c7","target":"Yombu_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d799","name":20,"number":"51","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6336b616c3d6a64f03417d30","instance":"628a2e016be662987d28d7c7","dueDate":"2022-10-10T22:00:00.000Z","keyJira":"SKI-20","createdAt":"2022-09-30T09:25:42.098Z","updatedAt":"2022-09-30T09:25:42.098Z","__v":0,"id":"6336b616c3d6a64f03417d30"}],"id":"628a2e016be662987d28d7c7","email":[]}],"createdAt":"2022-05-22T12:29:03.408Z","updatedAt":"2022-12-19T21:16:22.575Z","__v":4},{"_id":"628a2c8f6be662987d28cd75","name":"Skilith","key":"SKI","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d403","target":"Skilith_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d3d0","name":21,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62c3e351d1e764f498206988","instance":"628a2dff6be662987d28d403","dueDate":"2022-07-10T22:00:00.000Z","keyJira":"KAY-21","createdAt":"2022-07-05T07:08:01.045Z","updatedAt":"2022-07-05T07:08:01.045Z","__v":0,"id":"62c3e351d1e764f498206988"}],"id":"628a2dff6be662987d28d403","email":[]},{"_id":"628a2e006be662987d28d6dc","target":"Skilith_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d6c7","name":22,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62c3e396d1e764f498206991","instance":"628a2e006be662987d28d6dc","dueDate":"2022-07-12T22:00:00.000Z","keyJira":"TAN-22","createdAt":"2022-07-05T07:09:10.953Z","updatedAt":"2022-07-05T07:09:10.953Z","__v":0,"id":"62c3e396d1e764f498206991"}],"id":"628a2e006be662987d28d6dc","email":[]}],"createdAt":"2022-05-22T12:29:03.410Z","updatedAt":"2022-05-22T12:35:12.737Z","__v":2},{"_id":"628a2c8f6be662987d28cd7b","name":"Tanoodle","key":"TAN","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d3ef","target":"Tanoodle_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d3d0","name":23,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d3ef","email":[]},{"_id":"628a2e006be662987d28d6a7","target":"Tanoodle_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d67e","name":24,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d6a7","email":[]},{"_id":"628a2e006be662987d28d6c5","target":"Tanoodle_staging_3","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d67e","name":25,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d6c5","email":[]}],"createdAt":"2022-05-22T12:29:03.415Z","updatedAt":"2023-01-05T14:37:15.017Z","__v":2},{"_id":"628a2c8f6be662987d28cd7d","name":"Avavee","key":"AVA","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d59b","target":"Avavee_produdction_1","emails":["s.lanzlinger@amsconseils.ch"],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d595","name":26,"number":"74","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6290d5d9f26ec12b907b08a5","instance":"628a2e006be662987d28d59b","dueDate":"2022-06-15T22:00:00.000Z","keyJira":"TRI-26","createdAt":"2022-05-27T13:44:57.237Z","updatedAt":"2022-05-27T13:44:57.237Z","__v":0,"id":"6290d5d9f26ec12b907b08a5"}],"id":"628a2e006be662987d28d59b","email":[]},{"_id":"628a2e006be662987d28d5a0","target":"Avavee_staging_2","emails":["s.lanzlinger@amsconseils.ch"],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d595","name":27,"number":"74","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62b019188ae397d8795140fe","instance":"628a2e006be662987d28d5a0","dueDate":"2022-07-04T22:00:00.000Z","keyJira":"THO-27","createdAt":"2022-06-20T06:52:08.345Z","updatedAt":"2022-06-20T06:52:08.345Z","__v":0,"id":"62b019188ae397d8795140fe"}],"id":"628a2e006be662987d28d5a0","email":[]}],"createdAt":"2022-05-22T12:29:03.416Z","updatedAt":"2022-05-22T12:35:12.100Z","__v":2},{"_id":"628a2c8f6be662987d28cd85","name":"Thoughtblab","key":"THO","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d857","target":"Thoughtblab_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d81f","name":28,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d857","email":[]}],"createdAt":"2022-05-22T12:29:03.422Z","updatedAt":"2022-05-22T12:35:13.503Z","__v":1},{"_id":"628a2c8f6be662987d28cd89","name":"Flipopia","key":"FLI","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d698","target":"Flipopia_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d67e","name":29,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"634412ae6f8ed1f64204fdf9","instance":"628a2e006be662987d28d698","dueDate":"2022-10-11T22:00:00.000Z","keyJira":"RIF-29","createdAt":"2022-10-10T12:40:14.538Z","updatedAt":"2022-10-12T11:16:26.994Z","__v":0,"id":"634412ae6f8ed1f64204fdf9"}],"id":"628a2e006be662987d28d698","email":[]},{"_id":"62cecfa6d1e764f498206f28","target":"Flipopia_produdction_2","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d7c9","name":30,"number":"73","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62f621c7956dfbdbc21058cb","instance":"62cecfa6d1e764f498206f28","dueDate":"2022-08-16T22:00:00.000Z","keyJira":"MID-30","createdAt":"2022-08-12T09:47:51.032Z","updatedAt":"2022-08-12T09:47:51.032Z","__v":0,"id":"62f621c7956dfbdbc21058cb"}],"id":"62cecfa6d1e764f498206f28","email":[]}],"createdAt":"2022-05-22T12:29:03.426Z","updatedAt":"2022-07-13T13:59:02.612Z","__v":2},{"_id":"628a2c8f6be662987d28cd8d","name":"Midel","key":"MID","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d23c","target":"Midel_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d22c","name":31,"number":"48","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d23c","email":[]},{"_id":"628a2dfe6be662987d28d241","target":"Midel_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d22c","name":32,"number":"48","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d241","email":[]}],"createdAt":"2022-05-22T12:29:03.428Z","updatedAt":"2022-05-22T12:35:10.266Z","__v":2},{"_id":"628a2c8f6be662987d28cd8f","name":"Meemm","key":"MEE","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d544","target":"Meemm_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d4ee","name":33,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d544","email":[]}],"createdAt":"2022-05-22T12:29:03.430Z","updatedAt":"2022-05-22T12:35:11.920Z","__v":1},{"_id":"628a2c8f6be662987d28cd91","name":"Brainverse","key":"BRA","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d412","target":"Brainverse_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d3d0","name":34,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62a87e19f26ec12b907b1356","instance":"628a2dff6be662987d28d412","dueDate":"2022-06-19T22:00:00.000Z","keyJira":"BRI-34","createdAt":"2022-06-14T12:24:57.496Z","updatedAt":"2022-06-14T12:24:57.496Z","__v":0,"id":"62a87e19f26ec12b907b1356"}],"id":"628a2dff6be662987d28d412","email":[]},{"_id":"628a2e016be662987d28d839","target":"Brainverse_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d81f","name":35,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62f0cf06956dfbdbc21055ed","instance":"628a2e016be662987d28d839","dueDate":"2022-08-08T08:52:30.035Z","keyJira":"TRU-35","createdAt":"2022-08-08T08:53:26.749Z","updatedAt":"2022-08-08T08:53:26.749Z","__v":0,"id":"62f0cf06956dfbdbc21055ed"}],"id":"628a2e016be662987d28d839","email":[]}],"createdAt":"2022-05-22T12:29:03.431Z","updatedAt":"2022-06-23T12:45:17.500Z","__v":2},{"_id":"628a2c8f6be662987d28cd99","name":"Trudoo","key":"TRU","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d047","target":"Trudoo_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d041","name":36,"number":"65","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d047","email":[]}],"createdAt":"2022-05-22T12:29:03.437Z","updatedAt":"2022-05-22T12:35:09.063Z","__v":1},{"_id":"628a2c8f6be662987d28cd9f","name":"Abatz","key":"ABA","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d237","target":"Abatz_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d22c","name":37,"number":"48","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d237","email":[]},{"_id":"62f36bc8956dfbdbc210576f","target":"Abatz_produdction_2","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d49f","name":38,"number":"83","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"63032fa48a13af3421fe97e1","instance":"62f36bc8956dfbdbc210576f","dueDate":"2022-08-24T22:00:00.000Z","keyJira":"MEE-38","createdAt":"2022-08-22T07:26:28.396Z","updatedAt":"2022-08-22T07:26:28.396Z","__v":0,"id":"63032fa48a13af3421fe97e1"}],"id":"62f36bc8956dfbdbc210576f","email":[]}],"createdAt":"2022-05-22T12:29:03.442Z","updatedAt":"2022-08-10T08:32:59.886Z","__v":3},{"_id":"628a2c8f6be662987d28cda1","name":"Meezzy","key":"MEE","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d85c","target":"Meezzy_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d81f","name":39,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d85c","email":[]}],"createdAt":"2022-05-22T12:29:03.443Z","updatedAt":"2022-05-22T12:35:13.513Z","__v":1},{"_id":"628a2c8f6be662987d28cda3","name":"Voomm","key":"VOO","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d232","target":"Voomm_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d22c","name":40,"number":"48","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"630f65908a13af3421fe9ca7","instance":"628a2dfe6be662987d28d232","dueDate":"2022-08-31T22:00:00.000Z","keyJira":"BRA-40","createdAt":"2022-08-31T13:43:44.425Z","updatedAt":"2022-08-31T13:43:44.425Z","__v":0,"id":"630f65908a13af3421fe9ca7"}],"id":"628a2dfe6be662987d28d232","email":[]}],"createdAt":"2022-05-22T12:29:03.445Z","updatedAt":"2022-05-22T12:35:10.234Z","__v":1},{"_id":"628a2c8f6be662987d28cda5","name":"Brainsphere","key":"BRA","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d0ad","target":"Brainsphere_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d09d","name":41,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"633c424c6f8ed1f64204f976","instance":"628a2dfd6be662987d28d0ad","dueDate":"2022-10-09T22:00:00.000Z","keyJira":"YOU-41","createdAt":"2022-10-04T14:25:16.068Z","updatedAt":"2022-10-04T14:25:16.068Z","__v":0,"id":"633c424c6f8ed1f64204f976"}],"id":"628a2dfd6be662987d28d0ad","email":[]},{"_id":"628a2dfd6be662987d28d0d5","target":"Brainsphere_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d09d","name":42,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d554afd1e764f498207096","instance":"628a2dfd6be662987d28d0d5","dueDate":"2022-07-20T22:00:00.000Z","keyJira":"SHU-42","createdAt":"2022-07-18T12:40:15.895Z","updatedAt":"2022-07-18T12:40:15.895Z","__v":0,"id":"62d554afd1e764f498207096"}],"id":"628a2dfd6be662987d28d0d5","email":[]},{"_id":"628a2dff6be662987d28d498","target":"Brainsphere_staging_3","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"62c3d5f8d1e764f4982068ec","name":43,"number":"91","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62bf0424d1e764f49820685e","instance":"628a2dff6be662987d28d498","dueDate":"2022-07-11T22:00:00.000Z","keyJira":"YOM-43","createdAt":"2022-07-01T14:26:44.704Z","updatedAt":"2022-07-01T14:26:44.704Z","__v":0,"id":"62bf0424d1e764f49820685e"}],"id":"628a2dff6be662987d28d498","email":[]},{"_id":"628a2e016be662987d28d7f2","target":"Brainsphere_produdction_4","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d7c9","name":44,"number":"73","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d7f2","email":[]}],"createdAt":"2022-05-22T12:29:03.446Z","updatedAt":"2022-05-22T12:35:13.298Z","__v":4},{"_id":"628a2c8f6be662987d28cda7","name":"Demizz","key":"DEM","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d6ff","target":"Demizz_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d6c7","name":45,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d6ff","email":[]}],"createdAt":"2022-05-22T12:29:03.447Z","updatedAt":"2022-12-09T14:08:15.409Z","__v":2},{"_id":"628a2c8f6be662987d28cda9","name":"Gabspot","key":"GAB","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d4f9","target":"Gabspot_produdction_1","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d4ee","name":46,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d4f9","email":[]},{"_id":"628a2dff6be662987d28d508","target":"Gabspot_staging_2","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d4ee","name":47,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d508","email":[]}],"createdAt":"2022-05-22T12:29:03.449Z","updatedAt":"2023-01-16T09:21:09.974Z","__v":0},{"_id":"628a2c8f6be662987d28cdad","name":"Yadel","key":"YAD","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d163","target":"Yadel_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d14e","name":48,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62f0fa61956dfbdbc21056a6","instance":"628a2dfd6be662987d28d163","dueDate":"2022-08-14T22:00:00.000Z","keyJira":"CEN-48","createdAt":"2022-08-08T11:58:25.622Z","updatedAt":"2022-08-08T11:58:25.622Z","__v":0,"id":"62f0fa61956dfbdbc21056a6"}],"id":"628a2dfd6be662987d28d163","email":[]},{"_id":"628a2e016be662987d28d7d9","target":"Yadel_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d7c9","name":49,"number":"73","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d7d9","email":[]}],"createdAt":"2022-05-22T12:29:03.452Z","updatedAt":"2022-05-22T12:35:13.246Z","__v":2},{"_id":"628a2c8f6be662987d28cdb1","name":"Jaxworks","key":"JAX","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d168","target":"Jaxworks_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d14e","name":50,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"633152c6c3d6a64f034177b6","instance":"628a2dfd6be662987d28d168","dueDate":"2022-10-03T22:00:00.000Z","keyJira":"AVA-50","createdAt":"2022-09-26T07:20:38.795Z","updatedAt":"2022-09-26T07:20:38.795Z","__v":0,"id":"633152c6c3d6a64f034177b6"}],"id":"628a2dfd6be662987d28d168","email":[]},{"_id":"628a2e016be662987d28d7e8","target":"Jaxworks_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d7c9","name":51,"number":"73","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62cd28cdd1e764f498206dda","instance":"628a2e016be662987d28d7e8","dueDate":"2022-07-17T22:00:00.000Z","keyJira":"MEE-51","createdAt":"2022-07-12T07:54:53.189Z","updatedAt":"2022-07-12T07:54:53.189Z","__v":0,"id":"62cd28cdd1e764f498206dda"}],"id":"628a2e016be662987d28d7e8","email":[]}],"createdAt":"2022-05-22T12:29:03.455Z","updatedAt":"2022-05-22T12:35:13.277Z","__v":2},{"_id":"628a2c8f6be662987d28cdb3","name":"Meembee","key":"MEE","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d0e2","target":"Meembee_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d0dc","name":52,"number":"60","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d0e2","email":[]},{"_id":"628a2e006be662987d28d611","target":"Meembee_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d60b","name":53,"number":"62","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62f9f431956dfbdbc21058f9","instance":"628a2e006be662987d28d611","dueDate":"2022-08-21T22:00:00.000Z","keyJira":"SKY-53","createdAt":"2022-08-15T07:22:25.434Z","updatedAt":"2022-08-15T07:22:25.434Z","__v":0,"id":"62f9f431956dfbdbc21058f9"}],"id":"628a2e006be662987d28d611","email":[]},{"_id":"628a2e006be662987d28d616","target":"Meembee_produdction_3","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d60b","name":54,"number":"62","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62a34155f26ec12b907b1104","instance":"628a2e006be662987d28d616","dueDate":"2022-07-11T22:00:00.000Z","keyJira":"TAG-54","createdAt":"2022-06-10T13:04:21.869Z","updatedAt":"2022-07-06T05:31:07.206Z","__v":0,"id":"62a34155f26ec12b907b1104"}],"id":"628a2e006be662987d28d616","email":[]},{"_id":"634ff6435c56ef31217b8b52","target":"Meembee_staging_4","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d60b","name":55,"number":"62","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"634ff6435c56ef31217b8b52","email":[]},{"_id":"6360db5f1414ae7fd42a5d3d","target":"Meembee_produdction_5","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d60b","name":56,"number":"62","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"6360db5f1414ae7fd42a5d3d","email":[]}],"createdAt":"2022-05-22T12:29:03.456Z","updatedAt":"2022-12-22T13:28:41.346Z","__v":6},{"_id":"628a2c8f6be662987d28cdb5","name":"Skilith","key":"SKI","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d066","target":"Skilith_staging_1","emails":["herve.vongunten@br-plus.ch","david.varidel@br-plus.ch"],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d060","name":57,"number":"52","host":"florentplomb.ch","port":0,"config":{"updateAfter":"19:00"}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62de8e90d1e764f4982072d7","instance":"628a2dfd6be662987d28d066","dueDate":"2022-08-16T22:00:00.000Z","keyJira":"TAN-57","createdAt":"2022-07-25T12:37:36.610Z","updatedAt":"2022-07-25T12:37:36.610Z","__v":0,"id":"62de8e90d1e764f4982072d7"}],"id":"628a2dfd6be662987d28d066","email":[]},{"_id":"628a2e016be662987d28d878","target":"Skilith_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d863","name":58,"number":"63","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62bb1312d1e764f498206663","instance":"628a2e016be662987d28d878","dueDate":"2022-07-10T22:00:00.000Z","keyJira":"FIV-58","createdAt":"2022-06-28T14:41:22.184Z","updatedAt":"2022-06-28T14:41:22.184Z","__v":0,"id":"62bb1312d1e764f498206663"}],"id":"628a2e016be662987d28d878","email":[]},{"_id":"628a2e016be662987d28d88c","target":"Skilith_staging_3","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d863","name":59,"number":"63","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d88c","email":[]}],"createdAt":"2022-05-22T12:29:03.458Z","updatedAt":"2022-05-22T12:35:13.622Z","__v":3},{"_id":"628a2c8f6be662987d28cdb7","name":"Flashpoint","key":"FLA","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d16d","target":"Flashpoint_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d14e","name":60,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9285d384b91ea1e7701f4","instance":"628a2dfd6be662987d28d16d","dueDate":"2022-09-12T22:00:00.000Z","keyJira":"DYN-60","createdAt":"2022-08-02T13:36:29.283Z","updatedAt":"2022-08-02T13:36:29.283Z","__v":0,"id":"62e9285d384b91ea1e7701f4"}],"id":"628a2dfd6be662987d28d16d","email":[]}],"createdAt":"2022-05-22T12:29:03.460Z","updatedAt":"2022-12-22T13:11:43.414Z","__v":2},{"_id":"628a2c8f6be662987d28cdbb","name":"Dynava","key":"DYN","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d0b7","target":"Dynava_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d09d","name":61,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9220d384b91ea1e770191","instance":"628a2dfd6be662987d28d0b7","dueDate":"2022-08-28T22:00:00.000Z","keyJira":"TEK-61","createdAt":"2022-08-02T13:09:33.852Z","updatedAt":"2022-08-02T13:09:33.852Z","__v":0,"id":"62e9220d384b91ea1e770191"}],"id":"628a2dfd6be662987d28d0b7","email":[]},{"_id":"628a2dfd6be662987d28d0bc","target":"Dynava_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d09d","name":62,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e92255384b91ea1e77019a","instance":"628a2dfd6be662987d28d0bc","dueDate":"2022-08-29T22:00:00.000Z","keyJira":"GEV-62","createdAt":"2022-08-02T13:10:45.136Z","updatedAt":"2022-08-02T13:10:45.136Z","__v":0,"id":"62e92255384b91ea1e77019a"}],"id":"628a2dfd6be662987d28d0bc","email":[]},{"_id":"628a2dfd6be662987d28d0c1","target":"Dynava_staging_3","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d09d","name":63,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e92280384b91ea1e7701a3","instance":"628a2dfd6be662987d28d0c1","dueDate":"2022-08-29T22:00:00.000Z","keyJira":"SKY-63","createdAt":"2022-08-02T13:11:28.829Z","updatedAt":"2022-08-02T13:11:28.829Z","__v":0,"id":"62e92280384b91ea1e7701a3"}],"id":"628a2dfd6be662987d28d0c1","email":[]},{"_id":"628a2dfd6be662987d28d0c6","target":"Dynava_produdction_4","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d09d","name":64,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e922d1384b91ea1e7701ac","instance":"628a2dfd6be662987d28d0c6","dueDate":"2022-08-15T22:00:00.000Z","keyJira":"VOO-64","createdAt":"2022-08-02T13:12:49.255Z","updatedAt":"2022-08-02T13:12:49.255Z","__v":0,"id":"62e922d1384b91ea1e7701ac"}],"id":"628a2dfd6be662987d28d0c6","email":[]},{"_id":"628a2dfd6be662987d28d0cb","target":"Dynava_staging_5","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d09d","name":65,"number":"69","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9230c384b91ea1e7701b5","instance":"628a2dfd6be662987d28d0cb","dueDate":"2022-08-15T22:00:00.000Z","keyJira":"INN-65","createdAt":"2022-08-02T13:13:48.621Z","updatedAt":"2022-08-02T13:13:48.621Z","__v":0,"id":"62e9230c384b91ea1e7701b5"}],"id":"628a2dfd6be662987d28d0cb","email":[]},{"_id":"628a2dfe6be662987d28d1f8","target":"Dynava_produdction_6","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d1ed","name":66,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e921d4384b91ea1e770188","instance":"628a2dfe6be662987d28d1f8","dueDate":"2022-08-28T22:00:00.000Z","keyJira":"VIN-66","createdAt":"2022-08-02T13:08:36.159Z","updatedAt":"2022-08-02T13:08:36.159Z","__v":0,"id":"62e921d4384b91ea1e770188"}],"id":"628a2dfe6be662987d28d1f8","email":[]},{"_id":"628a2dfe6be662987d28d202","target":"Dynava_staging_7","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d1ed","name":67,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e923a4384b91ea1e7701c7","instance":"628a2dfe6be662987d28d202","dueDate":"2022-09-11T22:00:00.000Z","keyJira":"FEE-67","createdAt":"2022-08-02T13:16:20.566Z","updatedAt":"2022-08-02T13:16:20.566Z","__v":0,"id":"62e923a4384b91ea1e7701c7"}],"id":"628a2dfe6be662987d28d202","email":[]},{"_id":"628a2dfe6be662987d28d20c","target":"Dynava_produdction_8","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d1ed","name":68,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9206d384b91ea1e77015b","instance":"628a2dfe6be662987d28d20c","dueDate":"2022-08-14T22:00:00.000Z","keyJira":"BRO-68","createdAt":"2022-08-02T13:02:37.910Z","updatedAt":"2022-08-02T13:02:37.910Z","__v":0,"id":"62e9206d384b91ea1e77015b"}],"id":"628a2dfe6be662987d28d20c","email":[]},{"_id":"628a2dfe6be662987d28d211","target":"Dynava_staging_9","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d1ed","name":69,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e92171384b91ea1e770176","instance":"628a2dfe6be662987d28d211","dueDate":"2022-08-28T22:00:00.000Z","keyJira":"TWI-69","createdAt":"2022-08-02T13:06:57.067Z","updatedAt":"2022-08-02T13:06:57.067Z","__v":0,"id":"62e92171384b91ea1e770176"}],"id":"628a2dfe6be662987d28d211","email":[]},{"_id":"628a2dfe6be662987d28d216","target":"Dynava_produdction_10","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d1ed","name":70,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9210a384b91ea1e77016d","instance":"628a2dfe6be662987d28d216","dueDate":"2022-08-14T22:00:00.000Z","keyJira":"LIN-70","createdAt":"2022-08-02T13:05:14.207Z","updatedAt":"2022-08-02T13:05:14.207Z","__v":0,"id":"62e9210a384b91ea1e77016d"}],"id":"628a2dfe6be662987d28d216","email":[]},{"_id":"628a2dfe6be662987d28d21b","target":"Dynava_staging_11","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d1ed","name":71,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e920cb384b91ea1e770164","instance":"628a2dfe6be662987d28d21b","dueDate":"2022-08-14T22:00:00.000Z","keyJira":"NPA-71","createdAt":"2022-08-02T13:04:11.494Z","updatedAt":"2022-08-02T13:04:11.494Z","__v":0,"id":"62e920cb384b91ea1e770164"}],"id":"628a2dfe6be662987d28d21b","email":[]},{"_id":"628a2e006be662987d28d6d2","target":"Dynava_produdction_12","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d6c7","name":72,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e921a4384b91ea1e77017f","instance":"628a2e006be662987d28d6d2","dueDate":"2022-08-28T22:00:00.000Z","keyJira":"YOU-72","createdAt":"2022-08-02T13:07:48.195Z","updatedAt":"2022-08-02T13:07:48.195Z","__v":0,"id":"62e921a4384b91ea1e77017f"}],"id":"628a2e006be662987d28d6d2","email":[]},{"_id":"628a2e016be662987d28d89e","target":"Dynava_staging_13","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d898","name":73,"number":"86","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e923e7384b91ea1e7701d0","instance":"628a2e016be662987d28d89e","dueDate":"2022-09-11T22:00:00.000Z","keyJira":"AIL-73","createdAt":"2022-08-02T13:17:27.117Z","updatedAt":"2022-08-02T13:17:27.117Z","__v":0,"id":"62e923e7384b91ea1e7701d0"}],"id":"628a2e016be662987d28d89e","email":[]}],"createdAt":"2022-05-22T12:29:03.462Z","updatedAt":"2022-12-22T13:37:34.070Z","__v":15},{"_id":"628a2c8f6be662987d28cdbd","name":"Ailane","key":"AIL","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d714","target":"Ailane_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d70e","name":74,"number":"64","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62beb34bd1e764f49820681e","instance":"628a2e006be662987d28d714","dueDate":"2022-07-03T22:00:00.000Z","keyJira":"YOM-74","createdAt":"2022-07-01T08:41:47.140Z","updatedAt":"2022-07-01T08:41:47.140Z","__v":0,"id":"62beb34bd1e764f49820681e"}],"id":"628a2e006be662987d28d714","email":[]},{"_id":"628a2e006be662987d28d719","target":"Ailane_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d70e","name":75,"number":"64","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d719","email":[]},{"_id":"628a2e006be662987d28d71e","target":"Ailane_produdction_3","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d70e","name":76,"number":"64","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d71e","email":[]},{"_id":"628a2e006be662987d28d723","target":"Ailane_staging_4","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d70e","name":77,"number":"64","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d723","email":[]}],"createdAt":"2022-05-22T12:29:03.464Z","updatedAt":"2022-06-23T09:48:36.060Z","__v":5},{"_id":"628a2c8f6be662987d28cdbf","name":"Rhycero","key":"RHY","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d06b","target":"Rhycero_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d060","name":78,"number":"52","host":"florentplomb.ch","port":0,"config":{"updateAfter":"19:00"}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"632b28e3c3d6a64f034176b6","instance":"628a2dfd6be662987d28d06b","dueDate":"2022-09-25T22:00:00.000Z","keyJira":"SKI-78","createdAt":"2022-09-21T15:08:19.783Z","updatedAt":"2022-09-21T15:08:19.783Z","__v":0,"id":"632b28e3c3d6a64f034176b6"}],"id":"628a2dfd6be662987d28d06b","email":[]},{"_id":"628a2e006be662987d28d72b","target":"Rhycero_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d725","name":79,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"630369db8a13af3421fe9841","instance":"628a2e006be662987d28d72b","dueDate":"2022-08-24T22:00:00.000Z","keyJira":"MYC-79","createdAt":"2022-08-22T11:34:51.583Z","updatedAt":"2022-08-22T11:34:51.583Z","__v":0,"id":"630369db8a13af3421fe9841"}],"id":"628a2e006be662987d28d72b","email":[]}],"createdAt":"2022-05-22T12:29:03.465Z","updatedAt":"2022-05-22T12:35:12.902Z","__v":2},{"_id":"628a2c8f6be662987d28cdc1","name":"Mycat","key":"MYC","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d315","target":"Mycat_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d2d8","name":80,"number":"55","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d315","email":[]},{"_id":"628a2e016be662987d28d896","target":"Mycat_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d863","name":81,"number":"63","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d896","email":[]}],"createdAt":"2022-05-22T12:29:03.466Z","updatedAt":"2022-05-22T12:35:13.650Z","__v":2},{"_id":"628a2c8f6be662987d28cdc3","name":"Mydo","key":"MYD","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d52b","target":"Mydo_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d4ee","name":82,"number":"37","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62bc56abd1e764f4982066ff","instance":"628a2dff6be662987d28d52b","dueDate":"2022-07-10T22:00:00.000Z","keyJira":"BLO-82","createdAt":"2022-06-29T13:42:03.700Z","updatedAt":"2022-06-29T13:42:03.700Z","__v":0,"id":"62bc56abd1e764f4982066ff"}],"id":"628a2dff6be662987d28d52b","email":[]}],"createdAt":"2022-05-22T12:29:03.468Z","updatedAt":"2022-05-22T12:35:11.866Z","__v":1},{"_id":"628a2c8f6be662987d28cdc5","name":"BlogXS","key":"BLO","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d5dc","target":"BlogXS_staging_1","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d595","name":83,"number":"74","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6336bf8bc3d6a64f03417d4b","instance":"628a2e006be662987d28d5dc","dueDate":"2022-10-03T22:00:00.000Z","keyJira":"ZOO-83","createdAt":"2022-09-30T10:06:03.637Z","updatedAt":"2022-09-30T10:06:03.637Z","__v":0,"id":"6336bf8bc3d6a64f03417d4b"}],"id":"628a2e006be662987d28d5dc","email":[]}],"createdAt":"2022-05-22T12:29:03.469Z","updatedAt":"2023-01-16T10:01:24.240Z","__v":0},{"_id":"628a2c8f6be662987d28cdc9","name":"Zooveo","key":"ZOO","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d397","target":"Zooveo_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d38c","name":84,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6295f86af26ec12b907b0a24","instance":"628a2dfe6be662987d28d397","dueDate":"2022-06-06T22:00:00.000Z","keyJira":"SHU-84","createdAt":"2022-05-31T11:13:46.388Z","updatedAt":"2022-05-31T11:13:46.388Z","__v":0,"id":"6295f86af26ec12b907b0a24"}],"id":"628a2dfe6be662987d28d397","email":[]}],"createdAt":"2022-05-22T12:29:03.472Z","updatedAt":"2022-05-22T12:29:03.472Z","__v":0},{"_id":"628a2c8f6be662987d28cdcb","name":"Shufflester","key":"SHU","jiraId":0,"instances":[{"_id":"628a2dfc6be662987d28cf9e","target":"Shufflester_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfc6be662987d28cf40","name":85,"number":"54","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6321b688c3d6a64f034171b2","instance":"628a2dfc6be662987d28cf9e","dueDate":"2022-10-03T22:00:00.000Z","keyJira":"OYO-85","createdAt":"2022-09-14T11:10:00.658Z","updatedAt":"2022-09-14T11:10:00.658Z","__v":0,"id":"6321b688c3d6a64f034171b2"}],"id":"628a2dfc6be662987d28cf9e","email":[]},{"_id":"628a2dff6be662987d28d4e4","target":"Shufflester_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d4d9","name":86,"number":"43","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d4e4","email":[]}],"createdAt":"2022-05-22T12:29:03.474Z","updatedAt":"2022-05-22T12:35:11.720Z","__v":2},{"_id":"628a2c8f6be662987d28cdcd","name":"Geba","key":"GEB","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d447","target":"Geba_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d428","name":87,"number":"79","host":"florentplomb.ch","port":0,"config":{"updateAfter":"19:00"}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e2252a384b91ea1e770029","instance":"628a2dff6be662987d28d447","dueDate":"2022-08-16T22:00:00.000Z","keyJira":"REA-87","createdAt":"2022-07-28T05:56:58.683Z","updatedAt":"2022-07-28T05:56:58.683Z","__v":0,"id":"62e2252a384b91ea1e770029"}],"id":"628a2dff6be662987d28d447","email":[]},{"_id":"628a2e016be662987d28d869","target":"Geba_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d863","name":88,"number":"63","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"631981bc8a13af3421fe9fca","instance":"628a2e016be662987d28d869","dueDate":"2022-09-11T22:00:00.000Z","keyJira":"NPA-88","createdAt":"2022-09-08T05:46:36.361Z","updatedAt":"2022-09-08T05:46:36.361Z","__v":0,"id":"631981bc8a13af3421fe9fca"}],"id":"628a2e016be662987d28d869","email":[]}],"createdAt":"2022-05-22T12:29:03.475Z","updatedAt":"2022-11-29T08:35:26.061Z","__v":3},{"_id":"628a2c8f6be662987d28cdcf","name":"Npath","key":"NPA","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d294","target":"Npath_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d261","name":89,"number":"84","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e9246b384b91ea1e7701d9","instance":"628a2dfe6be662987d28d294","dueDate":"2022-08-15T22:00:00.000Z","keyJira":"REA-89","createdAt":"2022-08-02T13:19:39.909Z","updatedAt":"2022-08-02T13:19:39.909Z","__v":0,"id":"62e9246b384b91ea1e7701d9"}],"id":"628a2dfe6be662987d28d294","email":[]},{"_id":"628a2dfe6be662987d28d2a3","target":"Npath_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d261","name":90,"number":"84","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62e924d1384b91ea1e7701e2","instance":"628a2dfe6be662987d28d2a3","dueDate":"2022-08-14T22:00:00.000Z","keyJira":"SKI-90","createdAt":"2022-08-02T13:21:21.249Z","updatedAt":"2022-08-02T13:21:21.249Z","__v":0,"id":"62e924d1384b91ea1e7701e2"}],"id":"628a2dfe6be662987d28d2a3","email":[]}],"createdAt":"2022-05-22T12:29:03.476Z","updatedAt":"2022-05-22T12:35:10.469Z","__v":2},{"_id":"628a2c8f6be662987d28cdd1","name":"Skipfire","key":"SKI","jiraId":0,"instances":[{"_id":"628a2e006be662987d28d753","target":"Skipfire_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d725","name":91,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"629ef149f26ec12b907b0e3d","instance":"628a2e006be662987d28d753","dueDate":"2022-06-15T21:59:59.999Z","keyJira":"JAX-91","createdAt":"2022-06-07T06:33:45.641Z","updatedAt":"2022-06-08T15:38:09.717Z","__v":0,"id":"629ef149f26ec12b907b0e3d"}],"id":"628a2e006be662987d28d753","email":[]},{"_id":"628a2dff6be662987d28d468","target":"Skipfire_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d458","name":92,"number":"81","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6332c55fc3d6a64f034179e5","instance":"628a2dff6be662987d28d468","dueDate":"2022-10-03T22:00:00.000Z","keyJira":"SKA-92","createdAt":"2022-09-27T09:41:51.576Z","updatedAt":"2022-09-27T09:41:51.576Z","__v":0,"id":"6332c55fc3d6a64f034179e5"}],"id":"628a2dff6be662987d28d468","email":[]}],"createdAt":"2022-05-22T12:29:03.478Z","updatedAt":"2022-05-22T12:35:12.983Z","__v":1},{"_id":"628a2c8f6be662987d28cdd3","name":"Skalith","key":"SKA","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d45e","target":"Skalith_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d458","name":93,"number":"81","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6343bd476f8ed1f64204fd48","instance":"628a2dff6be662987d28d45e","dueDate":"2022-10-16T22:00:00.000Z","keyJira":"ROO-93","createdAt":"2022-10-10T06:35:51.325Z","updatedAt":"2022-10-10T06:35:51.325Z","__v":0,"id":"6343bd476f8ed1f64204fd48"}],"id":"628a2dff6be662987d28d45e","email":[]},{"_id":"628a2e006be662987d28d730","target":"Skalith_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d725","name":94,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d730","email":[]}],"createdAt":"2022-05-22T12:29:03.479Z","updatedAt":"2022-05-22T12:35:12.911Z","__v":3},{"_id":"628a2c8f6be662987d28cdd5","name":"Photobug","key":"PHO","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d8ce","target":"Photobug_staging_1","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":95,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8ce","email":[]},{"_id":"628a2e016be662987d28d8d3","target":"Photobug_produdction_2","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":96,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8d3","email":[]},{"_id":"628a2e016be662987d28d8d8","target":"Photobug_staging_3","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":97,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8d8","email":[]},{"_id":"628a2e016be662987d28d8dd","target":"Photobug_produdction_4","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":98,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8dd","email":[]}],"createdAt":"2022-05-22T12:29:03.482Z","updatedAt":"2023-01-16T10:22:05.751Z","__v":0},{"_id":"628a2c8f6be662987d28cdd7","name":"Mybuzz","key":"MYB","jiraId":0,"instances":[{"_id":"62b478c5d1e764f4982064f2","target":"Mybuzz_staging_1","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"62b478afd1e764f4982064e4","name":99,"number":"1008","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"630ca7b78a13af3421fe9acc","instance":"62b478c5d1e764f4982064f2","dueDate":"2022-08-31T22:00:00.000Z","keyJira":"COG-99","createdAt":"2022-08-29T11:49:11.196Z","updatedAt":"2022-08-29T11:49:11.196Z","__v":0,"id":"630ca7b78a13af3421fe9acc"}],"id":"62b478c5d1e764f4982064f2","email":[]}],"createdAt":"2022-05-22T12:29:03.483Z","updatedAt":"2022-06-23T14:29:25.665Z","__v":1},{"_id":"628a2c8f6be662987d28cdd9","name":"Cogidoo","key":"COG","jiraId":0,"instances":[{"_id":"6346714e2c6f56d20a92de32","target":"Cogidoo_produdction_1","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d458","name":100,"number":"81","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"6346714e2c6f56d20a92de32","email":[]},{"_id":"634672562c6f56d20a92de52","target":"Cogidoo_staging_2","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d192","name":101,"number":"56","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"634672562c6f56d20a92de52","email":[]},{"_id":"6346726c2c6f56d20a92de62","target":"Cogidoo_produdction_3","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d192","name":102,"number":"56","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"6346726c2c6f56d20a92de62","email":[]}],"createdAt":"2022-05-22T12:29:03.485Z","updatedAt":"2022-10-12T07:53:16.301Z","__v":3},{"_id":"628a2c8f6be662987d28cddb","name":"Brightdog","key":"BRI","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d246","target":"Brightdog_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d22c","name":103,"number":"48","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d246","email":[]}],"createdAt":"2022-05-22T12:29:03.486Z","updatedAt":"2022-05-22T12:35:10.276Z","__v":1},{"_id":"628a2c8f6be662987d28cddd","name":"Ainyx","key":"AIN","jiraId":0,"instances":[{"_id":"628a2dff6be662987d28d4ec","target":"Ainyx_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d4e6","name":104,"number":"erp","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d4ec","email":[]},{"_id":"628a2e006be662987d28d651","target":"Ainyx_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d64b","name":105,"number":"erp-test","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d651","email":[]}],"createdAt":"2022-05-22T12:29:03.487Z","updatedAt":"2022-05-22T12:35:12.455Z","__v":2},{"_id":"628a2c8f6be662987d28cde3","name":"Innojam","key":"INN","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d2bd","target":"Innojam_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d2b7","name":106,"number":"44","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d2bd","email":[]},{"_id":"628a2dff6be662987d28d3db","target":"Innojam_staging_2","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d3d0","name":107,"number":"66","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62a9d9708ae397d879513ee1","instance":"628a2dff6be662987d28d3db","dueDate":"2022-06-27T22:00:00.000Z","keyJira":"COG-107","createdAt":"2022-06-15T13:06:56.432Z","updatedAt":"2022-06-15T13:06:56.432Z","__v":0,"id":"62a9d9708ae397d879513ee1"}],"id":"628a2dff6be662987d28d3db","email":[]},{"_id":"628a2dff6be662987d28d56a","target":"Innojam_produdction_3","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d55a","name":108,"number":"70","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62cd6e9dd1e764f498206e54","instance":"628a2dff6be662987d28d56a","dueDate":"2022-07-26T22:00:00.000Z","keyJira":"SHU-108","createdAt":"2022-07-12T12:52:45.482Z","updatedAt":"2022-07-12T12:58:24.116Z","__v":0,"id":"62cd6e9dd1e764f498206e54"}],"id":"628a2dff6be662987d28d56a","email":[]}],"createdAt":"2022-05-22T12:29:03.492Z","updatedAt":"2022-12-22T12:55:41.120Z","__v":0},{"_id":"628a2c8f6be662987d28cde5","name":"Shuffletag","key":"SHU","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d0f6","target":"Shuffletag_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d0dc","name":109,"number":"60","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d0f6","email":[]},{"_id":"628a2dfd6be662987d28d14c","target":"Shuffletag_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d146","name":110,"number":"florent-vm-testerp","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d14c","email":[]},{"_id":"628a2e006be662987d28d73f","target":"Shuffletag_staging_3","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d725","name":111,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d73f","email":[]},{"_id":"628a2e006be662987d28d744","target":"Shuffletag_produdction_4","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d725","name":112,"number":"77","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"633fc69f6f8ed1f64204fc33","instance":"628a2e006be662987d28d744","dueDate":"2022-10-17T22:00:00.000Z","keyJira":"MYD-112","createdAt":"2022-10-07T06:26:39.955Z","updatedAt":"2022-10-07T06:26:39.955Z","__v":0,"id":"633fc69f6f8ed1f64204fc33"}],"id":"628a2e006be662987d28d744","email":[]}],"createdAt":"2022-05-22T12:29:03.493Z","updatedAt":"2022-05-22T12:35:12.953Z","__v":4},{"_id":"628a2c8f6be662987d28cde7","name":"Mydo","key":"MYD","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d38a","target":"Mydo_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d384","name":113,"number":"50","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"630744c08a13af3421fe9962","instance":"628a2dfe6be662987d28d38a","dueDate":"2022-08-30T22:00:00.000Z","keyJira":"DEV-113","createdAt":"2022-08-25T09:45:36.150Z","updatedAt":"2022-08-25T09:45:36.150Z","__v":0,"id":"630744c08a13af3421fe9962"}],"id":"628a2dfe6be662987d28d38a","email":[]},{"_id":"62b462fcd1e764f498206471","target":"Mydo_produdction_2","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"62b462ecd1e764f498206463","name":114,"number":"1007","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62b463e6d1e764f49820648b","instance":"62b462fcd1e764f498206471","dueDate":"2022-07-05T22:00:00.000Z","keyJira":"RIF-114","createdAt":"2022-06-23T13:00:22.100Z","updatedAt":"2022-06-23T13:00:22.100Z","__v":0,"id":"62b463e6d1e764f49820648b"}],"id":"62b462fcd1e764f498206471","email":[]}],"createdAt":"2022-05-22T12:29:03.495Z","updatedAt":"2022-06-23T12:56:28.892Z","__v":2},{"_id":"628a2c8f6be662987d28cde9","name":"Riffpath","key":"RIF","jiraId":0,"instances":[{"_id":"628a2dfc6be662987d28cfd3","target":"Riffpath_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfc6be662987d28cfb9","name":115,"number":"40","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"634523976f8ed1f64204fe8c","instance":"628a2dfc6be662987d28cfd3","dueDate":"2022-10-11T22:00:00.000Z","keyJira":"BLO-115","createdAt":"2022-10-11T08:04:39.918Z","updatedAt":"2022-10-11T08:04:39.918Z","__v":0,"id":"634523976f8ed1f64204fe8c"}],"id":"628a2dfc6be662987d28cfd3","email":[]},{"_id":"628a2dfc6be662987d28cfd8","target":"Riffpath_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfc6be662987d28cfb9","name":116,"number":"40","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfc6be662987d28cfd8","email":[]},{"_id":"628a2dfd6be662987d28d0ec","target":"Riffpath_staging_3","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"62f36f9e956dfbdbc21057b4","name":117,"number":"90","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62a30383f26ec12b907b106e","instance":"628a2dfd6be662987d28d0ec","dueDate":"2022-06-14T21:59:59.999Z","keyJira":"DYN-117","createdAt":"2022-06-10T08:40:35.712Z","updatedAt":"2022-06-10T08:41:42.289Z","__v":0,"id":"62a30383f26ec12b907b106e"}],"id":"628a2dfd6be662987d28d0ec","email":[]},{"_id":"628a2dfd6be662987d28d0f1","target":"Riffpath_produdction_4","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d0dc","name":118,"number":"60","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfd6be662987d28d0f1","email":[]}],"createdAt":"2022-05-22T12:29:03.496Z","updatedAt":"2022-05-22T12:35:09.514Z","__v":4},{"_id":"628a2c8f6be662987d28cdeb","name":"Lazz","key":"LAZ","jiraId":0,"instances":[{"_id":"628a2dfd6be662987d28d159","target":"Lazz_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d14e","name":119,"number":"46","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"63078aed8a13af3421fe9994","instance":"628a2dfd6be662987d28d159","dueDate":"2022-08-31T22:00:00.000Z","keyJira":"VIP-119","createdAt":"2022-08-25T14:45:01.066Z","updatedAt":"2022-08-25T14:45:01.066Z","__v":0,"id":"63078aed8a13af3421fe9994"}],"id":"628a2dfd6be662987d28d159","email":[]},{"_id":"6346723c2c6f56d20a92de42","target":"Lazz_produdction_2","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d863","name":120,"number":"63","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"6346723c2c6f56d20a92de42","email":[]}],"createdAt":"2022-05-22T12:29:03.497Z","updatedAt":"2022-12-22T13:10:13.383Z","__v":3},{"_id":"628a2c8f6be662987d28cded","name":"Meembee","key":"MEE","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d267","target":"Meembee_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d261","name":121,"number":"84","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62cd1b6fd1e764f498206cc7","instance":"628a2dfe6be662987d28d267","dueDate":"2022-07-17T22:00:00.000Z","keyJira":"NLO-121","createdAt":"2022-07-12T06:57:51.712Z","updatedAt":"2022-07-12T06:57:51.712Z","__v":0,"id":"62cd1b6fd1e764f498206cc7"}],"id":"628a2dfe6be662987d28d267","email":[]}],"createdAt":"2022-05-22T12:29:03.498Z","updatedAt":"2022-05-22T12:35:10.345Z","__v":1},{"_id":"628a2c8f6be662987d28cdf9","name":"Nlounge","key":"NLO","jiraId":0,"instances":[{"_id":"62cc2874d1e764f498206c29","target":"Nlounge_produdction_1","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"62cc2850d1e764f498206c1b","name":122,"number":"1009","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62cc29bfd1e764f498206c67","instance":"62cc2874d1e764f498206c29","dueDate":"2022-07-13T22:00:00.000Z","keyJira":"WOR-122","createdAt":"2022-07-11T13:46:39.394Z","updatedAt":"2022-07-11T13:46:39.394Z","__v":0,"id":"62cc29bfd1e764f498206c67"}],"id":"62cc2874d1e764f498206c29","email":[]},{"_id":"62cc288bd1e764f498206c47","target":"Nlounge_staging_2","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"62cc2850d1e764f498206c1b","name":123,"number":"1009","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6320547ec3d6a64f03417005","instance":"62cc288bd1e764f498206c47","dueDate":"2022-09-21T22:00:00.000Z","keyJira":"TEK-123","createdAt":"2022-09-13T09:59:26.954Z","updatedAt":"2022-09-13T09:59:26.954Z","__v":0,"id":"6320547ec3d6a64f03417005"}],"id":"62cc288bd1e764f498206c47","email":[]}],"createdAt":"2022-05-22T12:29:03.513Z","updatedAt":"2022-10-10T08:07:14.565Z","__v":3},{"_id":"628a2c8f6be662987d28cdfb","name":"Teklist","key":"TEK","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d8a3","target":"Teklist_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d898","name":124,"number":"86","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"633595d3c3d6a64f03417cca","instance":"628a2e016be662987d28d8a3","dueDate":"2022-10-03T22:00:00.000Z","keyJira":"RHY-124","createdAt":"2022-09-29T12:55:47.267Z","updatedAt":"2022-09-29T12:55:47.267Z","__v":0,"id":"633595d3c3d6a64f03417cca"}],"id":"628a2e016be662987d28d8a3","email":[]}],"createdAt":"2022-05-22T12:29:03.515Z","updatedAt":"2022-05-22T12:35:13.675Z","__v":1},{"_id":"628a2c8f6be662987d28cdfd","name":"Rhynyx","key":"RHY","jiraId":0,"instances":[{"_id":"628a2e016be662987d28d82a","target":"Rhynyx_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d81f","name":125,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d82a","email":[]},{"_id":"628a2e016be662987d28d82f","target":"Rhynyx_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d81f","name":126,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d82f","email":[]}],"createdAt":"2022-05-22T12:29:03.516Z","updatedAt":"2022-05-22T12:35:13.428Z","__v":2},{"_id":"628a2c8f6be662987d28ce01","name":"Tekfly","key":"TEK","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d37d","target":"Tekfly_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d368","name":127,"number":"38","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d37d","email":[]}],"createdAt":"2022-05-22T12:29:03.519Z","updatedAt":"2022-05-22T12:35:10.924Z","__v":1},{"_id":"628a2c8f6be662987d28ce03","name":"Vimbo","key":"VIM","jiraId":0,"instances":[{"_id":"62962258f26ec12b907b0b51","target":"Vimbo_produdction_1","emails":["c.ceccarelli@fld-law.com"],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"62962203f26ec12b907b0b44","name":128,"number":"1003","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62b2d397d1e764f498206302","instance":"62962258f26ec12b907b0b51","dueDate":"2022-06-27T22:00:00.000Z","keyJira":"MEE-128","createdAt":"2022-06-22T08:32:23.159Z","updatedAt":"2022-06-22T08:32:23.159Z","__v":0,"id":"62b2d397d1e764f498206302"}],"id":"62962258f26ec12b907b0b51","email":[]},{"_id":"62962272f26ec12b907b0b60","target":"Vimbo_staging_2","emails":["c.ceccarelli@fld-law.com"],"type":"STAGING","erpProject":"Finance","server":{"_id":"62962203f26ec12b907b0b44","name":129,"number":"1003","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"62962272f26ec12b907b0b60","email":[]}],"createdAt":"2022-05-22T12:29:03.520Z","updatedAt":"2022-08-17T14:13:01.960Z","__v":3},{"_id":"628a2c8f6be662987d28ce05","name":"Zoovu","key":"ZOO","jiraId":0,"instances":[{"_id":"628a2dfc6be662987d28cf67","target":"Zoovu_produdction_1","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfc6be662987d28cf40","name":130,"number":"54","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfc6be662987d28cf67","email":[]}],"createdAt":"2022-05-22T12:29:03.522Z","updatedAt":"2022-12-22T13:21:09.510Z","__v":2},{"_id":"628a2c8f6be662987d28ce07","name":"Eadel","key":"EAD","jiraId":0,"instances":[{"_id":"628a2dfe6be662987d28d39c","target":"Eadel_staging_1","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d38c","name":131,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dfe6be662987d28d39c","email":[]},{"_id":"628a2dff6be662987d28d3a6","target":"Eadel_produdction_2","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d38c","name":132,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d3a6","email":[]},{"_id":"628a2dff6be662987d28d3ab","target":"Eadel_staging_3","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d38c","name":133,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6290d642f26ec12b907b08b7","instance":"628a2dff6be662987d28d3ab","dueDate":"2022-06-15T22:00:00.000Z","keyJira":"EAB-133","createdAt":"2022-05-27T13:46:42.940Z","updatedAt":"2022-05-27T13:46:42.940Z","__v":0,"id":"6290d642f26ec12b907b08b7"}],"id":"628a2dff6be662987d28d3ab","email":[]},{"_id":"628a2dff6be662987d28d3c4","target":"Eadel_produdction_4","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d38c","name":134,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d3c4","email":[]},{"_id":"628a2dff6be662987d28d3c9","target":"Eadel_staging_5","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d38c","name":135,"number":"80","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d3c9","email":[]},{"_id":"628a2dff6be662987d28d4b9","target":"Eadel_produdction_6","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d49f","name":136,"number":"83","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d4b9","email":[]},{"_id":"628a2dff6be662987d28d560","target":"Eadel_staging_7","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dff6be662987d28d55a","name":137,"number":"70","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d556f9d1e764f498207110","instance":"628a2dff6be662987d28d560","dueDate":"2022-08-03T22:00:00.000Z","keyJira":"OOD-137","createdAt":"2022-07-18T12:50:01.479Z","updatedAt":"2022-07-18T12:50:15.239Z","__v":0,"id":"62d556f9d1e764f498207110"}],"id":"628a2dff6be662987d28d560","email":[]},{"_id":"628a2dff6be662987d28d565","target":"Eadel_produdction_8","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dff6be662987d28d55a","name":138,"number":"70","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2dff6be662987d28d565","email":[]},{"_id":"628a2e006be662987d28d689","target":"Eadel_staging_9","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d67e","name":139,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d689","email":[]},{"_id":"628a2e006be662987d28d68e","target":"Eadel_produdction_10","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d67e","name":140,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d68e","email":[]},{"_id":"628a2e006be662987d28d693","target":"Eadel_staging_11","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d67e","name":141,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e006be662987d28d693","email":[]},{"_id":"628a2e016be662987d28d797","target":"Eadel_produdction_12","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d75a","name":142,"number":"78","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d797","email":[]},{"_id":"628a2e016be662987d28d83e","target":"Eadel_staging_13","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d81f","name":143,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62ea894a956dfbdbc2105435","instance":"628a2e016be662987d28d83e","dueDate":"2022-08-08T22:00:00.000Z","keyJira":"QUI-143","createdAt":"2022-08-03T14:42:18.702Z","updatedAt":"2022-08-03T14:42:18.702Z","__v":0,"id":"62ea894a956dfbdbc2105435"}],"id":"628a2e016be662987d28d83e","email":[]},{"_id":"628a2e016be662987d28d848","target":"Eadel_produdction_14","emails":[],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d81f","name":144,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62ea896f956dfbdbc2105448","instance":"628a2e016be662987d28d848","dueDate":"2022-08-08T22:00:00.000Z","keyJira":"AIN-144","createdAt":"2022-08-03T14:42:55.026Z","updatedAt":"2022-08-03T14:42:55.026Z","__v":0,"id":"62ea896f956dfbdbc2105448"}],"id":"628a2e016be662987d28d848","email":[]},{"_id":"628a2e016be662987d28d8f1","target":"Eadel_staging_15","emails":[],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":145,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"6290e060f26ec12b907b08c6","instance":"628a2e016be662987d28d8f1","dueDate":"2022-06-15T22:00:00.000Z","keyJira":"AVA-145","createdAt":"2022-05-27T14:29:52.983Z","updatedAt":"2022-05-27T14:29:52.983Z","__v":0,"id":"6290e060f26ec12b907b08c6"}],"id":"628a2e016be662987d28d8f1","email":[]},{"_id":"629a07fff26ec12b907b0da6","target":"Eadel_produdction_16","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":146,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"629a07fff26ec12b907b0da6","email":[]},{"_id":"629a0834f26ec12b907b0db5","target":"Eadel_staging_17","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":147,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"629a0834f26ec12b907b0db5","email":[]},{"_id":"62fca347956dfbdbc2105a30","target":"Eadel_produdction_18","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e006be662987d28d6c7","name":148,"number":"59","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"62fca347956dfbdbc2105a30","email":[]},{"_id":"630f039f8a13af3421fe9c0e","target":"Eadel_staging_19","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d049","name":149,"number":"68","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"630f039f8a13af3421fe9c0e","email":[]},{"_id":"630f035d8a13af3421fe9bfe","target":"Eadel_produdction_20","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfe6be662987d28d1ed","name":150,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"630f035d8a13af3421fe9bfe","email":[]},{"_id":"63b5a781065814bf38f40cdf","target":"Eadel_staging_21","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfe6be662987d28d1ed","name":151,"number":"72","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"63b5a781065814bf38f40cdf","email":[]},{"_id":"63970027102247e0ce3fd9b3","target":"Eadel_produdction_22","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d192","name":152,"number":"56","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"63970027102247e0ce3fd9b3","email":[]},{"_id":"6396fff8102247e0ce3fd9a3","target":"Eadel_staging_23","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d192","name":153,"number":"56","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"6396fff8102247e0ce3fd9a3","email":[]},{"_id":"63970042102247e0ce3fd9c3","target":"Eadel_produdction_24","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d192","name":154,"number":"56","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"63970042102247e0ce3fd9c3","email":[]},{"_id":"63aa806f102247e0ce3fe4c4","target":"Eadel_staging_25","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d049","name":155,"number":"68","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"63aa806f102247e0ce3fe4c4","email":[]},{"_id":"63aa809c102247e0ce3fe4e4","target":"Eadel_produdction_26","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2dfd6be662987d28d049","name":156,"number":"68","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"63aa809c102247e0ce3fe4e4","email":[]},{"_id":"628a2dfd6be662987d28d04f","target":"Eadel_staging_27","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2dfd6be662987d28d049","name":157,"number":"68","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62bb0782d1e764f498206653","instance":"628a2dfd6be662987d28d04f","dueDate":"2022-06-28T13:51:48.145Z","keyJira":"ZAV-157","createdAt":"2022-06-28T13:52:02.463Z","updatedAt":"2022-06-28T13:52:02.463Z","__v":0,"id":"62bb0782d1e764f498206653"}],"id":"628a2dfd6be662987d28d04f","email":[]},{"_id":"628a2e016be662987d28d843","target":"Eadel_produdction_28","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d81f","name":158,"number":"75","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62ea899a956dfbdbc2105457","instance":"628a2e016be662987d28d843","dueDate":"2022-08-08T22:00:00.000Z","keyJira":"POD-158","createdAt":"2022-08-03T14:43:38.094Z","updatedAt":"2022-08-03T14:43:38.094Z","__v":0,"id":"62ea899a956dfbdbc2105457"}],"id":"628a2e016be662987d28d843","email":[]},{"_id":"628a2e006be662987d28d684","target":"Eadel_staging_29","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e006be662987d28d67e","name":159,"number":"76","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62fd0044956dfbdbc2105ad2","instance":"628a2e006be662987d28d684","dueDate":"2022-08-31T22:00:00.000Z","keyJira":"SNA-159","createdAt":"2022-08-17T14:50:44.705Z","updatedAt":"2022-08-17T14:50:44.705Z","__v":0,"id":"62fd0044956dfbdbc2105ad2"}],"id":"628a2e006be662987d28d684","email":[]},{"_id":"628a2e016be662987d28d8b2","target":"Eadel_produdction_30","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d898","name":160,"number":"86","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8b2","email":[]},{"_id":"628a2e016be662987d28d8b7","target":"Eadel_staging_31","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d898","name":161,"number":"86","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8b7","email":[]},{"_id":"628a2e016be662987d28d8e2","target":"Eadel_produdction_32","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":162,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8e2","email":[]},{"_id":"628a2e016be662987d28d8e7","target":"Eadel_staging_33","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":163,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8e7","email":[]},{"_id":"628a2e016be662987d28d8ec","target":"Eadel_produdction_34","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":164,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8ec","email":[]},{"_id":"628a2e016be662987d28d8f6","target":"Eadel_staging_35","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":165,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8f6","email":[]},{"_id":"628a2e016be662987d28d8fb","target":"Eadel_produdction_36","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d8c8","name":166,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d8fb","email":[]},{"_id":"628a2e016be662987d28d900","target":"Eadel_staging_37","emails":[""],"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d8c8","name":167,"number":"87","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d900","email":[]},{"_id":"628a2e016be662987d28d921","target":"Eadel_produdction_38","emails":[""],"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d907","name":168,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"628a2e016be662987d28d921","email":[]},{"_id":"62bdab74d1e764f498206784","target":"Eadel_staging_39","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d907","name":169,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d556bdd1e764f4982070fe","instance":"62bdab74d1e764f498206784","dueDate":"2022-08-01T22:00:00.000Z","keyJira":"TAG-169","createdAt":"2022-07-18T12:49:01.533Z","updatedAt":"2022-07-18T12:49:01.533Z","__v":0,"id":"62d556bdd1e764f4982070fe"}],"id":"62bdab74d1e764f498206784","email":[]},{"_id":"62bdab89d1e764f498206794","target":"Eadel_produdction_40","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d907","name":170,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d5565dd1e764f4982070e3","instance":"62bdab89d1e764f498206794","dueDate":"2022-07-27T22:00:00.000Z","keyJira":"TWI-170","createdAt":"2022-07-18T12:47:25.231Z","updatedAt":"2022-07-18T12:47:25.231Z","__v":0,"id":"62d5565dd1e764f4982070e3"}],"id":"62bdab89d1e764f498206794","email":[]},{"_id":"62bdab9ad1e764f4982067a4","target":"Eadel_staging_41","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d907","name":171,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d556a3d1e764f4982070f5","instance":"62bdab9ad1e764f4982067a4","dueDate":"2022-08-01T22:00:00.000Z","keyJira":"ZOO-171","createdAt":"2022-07-18T12:48:35.398Z","updatedAt":"2022-07-18T12:48:35.398Z","__v":0,"id":"62d556a3d1e764f4982070f5"}],"id":"62bdab9ad1e764f4982067a4","email":[]},{"_id":"62f36bac956dfbdbc210575f","target":"Eadel_produdction_42","emails":null,"type":"PRODUCTION","erpProject":"Commercial","server":{"_id":"628a2e016be662987d28d907","name":172,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[],"id":"62f36bac956dfbdbc210575f","email":[]},{"_id":"62bdabb0d1e764f4982067b4","target":"Eadel_staging_43","emails":null,"type":"STAGING","erpProject":"Finance","server":{"_id":"628a2e016be662987d28d907","name":173,"number":"88","host":"florentplomb.ch","port":0,"config":{"updateAfter":""}},"url":"www.florentplomb.ch","lastUpdate":[{"_id":"62d5568ad1e764f4982070ec","instance":"62bdabb0d1e764f4982067b4","dueDate":"2022-08-01T22:00:00.000Z","keyJira":"TEK-173","createdAt":"2022-07-18T12:48:10.801Z","updatedAt":"2022-07-18T12:48:10.801Z","__v":0,"id":"62d5568ad1e764f4982070ec"}],"id":"62bdabb0d1e764f4982067b4","email":[]}],"createdAt":"2022-05-22T12:29:03.523Z","updatedAt":"2023-01-16T10:31:24.690Z","__v":24}]');

/***/ }),

/***/ 7543:
/*!**************************************************!*\
  !*** ./src/assets/sampleData/updatesSample.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"_id":"63d8e2eb716e0eb2fbef35c8","instance":{"_id":"628df5cbf26ec12b907b07b7","target":"Flashspan","server":{"_id":"628df57cf26ec12b907b07aa","name":"1","number":"1000","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"628df5cbf26ec12b907b07b7"},"dueDate":"2023-01-31T23:00:00.000Z","keyJira":"FLA-1","createdAt":"2023-01-31T09:44:11.615Z","updatedAt":"2023-01-31T13:48:35.206Z","__v":0,"id":"63d8e2eb716e0eb2fbef35c8"},{"_id":"63d905c3716e0eb2fbef35e1","instance":{"_id":"628a2dfc6be662987d28cf9e","target":"Oyoyo","server":{"_id":"628a2dfc6be662987d28cf40","name":"1","number":"54","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2dfc6be662987d28cf9e"},"dueDate":"2023-02-06T23:00:00.000Z","keyJira":"OYO-2","createdAt":"2023-01-31T12:12:51.189Z","updatedAt":"2023-02-07T15:04:21.165Z","__v":0,"id":"63d905c3716e0eb2fbef35e1"},{"_id":"63d90cef716e0eb2fbef35f1","instance":{"_id":"629630def26ec12b907b0c36","target":"Yabox","server":{"_id":"629630bdf26ec12b907b0c29","name":"1","number":"1004","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"629630def26ec12b907b0c36"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"YAB-3","createdAt":"2023-01-31T12:43:27.161Z","updatedAt":"2023-01-31T12:43:27.161Z","__v":0,"id":"63d90cef716e0eb2fbef35f1"},{"_id":"63d94268716e0eb2fbef364b","instance":{"_id":"628a2e016be662987d28d8ad","target":"Feednation","server":{"_id":"628a2e016be662987d28d898","name":"1","number":"86","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d8ad"},"dueDate":"2023-02-05T23:00:00.000Z","keyJira":"FEE-4","createdAt":"2023-01-31T16:31:36.784Z","updatedAt":"2023-01-31T16:31:36.784Z","__v":0,"id":"63d94268716e0eb2fbef364b"},{"_id":"63da66d8716e0eb2fbef3696","instance":{"_id":"628a2dff6be662987d28d4af","target":"Vinte","server":{"_id":"628a2dff6be662987d28d49f","name":"1","number":"83","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d4af"},"dueDate":"2023-02-05T23:00:00.000Z","keyJira":"VIN-5","createdAt":"2023-02-01T13:19:20.797Z","updatedAt":"2023-02-01T13:19:20.797Z","__v":0,"id":"63da66d8716e0eb2fbef3696"},{"_id":"63da6cff716e0eb2fbef36a6","instance":{"_id":"62960c95f26ec12b907b0a54","target":"Browseblab","server":{"_id":"628df57cf26ec12b907b07aa","name":"1","number":"1000","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62960c95f26ec12b907b0a54"},"dueDate":"2023-01-31T23:00:00.000Z","keyJira":"BRO-6","createdAt":"2023-02-01T13:45:35.269Z","updatedAt":"2023-02-01T13:45:35.269Z","__v":0,"id":"63da6cff716e0eb2fbef36a6"},{"_id":"63da7d84716e0eb2fbef36c6","instance":{"_id":"628a2dfe6be662987d28d392","target":"Brightbean","server":{"_id":"628a2dfe6be662987d28d38c","name":"1","number":"80","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d392"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"BRI-7","createdAt":"2023-02-01T14:56:04.123Z","updatedAt":"2023-02-01T14:56:04.123Z","__v":0,"id":"63da7d84716e0eb2fbef36c6"},{"_id":"63dcb7fd716e0eb2fbef373c","instance":{"_id":"62a2f749f26ec12b907b101b","target":"Photobug","server":{"_id":"62a2f70af26ec12b907b0ff9","name":"1","number":"1005","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62a2f749f26ec12b907b101b"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"PHO-8","createdAt":"2023-02-03T07:30:05.089Z","updatedAt":"2023-02-03T07:30:05.089Z","__v":0,"id":"63dcb7fd716e0eb2fbef373c"},{"_id":"63dcc422716e0eb2fbef3772","instance":{"_id":"6296123bf26ec12b907b0abc","target":"Jaxbean","server":{"_id":"6296121df26ec12b907b0aaf","name":"1","number":"1001","host":"florentplomb.ch","port":8181},"url":"https://www.florentplomb.ch","id":"6296123bf26ec12b907b0abc"},"dueDate":"2023-02-05T23:00:00.000Z","keyJira":"JAX-9","createdAt":"2023-02-03T08:21:54.644Z","updatedAt":"2023-02-03T08:21:54.644Z","__v":0,"id":"63dcc422716e0eb2fbef3772"},{"_id":"63dce9a0716e0eb2fbef37ab","instance":{"_id":"628a2dfe6be662987d28d225","target":"Vinte","server":{"_id":"628a2dfe6be662987d28d1ed","name":"1","number":"72","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d225"},"dueDate":"2023-02-05T23:00:00.000Z","keyJira":"VIN-10","createdAt":"2023-02-03T11:01:52.464Z","updatedAt":"2023-02-03T11:01:52.464Z","__v":0,"id":"63dce9a0716e0eb2fbef37ab"},{"_id":"63dcff33716e0eb2fbef37d0","instance":{"_id":"628a2dfc6be662987d28cfd3","target":"Eabox","server":{"_id":"628a2dfc6be662987d28cfb9","name":"1","number":"40","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2dfc6be662987d28cfd3"},"dueDate":"2023-02-14T23:00:00.000Z","keyJira":"EAB-11","createdAt":"2023-02-03T12:33:55.329Z","updatedAt":"2023-02-13T12:40:44.983Z","__v":0,"id":"63dcff33716e0eb2fbef37d0"},{"_id":"63dd0a10716e0eb2fbef37ed","instance":{"_id":"62c59c3ad1e764f498206a7b","target":"Brainlounge","server":{"_id":"628a2e006be662987d28d725","name":"1","number":"77","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"62c59c3ad1e764f498206a7b"},"dueDate":"2023-02-14T23:00:00.000Z","keyJira":"BRA-12","createdAt":"2023-02-03T13:20:16.144Z","updatedAt":"2023-02-13T12:40:23.290Z","__v":0,"id":"63dd0a10716e0eb2fbef37ed"},{"_id":"63dd0a2c716e0eb2fbef37fd","instance":{"_id":"628a2e006be662987d28d66d","target":"Voonyx","server":{"_id":"628a2e006be662987d28d653","name":"1","number":"47","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d66d"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"VOO-13","createdAt":"2023-02-03T13:20:44.495Z","updatedAt":"2023-02-13T12:41:30.506Z","__v":0,"id":"63dd0a2c716e0eb2fbef37fd"},{"_id":"63e0b931716e0eb2fbef3835","instance":{"_id":"628a2e016be662987d28d7d4","target":"Snaptags","server":{"_id":"628a2e016be662987d28d7c9","name":"1","number":"73","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d7d4"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"SNA-14","createdAt":"2023-02-06T08:24:17.894Z","updatedAt":"2023-02-06T08:24:17.894Z","__v":0,"id":"63e0b931716e0eb2fbef3835"},{"_id":"63e0b94a716e0eb2fbef3845","instance":{"_id":"628a2dfe6be662987d28d225","target":"Yadel","server":{"_id":"628a2dfe6be662987d28d1ed","name":"1","number":"72","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d225"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"YAD-15","createdAt":"2023-02-06T08:24:42.654Z","updatedAt":"2023-02-06T08:24:42.654Z","__v":0,"id":"63e0b94a716e0eb2fbef3845"},{"_id":"63e0fd82716e0eb2fbef3878","instance":{"_id":"628a2e006be662987d28d698","target":"Topicstorm","server":{"_id":"628a2e006be662987d28d67e","name":"1","number":"76","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d698"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"TOP-16","createdAt":"2023-02-06T13:15:46.700Z","updatedAt":"2023-02-06T13:15:46.700Z","__v":0,"id":"63e0fd82716e0eb2fbef3878"},{"_id":"63e1096a716e0eb2fbef388f","instance":{"_id":"628a2e006be662987d28d611","target":"Ooba","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d611"},"dueDate":"2023-02-14T23:00:00.000Z","keyJira":"OOB-17","createdAt":"2023-02-06T14:06:34.562Z","updatedAt":"2023-02-06T14:06:34.562Z","__v":0,"id":"63e1096a716e0eb2fbef388f"},{"_id":"63e219cb716e0eb2fbef38d8","instance":{"_id":"628a2dfd6be662987d28d172","target":"Yombu","server":{"_id":"628a2dfd6be662987d28d14e","name":"1","number":"46","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2dfd6be662987d28d172"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"YOM-18","createdAt":"2023-02-07T09:28:43.217Z","updatedAt":"2023-02-07T09:28:43.217Z","__v":0,"id":"63e219cb716e0eb2fbef38d8"},{"_id":"63e2332c716e0eb2fbef38f6","instance":{"_id":"628a2dff6be662987d28d447","target":"Jatri","server":{"_id":"628a2dff6be662987d28d428","name":"1","number":"79","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d447"},"dueDate":"2023-02-14T23:00:00.000Z","keyJira":"JAT-19","createdAt":"2023-02-07T11:17:00.137Z","updatedAt":"2023-02-07T11:17:00.137Z","__v":0,"id":"63e2332c716e0eb2fbef38f6"},{"_id":"63e24f97716e0eb2fbef390d","instance":{"_id":"628a2e016be662987d28d873","target":"Skilith","server":{"_id":"628a2e016be662987d28d863","name":"1","number":"63","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d873"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"SKI-20","createdAt":"2023-02-07T13:18:15.061Z","updatedAt":"2023-02-07T13:18:15.061Z","__v":0,"id":"63e24f97716e0eb2fbef390d"},{"_id":"63e25063716e0eb2fbef391d","instance":{"_id":"628a2dfe6be662987d28d26c","target":"Kayveo","server":{"_id":"628a2dfe6be662987d28d261","name":"1","number":"84","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d26c"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"KAY-21","createdAt":"2023-02-07T13:21:39.948Z","updatedAt":"2023-02-07T13:21:39.948Z","__v":0,"id":"63e25063716e0eb2fbef391d"},{"_id":"63e2687f716e0eb2fbef395a","instance":{"_id":"628a2e006be662987d28d611","target":"Tanoodle","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d611"},"dueDate":"2023-02-07T15:04:25.919Z","keyJira":"TAN-22","createdAt":"2023-02-07T15:04:31.013Z","updatedAt":"2023-02-07T15:04:31.013Z","__v":0,"id":"63e2687f716e0eb2fbef395a"},{"_id":"63e27594716e0eb2fbef3978","instance":{"_id":"628a2dff6be662987d28d4af","target":"Babbleset","server":{"_id":"628a2dff6be662987d28d49f","name":"1","number":"83","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d4af"},"dueDate":"2023-02-07T15:59:36.912Z","keyJira":"BAB-23","createdAt":"2023-02-07T16:00:20.277Z","updatedAt":"2023-02-07T16:00:20.277Z","__v":0,"id":"63e27594716e0eb2fbef3978"},{"_id":"63e35251716e0eb2fbef398f","instance":{"_id":"628a2dfe6be662987d28d301","target":"Tagchat","server":{"_id":"628a2dfe6be662987d28d2d8","name":"1","number":"55","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d301"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"TAG-24","createdAt":"2023-02-08T07:42:09.558Z","updatedAt":"2023-02-08T07:42:09.558Z","__v":0,"id":"63e35251716e0eb2fbef398f"},{"_id":"63e3536b716e0eb2fbef39e0","instance":{"_id":"62a2f728f26ec12b907b1006","target":"Avavee","server":{"_id":"62a2f70af26ec12b907b0ff9","name":"1","number":"1005","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62a2f728f26ec12b907b1006"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"AVA-25","createdAt":"2023-02-08T07:46:51.050Z","updatedAt":"2023-02-08T07:46:51.050Z","__v":0,"id":"63e3536b716e0eb2fbef39e0"},{"_id":"63e3750c716e0eb2fbef39f7","instance":{"_id":"6360dbf01414ae7fd42a5d6d","target":"Trilith","server":{"_id":"628a2dff6be662987d28d458","name":"1","number":"81","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"6360dbf01414ae7fd42a5d6d"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"TRI-26","createdAt":"2023-02-08T10:10:20.991Z","updatedAt":"2023-02-08T10:10:20.991Z","__v":0,"id":"63e3750c716e0eb2fbef39f7"},{"_id":"63e3aed2716e0eb2fbef3a28","instance":{"_id":"63d7bf2e716e0eb2fbef34e9","target":"Thoughtblab","server":{"_id":"628a2dff6be662987d28d3d0","name":"1","number":"66","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"63d7bf2e716e0eb2fbef34e9"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"THO-27","createdAt":"2023-02-08T14:16:50.787Z","updatedAt":"2023-02-08T14:16:50.787Z","__v":0,"id":"63e3aed2716e0eb2fbef3a28"},{"_id":"63e3d3d3716e0eb2fbef3a64","instance":{"_id":"628a2e006be662987d28d593","target":"Flipopia","server":{"_id":"632ad050c3d6a64f03417620","name":"1","number":"61","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d593"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"FLI-28","createdAt":"2023-02-08T16:54:43.728Z","updatedAt":"2023-02-08T16:54:43.728Z","__v":0,"id":"63e3d3d3716e0eb2fbef3a64"},{"_id":"63e4ebb4716e0eb2fbef3a92","instance":{"_id":"628a2e016be662987d28d887","target":"Riffpedia","server":{"_id":"628a2e016be662987d28d863","name":"1","number":"63","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d887"},"dueDate":"2023-02-12T23:00:00.000Z","keyJira":"RIF-29","createdAt":"2023-02-09T12:48:52.078Z","updatedAt":"2023-02-09T12:48:52.078Z","__v":0,"id":"63e4ebb4716e0eb2fbef3a92"},{"_id":"63e4ef49716e0eb2fbef3ab0","instance":{"_id":"628a2dff6be662987d28d489","target":"Midel","server":{"_id":"62c3d5f8d1e764f4982068ec","name":"1","number":"91","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d489"},"dueDate":"2023-02-15T23:00:00.000Z","keyJira":"MID-30","createdAt":"2023-02-09T13:04:09.605Z","updatedAt":"2023-02-13T07:16:13.088Z","__v":0,"id":"63e4ef49716e0eb2fbef3ab0"},{"_id":"63e50aac716e0eb2fbef3aeb","instance":{"_id":"6360db8d1414ae7fd42a5d4d","target":"Jaxworks","server":{"_id":"628a2dfd6be662987d28d192","name":"1","number":"56","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"6360db8d1414ae7fd42a5d4d"},"dueDate":"2023-02-15T23:00:00.000Z","keyJira":"JAX-31","createdAt":"2023-02-09T15:01:00.664Z","updatedAt":"2023-02-13T07:16:23.333Z","__v":0,"id":"63e50aac716e0eb2fbef3aeb"},{"_id":"63e61feb716e0eb2fbef3b9d","instance":{"_id":"628a2dff6be662987d28d3ab","target":"Meemm","server":{"_id":"628a2dfe6be662987d28d38c","name":"1","number":"80","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d3ab"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"MEE-32","createdAt":"2023-02-10T10:43:55.359Z","updatedAt":"2023-02-10T10:43:55.359Z","__v":0,"id":"63e61feb716e0eb2fbef3b9d"},{"_id":"63e65391716e0eb2fbef3bec","instance":{"_id":"628a2dff6be662987d28d4af","target":"Brainverse","server":{"_id":"628a2dff6be662987d28d49f","name":"1","number":"83","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d4af"},"dueDate":"2023-02-13T23:00:00.000Z","keyJira":"BRA-33","createdAt":"2023-02-10T14:24:17.758Z","updatedAt":"2023-02-10T14:24:17.758Z","__v":0,"id":"63e65391716e0eb2fbef3bec"},{"_id":"63ea2d09716e0eb2fbef3c86","instance":{"_id":"63d7c06f716e0eb2fbef3575","target":"Brightdog","server":{"_id":"628a2dfe6be662987d28d38c","name":"1","number":"80","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"63d7c06f716e0eb2fbef3575"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"BRI-34","createdAt":"2023-02-13T12:28:57.813Z","updatedAt":"2023-02-13T12:28:57.813Z","__v":0,"id":"63ea2d09716e0eb2fbef3c86"},{"_id":"63ea44ca716e0eb2fbef3cfe","instance":{"_id":"628a2e006be662987d28d611","target":"Trudoo","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d611"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"TRU-35","createdAt":"2023-02-13T14:10:18.867Z","updatedAt":"2023-02-13T14:10:18.867Z","__v":0,"id":"63ea44ca716e0eb2fbef3cfe"},{"_id":"63ea453e716e0eb2fbef3d1f","instance":{"_id":"628a2e006be662987d28d616","target":"Abatz","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d616"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"ABA-36","createdAt":"2023-02-13T14:12:14.673Z","updatedAt":"2023-02-13T14:12:14.673Z","__v":0,"id":"63ea453e716e0eb2fbef3d1f"},{"_id":"63ea5257716e0eb2fbef3d36","instance":{"_id":"628a2e016be662987d28d933","target":"Oyoyo","server":{"_id":"628a2e016be662987d28d92d","name":"1","number":"89","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d933"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"OYO-37","createdAt":"2023-02-13T15:08:07.685Z","updatedAt":"2023-02-13T15:08:07.685Z","__v":0,"id":"63ea5257716e0eb2fbef3d36"},{"_id":"63eb3688716e0eb2fbef3d72","instance":{"_id":"628a2dff6be662987d28d3a1","target":"Meezzy","server":{"_id":"628a2dfe6be662987d28d38c","name":"1","number":"80","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d3a1"},"dueDate":"2023-02-15T23:00:00.000Z","keyJira":"MEE-38","createdAt":"2023-02-14T07:21:44.740Z","updatedAt":"2023-02-14T07:21:44.740Z","__v":0,"id":"63eb3688716e0eb2fbef3d72"},{"_id":"63eb36aa716e0eb2fbef3d80","instance":{"_id":"628a2dff6be662987d28d4cd","target":"Voomm","server":{"_id":"628a2dff6be662987d28d49f","name":"1","number":"83","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d4cd"},"dueDate":"2023-02-15T23:00:00.000Z","keyJira":"VOO-39","createdAt":"2023-02-14T07:22:18.654Z","updatedAt":"2023-02-14T07:22:18.654Z","__v":0,"id":"63eb36aa716e0eb2fbef3d80"},{"_id":"63eb5a69716e0eb2fbef3dc5","instance":{"_id":"629630def26ec12b907b0c36","target":"Brainsphere","server":{"_id":"629630bdf26ec12b907b0c29","name":"1","number":"1004","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"629630def26ec12b907b0c36"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"BRA-40","createdAt":"2023-02-14T09:54:49.354Z","updatedAt":"2023-02-14T09:54:49.354Z","__v":0,"id":"63eb5a69716e0eb2fbef3dc5"},{"_id":"63eb63be716e0eb2fbef3de3","instance":{"_id":"62ab8a8e8ae397d879514010","target":"Youspan","server":{"_id":"628a2e016be662987d28d898","name":"1","number":"86","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"62ab8a8e8ae397d879514010"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"YOU-41","createdAt":"2023-02-14T10:34:38.408Z","updatedAt":"2023-02-14T10:34:38.408Z","__v":0,"id":"63eb63be716e0eb2fbef3de3"},{"_id":"63eb63cc716e0eb2fbef3df3","instance":{"_id":"62ab8adb8ae397d87951402e","target":"Shuffledrive","server":{"_id":"628a2dff6be662987d28d458","name":"1","number":"81","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"62ab8adb8ae397d87951402e"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"SHU-42","createdAt":"2023-02-14T10:34:52.569Z","updatedAt":"2023-02-14T10:34:52.569Z","__v":0,"id":"63eb63cc716e0eb2fbef3df3"},{"_id":"63eb63e2716e0eb2fbef3e05","instance":{"_id":"62ab8aaa8ae397d87951401f","target":"Yombu","server":{"_id":"628a2e016be662987d28d898","name":"1","number":"86","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"62ab8aaa8ae397d87951401f"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"YOM-43","createdAt":"2023-02-14T10:35:14.500Z","updatedAt":"2023-02-14T10:35:14.500Z","__v":0,"id":"63eb63e2716e0eb2fbef3e05"},{"_id":"63eb63f0716e0eb2fbef3e17","instance":{"_id":"62ab8afe8ae397d87951403d","target":"Demizz","server":{"_id":"628a2dff6be662987d28d458","name":"1","number":"81","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"62ab8afe8ae397d87951403d"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"DEM-44","createdAt":"2023-02-14T10:35:28.831Z","updatedAt":"2023-02-14T10:35:28.831Z","__v":0,"id":"63eb63f0716e0eb2fbef3e17"},{"_id":"63ecc6d2716e0eb2fbef3e5b","instance":{"_id":"634672a82c6f56d20a92de7a","target":"Gabspot","server":{"_id":"628a2dfd6be662987d28d192","name":"1","number":"56","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"634672a82c6f56d20a92de7a"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"GAB-45","createdAt":"2023-02-15T11:49:38.396Z","updatedAt":"2023-02-15T11:49:38.396Z","__v":0,"id":"63ecc6d2716e0eb2fbef3e5b"},{"_id":"63ecdd9b716e0eb2fbef3e7b","instance":{"_id":"628a2dff6be662987d28d47a","target":"Quimba","server":{"_id":"62c3d5f8d1e764f4982068ec","name":"1","number":"91","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d47a"},"dueDate":"2023-02-20T23:00:00.000Z","keyJira":"QUI-46","createdAt":"2023-02-15T13:26:51.753Z","updatedAt":"2023-02-15T13:26:51.753Z","__v":0,"id":"63ecdd9b716e0eb2fbef3e7b"},{"_id":"63ee30b6716e0eb2fbef3ef3","instance":{"_id":"628a2e006be662987d28d611","target":"Yadel","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d611"},"dueDate":"2023-02-16T13:32:39.465Z","keyJira":"YAD-47","createdAt":"2023-02-16T13:33:42.078Z","updatedAt":"2023-02-16T13:33:42.078Z","__v":0,"id":"63ee30b6716e0eb2fbef3ef3"},{"_id":"63ee35f1716e0eb2fbef3f0c","instance":{"_id":"62a2f749f26ec12b907b101b","target":"Centimia","server":{"_id":"62a2f70af26ec12b907b0ff9","name":"1","number":"1005","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62a2f749f26ec12b907b101b"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"CEN-48","createdAt":"2023-02-16T13:56:01.290Z","updatedAt":"2023-02-16T13:56:01.290Z","__v":0,"id":"63ee35f1716e0eb2fbef3f0c"},{"_id":"63ef2895716e0eb2fbef3f53","instance":{"_id":"628a2dfc6be662987d28cf53","target":"Jaxworks","server":{"_id":"628a2dfc6be662987d28cf40","name":"1","number":"54","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2dfc6be662987d28cf53"},"dueDate":"2023-02-20T23:00:00.000Z","keyJira":"JAX-49","createdAt":"2023-02-17T07:11:17.491Z","updatedAt":"2023-02-17T07:11:17.491Z","__v":0,"id":"63ef2895716e0eb2fbef3f53"},{"_id":"63ef450b716e0eb2fbef3f71","instance":{"_id":"628a2e006be662987d28d73a","target":"Avamm","server":{"_id":"628a2e006be662987d28d725","name":"1","number":"77","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d73a"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"AVA-50","createdAt":"2023-02-17T09:12:43.730Z","updatedAt":"2023-02-17T09:12:43.730Z","__v":0,"id":"63ef450b716e0eb2fbef3f71"},{"_id":"63ef53d3716e0eb2fbef3f8d","instance":{"_id":"628a2dfe6be662987d28d33d","target":"Meembee","server":{"_id":"628a2dfe6be662987d28d2d8","name":"1","number":"55","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d33d"},"dueDate":"2023-02-19T23:00:00.000Z","keyJira":"MEE-51","createdAt":"2023-02-17T10:15:47.982Z","updatedAt":"2023-02-17T10:15:47.982Z","__v":0,"id":"63ef53d3716e0eb2fbef3f8d"},{"_id":"63f34c6d716e0eb2fbef3fea","instance":{"_id":"628a2dff6be662987d28d56a","target":"Meembee","server":{"_id":"628a2dff6be662987d28d55a","name":"1","number":"70","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d56a"},"dueDate":"2023-03-01T23:00:00.000Z","keyJira":"MEE-52","createdAt":"2023-02-20T10:33:17.891Z","updatedAt":"2023-02-20T10:42:57.403Z","__v":0,"id":"63f34c6d716e0eb2fbef3fea"},{"_id":"63f34ce0716e0eb2fbef3ffa","instance":{"_id":"628a2dff6be662987d28d3db","target":"Skyba","server":{"_id":"628a2dff6be662987d28d3d0","name":"1","number":"66","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d3db"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"SKY-53","createdAt":"2023-02-20T10:35:12.262Z","updatedAt":"2023-02-20T10:35:12.262Z","__v":0,"id":"63f34ce0716e0eb2fbef3ffa"},{"_id":"63f34efd716e0eb2fbef4068","instance":{"_id":"628a2dfe6be662987d28d301","target":"Tagpad","server":{"_id":"628a2dfe6be662987d28d2d8","name":"1","number":"55","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d301"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"TAG-54","createdAt":"2023-02-20T10:44:13.309Z","updatedAt":"2023-02-20T10:44:13.309Z","__v":0,"id":"63f34efd716e0eb2fbef4068"},{"_id":"63f34f37716e0eb2fbef4089","instance":{"_id":"628a2dfe6be662987d28d329","target":"Dablist","server":{"_id":"628a2dfe6be662987d28d2d8","name":"1","number":"55","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d329"},"dueDate":"2023-03-12T23:00:00.000Z","keyJira":"DAB-55","createdAt":"2023-02-20T10:45:11.309Z","updatedAt":"2023-02-20T10:45:11.309Z","__v":0,"id":"63f34f37716e0eb2fbef4089"},{"_id":"63f394bb716e0eb2fbef4188","instance":{"_id":"6360db8d1414ae7fd42a5d4d","target":"Skilith","server":{"_id":"628a2dfd6be662987d28d192","name":"1","number":"56","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"6360db8d1414ae7fd42a5d4d"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"SKI-56","createdAt":"2023-02-20T15:41:47.304Z","updatedAt":"2023-02-20T15:41:47.304Z","__v":0,"id":"63f394bb716e0eb2fbef4188"},{"_id":"63f4736d716e0eb2fbef41a7","instance":{"_id":"628a2e016be662987d28d887","target":"Tanoodle","server":{"_id":"628a2e016be662987d28d863","name":"1","number":"63","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d887"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"TAN-57","createdAt":"2023-02-21T07:31:57.111Z","updatedAt":"2023-02-21T07:31:57.111Z","__v":0,"id":"63f4736d716e0eb2fbef41a7"},{"_id":"63f4770a716e0eb2fbef41be","instance":{"_id":"628a2dff6be662987d28d4af","target":"Fivebridge","server":{"_id":"628a2dff6be662987d28d49f","name":"1","number":"83","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d4af"},"dueDate":"2023-02-20T23:00:00.000Z","keyJira":"FIV-58","createdAt":"2023-02-21T07:47:22.127Z","updatedAt":"2023-02-21T07:47:22.127Z","__v":0,"id":"63f4770a716e0eb2fbef41be"},{"_id":"63f47b0c716e0eb2fbef41ce","instance":{"_id":"628a2dfe6be662987d28d237","target":"Flashpoint","server":{"_id":"628a2dfe6be662987d28d22c","name":"1","number":"48","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d237"},"dueDate":"2023-03-05T23:00:00.000Z","keyJira":"FLA-59","createdAt":"2023-02-21T08:04:28.921Z","updatedAt":"2023-02-21T08:04:28.921Z","__v":0,"id":"63f47b0c716e0eb2fbef41ce"},{"_id":"63f47bbd716e0eb2fbef41de","instance":{"_id":"628a2dff6be662987d28d447","target":"Dynava","server":{"_id":"628a2dff6be662987d28d428","name":"1","number":"79","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d447"},"dueDate":"2023-03-07T23:00:00.000Z","keyJira":"DYN-60","createdAt":"2023-02-21T08:07:25.344Z","updatedAt":"2023-02-21T08:07:25.344Z","__v":0,"id":"63f47bbd716e0eb2fbef41de"},{"_id":"63f4c797716e0eb2fbef41ff","instance":{"_id":"628a2e016be662987d28d8ad","target":"Teklist","server":{"_id":"628a2e016be662987d28d898","name":"1","number":"86","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d8ad"},"dueDate":"2023-02-21T23:00:00.000Z","keyJira":"TEK-61","createdAt":"2023-02-21T13:31:03.436Z","updatedAt":"2023-02-21T13:31:03.436Z","__v":0,"id":"63f4c797716e0eb2fbef41ff"},{"_id":"63f4fd7c716e0eb2fbef4239","instance":{"_id":"628a2dfd6be662987d28d0ec","target":"Gevee","server":{"_id":"62f36f9e956dfbdbc21057b4","name":"1","number":"90","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfd6be662987d28d0ec"},"dueDate":"2023-03-19T23:00:00.000Z","keyJira":"GEV-62","createdAt":"2023-02-21T17:21:00.509Z","updatedAt":"2023-02-21T17:21:00.509Z","__v":0,"id":"63f4fd7c716e0eb2fbef4239"},{"_id":"63f5d0e3716e0eb2fbef4250","instance":{"_id":"628a2dfd6be662987d28d18b","target":"Skyvu","server":{"_id":"628a2dfd6be662987d28d14e","name":"1","number":"46","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2dfd6be662987d28d18b"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"SKY-63","createdAt":"2023-02-22T08:22:59.436Z","updatedAt":"2023-02-22T08:22:59.436Z","__v":0,"id":"63f5d0e3716e0eb2fbef4250"},{"_id":"63f70dab716e0eb2fbef4295","instance":{"_id":"628a2dff6be662987d28d3ef","target":"Voomm","server":{"_id":"628a2dff6be662987d28d3d0","name":"1","number":"66","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d3ef"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"VOO-64","createdAt":"2023-02-23T06:54:35.887Z","updatedAt":"2023-02-23T06:54:55.378Z","__v":0,"id":"63f70dab716e0eb2fbef4295"},{"_id":"63f71376716e0eb2fbef42bd","instance":{"_id":"628df5cbf26ec12b907b07b7","target":"Innotype","server":{"_id":"628df57cf26ec12b907b07aa","name":"1","number":"1000","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"628df5cbf26ec12b907b07b7"},"dueDate":"2023-03-01T23:00:00.000Z","keyJira":"INN-65","createdAt":"2023-02-23T07:19:18.718Z","updatedAt":"2023-02-23T07:19:18.718Z","__v":0,"id":"63f71376716e0eb2fbef42bd"},{"_id":"63f718c6716e0eb2fbef42e5","instance":{"_id":"628a2e016be662987d28d912","target":"Vinder","server":{"_id":"628a2e016be662987d28d907","name":"1","number":"88","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2e016be662987d28d912"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"VIN-66","createdAt":"2023-02-23T07:41:58.336Z","updatedAt":"2023-02-23T07:41:58.336Z","__v":0,"id":"63f718c6716e0eb2fbef42e5"},{"_id":"63f718e9716e0eb2fbef42f7","instance":{"_id":"62b36dded1e764f49820634b","target":"Feedmix","server":{"_id":"628a2e016be662987d28d863","name":"1","number":"63","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"62b36dded1e764f49820634b"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"FEE-67","createdAt":"2023-02-23T07:42:33.609Z","updatedAt":"2023-02-23T07:42:33.609Z","__v":0,"id":"63f718e9716e0eb2fbef42f7"},{"_id":"63f74156716e0eb2fbef4350","instance":{"_id":"628a2dfd6be662987d28d070","target":"Browsecat","server":{"_id":"628a2dfd6be662987d28d060","name":"1","number":"52","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2dfd6be662987d28d070"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"BRO-68","createdAt":"2023-02-23T10:35:02.462Z","updatedAt":"2023-02-23T10:35:02.462Z","__v":0,"id":"63f74156716e0eb2fbef4350"},{"_id":"63f76364716e0eb2fbef4393","instance":{"_id":"62ff3d51956dfbdbc2105b7c","target":"Twinte","server":{"_id":"62ff3d01956dfbdbc2105b5e","name":"1","number":"1012","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62ff3d51956dfbdbc2105b7c"},"dueDate":"2023-02-28T23:00:00.000Z","keyJira":"TWI-69","createdAt":"2023-02-23T13:00:20.229Z","updatedAt":"2023-02-23T13:00:20.229Z","__v":0,"id":"63f76364716e0eb2fbef4393"},{"_id":"63f774aa716e0eb2fbef43ac","instance":{"_id":"628a2dfe6be662987d28d25f","target":"Linkbridge","server":{"_id":"628a2dfe6be662987d28d22c","name":"1","number":"48","host":"florentplomb.ch","port":1220},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d25f"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"LIN-70","createdAt":"2023-02-23T14:14:02.739Z","updatedAt":"2023-02-23T14:14:02.739Z","__v":0,"id":"63f774aa716e0eb2fbef43ac"},{"_id":"63f77583716e0eb2fbef43be","instance":{"_id":"628a2dff6be662987d28d3fe","target":"Npath","server":{"_id":"628a2dff6be662987d28d3d0","name":"1","number":"66","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dff6be662987d28d3fe"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"NPA-71","createdAt":"2023-02-23T14:17:39.012Z","updatedAt":"2023-02-23T15:05:48.714Z","__v":0,"id":"63f77583716e0eb2fbef43be"},{"_id":"63f78263716e0eb2fbef43f1","instance":{"_id":"628a2e006be662987d28d611","target":"Youspan","server":{"_id":"628a2e006be662987d28d60b","name":"1","number":"62","host":"florentplomb.ch","port":22},"url":"https://www.florentplomb.ch","id":"628a2e006be662987d28d611"},"dueDate":"2023-02-23T15:12:05.766Z","keyJira":"YOU-72","createdAt":"2023-02-23T15:12:35.985Z","updatedAt":"2023-02-23T15:12:35.985Z","__v":0,"id":"63f78263716e0eb2fbef43f1"},{"_id":"63f89a3b716e0eb2fbef44cc","instance":{"_id":"628a2dfe6be662987d28d329","target":"Ailane","server":{"_id":"628a2dfe6be662987d28d2d8","name":"1","number":"55","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"628a2dfe6be662987d28d329"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"AIL-73","createdAt":"2023-02-24T11:06:35.993Z","updatedAt":"2023-02-24T11:06:35.993Z","__v":0,"id":"63f89a3b716e0eb2fbef44cc"},{"_id":"63f8a994716e0eb2fbef44e1","instance":{"_id":"634ff69a5c56ef31217b8b72","target":"Yombu","server":{"_id":"628a2e016be662987d28d81f","name":"1","number":"75","host":"florentplomb.ch","port":2022},"url":"https://www.florentplomb.ch","id":"634ff69a5c56ef31217b8b72"},"dueDate":"2023-02-26T23:00:00.000Z","keyJira":"YOM-74","createdAt":"2023-02-24T12:12:04.311Z","updatedAt":"2023-02-24T12:12:04.311Z","__v":0,"id":"63f8a994716e0eb2fbef44e1"},{"_id":"63f8b0a5716e0eb2fbef44f8","instance":{"_id":"62962258f26ec12b907b0b51","target":"Twitterlist","server":{"_id":"62962203f26ec12b907b0b44","name":"1","number":"1003","host":"florentplomb.ch","port":8443},"url":"https://www.florentplomb.ch","id":"62962258f26ec12b907b0b51"},"dueDate":"2023-02-27T23:00:00.000Z","keyJira":"TWI-75","createdAt":"2023-02-24T12:42:13.213Z","updatedAt":"2023-02-24T12:42:28.518Z","__v":0,"id":"63f8b0a5716e0eb2fbef44f8"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map