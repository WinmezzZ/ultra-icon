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
const CombIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m4.2 31.071 12.73 12.728 26.87-26.87L31.07 4.2M9.15 26.121l7.072 7.071m-1.414-12.728 7.07 7.072m-1.414-12.728 7.071 7.07M26.121 9.15l7.071 7.072M12.686 39.556l26.87-26.87"
      />
    </svg>
  );
};

CombIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CombIcon = withWrapper(CombIconComponent);
export default CombIcon;
