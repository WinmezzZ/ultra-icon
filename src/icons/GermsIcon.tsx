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

const GermsIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44c1.336 0 2.364-3.75 3.626-4 1.3-.257 2.833 2.979 4.03 2.483 1.217-.505.75-3.616 1.831-4.34 1.091-.73 3.73.924 4.655 0 .925-.925-1.478-4.052-.748-5.143.725-1.082 4.584-.127 5.089-1.344.496-1.197-3.304-3.543-3.047-4.843C39.686 25.55 44 25.336 44 24c0-1.335-3.75-2.64-4-3.903-.257-1.3 2.979-2.556 2.483-3.752-.505-1.218-4.364-.263-5.089-1.345-.73-1.09 1.673-4.217.748-5.142-.925-.925-4.051 1.091-5.142.36-1.082-.724-.127-4.196-1.345-4.7C30.46 5.02 28.3 7.905 27 7.648 25.738 7.397 25.336 4 24 4s-1.88 3.398-3.142 3.647c-1.3.258-3.317-2.626-4.513-2.13-1.218.505-.263 3.617-1.345 4.341-1.09.73-4.217-.925-5.142 0-.925.925 1.667 4.051.937 5.142-.725 1.082-4.773.127-5.278 1.345C5.021 17.54 8.257 19.239 8 20.54c-.25 1.262-4 2.125-4 3.46 0 1.336 4.097 1.927 4.347 3.19.257 1.3-3.326 3.269-2.83 4.466.505 1.217 4.29.262 5.014 1.344.73 1.09-1.598 4.218-.673 5.142.925.925 4.051-1.287 5.142-.557 1.082.724.127 4.393 1.345 4.898 1.196.496 3.212-2.74 4.513-2.483 1.262.25 1.806 4 3.142 4Z"
          clipRule="evenodd"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M29 29a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path fill="#fff" d="M16.5 26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    </span>
  );
};

GermsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GermsIcon;
