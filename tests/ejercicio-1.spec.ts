import "mocha";
import {expect} from "chai";
import {decodeResistor} from "../src/ejercicio-1";

describe("Ejercicio 01: prueba", () => {
    it("decodeResistor(`negro`, `azul`) returns value 06", () => {
      expect(decodeResistor("negro","azul")).to.be.equal("06");
    });

    it("decodeResistor(`marron`, `violeta`) returns value 17", () => {
      expect(decodeResistor("marron","violeta")).to.be.equal("17");
    });
});