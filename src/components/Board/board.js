// noinspection BadExpressionStatementJS
import './board.css'
import React, {useEffect, useState} from "react";
import sudokuSolver from "./solver";
import Button from "./difficultyButton";
import cloneDeep from 'lodash/cloneDeep';
import SolveButton from './solveButton'

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
              setDifficulty(difficulty)
        }

    //solve sudoku
        function solveSudoku() {
                let sudoku = cloneDeep(board2d);
                // console.log(board2d)
                sudokuSolver(sudoku);
                // console.log(sudoku)
                setBoard2d(sudoku)

         }
    //solve sudoku ends

    return (
        <>

    <table>
        <tbody>
        {
            board2d.map((row, iRow) => {
                return <tr key={iRow}>
                    {row.map((col,iCol) => {
                        return <td key={iCol}>
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

            <Button handleDifficulty={handleDifficulty} />
            <SolveButton solve={solveSudoku} />

        </>
        )


}

export default Board;
