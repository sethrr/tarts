const sizes = {
    Half: 0.5,
    Full: 1,
    Two: 2
}
export default function calculateTartPrice(cents, size) {
return cents * sizes[size]
}