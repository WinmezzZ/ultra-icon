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
const SkipForwardMiniLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.032 12 9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z" />
    </svg>
  );
};

SkipForwardMiniLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SkipForwardMiniLineIcon = withWrapper(SkipForwardMiniLineIconComponent);
export default SkipForwardMiniLineIcon;
