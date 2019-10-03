(function () {
    let playerX = "X"
    let playerO = "O"

    let currentPlayer = playerX;
    let playerXSelections = [];
    let playerOSelections = [];

    const winningCombinations = [
        //horizontal
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        //vertical
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        //diagonal
        [1, 5, 9],
        [3, 5, 7],
    ];

    // get all td elements from the DOM and store in cellElementArray
    const cellElementArray = document.querySelectorAll('td');

    // write for loop to iterate over cellElementArray
    for (let i = 0; i < cellElementArray.length; i++) {

        // set cellElementArray[i] to currentCell variable
        let currentCell = cellElementArray[i]

        // add an event listener to the currentCell
        currentCell.addEventListener('click', function (event) {
            const clickedCellElement = event.target;

            //make sure the cell is empty
            if (clickedCellElement.innerHTML === '') {
                // if it's player O's turn
                if (currentPlayer === playerX) {
                    //add the cell id to playerXSelection array
                    playerXSelections.push(parseInt(clickedCellElement.id))
                    checkForWin(playerXSelections,playerX);
                    console.log("playerXSelection: " + playerXSelections)
                }
                //otherwise (if it's playerOSelections array)
                else {
                    playerOSelections.push(parseInt(clickedCellElement.id))
                    checkForWin(playerOSelections,playerO);
                    console.log("playerOSelections: " + playerOSelections)
                }
                //print X/O to page
                clickedCellElement.innerHTML = currentPlayer;

                
                switchPLayers();
            }
        })
    }

    function checkForWin(playerSelections, currentPlayer) {
        for (let i = 0; i < winningCombinations.length; i++) {
            let matches = 0
            for (let j = 0; j < playerSelections.length; j++) {
                if (winningCombinations[i].includes(playerSelections[j])) {
                    matches++
                }

                if (matches === 3) {
                    alert("player "+ currentPlayer + " wins");
                    
                    return true

                }
            }
        }
        return false
    }




    function switchPLayers() {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        }
        else if (currentPlayer === playerO) {
            currentPlayer = playerX;
        }

    }
})()