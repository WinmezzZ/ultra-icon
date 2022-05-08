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
const SpiderManIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33 24c3.5 3 4.613 8.446 2.882 12.484-1.73 4.039-5.769 7.5-10.384 8.077s-9.23-2.885-10.384-4.038a10.634 10.634 0 0 1-1.105-1.307 1.514 1.514 0 0 1 .118-1.918c.865-.953 2.368-2.268 3.871-1.967 2.885.576 3.968 1.577 6.346.576C26.5 35 27.23 33.023 27.23 31.292c0-1.73-1.154-3.461-3.462-4.038-2.307-.577-4.615.577-5.192 2.308-.577 1.73 0 2.884-1.73 4.038-.588.391-1.403.762-2.147 1.06-1.03.41-2.15-.2-2.234-1.304-.177-2.323.247-5.664 2.65-8.41 1.246-1.423 2.411-2.392 3.461-3.05"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33 24 23.128 4.24c-.23-.46-.776-.677-1.222-.42-1.04.598-2.26 1.722-1.863 3.467.51 2.25 3.537 12.762 4.956 15.713m-2.5-6-6.87-6.52c-.36-.343-.925-.372-1.264-.008-.822.88-1.674 2.332-.764 3.895C14.763 16.36 17.761 20.61 20 23"
      />
    </svg>
  );
};

SpiderManIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpiderManIcon = withWrapper(SpiderManIconComponent);
export default SpiderManIcon;
