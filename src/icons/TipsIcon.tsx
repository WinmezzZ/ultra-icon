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
const TipsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 20c0 6.808-4.252 12.622-10.244 14.934H18.244C12.252 32.622 8 26.808 8 20c0-8.837 7.163-16 16-16s16 7.163 16 16Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m29.756 34.934-.68 8.149a1 1 0 0 1-.996.917h-8.16a1 1 0 0 1-.996-.917l-.68-8.15"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 17v6l6-3 6 3v-6" />
    </svg>
  );
};

TipsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TipsIcon = withWrapper(TipsIconComponent);
export default TipsIcon;
