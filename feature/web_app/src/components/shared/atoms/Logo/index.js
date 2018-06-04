import React form 'React'
import CssModuleNameTag from 'utils/CssModuleNameTag'
import styles from './styles.scss'

const cssModules = new CssModuleNameTag(styles)

export default function Logo({
  caption,
  icon,
  onButtonClick,
  stylesName,
  disabled,
  children,
  ...restProps
}) {
  return (
    <div className={cssModules`root`} theme={stylesName} {...restProps}>
        <div part='first'>H</div>
        <div style={{ width: '5px' }}/>
        <div part='second'>manager</div>
    </div>
  );
}