import { styled } from 'twin.macro'

const StyledContainer = styled.div`
  margin-top: 93px;
`
interface SafeAreaProps {
  tag?: React.ElementType
  children: React.ReactNode
}
export const SafeArea: React.FC<SafeAreaProps> = ({ tag = 'div', children, ...rest }) => {
  return (
    <StyledContainer as={tag} {...rest}>
      {children}
    </StyledContainer>
  )
}
