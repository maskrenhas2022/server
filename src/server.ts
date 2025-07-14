import { fastify } from 'fastify'

import {
  serializerCompiler,
  validatorCompiler,
  // type ZodTypeProvider, // This line is commented out as it's a type import and not needed for runtime JS
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'

// The type provider is for TypeScript, so for a pure JavaScript context,
// we can simplify the app initialization. If this is intended for TypeScript,
// the user would compile it. For direct execution as JS, we remove the type annotation.
const app = fastify() // .withTypeProvider<ZodTypeProvider>() - removed for JS compatibility

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/mask', () => {
  return 'MASKRENHAS MOTHERFUCKER '
})

app.listen({ port: 3333 }).then(() => {
  console.log('Maskrenhas Motherfucker')
})
