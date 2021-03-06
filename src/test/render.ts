import * as pug from 'pug';

import {PLATFORM} from 'aurelia-pal';
import {
  StageComponent,
  ComponentTester
}                 from 'aurelia-testing';

import {Aurelia}    from 'aurelia-framework';
import {components} from "aire/aire";

export function render(template : string, options? : any) : string {
  return pug.compile(template.trim())(options);
}


export let current = [];

export function newComponent(
  template : string,
  bindingContext : any,
  ...moduleNames : string[]
) : ComponentTester {

  if (!(moduleNames && moduleNames.length)) {
    // moduleNames = components.map(t => t.substr('aire/'.length));
    moduleNames = current;
  }

  let result = StageComponent.withResources(
    moduleNames.map(t => PLATFORM.moduleName(t)))
                             .inView(render(template))
                             .boundTo(bindingContext);
  result.configure = ((t : Aurelia) => {
    Object.defineProperty(result, 'aurelia', {
      value    : t,
      writable : true
    });
    return t.use.standardConfiguration();
  });
  return result;
}