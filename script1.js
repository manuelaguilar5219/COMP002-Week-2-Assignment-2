// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
function printTriangle() {
    let n = 4; // Height of the triangle

    // Ascending part of the triangle
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i));
    }

    // Descending part of the triangle
    for (let i = n - 1; i > 0; i--) {
        console.log("#".repeat(i));
    }
}

printTriangle();