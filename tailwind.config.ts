import type { Config } from "tailwindcss";  

export default {  
    darkMode: ["class"],  
    content: [  
        "./pages/**/*.{ts,tsx,js,jsx}",  
        "./components/**/*.{ts,tsx,js,jsx}",  
        "./app/**/*.{ts,tsx,js,jsx}",  
        "./src/**/*.{ts,tsx,js,jsx}",  
    ],  
    prefix: "",  
    theme: {  
        container: {  
            center: true,  
            padding: '1rem',  
            screens: {  
                '2x1': '1400px'  
            }  
        },  
        extend: {  
            colors: {  
                border: 'hsl(var(--border))',  
                input: 'hsl(var(--input))',  
                ring: 'hsl(var(--ring))',  
                background: '#79B5B9',  
                foreground: 'hsl(var(--foreground))',  
                primary: {  
                    DEFAULT: '#FC4B08', 
                    foreground: 'hsl(var(--primary-foreground))' 
                },  
                secondary: {  
                    DEFAULT: '#FC4B08',  
                    foreground: 'hsl(var(--secondary-foreground))'  
                },  
                
            },  
            borderRadius: {  
                lg: 'var(--radius)',  
                md: 'calc(var(--radius) - 2px)',  
                sm: 'calc(var(--radius) - 4px)'  
            },  
            keyframes: {  
                'accordion-down': {  
                    from: {  
                        height: '0'  
                    },  
                    to: {  
                        height: 'var(--radix-accordion-content-height)'  
                    }  
                },  
                'accordion-up': {  
                    from: {  
                        height: 'var(--radix-accordion-content-height)'  
                    },  
                    to: {  
                        height: '0'  
                    }  
                },  
                'fade-in': {  
                    '0%': { opacity: '0', transform: 'translateY(10px)' },  
                    '100%': { opacity: '1', transform: 'translateY(0)' }  
                },  
                'slide-in': {  
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },  
                    '100%': { transform: 'translateX(0)', opacity: '1' }  
                }  
            },  
            animation: {  
                'accordion-down': 'accordion-down 0.2s ease-out',  
                'accordion-up': 'accordion-up 0.2s ease-out',  
                'fade-in': 'fade-in 0.5s ease-out',  
                'slide-in': 'slide-in 0.5s ease-out'  
            }  
        }  
    },  
    plugins: [require("tailwindcss-animate")],  
} satisfies Config;