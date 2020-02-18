"use strict";


//temporary array to sort
let arr = new Array(10);


console.log("Array: ");
for(let i = 0; i < arr.length; ++i) {
	arr[i] = Math.floor(Math.random() * 10);
	//console.log(arr[i]);
	process.stdout.write(arr[i]+" ");
}
console.log();

//bubbleSort(arr);
selectionSort(arr);

console.log("Sorted array:");
for(let i = 0; i < arr.length; ++ i){
	process.stdout.write(arr[i]+" ");
}
console.log();


function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}


function bubbleSort(arr) {
	if(!Array.isArray(arr)) {
		console.log("Object must be an array!");
	}

	let isSwapped = true;

	while(isSwapped) {
		isSwapped = false;
		for(let i = 0; i < arr.length-1; ++i) {
			if(arr[i] > arr[i+1]) {
				swap(arr, i, i+1);
				isSwapped = true;
			}
		}
	}
	console.log("Array was sorted by bubbleSort!");
}

function selectionSort(arr) {
	if(!Array.isArray(arr)) {
		console.log("Object must be an array!");
	}

	for(let start = 0; start < arr.length-1; ++start){
		let lowest = start;
		for(let i = start+1; i < arr.length; ++i){
			if(arr[lowest] > arr[i]) {
				lowest = i;
			}
		}

		if(lowest != start){
			swap(arr, lowest, start);
		}
	}
	
	console.log("Array was sorted by selectionSort!");
}