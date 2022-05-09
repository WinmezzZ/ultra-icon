/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RedPacketLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M14.173 9.763A9.98 9.98 0 0 0 19 7.141V4H5v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0zm.208 2a2.501 2.501 0 0 1-4.762 0A11.94 11.94 0 0 1 5 9.749V20h14V9.748a11.94 11.94 0 0 1-4.619 2.016zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
    </svg>
  );
};

RedPacketLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RedPacketLineIcon = withWrapper(RedPacketLineIconComponent);
export default RedPacketLineIcon;
