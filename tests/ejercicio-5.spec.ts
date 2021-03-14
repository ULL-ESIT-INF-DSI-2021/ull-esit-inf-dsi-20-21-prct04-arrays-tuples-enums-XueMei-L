import "mocha";
import {expect} from "chai";
import {multiplyAll} from "../src/ejercicio-5";

describe("Ejercicio 05: prueba", () => {
    it('multiplyAll([2, 6, 8])(3) returns value [6, 18, 24]', () => {
        expect(multiplyAll([2, 6, 8])(3)).to.be.deep.equal([6, 18, 24]);
      });

    it("multiplyAll([1, 2, 3])(3) returns value [3, 6, 9]", () => {
      expect(multiplyAll([1, 2, 3])(3)).to.be.deep.equal([3, 6, 9]);
    });

});