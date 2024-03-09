export const start = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./browser')
    return worker.start()
  }
}
