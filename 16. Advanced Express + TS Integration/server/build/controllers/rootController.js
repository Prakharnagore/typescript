"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootController = void 0;
var express_1 = require("express");
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not Permitted");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n              <div>\n                  <div>You are logged in</div>\n                  <a href='/auth/logout'>Logout</a>\n              </div>\n              ");
        }
        else {
            res.send("\n              <div>\n                  <div>You are not logged in</div>\n                  <a href='/auth/login'>Login</a>\n              </div>\n              ");
        }
    };
    RootController.prototype.getProtectedRoute = function (req, res) {
        res.send("Welcome to protected route, logged in user");
    };
    var _a, _b, _c, _d;
    __decorate([
        (0, decorators_1.get)("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)("/protected"),
        (0, decorators_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtectedRoute", null);
    RootController = __decorate([
        (0, decorators_1.controller)("")
    ], RootController);
    return RootController;
}());
exports.RootController = RootController;
