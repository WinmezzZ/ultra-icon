/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Ghost2LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896C14.558 21.3 13.396 22 12 22c-1.396 0-2.558-.701-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6zm0 2C9.89 4 7.935 5.788 6.989 8.371l-.092.261-.316.95-.949.315c-1.255.419-2.067 1.341-2.424 2.56l-.023.086 1.14.327a3 3 0 0 1 2.17 2.703l.005.181V17h.346a4 4 0 0 1 3.2 1.6l.136.192C10.758 19.663 11.316 20 12 20c.638 0 1.167-.293 1.703-1.04l.115-.168a4 4 0 0 1 3.1-1.785l.236-.007h.346v-1.246a3 3 0 0 1 2.003-2.83l.173-.054 1.139-.327-.023-.087c-.337-1.151-1.08-2.037-2.22-2.484l-.204-.075-.95-.316-.315-.949C16.195 5.91 14.18 4 12 4zm0 8c.828 0 1.5 1.12 1.5 2.5S12.828 17 12 17s-1.5-1.12-1.5-2.5.672-2.5 1.5-2.5zM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </svg>
  );
};

Ghost2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Ghost2LineIcon = withWrapper(Ghost2LineIconComponent);
export default Ghost2LineIcon;
