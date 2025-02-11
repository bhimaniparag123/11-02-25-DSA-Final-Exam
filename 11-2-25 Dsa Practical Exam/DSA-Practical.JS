// Q.1 WAP to implement insert, View and delete operations in Array using JavaScript without any function
// let arr = [20, 23, 26, 35, 12, 78]; 
// let size = 6; 
// while (true) {
//     console.log("\nChoose an operation:");
//     console.log("1. Insert Element");
//     console.log("2. View Array");
//     console.log("3. Delete Element");
//     console.log("4. Exit");

//     let choice = prompt("Enter your choice (1-6):");

//     if (choice === "1") {
//         let element = prompt("Enter the element to insert:");
//         arr[size] = element;
//         size++; 
//         console.log("Element inserted successfully.");
//     } 
//     else if (choice === "2") {
//         if (size === 0) {
//             console.log("Array is empty.");
//         } else {
//             let output = "Array elements: ";
//             for (let i = 0; i < size; i++) {
//                 output += arr[i] + " ";
//             }
//             console.log(output);
//         }
//     } 
//     else if (choice === "3") {
//         if (size === 0) {
//             console.log("Array is empty. Nothing to delete.");
//         } else {
//             let index = prompt(`Enter the index to delete (0 to ${size - 1}):`);
//             index = parseInt(index);
//             if (index >= 0 && index < size) {
//                 for (let i = index; i < size - 1; i++) {
//                     arr[i] = arr[i + 1];
//                 }
//                 size--;
//                 console.log("Element deleted successfully.");
//             } else {
//                 console.log("Invalid index.");
//             }
//         }
//     } 
//     else if (choice === "4") {
//         console.log("Exiting the program.");
//         break;
//     } 
//     else {
//         console.log("Invalid choice. Please enter a valid option.");
//     }
// }



// Q.2 WAP to implement Quick sort using JavaScript with DSA.
let arr = [30, 42, 74, 88, 91, 17, 3]; 
let size = 7; 
while (true) {
    console.log("\nChoose an operation:");
    console.log("1. Insert Element");
    console.log("2. View Array");
    console.log("3. Delete Element");
    console.log("4. Exit");
    let choice = prompt("Enter your choice (1-7):");
    if (choice === "1") {
        let element = prompt("Enter the element to insert:");
        arr[size] = element; 
        size++; 
        console.log("Element inserted successfully.");
    } 
    else if (choice === "2") {
        if (size === 0) {
            console.log("Array is empty.");
        } else {
            let output = "Array elements: ";
            for (let i = 0; i < size; i++) {
                output += arr[i] + " ";
            }
            console.log(output);
        }
    } 
    else if (choice === "3") {
        if (size === 0) {
            console.log("Array is empty. Nothing to delete.");
        } else {
            let index = prompt(`Enter the index to delete (0 to ${size - 1}):`);
            index = parseInt(index);
            if (index >= 0 && index < size) {
                for (let i = index; i < size - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                size--;
                console.log("Element deleted successfully.");
            } else {
                console.log("Invalid index.");
            }
        }
    } 
    else if (choice === "4") {
        console.log("Exiting the program.");
        break;
    } 
    else {
        console.log("Invalid choice. Please enter a valid option.");
    }
}


// (3)  WAP to count Even and Odd Values from 2D array using JavaScript.
// let arr = [25, 45, 78, 9, 64, 32,
//            26, 34, 12, 1, 23, 99];
// let rows = parseInt(prompt("Enter number of rows:"));
// let cols = parseInt(prompt("Enter number of columns:"));
// console.log("Enter the elements row-wise:");
// for (let i = 0; i < rows; i++) {
//     arr[i] = []; 
//     let inputRow = prompt(`Enter ${cols} space-separated values for row ${i + 1}:`).split(" ").map(Number);
//     for (let j = 0; j < cols; j++) {
//         arr[i][j] = inputRow[j]; 
//     }
// }
// let evenCount = 0, oddCount = 0;
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         if (arr[i][j] % 2 === 0) {
//             evenCount++; 
//         } else {
//             oddCount++;
//         }
//     }
// }
// console.log("2D Array:");
// console.table(arr);
// console.log(`Total Even Numbers: ${evenCount}`);
// console.log(`Total Odd Numbers: ${oddCount}`);


// (4)  WAP to implement insert and remove element from Queue using JavaScript.
// class Queue {
//     constructor() {
//         this.items = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//     }
//     enqueue(element) {
//         this.items.push(element);
//         console.log(`${element} added to the queue.`);
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty! Nothing to remove.");
//             return null;
//         }
//         let removedElement = this.items.shift();
//         console.log(`${removedElement} removed from the queue.`);
//         return removedElement;
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     display() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty.");
//         } else {
//             console.log("Queue elements:", this.items.join(" <- "));
//         }
//     }
// }
// let queue = new Queue();
// while (true) {
//     console.log("\nChoose an operation:");
//     console.log("1. Insert (Enqueue)");
//     console.log("2. Remove (Dequeue)");
//     console.log("3. View Queue");
//     console.log("4. Exit");
//     let choice = prompt("Enter your choice (1-10):");
//     if (choice === "1") {
//         let element = prompt("Enter the element to insert:");
//         queue.enqueue(element);
//     }
//     else if (choice === "2") {
//         queue.dequeue();
//     }
//     else if (choice === "3") {
//         queue.display();
//     }
//     else if (choice === "4") {
//         console.log("Exiting the program.");
//         break;
//     }
//     else {
//         console.log("Invalid choice! Please enter a valid option.");
//     }
// }



// (5) WAP to implement Bubble sort using JavaScript with DSA.
// let bubbleSort = function (arr) {
//     let n = arr.length;
//     let swapped;
//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }
// };
// let arr = [25, 23, 12, 1, 4, 7, 8, 10];
// while (true) {
//     console.log("\nChoose an operation:");
//     console.log("1. Insert Elements");
//     console.log("2. View Array");
//     console.log("3. Sort Array (Bubble Sort)");
//     console.log("4. Exit");
//     let choice = prompt("Enter your choice (1-8):");
//     if (choice === "1") {
//         let elements = prompt("Enter space-separated elements to insert:");
//         arr = elements.split(" ").map(Number); 
//         console.log("Elements inserted successfully.");
//     } 
//     else if (choice === "2") {
//         console.log("Array elements:", arr.length ? arr.join(", ") : "Array is empty.");
//     } 
//     else if (choice === "3") {
//         if (arr.length === 0) {
//             console.log("Array is empty. Nothing to sort.");
//         } else {
//             bubbleSort(arr);
//             console.log("Sorted Array: ", arr.join(", "));
//         }
//     } 
//     else if (choice === "4") {
//         console.log("Exiting the program.");
//         break;
//     } 
//     else {
//         console.log("Invalid choice. Please enter a valid option.");
//     }
// }