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
const TranslationIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m17 32 2.188-5M31 32l-2.188-5m-9.625 0L24 16l4.813 11m-9.625 0h9.625"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M43.2 20c-1.853-9.129-9.924-16-19.6-16C13.924 4 5.853 10.871 4 20l6-2M4 28c1.853 9.129 9.924 16 19.6 16 9.676 0 17.747-6.871 19.6-16L38 30"
      />
    </svg>
  );
};

TranslationIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TranslationIcon = withWrapper(TranslationIconComponent);
export default TranslationIcon;
