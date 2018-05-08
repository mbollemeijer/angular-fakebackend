# Fakebackend

This module lets you easily do backend less development

### Usage
`app-fakebackend.ts`
```
let routes: Route[] = [];

routes.push({
    method: 'get',
    path: '/fake',
    intercept: (request) => {
        return of(new HttpResponse({
            status: 200,
            body: 'Fake it till you make it'
        }));
    }
});

@NgModule({
    imports: [ FakebackendModule.forRoutes(routes) ],
    exports: [ FakebackendModule ]
  })
export class AppFakebackendModule {
}
```

Add `AppFakebackendModule` to your `app.modules.ts`

# TODO

- Finish unit testing.
- Gather more use cases.
- Drink coffee
