import React from 'react'
import { createLocal } from '../../utils/localnames'
import styles from './styles.scss'

const { localNames: local } = createLocal(styles)

export default function CheckBox({
  children,
  ...restProps
}) {
  return (
    <div className={local('root')}>
      <label roles="wrapper">
        <input type="checkbox" tabIndex="-1" {...restProps} />
        <span roles="checkbox" />
        <span roles="label">{children}</span>
      </label>
    </div>
  );
}
