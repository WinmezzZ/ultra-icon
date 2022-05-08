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
const YoutubeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11.063 10.414c5.544-.276 9.855-.414 12.935-.414s7.393.138 12.939.415a6 6 0 0 1 5.68 5.492c.254 3.034.38 5.706.38 8.017 0 2.339-.13 5.048-.389 8.128a6 6 0 0 1-5.587 5.483c-4.742.31-9.083.465-13.023.465-3.94 0-8.28-.155-13.018-.465a6 6 0 0 1-5.587-5.48c-.264-3.103-.395-5.814-.395-8.131 0-2.29.128-4.963.385-8.02a6 6 0 0 1 5.68-5.49Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={3.429}
        d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"
      />
    </svg>
  );
};

YoutubeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const YoutubeIcon = withWrapper(YoutubeIconComponent);
export default YoutubeIcon;
