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
const HairClipIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path d="M38.847 5.339c-6.963 1.228-14.583 6.88-17.533 14.58-3.225 8.417-4.098 9.339-8.03 11.468-3.783 2.048-8.685 3.685-8.685 3.685" />
        <path d="M9.638 33.107c4.22-2.54 9.708.083 12.165 1.804 2.458 1.72 4.956 1.639 6.39-.409 1.434-2.048.656-4.424-1.801-6.144-1.638-1.148-7.127-3.77-5.078-8.44" />
        <path d="M43.189 9.6c-10.323 2.538-14.42 5.773-18.436 17.61m-3.769 7.127c-.778 1.693-2.295 5.718-2.131 8.274" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

HairClipIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HairClipIcon = withWrapper(HairClipIconComponent);
export default HairClipIcon;
