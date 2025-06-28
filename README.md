# Mini Aula: TailwindCSS

## Resumo

TailwindCSS é um framework CSS utilitário que permite criar interfaces modernas de forma rápida e produtiva, compondo classes diretamente no HTML/JSX.

- **Mobile First:** O Tailwind segue a abordagem mobile first, ou seja, os estilos são aplicados primeiro para dispositivos móveis e, a partir disso, você pode adicionar breakpoints para telas maiores usando prefixos como `md:`, `lg:`, etc.
- **Temas e Cores:** Suporte nativo a temas claro (light), escuro (dark) e customizados, facilitando a criação de interfaces adaptáveis. O modo dark pode ser ativado facilmente com a classe `dark` e é possível criar temas personalizados via configuração.
- **Medidas:** Por padrão, utiliza unidades relativas como `rem` para espaçamentos, tamanhos de fonte e outros utilitários, promovendo acessibilidade e responsividade. Os espaçamentos (`space`, `padding`, `margin`, etc.).

---

## Passo a Passo para Instalação com Vite

1. **Instale as dependências:**

   ```sh
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Crie isso no arquivo de configuração (vite.config.ts):**

   ```sh

   import { defineConfig } from 'vite'

   import tailwindcss from '@tailwindcss/vite'
   export default defineConfig({
   plugins: [
    tailwindcss(),
   ],
   })
   ```

3. **Adicione as diretivas do Tailwind no seu arquivo CSS principal (ex: `src/index.css`):**

   ```css
   @import 'tailwindcss';
   ```

4. **Execute o projeto normalmente:**

   ```sh
   npm run dev
   ```

---

## Passo a Passo para Instalação com NextJs

1. **Instale as dependências:**

   ```sh
   npm install tailwindcss @tailwindcss/postcss postcss
   ```

2. **Crie o arquivo postcss.config.mjs:**

   ```sh
   const config = {
   plugins: {
    "@tailwindcss/postcss": {},
   },
   };
   export default config;
   ```

3. **Adicione as diretivas do Tailwind no seu CSS arquivo principal (ex: `src/app/globals.css`):**

   ```css
   @import 'tailwindcss';
   ```

4. **Execute o projeto normalmente:**

   ```sh
   npm run dev
   ```

---

## Criando suas próprias classes

Além das utilidades prontas, você pode criar suas próprias classes personalizadas usando o arquivo CSS global. Basta adicionar estilos customizados normalmente, e até mesmo combinar com as utilidades do Tailwind:

```css
@theme {
  --font-display: 'Satoshi', 'sans-serif';
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
}
```

E usar no seu componente:

```jsx
<button className="text-color-avocado-500">Botão customizado</button>
```

## Extensões recomendadas do VSCode para TailwindCSS

- **Tailwind CSS IntelliSense** ([marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)): Autocompletar inteligente, sugestões de classes, documentação inline e visualização de cores diretamente no editor.

### Plugins para Prettier e ESLint

Além das extensões do VSCode, é recomendado utilizar plugins específicos para Prettier e ESLint que ajudam a manter o código organizado e padronizado ao usar TailwindCSS:

- **prettier-plugin-tailwindcss** ([npm](https://www.npmjs.com/package/prettier-plugin-tailwindcss)): Ordena automaticamente as classes do Tailwind de acordo com a convenção oficial sempre que o Prettier formatar seu código.
- **eslint-plugin-tailwindcss** ([npm](https://www.npmjs.com/package/eslint-plugin-tailwindcss)): Adiciona regras de lint para detectar possíveis erros, más práticas e inconsistências no uso das classes Tailwind.

Esses plugins garantem que seu código permaneça limpo, consistente e fácil de manter em projetos que utilizam TailwindCSS.

---

## Sugestões de bibliotecas para usar junto com Tailwind

- **shadcn/ui** ([ui.shadcn.com](https://ui.shadcn.com/)): Coleção de componentes React modernos, acessíveis e totalmente customizáveis com Tailwind.
- **tailwind-merge** ([tailwind-merge.vercel.app](https://tailwind-merge.vercel.app/)): Junta e resolve conflitos de classes Tailwind dinamicamente.
- **clsx** ([npmjs.com/package/clsx](https://www.npmjs.com/package/clsx)): Utilitário para condicionar classes de forma simples.
- **Lucide** ([lucide.dev](https://lucide.dev/)): Ícones SVG open source, fácil de usar com Tailwind (sugiro instalar react icons).

Essas bibliotecas aceleram o desenvolvimento, aumentam a produtividade e ajudam a criar interfaces modernas e acessíveis.

---

## Exemplos de Uso

### Botão estilizado

```jsx
<button className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
  Clique aqui
</button>
```

### Layout responsivo

```jsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <div className="bg-gray-200 p-4">Coluna 1</div>
  <div className="bg-gray-200 p-4">Coluna 2</div>
  <div className="bg-gray-200 p-4">Coluna 3</div>
</div>
```

### Dark mode

```jsx
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  Conteúdo adaptável ao tema
</div>
```

---

## Dicas

- Use a [documentação oficial](https://tailwindcss.com/docs) para explorar todas as utilidades.
- Experimente o [Playground do Tailwind](https://play.tailwindcss.com/) para testar classes rapidamente.
- Experimente o [NativeWind](https://www.nativewind.dev) (tailwindCSS no React Native)

---

## Videos Sugeridos

- [TailwindCSS: instalação no VSCode e no seu projeto](https://www.youtube.com/watch?v=esfzSt8V7ek)
- [Tailwind CSS v4 Full Course 2025 | Master Tailwind in One Hour](https://youtu.be/6biMWgD6_JY?si=vbu9jZvXN_GeCwlN)
- [How to Setup Tailwind CSS V4 in React with Vite for Beginners in 2025](https://www.youtube.com/watch?v=RjzTBfX79Cc)
- [Como configurar o projeto Next.js 15 com Tailwind CSS v4](https://www.youtube.com/watch?v=Jol0vCitur4)
- [3 dicas para escalar apps React com TailwindCSS](https://youtu.be/BhPyF0BQpF0?si=WTTGJbv8q_wPuoXi)
- [TailwindCSS 4.0 ficou 10x mais rápido (e mais nativo!)](https://youtu.be/5X_pAr3qgoM?si=u_ByjjgsZWfzS0va)
- [Utilizando TailwindCSS no React Native com NativeWind](https://www.youtube.com/watch?v=e5pi6NbwJgU)
- [How to use tailwindcss with react native expo | React Native Expo | Nativewind v4 | 2025](https://www.youtube.com/watch?v=3H2ZJ383h3s)

---

**Bons estudos!**
