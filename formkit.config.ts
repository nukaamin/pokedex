// formkit.config.ts
import { en } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const config: DefaultConfigOptions = {
  locales: { en },
  locale: 'en',
  config: {
    classes: generateClasses({
      text: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-green-300',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs font-mono'
      },
      email: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-md',
        inner: 'max-w-md border border-rose-400 rounded-lg mb-1 overflow-hidden focus-within:border-rose-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-green-500 mb-1 text-xs font-mono'
      },
      password: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-yellow-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs font-serif'
      },
      select: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-purple-900',
        input: 'w-full h-10 px-3 border-none text-base text-black-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs font-mono'
      }
    })
  }
}

export default config
