import { UIIconProps } from './types';

export function UIIcon(props: UIIconProps) {
  const classNameBind = ['UIIcon', 'icon-' + props.name];
  if (props.class) classNameBind.push(props.class);

  return <div className={classNameBind.join(' ')} style={props.style} />;
}
