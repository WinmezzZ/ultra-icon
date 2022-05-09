/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AtLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8h2v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
};

AtLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AtLineIcon = withWrapper(AtLineIconComponent);
export default AtLineIcon;
