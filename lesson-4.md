#Steps

##Part 1

- Create folder `auth` in `src/app`;
- Create file `auth.component.ts`, `auth.component.html` and `index.ts` in `src/app/auth`;
- Add basic content to `auth.component.ts`, `auth.component.html` and `index.ts`;
- Add a route in `src/app/routes.ts`;
- Create folder `main` in `src/app`;
- Create file `main.component.ts`, `main.component.html` and `index.ts` in `src/app/main`;
- Remove `<app-bar>` in `app.html`;
- Change routerLink in `app-bar.html`;
- Extract routes for `Home` and `About` to children of `Main`;
- Create file `auth-guard.service.ts` in `src/app/shared/services`;
- Export `AuthGuard` in `src/app/shared/index.ts`;
- Add `canActivate` guard in route of `Main`;
