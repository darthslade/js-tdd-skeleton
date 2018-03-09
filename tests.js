import { it, describe } from "mocha";
import { expect } from "chai";
//import { add } from "./code";
import { bowlingGame } from "./code";
// describe("add function", () => {
//     it("should add two numbers", () => {
//         expect(add(2, 3)).to.equal(5);
//     });
//
//     it("should add three numbers", () => {
//         expect(add(2, 3, 4)).to.equal(9);
//     });
// });

describe("bowling calculator", () => {
    it("should add up to ten frames", () => {
        let game = new bowlingGame();
        game.playFrame(2,6);
        expect(game.frames.length).to.equal(1);
    });

    it("should add up score for played frames", () => {
        let game = new bowlingGame();
        game.playFrame(2,6);
        expect(game.getScore()).to.equal(8);

        let game2 = new bowlingGame();
        game2.playFrame(8,1);
        expect(game2.getScore()).to.equal(9);
    });

    it("should see if frames have a spare", () => {
        let game = new bowlingGame();
        game.playFrame(5,5);
        game.playFrame(7,1);
        expect(game.getScore()).to.equal(25);
    });

    it("should see if frames have a strike", () => {
        let game = new bowlingGame();
        game.playFrame(10,null);
        game.playFrame(8,1);
        expect(game.getScore()).to.equal(28);
    });

    it("should see if there are consecutive strikes", () => {
        let game = new bowlingGame();
        game.playFrame(10,null);
        game.playFrame(10,null);
        game.playFrame(10,null);
        game.playFrame(8,1);
        expect(game.getScore()).to.equal(86);
    });
});

/*
    - game is an array of frames size 10.
    - 10 frames calculating score for each frame.
    - spare is 10 points + number of pins you get on next ball.
    - strike is same as spare is 10 points + number of pins you get on next two balls
    - on the 10th frame you get 3 balls if you get a strike or a spare.

    for the score it needs:
        number of frames played
        value of ball1 and ball2 added together for each frame = that frame score
        add frame scores from frames array for total score.
*/
