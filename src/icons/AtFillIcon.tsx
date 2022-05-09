/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AtFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm8-10a8 8 0 1 0-3.968 6.911l-1.008-1.727A6 6 0 1 1 18 12v1a1 1 0 0 1-2 0V9h-1.354a4 4 0 1 0 .066 5.94A3 3 0 0 0 20 13v-1zm-8-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
};

AtFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AtFillIcon = withWrapper(AtFillIconComponent);
export default AtFillIcon;
