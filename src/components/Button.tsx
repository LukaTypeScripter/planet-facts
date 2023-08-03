import styled from 'styled-components'
type ButtonProps = {
  height?: string
  bgColor?: string
  color?: string
  Text?: string
  borderRadius?: string
  border?: string
  width?: string
  heigth?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void
  children?: React.ReactNode;
  padding?: string
  borderColor?: string
}
function Button({ height, bgColor, color, Text, borderRadius, border, width, heigth, onClick, children, padding, borderColor }: ButtonProps) {
  return (
    <Btn onClick={onClick} padding={padding} height={height} bgColor={bgColor} color={color} type='submit' borderRadius={borderRadius} borderColor={borderColor} border={border} width={width} heigth={heigth}>{children || Text}</Btn>
  )
}

const Btn = styled.button<ButtonProps>`
     padding: ${props => props.padding};
    background: ${props => props.bgColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    border-color: ${props => props.borderColor};
    color: ${props => props.color};

`

export default Button