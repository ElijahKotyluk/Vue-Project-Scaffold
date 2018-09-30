import { app } from './app'

export default context => {
  const { app } = app()
  return app
}
