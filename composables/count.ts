export const useCounter = () => {
  const count = useState('count', () => 10)
  const add=() => {
    count.value++;
  }
  const dec = () => {
    count.value--;
  }
  return {
    count,
    add,
    dec
  }
}