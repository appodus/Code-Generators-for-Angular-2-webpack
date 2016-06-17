# Code Generators for Angular 2 - Webpack project

This is an ultra-simple cli tool for generating Angular2 component, directive, service and pipe scaffolding, with naming conventions 
taken from the [Angular 2 Style Guide](https://angular.io/styleguide)

What is the difference between this generator and angular-cli? The anwser is that this generator is ultra-simple and that it can work anywhere, Angular-cli's generator can only work in an project generated with Angular-cli. It is more like live templates in Webstorm, but you insert your live template through command lines and they come in a set ready for you to start coding right away.

This project is an extension of [michaelbromley/cmpg](https://github.com/michaelbromley/cmpg) and is inspired by [angular-cli](https://github.com/angular/angular-cli).

### Templates
The templates for a webpack-based build using Sass for styles.

Special note: to compile the sass into css and then load the content as string to component in ng2 component, so that ng2's view encapsulation can work as intended:
```
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'to-string!css-loader!postcss-loader!sass-loader'
    }
```

### Usage
```bash
npm install -g ng-wp
```
#### Component Generator

`> ng-wp component component-name`
`> ng-wp lazy-component component-name`: generate a component in a new folder `+component-name`.

#### Service Generator

`> ng-wp service service-name`

#### Pipe Generator

`> ng-wp pipe pipe-name`

#### Directive Generator

`> ng-wp directive directive-name`

#### Example

That will generate a TypeScript component, test, HTML and Sass file named according to
the argument passed:

`> ng-wp component foo-selector`

result:

```
./foo-selector/
  |- foo-selector.component.ts
  |- foo-selector.component.spec.ts
  |- foo-selector.component.html
  |- foo-selector.scss
```

The TypeScript file will look like this:
```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'foo-selector',
  template: require('./foo-selector.component.html'),
  styles: [require('./foo-selector.scss')]
})
export class FooSelectorComponent {
}
```

If the templates are not to your liking, just go in `templates/` and
edit away. Make sure to run step 2 again after making any changes.

Github: https://github.com/rexebin/Code-Generators-for-Angular-2-webpack

License: MIT


