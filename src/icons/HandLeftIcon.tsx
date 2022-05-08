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
const HandLeftIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M44 41V19h-6v22h6Z" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38 19C30.895 12.43 26.776 8.663 25.643 7.7c-1.7-1.446-3.62-.839-3.62 2.779s5.263 5.765 5.263 8.521c.004.016-6.757.017-20.282.003A3 3 0 0 0 4 22.001v.003a3.004 3.004 0 0 0 3.004 3.004h7.013c1.206 7.969 1.872 12.302 1.997 13C16.202 39.052 17.2 41 20.068 41H38V19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

HandLeftIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandLeftIcon = withWrapper(HandLeftIconComponent);
export default HandLeftIcon;
