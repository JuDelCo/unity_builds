(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typescript/typescriptAPI/TypeScriptAPIPlugin.d.ts" />
"use strict";

SupCore.system.registerPlugin("typescriptAPI", "Light", {
    code: "namespace Sup {\r\n  export class Light extends Sup.ActorComponent {\r\n    type: Light.Type;\r\n\r\n    constructor(actor, options) {\r\n      super(actor);\r\n      this.__inner = new SupEngine.componentClasses.Light(this.actor.__inner);\r\n      this.__inner.__outer = this;\r\n      this.actor.light = this;\r\n\r\n      if (options == null) return;\r\n      this.type = options.type;\r\n      let types = [\"ambient\", \"point\", \"spot\", \"directional\"];\r\n      this.__inner.setType(types[this.type]);\r\n      this.__inner.setColor(options.color.getHex());\r\n      if (options.intensity != null) this.__inner.setIntensity(options.intensity);\r\n      if (options.distance != null) this.__inner.setDistance(options.distance);\r\n      if (options.angle != null) this.__inner.setAngle(options.angle);\r\n      if (options.target != null) this.__inner.setTarget(options.target.x, options.target.y, options.target.z);\r\n      if (options.castShadow != null) this.__inner.setCastShadow(options.castShadow);\r\n    }\r\n    destroy() {\r\n      this.actor.light = null;\r\n      super.destroy();\r\n    }\r\n\r\n    getType() { return this.type; }\r\n    setColor(color) { this.__inner.setColor(color.getHex()); return this; }\r\n    getColor() { return new Color(1, 1, 1).setHex(this.__inner.color); }\r\n    setIntensity(intensity) { this.__inner.setIntensity(intensity); return this; }\r\n    getIntensity() { return this.__inner.intensity; }\r\n    setDistance(distance) { this.__inner.setDistance(distance); return this; }\r\n    getDistance() { return this.__inner.distance; }\r\n    setAngle(angle) { this.__inner.setAngle(angle); return this; }\r\n    getAngle() { return this.__inner.angle; }\r\n    setTarget(target) { this.__inner.setTarget(target.x, target.y, target.z); return this; }\r\n    getTarget() { return new Math.Vector3(this.__inner.target.x, this.__inner.target.y, this.__inner.target.z); }\r\n    setCastShadow(castShadow) { this.__inner.setCastShadow(castShadow); return this; }\r\n    getCastShadow() { return this.__inner.castShadow; }\r\n  }\r\n\r\n  export namespace Light {\r\n    export enum Type { Ambient, Point, Spot, Directional };\r\n  }\r\n}\r\n",
    defs: "interface LightOptions {\r\n  type: Sup.Light.Type;\r\n  color: Sup.Color;\r\n  intensity?: number;\r\n  distance?: number;\r\n  angle?: number;\r\n  target?: {\r\n    x: number;\r\n    y: number;\r\n    z: number;\r\n  };\r\n  castShadow?: boolean;\r\n}\r\n\r\ndeclare namespace Sup {\r\n  class Light extends Sup.ActorComponent {\r\n    constructor(actor: Actor, options: LightOptions);\r\n\r\n    getType(): Sup.Light.Type;\r\n    setColor(color: Color): Light;\r\n    getColor(): Color;\r\n    setIntensity(intensity: number): Light;\r\n    getIntensity(): number;\r\n    setDistance(distance: number): Light;\r\n    getDistance(): number;\r\n    setAngle(angle: number): Light;\r\n    getAngle(): number;\r\n    setTarget(target: Sup.Math.XYZ): Light;\r\n    getTarget(): Math.Vector3;\r\n    setCastShadow(castShadow: boolean): Light;\r\n    getCastShadow(): boolean;\r\n  }\r\n\r\n  namespace Light {\r\n    enum Type { Ambient, Point, Spot, Directional }\r\n  }\r\n}\r\n",
    exposeActorComponent: { propertyName: "light", className: "Sup.Light" }
});

},{}]},{},[1]);