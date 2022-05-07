/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const FishIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <g clipPath="url(#prefix__a)">
          <path
            fill="null"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M15.38 32.844C9.725 31.43.532 34.965 9.725 38.501c3.535 9.193 7.07 0 5.657-5.657Z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M22.482 10.247c-4.903-.013-11.232 1.537-12.029 3.728-.577 1.589 2.425 3.702 6.25 4.818m21.275 6.949c.013 4.904-1.537 11.232-3.728 12.03-1.589.577-3.702-2.425-4.818-6.251"
          />
          <path
            fill="null"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M38 25.765C44.662 19.7 40.124 8.09 40.124 8.09S28.108 4.56 22.45 10.217c-5.657 5.656-7.071 22.627-7.071 22.627S31.336 31.83 38 25.764Z"
          />
          <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M38.008 25.773s-6.718-1.06-10.607-4.95c-3.89-3.889-4.95-10.606-4.95-10.606"
          />
          <circle cx={33.766} cy={14.459} r={2} fill="#fff" transform="rotate(45 33.766 14.46)" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M41 20.945c-.54 1.76-1.478 3.434-3 4.82-1.648 1.5-3.864 2.69-6.266 3.633M27 7.656c-1.697.489-3.282 1.294-4.549 2.56-1.184 1.186-2.183 2.867-3.022 4.784"
          />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

FishIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FishIcon;
