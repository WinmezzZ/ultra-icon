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

const EnglishMustacheIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.064 24.058c3.287-1.073 3.465-5.092 7.797-5.94 3.465-.68 5.547 1.708 6.064 4.243.433 2.122-.866 7.639-7.797 7.639C7.465 30 4.578 24.483 4 22.361c.866.849 3.465 2.546 6.064 1.697Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37.936 24.058c-3.288-1.073-3.465-5.092-7.797-5.94-3.465-.68-5.547 1.708-6.064 4.243-.433 2.122.866 7.639 7.797 7.639 8.663 0 11.55-5.517 12.128-7.639-.866.849-3.465 2.546-6.064 1.697Z"
        />
      </svg>
    </span>
  );
};

EnglishMustacheIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EnglishMustacheIcon;
