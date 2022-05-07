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

const GoogleIcon = (p: SVGComponentProps) => {
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
          d="m34.5 7-5 7.5c-1-.532-3-1.5-5.5-1.5-6 0-11 5-11 10.5S17 35 24 35c5.6 0 9.5-4 9.5-7H24v-7h20c.5 7.5-1.71 11.9-4.5 15.5C35.324 41.888 29.171 44 24 44 14 44 4 36 4 23.5 4 11.5 14.724 4 23 4s11.5 3 11.5 3Z"
        />
        <path
          fill="#000"
          d="m29.5 14.5-.939 1.766a2 2 0 0 0 2.603-.657L29.5 14.5Zm5-7.5 1.664 1.11a2 2 0 0 0-.302-2.574L34.5 7ZM44 21l1.996-.133A2 2 0 0 0 44 19v2Zm-20 0v-2a2 2 0 0 0-2 2h2Zm0 7h-2a2 2 0 0 0 2 2v-2Zm9.5 0h2a2 2 0 0 0-2-2v2Zm6 8.5-1.58-1.225L39.5 36.5Zm-8.336-20.89 5-7.5-3.328-2.22-5 7.5 3.328 2.22ZM34.5 7a149.779 149.779 0 0 0 1.36-1.466l-.001-.002a.158.158 0 0 0-.014-.012 1.64 1.64 0 0 0-.082-.072 8.657 8.657 0 0 0-.804-.592 13.949 13.949 0 0 0-2.35-1.208C30.518 2.796 27.385 2 23 2v4c3.89 0 6.508.704 8.099 1.352.798.325 1.347.64 1.676.855a4.71 4.71 0 0 1 .385.278l-.002-.002-.008-.007a.285.285 0 0 1-.006-.006l-.003-.003A158.53 158.53 0 0 1 34.5 7ZM23 2c-4.694 0-9.91 2.101-13.948 5.77C4.978 11.47 2 16.86 2 23.5h4c0-5.361 2.384-9.72 5.741-12.77C15.134 7.65 19.417 6 23 6V2ZM2 23.5C2 37.2 12.993 46 24 46v-4c-8.993 0-18-7.2-18-18.5H2ZM44 21v-2H24v4h20v-2Zm-22 0v7h4v-7h-4Zm2 9h9.5v-4H24v4Zm7.5-2c0 .698-.522 1.933-1.919 3.08C28.248 32.174 26.317 33 24 33v4c3.283 0 6.102-1.173 8.119-2.829 1.953-1.602 3.381-3.868 3.381-6.17h-4ZM24 33c-5.617 0-9-4.804-9-9.5h-4C11 29.804 15.617 37 24 37v-4Zm-9-9.5c0-4.336 4.044-8.5 9-8.5v-4c-7.044 0-13 5.836-13 12.5h4Zm9-8.5c2 0 3.645.779 4.561 1.266l1.878-3.532C29.355 12.158 26.999 11 24 11v4Zm0 31c5.672 0 12.46-2.312 17.08-8.275l-3.16-2.45C34.188 40.089 28.67 42 24 42v4Zm17.08-8.275c3.038-3.919 5.453-8.79 4.916-16.858l-3.992.266c.463 6.933-1.543 10.861-4.085 14.142l3.162 2.45Z"
        />
      </svg>
    </span>
  );
};

GoogleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GoogleIcon;
