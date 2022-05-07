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

const EmptyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path d="M9.439 42h3.185a2 2 0 0 0 1.868-1.286l2.2-5.753.024-5.526a2.04 2.04 0 0 1 .033-.348L20.153 10.3a2 2 0 0 0-1.968-2.357h-7.322A2 2 0 0 0 8.864 10l.522 18.871-1.77 3.33a2 2 0 0 0 .269 2.266l.562.633-.963 4.48A2 2 0 0 0 9.439 42Zm7.278-12.74-7.331-.39M38.578 42h-3.18a2 2 0 0 1-1.878-1.313l-2.093-5.726-.025-5.526c0-.116-.011-.233-.032-.348L27.965 10.3a2 2 0 0 1 1.968-2.357h7.322a2 2 0 0 1 2 2.056l-.523 18.871 1.771 3.33a2 2 0 0 1-.27 2.266l-.561.633.87 4.523A2 2 0 0 1 38.578 42ZM31.4 29.26l7.331-.39" />
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

EmptyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EmptyIcon;
