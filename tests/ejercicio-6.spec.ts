import "mocha";
import {expect} from "chai";
import {add} from "../src/ejercicio-6";
import {subtraction} from "../src/ejercicio-6";
import {product} from "../src/ejercicio-6";
import {euclideanDistance} from "../src/ejercicio-6";

describe("Ejercicio 06: prueba", () => {
    it('add([1, 3],[2, 4] returns value [3, 7]', () => {
        expect(add([1, 3],[2, 4])).to.be.deep.equal([3, 7]);
    });

    it("subtraction([1, 3],[2, 4]) returns value [1, 1]", () => {
        expect(subtraction([1, 3],[2, 4])).to.be.deep.equal([1, 1]);
    });

    it("product([1, 3],(2))) returns value [2, 6]", () => {
        expect(product([1, 3],(2))).to.be.deep.equal([2, 6]);
    });

    it("euclideanDistance([2, 5],[3, 6]) returns value [1]", () => {
        expect(euclideanDistance([2, 5],[3, 6])).to.be.equal(1);
    });
});