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
const WifiFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.937 14.937 0 0 0 12 6C8.43 6 5.15 7.248 2.575 9.33L.69 6.997zm3.141 3.89A12.946 12.946 0 0 1 12 8a12.95 12.95 0 0 1 8.169 2.886l-1.885 2.334A9.958 9.958 0 0 0 12 11c-2.38 0-4.566.832-6.284 2.22l-1.885-2.334zm3.142 3.89A7.967 7.967 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.98 4.98 0 0 0 12 16a4.98 4.98 0 0 0-3.142 1.11l-1.885-2.334zm3.142 3.89A2.987 2.987 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334z" />
    </svg>
  );
};

WifiFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WifiFillIcon = withWrapper(WifiFillIconComponent);
export default WifiFillIcon;
