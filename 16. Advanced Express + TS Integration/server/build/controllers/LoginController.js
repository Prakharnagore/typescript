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
var express_1 = require("express");
var decorators_1 = require("./decorators");
var bodyValidator_1 = require("./decorators/bodyValidator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    /*
    error -  Type '(a: number, b: number) => number' is not assignable to
    type 'RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.
    */
    // @get("/")
    // add(a: number, b: number): number {
    //   return a + b;
    // }
    LoginController.prototype.getLogin = function (req, res) {
        var form = "<form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\"/>\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n        </form>";
        res.send(form);
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === "hi@hi.com" && password === "password") {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.send("Invalid email or password");
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect("/");
    };
    var _a, _b, _c, _d, _e, _f;
    __decorate([
        (0, decorators_1.get)("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.post)("/login"),
        (0, bodyValidator_1.bodyValidator)("email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        (0, decorators_1.get)("/logout"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_e = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        (0, decorators_1.controller)("/auth")
    ], LoginController);
    return LoginController;
}());
