export function random(list: string[] | number[]) {
  return list[Math.floor((Math.random()*list.length))]
}
