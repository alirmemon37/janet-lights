const mode = process.env.NEXT_PUBLIC_NODE_MODE

let apiEndpoint: string = ''
switch (mode) {
  case 'development':
    apiEndpoint = 'http://localhost:3000'
    break
  case 'production':
    apiEndpoint = 'https://janet-lights-y3r2.vercel.app'
    break
  default:
    apiEndpoint = 'https://janet-lights-y3r2.vercel.app'
}
export default apiEndpoint
