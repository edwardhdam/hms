import React from 'react'
import { createLocal } from '../../utils/localnames'
import styles from './styles.scss'

const { localNames: local } = createLocal(styles)

export default function TextBox({
  caption,
  value,
  placeHolder,
  disabled,
  required,
  maxLength,
  onTextChanged,
  onTextCleared,
  onChanged,
  children,
  ...restProps
}) {
  return (
    <div className={local('root')} required={required} {...restProps}>
      <label htmlFor="input">{caption}</label>
      <div>
        {children}
        <input
          type="text"
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          placeholder={placeHolder}
          onChange={onTextChanged}
        />
        <span part="clear" onClick={onTextCleared}>X</span>
      </div>
    </div>
  );
}
