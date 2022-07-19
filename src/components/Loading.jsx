import React from 'react'
import {TailSpin} from 'react-loader-spinner'
import StyledLoading from '../styles/StyledLoading.styled'

const Loading = () => {
  return (
    <StyledLoading>
      <TailSpin color="rgb(139, 155, 170)" height={90} width={90} />
    </StyledLoading>
  )
}

export default Loading