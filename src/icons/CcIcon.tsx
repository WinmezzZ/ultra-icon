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

const CcIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M19.278 12.14c1.903.34 3.708.824 5.414 1.45a10.17 10.17 0 0 0-7.638 3.513l-.198.235c-2.84 3.468-3.03 8.441-.572 12.112l-.062-.113c2.528 4.643 6.83 8.717 11.277 10.027 3.58 1.055 6.932 1.335 10.019.835l.027-.018a20.713 20.713 0 0 1-12.714 4.385h-.116l-.431-.006a20.748 20.748 0 0 1-14.576-6.446l-.33-.353C5.809 33.839 4.017 28.845 4 23.846v-.133l.006-.455a20.817 20.817 0 0 1 2.99-10.272l-.068.02c4.503-1.247 8.619-1.533 12.35-.866Zm10.539 20.493c1.546-.736 3.409-.38 4.632.843l5.011 5.01-.34.331-.082.079c-3.39.913-7.147.767-11.27-.447-2.979-.878-5.535-3.03-7.817-5.679l-.05-.027a10.21 10.21 0 0 0 9.724-.013l.192-.097ZM24.754 3l.444.005a20.712 20.712 0 0 1 14.248 6.081l-4.997 4.997-.157.148c-1.274 1.15-3.15 1.424-4.667.597l-.261-.137-.15-.075c-2.923-1.636-6.18-2.774-9.768-3.416-3.57-.638-7.46-.438-11.67.597a20.355 20.355 0 0 1 1.932-2.352l.326-.335A20.71 20.71 0 0 1 24.75 3h.004ZM41.55 17.325l-7.89 4.556-.216.148s-.675.452-.6 1.41c.064.837.66 1.19.66 1.19l8.231 4.748s.645.348 1.447-.086c.896-.484.835-1.431.835-1.431v-9.162a1.6 1.6 0 0 0-.65-1.257 1.63 1.63 0 0 0-.982-.336 1.7 1.7 0 0 0-.835.22Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

CcIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CcIcon;
