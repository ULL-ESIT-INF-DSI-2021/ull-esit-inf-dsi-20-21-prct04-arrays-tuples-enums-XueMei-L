import "mocha";
import {expect} from "chai";
import {addEj7} from "../src/ejercicio-7";
import {subtractionEj7} from "../src/ejercicio-7";
import {productEj7} from "../src/ejercicio-7";
import {euclideanDistanceEj7} from "../src/ejercicio-7";

describe("Ejercicio 07: prueba", () => {
    it('add([2, 5, 1],[3, 6, 3] returns value [5, 11, 4]', () => {
        expect(addEj7([2, 5, 1],[3, 6, 3])).to.be.deep.equal([5, 11, 4]);
    });

    it("subtraction([2, 5, 1],[3, 6, 3]) returns value [-1, -1, -2]", () => {
        expect(subtractionEj7([2, 5, 1],[3, 6, 3])).to.be.deep.equal([-1, -1, -2]);
    });

    it("product([2, 5, 1],[3, 6, 3](2))) returns value [2, 6]", () => {
        expect(productEj7([2, 5, 1],(2))).to.be.deep.equal([4, 10, 2]);
    });

    it("euclideanDistance([2, 5, 1],[3, 6, 3]) returns value [2]", () => {
        expect(euclideanDistanceEj7([2, 5, 1],[3, 6, 3])).to.be.equal(2);
    });
});