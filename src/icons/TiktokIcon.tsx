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
const TiktokIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={3.833}
        d="M21.358 19.14c-5.888-.284-9.982 1.815-12.28 6.299-3.446 6.724-.597 17.728 10.901 17.728 11.499 0 11.831-11.111 11.831-12.276V17.876c2.46 1.557 4.533 2.495 6.221 2.813 1.688.317 2.76.458 3.219.422v-6.476c-1.561-.188-2.911-.547-4.05-1.076-1.709-.794-5.096-2.997-5.096-6.226.002.016.002-.817 0-2.499h-7.118c-.021 15.816-.021 24.502 0 26.058.032 2.334-1.779 5.6-5.45 5.6-3.672 0-5.482-3.263-5.482-5.367 0-1.288.442-3.155 2.271-4.538 1.085-.82 2.59-1.147 5.033-1.147v-6.3Z"
      />
    </svg>
  );
};

TiktokIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TiktokIcon = withWrapper(TiktokIconComponent);
export default TiktokIcon;
