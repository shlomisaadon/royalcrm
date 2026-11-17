# Royal CRM

An Angular and Firebase CRM project with original development history from August 2021.

## What is in the code

- Customer listing, creation, editing, details, and deletion.
- Email/password authentication and Google sign-in through AngularFire.
- Route guards and a dashboard with nested routes.
- Firestore-backed customer services using RxJS observables and `shareReplay`.
- TypeScript interfaces, Angular components, forms, and Bootstrap styling.

## Explore the implementation

Start with [the routes](src/app/app-routing.module.ts), [authentication service](src/app/services/auth.service.ts), and [customer service](src/app/services/customers.service.ts).

## Local development

This repository uses Angular 12, AngularFire 6, and Firebase 7/8-era dependencies. Use a Node.js version compatible with that toolchain.

Configure your own Firebase project in `src/environments/environment.ts` and `src/environments/environment.prod.ts`. Enable the authentication providers you want to use and provision Firestore with access rules for your own data.

```sh
npm install
npm start
```

## Project history

[Original 2021 commits](https://github.com/shlomisaadon/royalcrm/commits/master/?since=2021-01-01&until=2021-12-31) document the early implementation.

The setup above describes the checked-in project. A fresh installation and live Firebase integration have not been revalidated during the November 2026 documentation update.
