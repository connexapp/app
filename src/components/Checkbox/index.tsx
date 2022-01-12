import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  isChecked: boolean
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  isChecked = false,
  onCheck,
  label,
  labelFor
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        required
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}{' '}
    </S.Wrapper>
  )
}

export default Checkbox
