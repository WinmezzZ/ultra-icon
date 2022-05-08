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
const FistIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 41c-5.83 3.175-12.5 2.5-16 1S6 35.5 6 27c0-4.247 5.771-6.33 7.51-6.86a.686.686 0 0 0 .49-.652V12a3.5 3.5 0 1 1 7 0V9.5a3.5 3.5 0 0 1 7 0V12a3.5 3.5 0 1 1 7 0v4.493a3.5 3.5 0 0 1 7 .003V30c0 4-3.87 8.751-8 11Z"
      />
    </svg>
  );
};

FistIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FistIcon = withWrapper(FistIconComponent);
export default FistIcon;
