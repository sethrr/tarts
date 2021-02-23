const sizes = {
    "Half Dozen" : 0.5,
    "Dozen": 1,
    "Two Dozen": 2
}
export default function calculateTartPrice(cents, size) {
return cents * sizes[size]
}