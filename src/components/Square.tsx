import React from 'react'
type Player = "X" | "O" | null;

interface SquareProps{
    value: Player
    winner : Player
    setValue : () => void
    currentPlayer : Player
}

export default function Square({value , winner , setValue , currentPlayer}: SquareProps) {

const classname = "group w-[10rem] h-[10rem] text-[5rem]  bg-white"
const pClassname = "w-full w-full opacity-0 group-hover:opacity-100 duration-150 text-gray-400"

 if(!value){
     return (
    <button className={`${classname}`} onClick={setValue}><p className={`${pClassname}`}>{currentPlayer}</p></button>
  )
 }
 return (
    <button className={`${classname} ${value === 'X'? "text-red-600" : "text-green-600"}`}  disabled>{value}</button>
  )
}
