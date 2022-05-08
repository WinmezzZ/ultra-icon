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
const HomeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" d="M9 18v24h30V18L24 6 9 18Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 42V18l-5 4L24 6l20 16-5-4v24H9Z"
      />
      <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M19 29v13h10V29H19Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M9 42h30" />
    </svg>
  );
};

HomeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HomeIcon = withWrapper(HomeIconComponent);
export default HomeIcon;
