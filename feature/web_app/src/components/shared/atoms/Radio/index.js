import React from 'react'
import { createLocal } from '../../utils/localnames'
import styles from './styles.scss'

const { localNames: local } = createLocal(styles)

export default function Radio({
  children,
  ...restProps
}) {
  return (
    <div className={local('root')} >
      <label roles="wrapper">
        <input type="radio" tabIndex="-1" {...restProps} />
        <span roles="radio" />
        <span roles="label">{children}</span>
      </label>
    </div>
  );
}
