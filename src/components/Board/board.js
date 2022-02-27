
import React, {useEffect, useState} from "react";
import cloneDeep from 'lodash/cloneDeep';
import SudokuSolver from "../SolveSudoku/solver";
import Button from "../Buttons/difficultyButton";
import SolveButton from '../Buttons/solveButton'
import ClearButton from "../Buttons/clearButton";
import './board.css'

const Board = () => {

    const [board, setBoard] = useState([]);
    const [board2d, setBoard2d] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');


      useEffect(() => {
        fetch(`https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`)
          .then((resp) => resp.json())
          .then((data) => {
              setBoard(data.puzzle);
          });
       },[difficulty]);

      useEffect(() => {
          set2dBoard(board)

      },[board])



      function set2dBoard(board) {
          var arr = Array(9).fill(0).map(() => Array(9).fill(0));
          Object.keys(board).map((key) => {arr[key[0].charCodeAt(0) - 65][key[1] - 1] = parseInt(board[key]) })
          // console.log(arr)
          setBoard2d(arr)

      }


        const handleUpdate = (e, row, col) => {
        const newBoard = board2d;
        // console.log(e.target.value,row,col)
        newBoard[row][col] = e.target.value;

        // console.log(newBoard)
        setBoard2d(newBoard);
        // console.log(board2d)
        };

        function handleDifficulty(difficulty) {
            var myArray = [
              'easy',
              'medium',
              'hard'
            ]
            if(difficulty === 'random') {
                var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
                setDifficulty(randomItem)
            }
            else
            setDifficulty(difficulty)
        }

    //solve sudoku
        function solveSudoku() {
                let sudoku = cloneDeep(board2d);
                // console.log(board2d)
                SudokuSolver(sudoku);
                // console.log(sudoku)
                setBoard2d(sudoku)

         }
    //solve sudoku ends

        function clear() {
                let clearSudoku = cloneDeep(Array(9).fill(0).map(() => Array(9).fill(0)))
                setBoard2d(clearSudoku)
        }

    return (
        <>

    <table>
        <tbody>
        {
            board2d.map((row, iRow) => {
                return <tr key={iRow}  className = {(iRow + 1) % 3 === 0 ? 'b-border' : ''}>
                    {row.map((col,iCol) => {
                        return <td key={iCol} className={((iCol + 1) % 3 === 0) ? 'r-border' : ''}>
                        <input
                            maxLength={1}
                            onChange={(e) => handleUpdate(e,iRow,iCol)}
                            className='cell-input'
                            key={iCol}
                            defaultValue={col === 0 ? '' : String(col)}/>
                    </td>
                    })}

                </tr>
            })
        }
        </tbody>
    </table>
            <div className='style-buttons'>
            <Button handleDifficulty={handleDifficulty} />
            <ClearButton clear={clear} />

            </div>
            <SolveButton solve={solveSudoku} />



        </>
        )


}

export default Board;
