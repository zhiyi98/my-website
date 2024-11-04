import type {Config} from 'tailwindcss'

const twConfig: Config = {
    prefix: "tw-",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
    corePlugins: {
        preflight: false, // 关闭 Preflight 样式
    },
}

export default twConfig
