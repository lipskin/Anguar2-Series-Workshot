# Steps

## Part 1

- Create folder `auth` in `src/app`;
- Create file `auth.component.ts`, `auth.component.html` and `index.ts` in `src/app/auth`;
- Add basic content to `auth.component.ts`, `auth.component.html` and `index.ts`;
- Add a route in `src/app/routes.ts`;
- Create folder `main` in `src/app`;
- Create file `main.component.ts`, `main.component.html` and `index.ts` in `src/app/main`;
- Remove `<app-bar>` in `app.html`;
- Change routerLink in `app-bar.html`;
- Extract routes for `Home` and `About` to children of `Main`;
- Create file `auth.service.ts` in `src/app/shared/services`;
- Add `JWT_KEY` property to `auth.service.ts`;
- Add `isAuthorized` method to `auth.service.ts`;
- Add `canActivate` method to `auth.service.ts`;
- Export `AuthGuard` in `src/app/shared/index.ts`;
- Add `canActivate` guard in route of `Main`;

## Part 2

- Add `--auth` in the api script;
- Add `setHeaders` method in ApiService;
- Add `setJWT` method in AuthService;
- Add logic in constructor in AuthService;
- Add `authenticate` method in AuthService;
- Add `signout` method in AuthService;

## Part 3

- Create file `auth.component.css` in `src/app/auth` and paste content;
- Replace the content of `auth.component.html` by pasting;
- Add properties to `auth.component.ts`;
- Add `ngOnInit` method to `auth.component.ts`;
- Add `changeMode` method to `auth.component.ts`;
