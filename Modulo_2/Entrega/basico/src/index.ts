// 1. Array operations
let baseArray: number[] = [1, 2, 3, 4, 5];
const consolePrint = (testFunction, nameFunction, testArray) => {
  console.log(`${nameFunction} test:`, testFunction);
  console.log("baseArray after function:", testArray);
  console.log("----------");
};

/* Head */
const head = ([frist, ...array]: number[]) => frist; // Implementation here.
let testHead = head(baseArray);
consolePrint(testHead, "head()", baseArray);

/* Tail */
const tail = ([frist, ...array]: number[]) => [...array]; // Implementation here.
let testTail = tail(baseArray);
consolePrint(testTail, "tail()", baseArray);

/* Init */
const init = (array: number[]) => array.slice(0, -1); // Implementation here.
let testInit = init(baseArray);
consolePrint(testInit, "init()", baseArray);

/* Last */
const last = (array: number[]) => array.slice(-1); // Implementation here.
let testLast = last(baseArray);
consolePrint(testLast, "last()", baseArray);

// 2. Concat
const concat = (a: number[], b: number[]) => [...a, ...b]; // Implementation here.
let testConcat = concat(baseArray, baseArray);
consolePrint(testConcat, "concat()", baseArray);

/* Opcional */
const multiConcat = (...arrays): number[] =>
  arrays.reduce((a, b) => [...a, ...b], []); // Implementation here.
let testMultiConcat = multiConcat(baseArray, baseArray, baseArray);
consolePrint(testMultiConcat, "multiConcat()", baseArray);

// 3. Clone Merge
const objectA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const objectB = { name: "Luisa", age: 31, married: true };

/* Clone */
function clone(source) {
  return { ...source };
}
let testClone = clone(objectA);
console.log("Is same object:", objectA === testClone);
console.log("ojbectA", objectA);
console.log("testClone", testClone);

/* Merge */
function merge(source, target) {
  return { ...target, ...source };
}
let testMerge = merge(objectA, objectB);
console.log("objectA", objectA);
console.log("objectB", objectB);
console.log("testMerge", testMerge);

// 4. Read Books
interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string) {
  let book = books.find((book) => titleToSearch === book.title);
  return book ? book.isRead : false;
}

console.log("isBookRead() => 'Devastación'", isBookRead(books, "Devastación")); // true
console.log(
  "isBookRead() => 'Canción de hielo y fuego'",
  isBookRead(books, "Canción de hielo y fuego")
); // false
console.log(
  "isBookRead() => 'Los Pilares de la Tierra'",
  isBookRead(books, "Los Pilares de la Tierra")
); // false

// 5. Slot Machine

class SlothMachine {
  private coin: number;

  constructor() {
    this.coin = 0;
  }

  /** Getter */
  getCoin() {
    return this.coin;
  }

  /** Setter */
  setCoin(value: number) {
    this.coin += value;
  }

  /** Mehtod */
  play() {
    const firstRoulette = this.roulette();
    const secondRoulette = this.roulette();
    const thirdRoulette = this.roulette();
    let message: string;
    
    this.setCoin(1);

    if (firstRoulette && secondRoulette && thirdRoulette) message = this.win();
    else message = this.lost();

    console.log(message);
  }

  private roulette() {
    return Math.random() < 0.5;
  }

  private win() {
    const message = `Congratulations!!!. You won ${this.coin} coins!!`
    this.setCoin(-this.getCoin());
    return message;
  }

  private lost() {
    return "Good luck next time!!";
  }
}

const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
