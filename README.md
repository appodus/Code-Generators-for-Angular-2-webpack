# Code Generators for Angular 2

This is an ultra-simple cli tool for generating Angular2 component, directive, service and pipe scaffolding, with naming conventions 
taken from the [Angular 2 Style Guide](https://angular.io/styleguide)

This project is the extension of michaelbromley/cmpg and is inspired by angular-cli.

### Templates
Currently the templates for a webpack-based build using Sass for styles. A good enhancement would be to somehow allow different template files to be specified.

### Usage

This is not currently published on npm.

Requires Node v4+

But it can be used like this:

1. Clone this repo.
2. `cd [repo dir]`
3. `npm install -g .`
4. Go to the new component location, e.g. `myapp/src/components`
3. `ng2g component my-component`, all generated files will be in a created new folder in the current directory.

#### Component Generator

`> ng2g component component-selector`, use kebab case for the component selector.

#### Service Generator

`> ng2g service ServiceName`, use pascal or camel case for the service name.

#### Pipe Generator

`> ng2g pipe pipeName`, use pascal or camel case for the pipe name.

#### Directive Generator

`> ng2g directive directiveName`, use pascal or camel case for the directive name.

#### Example

That will generate a TypeScript component, test, HTML and Sass file named according to
the argument passed:

`> ng2g component foo-selector`

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
  styles: [require('./foo-selector.scss').toString()]
})
export class FooSelectorComponent {
}
```

If the templates are not to your liking, just go in `templates/` and
edit away. Make sure to run step 2 again after making any changes.

That's it.

License: MIT
