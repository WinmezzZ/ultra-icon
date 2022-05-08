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
const WeiboIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4.159}
        d="M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522 5.2 6.785 19.92 4.168 25.997-.613 6.077-4.78 5.477-7.734 4.16-9.036-1.318-1.301-5.163.014-6.24-1.757-1.076-1.771 1.917-6.195-.634-7.595-2.55-1.4-6.954 3.65-8.944 2.338-1.989-1.312 2.19-5.596 0-6.83-2.189-1.235-5.795.722-9.14 3.972Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4.159}
        d="M43.379 16.516a12.954 12.954 0 0 0-3.642-8.073 12.963 12.963 0 0 0-7.723-3.84m5.278 12.328c-.13-1.64-.867-3.117-2-4.228a7.249 7.249 0 0 0-4.24-2.01"
      />
      <path fill="#fff" d="M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4Z" />
    </svg>
  );
};

WeiboIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WeiboIcon = withWrapper(WeiboIconComponent);
export default WeiboIcon;
