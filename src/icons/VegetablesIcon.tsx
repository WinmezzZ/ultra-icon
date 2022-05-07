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

const VegetablesIcon = (p: SVGComponentProps) => {
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
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M32 7.902c1.5-.402 3.33-.29 4.44 0 2.501.658 4.325 1.788 5.416 3.36 1.263 1.817 1.481 4.137.652 6.894-1.699 5.64-8.6 9.14-9.008 9.344m-6.253 13.77c.515.098 1.038.15 1.562.151 1.47 0 2.735-.415 3.757-1.234C33.68 39.302 34.5 38 34.833 36.28c.332-1.722-.153-3.336-.68-4.91-.373-1.119-.618-2.805-.653-3.869M13 26.5s-5.81-2.706-7.507-8.344c-.83-2.756-.611-5.074.651-6.894C7.237 9.69 9.058 8.56 11.56 7.902c1.111-.291 2.174-.439 3.162-.439M13.5 27c.5 1 .068 2.796-.46 4.372-.527 1.576-1.071 3.202-.68 4.91.39 1.706 1.153 3.023 2.264 3.908 1.024.818 1.906 1.31 3.376 1.31.523-.002 2-.5 2-.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23.5 4C28.747 4 33 6.643 33 14.375 33 22.108 23.5 32 23.5 32S14 22.107 14 14.375C14 6.642 18.253 4 23.5 4Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 42.23c-2.01 0-3.72-.663-4.87-1.67-1.327-1.168-2.003-2.827-2.003-4.933 0-1.756.95-3.221 1.867-4.64.652-1.007 1.554-2.99 1.554-2.99s.475-1.636.397-2.7c-.145-1.964-2.052-3.443-2.362-4.457-.375-1.26-.283-2.028.285-2.412.175-.12.845-.16.845-.16s-.126-1.846-.047-2.455c.095-.73.476-1.771 1.372-1.848.62-.053 1.11.04 1.428.707.102.216.173.477.272.839a25.869 25.869 0 0 0 1.257 3.532 25.817 25.817 0 0 0 1.26-3.531c.1-.362.17-.624.273-.84.318-.668.81-.76 1.43-.706.755.066 1.275 1.119 1.37 1.847.08.609.064 1.42-.047 2.454h.047c.215 0 .626.04.802.16.569.384.602 1.52.283 2.413C29 22 27.203 23.133 27 25c-.129 1.177.095 1.87.451 2.998.396 1.255.9 1.983 1.554 2.989.918 1.418 1.867 2.885 1.867 4.64 0 2.106-.674 3.766-2.004 4.931-1.152 1.008-2.859 1.671-4.869 1.671Z"
        />
      </svg>
    </span>
  );
};

VegetablesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default VegetablesIcon;
