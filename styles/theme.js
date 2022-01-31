import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const colors = {
    ...chakraTheme.colors,
    brand: {
        brightBlue: 'rgb(62 190 255)',
        brighterBlue: 'rgb(135 215 255)',
        cyan: 'hsla(168, 46%, 75%, 1)',
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkMediumCyan: 'hsl(168, 34%, 41%)',
        veryDarkBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)'
    }
}

const fonts = {
    ...chakraTheme.fonts,
    heading: "Fraunces",
    button: "Fraunces",
    body: "Barlow"
}

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em'
})

const overrides = {
    ...chakraTheme,
    colors,
    fonts,
    breakpoints
}

const customTheme = extendTheme(overrides)

export default customTheme