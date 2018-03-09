// export function add(a, b, c){
//     if (c) {
//         return a + b + c;
//     }
//     else{
//         return a + b;
//     }
// }

export class bowlingGame{
    constructor() {
        this.frames = [];
    }

    playFrame(ball1, ball2){
        this.frames.push([ball1, ball2]);
    }

    getScore(){
        let total = 0;

        this.frames.forEach(function(frame, index, frames){
            //if ball 1 is 10 then it is a X
            //if it is a X then score is 10 + next two balls values
            let frameTotal = frame[0] + frame[1];
            //for a spare
            if (frameTotal == 10) {
                frameTotal = 10 + frames[index + 1][0];
            }
            //for a strike
            if (frame[0] == 10) {
                //for consecutive strikes
                if (frames[index + 1][1] == null) {
                    frameTotal = 10 + frames[index + 1][0] + frames[index + 2][0];
                }
                else {
                    frameTotal = 10 + frames[index + 1][0] + frames[index + 1][1];
                }
            }
            total = total + frameTotal;
        });
        return total;
    }
}
