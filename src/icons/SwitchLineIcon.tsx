/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const SwitchLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3v18H7.6A4.6 4.6 0 0 1 3 16.4V7.6A4.6 4.6 0 0 1 7.6 3H12zm-2 2H7.6A2.6 2.6 0 0 0 5 7.6v8.8A2.6 2.6 0 0 0 7.6 19H10V5zm-2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM14 3h2.4A4.6 4.6 0 0 1 21 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6H14V3zm3 11.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
    </svg>
  );
};

SwitchLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SwitchLineIcon = withWrapper(SwitchLineIconComponent);
export default SwitchLineIcon;
