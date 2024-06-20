import { NextFunction, Request, Response } from "express";
import { get, controller, use, post } from "./decorators";
import { bodyValidator } from "./decorators/bodyValidator";

@controller("/auth")
class LoginController {
  /* 
  error -  Type '(a: number, b: number) => number' is not assignable to 
  type 'RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.
  */
  // @get("/")
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get("/login")
  getLogin(req: Request, res: Response): void {
    const form = `<form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
        </form>`;
    res.send(form);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
