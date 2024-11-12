
# TICTACTOE Game NextJS

## Built with

* [![NEXT JS][NEXTJS]][NEXTJS-URl]
* [![TailwindCSS][tawilwindCSS]][tailwind-url]
* [![TypeScript][typescript-logo]][typescript-url]



[NEXTJS]: https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

[NEXTJS-URl]: https://nextjs.org/

[tawilwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/

[typescript-logo]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]:https://www.typescriptlang.org/
## Installation

Install node-packet before run project

```bash
  npm install
```
    
Run Project

```bash
  npm run dev
```
### Page Routing Flow

![page-diagram](https://github.com/LittleT0fu/nextjs-xo-game/blob/master/diagram/page-diagram.png)

### Board Action Diagram
เราจะเอาค่าขนาดบอร์ดมาจากหน้า menu ที่ส่งมามาทำ board ที่เป็น array เพื่อเก็บข้อมูล แล้วจะใช้ grid เพื่อ render ออกมาเป็นแบบ 3x3 หรือ 4x4 (tailwind css ไม่สารมารถทำเป็น dynamic ได้เลยต้อง render grid แบบ fix) การกดคริกจะทำการ เช็คว่าเทิร์นนี้เป็นเทิร์นของใครก่อนแล้วเอาข้อมูลนั้นไปเก็บใว้ที่ตัวแปร board แล้วจะมี hook เพื่อเช็คว่า board มีการเปลี่ยนแปลงจะทำการ checkWinner เพื่อเอาค่าที่ return ออกมาเป็นเก็บในตัวแปร winner แล้วถ้า winner มีตัวแปรที่ไม่ใช่ null ก็จะแสดง modal เพื่อแสดงว่าใครเป็นผู้ชนะ และปุ่นกด restart และถ้าเกมนี้เป็นแบบ ai เราจะให้ผู้เล่นที่เป็นคนเป็นฝ่ายเริ่มก่อน แล้วจะใช้ฟังค์ชั่นของ ai เพื่อเอาตำแหน่งที่ ai ต้องการไปเล่น โดยที่ 30% จะเป็น randomMove และ 70% จะเป็น bestMove
![board-action](https://github.com/LittleT0fu/nextjs-xo-game/blob/master/diagram/board-action-diagram.png)

### Check Winner Algorithm
เราจะตัดข้อมูลออกเป็น แถวนอน แถวตั้ง และแถวเอียง แล้วทำการเช็คข้อมูลที่อยู่ในช่องว่าเป็นข้อมูลเดียวกันไหม ถ้าใช่ก็ให้ return ค่าผู้ชนะไป "X", "O" ถ้าบอร์ดเต็มก็จะ return "Tie" ถ้ายังไม่มีใครชนะหรือเสมอเลยก็จะให้ return null กลับไป ซึ่งวิธีนี้สมามารถนำไปใช้เช็คกับบอร์ดที่มาคงามกว้างกว่า 3x3 ได้เลย
![check winner](https://github.com/LittleT0fu/nextjs-xo-game/blob/master/diagram/checkWinner-diagram.png)

### Best Move AI Algorithm
จะใช้หลักการของ Minimax algorithm ในการเขามาหาจุดที่ดีถ้าชนะจะ score +1 ถ้าแพ้จะ score -1 ถ้าเสมอจะ score 0 โดย ให้ทำการลองจำลองการเล่นโดยการใช้ loop function ในการคำนวนคะแนน โดยจะให้ลองใส่ค่าขเา้ไปในช่องก่อนละใช้ function เพื่อหาคะแนนทำเป็นลูปไปเรื่อยๆจนได้จุดที่ดีที่สุดออกมา
![best move](https://github.com/LittleT0fu/nextjs-xo-game/blob/master/diagram/bestmove-diagram.png)
