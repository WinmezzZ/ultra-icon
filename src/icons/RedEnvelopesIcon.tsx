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
const RedEnvelopesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(8 4)">
          <path strokeLinecap="round" d="M0 0h32v40H0z" />
          <path
            strokeLinecap="round"
            d="M11.737 16.778C7.737 15.207 4 11.762 0 6m32 0c-4 5.762-7.68 9.32-11.68 10.892"
          />
          <circle cx={16} cy={18.5} r={4.5} fill="null" fillRule="nonzero" />
        </g>
      </g>
    </svg>
  );
};

RedEnvelopesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RedEnvelopesIcon = withWrapper(RedEnvelopesIconComponent);
export default RedEnvelopesIcon;
