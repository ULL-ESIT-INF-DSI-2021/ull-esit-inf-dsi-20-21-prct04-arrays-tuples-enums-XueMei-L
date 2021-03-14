import "mocha";
import {expect} from "chai";
import {agent} from "../src/ejercicio-8";

describe("Ejercicio 08: prueba", () => {

    it("agent(10, 10, [2, 3], [5, 4]) returns value [North, North, North, East]", () => {
      expect(agent(10, 10, [2, 3], [5, 4])).to.be.deep.equal(["North", "North", "North", "East"]);
    });

});