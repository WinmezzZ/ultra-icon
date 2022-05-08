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
const SuperscriptIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="#333"
        d="M238.763 213.333 448 466.261l209.237-252.928H768L503.381 533.205 768 853.077v.256H657.493L448 600.15 238.507 853.333H128v-.256l264.619-319.872L128 213.333h110.763zm680.704 67.414a34.133 34.133 0 1 0-56.32-15.36l-49.28 14.08A85.376 85.376 0 0 1 896 170.667a85.333 85.333 0 0 1 58.581 147.37L885.077 384h96.256v42.667H810.667V384l108.8-103.253z"
      />
    </svg>
  );
};

SuperscriptIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SuperscriptIcon = withWrapper(SuperscriptIconComponent);
export default SuperscriptIcon;
