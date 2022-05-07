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

const JinritoutiaoIcon = (p: SVGComponentProps) => {
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
          fill="#000"
          d="M36.883 44h-25.77C7.192 44 4 40.808 4 36.883v-25.77C4 7.192 7.192 4 11.113 4h25.77c3.92 0 7.113 3.192 7.113 7.113v25.77C44 40.808 40.808 44 36.883 44ZM11.113 4.303a6.819 6.819 0 0 0-6.81 6.81v25.77a6.82 6.82 0 0 0 6.814 6.814h25.77a6.82 6.82 0 0 0 6.815-6.814v-25.77a6.82 6.82 0 0 0-6.815-6.815H11.113v.005Z"
        />
        <path fill="#000" d="M44 34.795 4 36.887V13.205l40-2.092v23.682Z" />
        <path
          fill="#fff"
          d="m19.17 15.92-2.458.128c-.064 4.892-.132 7.645-1.014 9.618-.895 2-2.805 3.657-6.61 6.955-.158.137-.32.277-.49.422l3.873-.204c6.312-5.566 6.564-6.776 6.7-16.92Z"
        />
        <path
          fill="#fff"
          d="M14.902 19.887v-2.42l-5.472-.495v2.417l5.472.498ZM9.43 21.064v2.42l5.472.499v-2.42l-5.472-.5Zm14.016 6.316-15.444.805V26.02l15.444-.81v2.17Zm16.536-.866-15.449.81v-2.17l15.449-.809v2.17Zm-.857-8.928-11.242.588v-2.169l11.242-.588v2.17ZM21.06 28.59l-2.97.153 2.386 3.682 2.97-.153-2.386-3.682Zm16.553-.866-2.966.154 2.386 3.682 2.966-.154-2.386-3.682Zm-7.715.401-2.97.158-2.387 3.929 2.97-.154 2.387-3.933Z"
        />
        <path
          fill="#fff"
          d="m33.501 31.743-2.519.132v-8.293l2.52-.128v8.29Zm3.357-16.207v1.522c-1.432 1.227-4.326 3.311-12.325 5.071v2.314c9.717-2.088 13.032-5.029 14.588-6.503v-2.523l-2.263.12Z"
        />
        <path
          fill="#fff"
          d="M27.362 17.394c-.106-.072-.209-.144-.307-.208l-2.092 1.367s.933.678 1.035.746c1.71 1.177 4.833 3.324 13.983 4.339v-2.314c-8.31-.964-11.085-2.877-12.619-3.93Z"
        />
        <path fill="#fff" d="m24.963 18.553 2.118 1.275 2.544-3.912-2.327-.964-2.335 3.601Z" />
      </svg>
    </span>
  );
};

JinritoutiaoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default JinritoutiaoIcon;
