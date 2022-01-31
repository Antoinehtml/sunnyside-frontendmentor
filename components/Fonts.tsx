import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap');
      `}
  />
)

export default Fonts