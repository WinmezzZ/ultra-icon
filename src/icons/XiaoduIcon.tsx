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
const XiaoduIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4.143 21.08c.355-3.786.533-5.68 2.513-7.705 1.98-2.025 4.16-2.28 8.517-2.788C18.003 10.257 21.131 10 24 10c2.87 0 5.996.257 8.827.587 4.358.508 6.537.763 8.517 2.788 1.98 2.026 2.158 3.919 2.513 7.706.09.955.143 1.937.143 2.919s-.054 1.964-.143 2.92c-.355 3.786-.533 5.68-2.513 7.705-1.98 2.025-4.16 2.28-8.517 2.788-2.83.33-5.957.587-8.827.587s-5.996-.257-8.827-.587c-4.358-.508-6.537-.763-8.517-2.788-1.98-2.026-2.158-3.919-2.513-7.706A31.388 31.388 0 0 1 4 24c0-.982.054-1.964.143-2.92Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 19v10m17-10-5 5 5 5" />
    </svg>
  );
};

XiaoduIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const XiaoduIcon = withWrapper(XiaoduIconComponent);
export default XiaoduIcon;
