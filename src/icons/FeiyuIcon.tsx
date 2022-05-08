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
const FeiyuIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M7.854 24.12A30.637 30.637 0 0 1 2 12.989a36.706 36.706 0 0 0 8.512 8.3c5.421-5.09 12.69-8.205 20.681-8.208 5.24.001 9.897 2.469 12.902 6.312a7.36 7.36 0 0 1 1.678 4.111 35.974 35.974 0 0 0-14.568-3.064c-3.749 0-7.36.571-10.76 1.631a35.87 35.87 0 0 0-5.14 2.05 35.942 35.942 0 0 0 5.14 2.048 36.091 36.091 0 0 0 11.722 1.618 36.121 36.121 0 0 0 9.79-1.616 36.019 36.019 0 0 0 3.81-1.43 7.291 7.291 0 0 1-1.684 4.121c-3.003 3.837-7.656 6.3-12.88 6.3-8.002-.002-15.273-3.118-20.695-8.21a36.692 36.692 0 0 0-8.507 8.299 30.646 30.646 0 0 1 5.853-11.13Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M32.597 27.382c1.53-.464 2.658-1.243 2.658-3.138 0-1.897-1.128-2.962-2.659-3.428a3.16 3.16 0 0 0-.92-.137 28.978 28.978 0 0 1 .98.016c3.325.102 6.485.737 9.572 1.729 1.28.451 2.332.78 3.545 1.385v.397c0 .232 0 .107-.028.341-1.323.553-2.237.875-3.515 1.327-3.074.865-6.248 1.528-9.572 1.63-.013.002-.026.002-.038.002-.314.01-.63.014-.946.014.308 0 .606-.045.891-.127l.032-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

FeiyuIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FeiyuIcon = withWrapper(FeiyuIconComponent);
export default FeiyuIcon;
