export default function wait (timeMs) {
  return new Promise(resolve => {
    setTimeout(resolve, timeMs)
  })
}
