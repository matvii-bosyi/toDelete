// unknown
let input: unknown;

input = 'hello'
input = 123

// input.toUpperCase() // Error
if (typeof input === 'string') {
	input.toUpperCase()
}

// Any
let input2: any;

input = 'hello'
input = 123

// input2.toUpperCase()


// ============
function parseJSON(json: string) {
	return JSON.parse(json)
}

const result = parseJSON('{ "name": "Alice", "age": 30 }');
console.log(result?.age ? result.age : 0);

if (typeof result === 'object' && result !== null && "age" in result && typeof result.age === 'number') {
	console.log((result as {age: string}).age)
}


// ============
function logValue(value: unknown) {
	if (typeof value === 'string') {
		console.log(`String: ${value.toUpperCase()}`)
	} else if (typeof value === 'number') {
		console.log(`Number: ${value.toFixed(2)}`)
	} else {
		console.log(`Unknown value: ${value}`)
	}
}
function isUser(obj : unknown): obj is { id: number; name: string } {
	return typeof obj === 'object' && 
	obj !== null && 
	'id' in obj && 
	'name' in obj
}

const unknownData: unknown = {
	id: 1,
	name: 'John'
}
if (isUser(unknownData)) {
	console.log(`User ID: ${unknownData.id}, Name: ${unknownData.name}`)
}


// Never
function error(message: string): never {
	throw new Error(message)
}

function infiniteLoop(): never {
	while (true) {
		console.log('Infinite loop');
	} 
}

type Shape = "circle" | "square"

function handleShape(shape: Shape){
	switch (shape) {
		case "circle":
			console.log("Circle")
			break
		case "square":
			console.log("Square")
			break
		default:
			const _exhaustiveCheck: never = shape
	}
}


// Generics
function returnAnyValue<T>(value: T): T {
	return value
}

const res = returnAnyValue(123)
// res.toUpperCase() // Error