[![npm version](https://badge.fury.io/js/ng-wp.svg)](https://badge.fury.io/js/ng-wp)
# Code Generators for Angular 2 - Webpack project

This is an ultra-simple cli tool for generating Angular2 component, directive, service and pipe scaffolding, with naming conventions 
taken from the [Angular 2 Style Guide](https://angular.io/styleguide)

Recommanded Angular 2 webpack starter seeds:[AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) and [angular/angular2-seed](https://github.com/angular/angular2-seed)

What is the difference between this generator and angular-cli? The anwser is that this generator is ultra-simple and that it can work anywhere, Angular-cli's generator can only work in an project generated with Angular-cli. It is more like live templates in Webstorm, but you insert your live template through command lines and they come in a set ready for you to start coding right away.

This project is an extension of [michaelbromley/cmpg](https://github.com/michaelbromley/cmpg) and the templates come from [angular-cli](https://github.com/angular/angular-cli).

### Templates
The templates for a webpack-based build using Sass for styles.

#### Install and Configure Webpack Loaders

##### sass loader configuration
To compile the sass into css and then load the content as string to component in ng2 component, so that ng2's view encapsulation can work as intended:
```
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'to-string!css-loader!postcss-loader!sass-loader'
    }
```

##### angular2 template loader configuration
In component template, there is no need of `require` for template and styles, thanks to [TheLarkInn/angular2-template-loader](https://github.com/TheLarkInn/angular2-template-loader) which make it possible.

The way Angular2-template-loader works is before the ts loader get the ts file for compiling, it replaces `templateUrl:'my-component.component.html'` -> `template: require('my-component.component.html')` and `styleUrls:['my-component.component.scss']` -> `styles:[require('my-component.component.scss')]`*[]: 

Install angular2 template loader and update date loader configuration like this:
```
    {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader!angular2-template-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
    },
```

Configure `tsconfig.json`:
```
    {
      "compilerOptions": {
        ...
      },
      "awesomeTypescriptLoaderOptions": {
        ...
        "useWebpackText": true //Allows loaders to be chained to awesome-typescript-loader.
      },
    }
```

### Usage
```bash
npm install -g ng-wp
```
#### Component Generator
```bash
ng-wp component component-name
```
Generate a component in a new folder `+component-name`:
```bash
ng-wp lazy-component component-name
```
#### Service Generator
```bash
ng-wp service service-name
```
#### Pipe Generator
```bash
ng-wp pipe pipe-name
```
#### Directive Generator
```bash
ng-wp directive directive-name
```
### Example

That will generate a TypeScript component, test, HTML and Sass file named according to the argument passed:
```bash
ng-wp component foo-selector
```
result:

```
./foo-selector/
  |- foo-selector.component.ts
  |- foo-selector.component.spec.ts
  |- foo-selector.component.html
  |- foo-selector.scss
  |- index.ts
```

The TypeScript file will look like this:
```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'foo-selector',
  template: './foo-selector.component.html',
  styles: ['./foo-selector.scss']
})
export class FooSelectorComponent {
}
```

If the templates are not to your liking, then fork the repository, go in `/src/templates/` and
edit away, then install your local version globally:
```bash
npm i -g
```

You can also create a pull request if you think your templates are better.

Github: https://github.com/rexebin/Code-Generators-for-Angular-2-webpack

Maintained by [Rex](https://github.com/rexebin) and [asnowwolf](https://github.com/asnowwolf)

License: MIT


