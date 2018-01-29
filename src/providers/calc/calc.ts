import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';


@Plugin({
  pluginName: 'calculator',
  plugin: 'cordova-plugin-calculator',
  pluginRef: 'Calculator', 
  repo: 'https://github.com/jlahare/CalculatorPlugin.git', 
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})

@Injectable()
export class CalcProvider extends IonicNativePlugin  {

  @Cordova()
  add(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  multiply(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  substract(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  divide(arg1: any): Promise<string> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
