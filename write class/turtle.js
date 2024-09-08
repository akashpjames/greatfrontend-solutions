/*
Implement a Turtle class in JavaScript that simulates the movement of a turtle. The turtle starts at (0, 0) facing north, and has the following methods:

forward(distance): Moves the turtle forward by distance units in the direction it is facing.
backward(distance): Moves the turtle backward by distance units while facing the same direction.
left(): Rotates the turtle in-place 90 degrees to the left, changing only the direction it is facing.
right(): Rotates the turtle in-place 90 degrees to the right, changing only the direction it is facing.
position(): Returns the coordinates of the turtle as [x, y].
*/

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
const CARDINAL_DIRECTIONS = 4;

export default class Turtle {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = NORTH;
    }

    forward(distance) {
        this._move(distance);
        return this;
    }

    backward(distance) {
        this._move(distance*-1);
        return this;
    }

    _move(distance) {
        switch (this.direction) {
            case NORTH:
                this.y += distance;
                break;
            case EAST:
                this.x += distance;
                break;
            case SOUTH:
                this.y -= distance;
                break;
            case WEST:
                this.x -= distance;
                break;
        }
    }

    left() {
        this.direction = (this.direction - 1 + CARDINAL_DIRECTIONS) % CARDINAL_DIRECTIONS;
        return this;
    }

    right() {
        this.direction = (this.direction + 1 + CARDINAL_DIRECTIONS) % CARDINAL_DIRECTIONS;
        return this;
    }

    position() {
        return [this.x, this.y];
    }
}