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
const CopyleftLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-3a4.998 4.998 0 0 1-4.288-2.428l1.714-1.029A3 3 0 0 0 12 15c1.658 0 3-1.342 3-3s-1.342-3-3-3a2.997 2.997 0 0 0-2.573 1.456L7.712 9.428A5.002 5.002 0 0 1 17 12c0 2.76-2.24 5-5 5z" />
    </svg>
  );
};

CopyleftLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CopyleftLineIcon = withWrapper(CopyleftLineIconComponent);
export default CopyleftLineIcon;
