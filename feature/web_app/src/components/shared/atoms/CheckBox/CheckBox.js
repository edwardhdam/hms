import React from 'react'
import { createLocal } from '../../utils/localnames'
import styles from './styles.scss'

const { localNames: local } = createLocal(styles)

export default function CheckBox({
  defaultChecked,
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
    <div className={local('root')} required={required} {...restProps} tabIndex="0">
      <label roles="wrapper">
        <input type="checkbox" tabIndex="-1" disabled={disabled} defaultChecked={defaultChecked} />
        <span roles="checkbox" />
        <span roles="label">{children}</span>
      </label>
    </div>
  );
}
