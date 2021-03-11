const modules = import.meta.globEager('./*.ts');

interface Module {
  default: Object
}

const directives: {[key: string]: Object} = {}
Object.keys(modules).forEach(key => {
  const module = modules[key]
  console.log(module, key)
  const name = key.replace('./', '').replace('.ts', '')
  directives[name] = module.default
})

export default directives as {[key: string]: Object}
