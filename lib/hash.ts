import shortHash from 'short-hash'

export default function hash(str: string) {
  return shortHash(str)
}
