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
const OrangeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M41 26c0 9.941-6 18-17 18S7 35.941 7 26c0-3.68 1.104-7.102 3-9.953C13.225 11.197 17.74 13 24 13s10.775-1.803 14 3.047c1.895 2.85 3 6.273 3 9.953Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m26 13 3-4h-3l-2-2-2 2h-3l3 4"
      />
      <circle cx={18} cy={20} r={2} fill="#fff" />
      <circle cx={15} cy={27} r={2} fill="#fff" />
      <circle cx={21} cy={25} r={2} fill="#fff" />
      <circle cx={18} cy={32} r={2} fill="#fff" />
    </svg>
  );
};

OrangeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OrangeIcon = withWrapper(OrangeIconComponent);
export default OrangeIcon;
