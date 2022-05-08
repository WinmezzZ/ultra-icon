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
const PacifierIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path d="m30.657 21.586 4.103-4.103a6 6 0 1 0-4.243-4.243l-4.103 4.103" />
        <path
          fill="null"
          d="M41.264 32.192 15.808 6.737l-3.89 3.889 7.779 11.313-2.829 4.243 4.597 4.596 4.242-2.828 11.667 8.131 3.89-3.889Z"
        />
        <path d="M19.32 21.885a9.998 9.998 0 0 0-9.876 2.53c-3.906 3.904-3.906 10.236 0 14.141 3.905 3.906 10.237 3.906 14.142 0a9.998 9.998 0 0 0 2.529-9.876" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

PacifierIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PacifierIcon = withWrapper(PacifierIconComponent);
export default PacifierIcon;
